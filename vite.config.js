import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './', 
  
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        app: resolve(import.meta.dirname, 'app.html'),
      },
    },
  },
});