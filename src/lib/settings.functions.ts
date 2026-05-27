import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const getAppSettings = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await supabaseAdmin
    .from("app_settings")
    .select("primary_agent_name, solo_amount, pair_amount")
    .eq("id", true)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return (
    data ?? {
      primary_agent_name: "Contact admin for agent details",
      solo_amount: 5,
      pair_amount: 8,
    }
  );
});

export const updateAppSettings = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) =>
    z
      .object({
        primary_agent_name: z.string().trim().min(1).max(255),
        solo_amount: z.number().min(0).max(100000),
        pair_amount: z.number().min(0).max(100000),
      })
      .parse(d),
  )
  .handler(async ({ data, context }) => {
    const { data: roles } = await context.supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", context.userId);
    if (!roles?.some((r: any) => r.role === "admin")) throw new Error("Forbidden");

    const { error } = await supabaseAdmin
      .from("app_settings")
      .upsert({
        id: true,
        primary_agent_name: data.primary_agent_name,
        solo_amount: data.solo_amount,
        pair_amount: data.pair_amount,
        updated_at: new Date().toISOString(),
      });
    if (error) throw new Error(error.message);
    return { ok: true };
  });
