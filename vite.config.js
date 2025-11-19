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
  // ngrok address: seminocturnal-excrescently-archimedes.ngrok-free.dev
  server: {
    host: true, // allow network access
    port: 5173, // your port
    allowedHosts: ["seminocturnal-excrescently-archimedes.ngrok-free.dev"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@public": path.resolve(__dirname, "./public"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@global": path.resolve(__dirname, "./src/global"),
      "@pdf": path.resolve(__dirname, "./src/pdf"),
      "@libs": path.resolve(__dirname, "./src/libs"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});
