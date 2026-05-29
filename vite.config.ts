import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin";
import viteReact from "@vitejs/plugin-react";
import { vercelPreset } from "@tanstack/start-vercel";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { entry: "server" },
      preset: vercelPreset(),
    }),
    viteReact(),
  ],
});
