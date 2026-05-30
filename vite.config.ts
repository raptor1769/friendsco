import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const defaultGitHubPagesBase = "/friendsco/";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, import.meta.dirname, "");
  const base = env.VITE_GITHUB_PAGES_BASE || defaultGitHubPagesBase;

  return {
    base: "/",

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
      port: env.PORT ? parseInt(env.PORT) : 3000,
      strictPort: true,
      host: "0.0.0.0",
      allowedHosts: true,
      fs: {
        strict: true,
      },
    },

    preview: {
      port: env.PORT ? parseInt(env.PORT) : 3000,
      host: "0.0.0.0",
      allowedHosts: true,
    },
  };
});
