// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // GitHub Pages: site + base are set via env vars in CI only
  // GITHUB_ACTIONS is set automatically in GitHub Actions runners
  ...(process.env.GITHUB_ACTIONS && {
    site: `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`,
    base: `/${process.env.GITHUB_REPOSITORY?.split("/")[1] ?? ""}/`,
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
