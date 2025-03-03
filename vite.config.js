import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const fileName = fileURLToPath(import.meta.url);
const dirname = path.dirname(fileName);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 9997,
    hmr: {
      overlay: false,
    },
    // ssl 설정
    https: {
      key: fs.readFileSync(path.resolve(dirname, "./public/config/ssl.key")),
      cert: fs.readFileSync(path.resolve(dirname, "./public/config/ssl.crt")),
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/scss/config/variables" as *;\n
        `,
      },
    },
  },
});
