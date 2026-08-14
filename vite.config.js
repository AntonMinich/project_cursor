import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: 'app',
  // Relative base so CSS/JS load from /project_cursor/ on GitHub Pages
  // and from ./ on local preview.
  base: './',
  plugins: [react()],
  build: {
    outDir: path.join(repoRoot, 'dist'),
    emptyOutDir: true,
  },
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
});
