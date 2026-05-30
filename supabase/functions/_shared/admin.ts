// Shared helpers for admin-only edge functions.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export function adminClient() {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );
}

/** Verifies the bearer token belongs to an admin user. Throws on failure. */
export async function requireAdmin(req: Request) {
  const auth = req.headers.get("Authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!token) throw new Error("Unauthorized");
  const supa = adminClient();
  const { data: userRes, error: uErr } = await supa.auth.getUser(token);
  if (uErr || !userRes?.user) throw new Error("Unauthorized");
  const { data: roles } = await supa
    .from("user_roles")
    .select("role")
    .eq("user_id", userRes.user.id);
  if (!roles?.some((r: { role: string }) => r.role === "admin")) throw new Error("Forbidden");
  return { supa, userId: userRes.user.id };
}

export function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" } as Record<string, string>)[c]!,
  );
}

export async function sendCodeEmail(to: string, fullName: string, code: string) {
  const key = Deno.env.get("RESEND_API_KEY");
  if (!key) return { sent: false, reason: "RESEND_API_KEY not configured" };
  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#0f172a;color:#fff;border-radius:12px">
      <h1 style="margin:0 0 12px;font-size:22px">Welcome, ${escapeHtml(fullName)}</h1>
      <p style="color:#cbd5e1;line-height:1.5">Your payment has been confirmed. Here is your access code:</p>
      <div style="background:#1e293b;border:2px solid #6366f1;border-radius:10px;padding:18px;margin:18px 0;text-align:center;font-family:ui-monospace,monospace;font-size:22px;font-weight:700;letter-spacing:2px">${escapeHtml(code)}</div>
      <p style="color:#cbd5e1;line-height:1.5">Open the app, click <strong>Sign in</strong>, enter your full name and this code.</p>
    </div>`;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Edusanna Online Learning <onboarding@resend.dev>",
        to: [to],
        subject: "Your Edusanna Online Learning access code",
        html,
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      return { sent: false, reason: `Resend error ${res.status}: ${body.slice(0, 200)}` };
    }
    return { sent: true };
  } catch (e) {
    return { sent: false, reason: (e as Error).message };
  }
}

export function randCode() {
  const seg = () => Math.random().toString(36).slice(2, 6).toUpperCase();
  return `AUT-${seg()}-${seg()}`;
}
export function randPassword() {
  return crypto.randomUUID() + "Aa1!";
}
export function synthEmail() {
  return `user-${crypto.randomUUID()}@auto.industrialautomation.app`;
}
