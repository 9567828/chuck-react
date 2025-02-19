import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 9997,
    hmr: {
      overlay: false,
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
        additionalData: `@use "@/assets/scss/config/_variables.scss" as *;`,
      },
    },
  },
});
