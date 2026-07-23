import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/homepage/",

  build: {
    outDir: "docs",

    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        app: resolve(__dirname, "app.html"),
      },
    },
  },
});