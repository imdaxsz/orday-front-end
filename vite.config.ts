/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  test: {
    environment: "happy-dom",
    setupFiles: "./vitest.setup.ts",
  },
});
