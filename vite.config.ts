import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin';
import { vercelPreset } from '@tanstack/start-vercel';
import viteReact from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tanstackStart({
      preset: vercelPreset(),
      server: { entry: 'server' }
    }),
    viteReact(),
    tailwindcss(),
    tsConfigPaths(),
  ],
});
