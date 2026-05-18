import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const repoName = "friendsco";

export default defineConfig({
  base: `/${repoName}/`,

  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(
        import.meta.dirname,
        "..",
        "..",
        "attached_assets",
      ),
    },
    dedupe: ["react", "react-dom"],
  },

  root: path.resolve(import.meta.dirname),

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },

  preview: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
