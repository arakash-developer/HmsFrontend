import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // Opens report in the browser
      gzipSize: true,
      brotliSize: true,
      filename: "bundle-report.html", // Report file name
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@public": path.resolve(__dirname, "./public"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@libs": path.resolve(__dirname, "./src/libs"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});
