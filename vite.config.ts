import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { vercelPreset } from "@tanstack/start-vercel";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Add the Vercel preset
    preset: vercelPreset(),
  },
});
