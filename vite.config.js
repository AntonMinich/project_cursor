import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: 'app',
  base: './',
  plugins: [react(), tailwindcss()],
  publicDir: 'public',
  build: {
    outDir: path.join(repoRoot, 'dist'),
    emptyOutDir: true,
    assetsDir: 'assets',
  },
  server: { host: true, port: 5173 },
  preview: { host: true, port: 4173 },
});
