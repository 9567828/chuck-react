import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 9997,
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `import "src/assets/scss/config/variables.scss"`,
  //     },
  //   },
  // },
});
