import { vitePlugin as remix } from "@remix-run/dev";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/hello/",
  plugins: [
    remix({
      basename: "/hello/",
      ssr: false,
    }),
    tsconfigPaths(),
    svgr(),
  ],
});
