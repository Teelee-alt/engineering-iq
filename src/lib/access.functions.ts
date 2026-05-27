import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

function randCode() {
  const seg = () => Math.random().toString(36).slice(2, 6).toUpperCase();
  return `AUT-${seg()}-${seg()}`;
}
function randPassword() {
  return crypto.randomUUID() + "Aa1!";
}
function synthEmail() {
  return `user-${crypto.randomUUID()}@auto.industrialautomation.app`;
}

async function assertAdmin(context: { supabase: any; userId: string }) {
  const { data: roles } = await context.supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", context.userId);
  if (!roles?.some((r: any) => r.role === "admin")) throw new Error("Forbidden");
}

/** Sends an email via Resend if RESEND_API_KEY is configured. Returns delivery status. */
async function sendCodeEmail(to: string, fullName: string, code: string) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return { sent: false, reason: "RESEND_API_KEY not configured" } as const;
  }
  const subject = "Your Edusanna Online Learning access code";
  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#0f172a;color:#fff;border-radius:12px">
      <h1 style="margin:0 0 12px;font-size:22px">Welcome, ${escapeHtml(fullName)} 👋</h1>
      <p style="color:#cbd5e1;line-height:1.5">Your payment has been confirmed. Here is your access code:</p>
      <div style="background:#1e293b;border:2px solid #6366f1;border-radius:10px;padding:18px;margin:18px 0;text-align:center;font-family:ui-monospace,monospace;font-size:22px;font-weight:700;letter-spacing:2px">${escapeHtml(code)}</div>
      <p style="color:#cbd5e1;line-height:1.5">
        Open the app, click <strong>Sign in</strong>, enter your full name and this code. Every card unlocks immediately.
      </p>
      <p style="color:#94a3b8;font-size:12px;margin-top:24px">If you didn't request this, ignore this email.</p>
    </div>
  `;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Edusanna Online Learning <onboarding@resend.dev>",
        to: [to],
        subject,
        html,
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      return { sent: false, reason: `Resend error ${res.status}: ${body.slice(0, 200)}` } as const;
    }
    return { sent: true } as const;
  } catch (e: any) {
    return { sent: false, reason: e?.message || "unknown" } as const;
  }
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

/** Public: submit a request for access (anonymous). Email is REQUIRED. */
export const submitAccessRequest = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z
      .object({
        full_name: z.string().trim().min(2).max(120),
        whatsapp: z.string().trim().min(5).max(40),
        email: z.string().trim().email().max(255),
      })
      .parse(d),
  )
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("access_requests").insert({
      full_name: data.full_name,
      whatsapp: data.whatsapp,
      email: data.email,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

/** Public: sign in with full name + access code. Returns synthetic creds the client signs in with. */
export const signInWithCode = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z
      .object({
        full_name: z.string().trim().min(2).max(120),
        code: z
          .string()
          .trim()
          .min(3)
          .max(40)
          .transform((s) => s.toUpperCase()),
      })
      .parse(d),
  )
  .handler(async ({ data }) => {
    const { data: req } = await supabaseAdmin
      .from("access_requests")
      .select("*")
      .eq("generated_code", data.code)
      .eq("status", "approved")
      .maybeSingle();
    if (!req || !req.synthetic_email || !req.auto_password) {
      throw new Error("Invalid name or access code");
    }
    if (req.full_name.trim().toLowerCase() !== data.full_name.trim().toLowerCase()) {
      throw new Error("Invalid name or access code");
    }
    return { email: req.synthetic_email, password: req.auto_password };
  });

/** Admin: approve a pending request → create auth user + access code, email it, return code + email status. */
export const approveAccessRequest = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ request_id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);

    const { data: req } = await supabaseAdmin
      .from("access_requests")
      .select("*")
      .eq("id", data.request_id)
      .maybeSingle();
    if (!req) throw new Error("Request not found");
    if (!req.email) throw new Error("This request has no email — cannot send code");
    if (req.status === "approved" && req.generated_code) {
      const email = await sendCodeEmail(req.email, req.full_name, req.generated_code);
      return { code: req.generated_code, email };
    }

    const synthetic_email = synthEmail();
    const password = randPassword();
    const code = randCode();

    const { data: created, error: cErr } = await supabaseAdmin.auth.admin.createUser({
      email: synthetic_email,
      password,
      email_confirm: true,
      user_metadata: { full_name: req.full_name },
    });
    if (cErr || !created.user) throw new Error(cErr?.message || "Could not create user");

    const uid = created.user.id;

    await supabaseAdmin
      .from("profiles")
      .upsert({ id: uid, email: synthetic_email, full_name: req.full_name, access_level: "full" });

    const { error: codeErr } = await supabaseAdmin.from("access_codes").insert({
      code,
      total_seats: 1,
      used_seats: 1,
      amount: 5,
      assigned_emails: [synthetic_email],
      bound_user_id: uid,
      notes: `Auto-issued for request ${req.id}`,
    });
    if (codeErr) throw new Error(codeErr.message);

    await supabaseAdmin
      .from("access_requests")
      .update({
        status: "approved",
        generated_code: code,
        synthetic_email,
        auto_password: password,
        user_id: uid,
        approved_at: new Date().toISOString(),
      })
      .eq("id", req.id);

    const email = await sendCodeEmail(req.email, req.full_name, code);
    return { code, email };
  });

/** Admin: resend the access code email for an already-approved request. */
export const resendAccessCodeEmail = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ request_id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { data: req } = await supabaseAdmin
      .from("access_requests")
      .select("*")
      .eq("id", data.request_id)
      .maybeSingle();
    if (!req) throw new Error("Request not found");
    if (!req.email) throw new Error("This request has no email");
    if (!req.generated_code) throw new Error("This request has no code yet — approve first");
    const email = await sendCodeEmail(req.email, req.full_name, req.generated_code);
    return { email };
  });

/** Admin: reject a request. */
export const rejectAccessRequest = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ request_id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { error } = await supabaseAdmin
      .from("access_requests")
      .update({ status: "rejected" })
      .eq("id", data.request_id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
