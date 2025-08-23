import { defineConfig } from "umi";

export default defineConfig({
  base: "/my-ai-present-test/",
  publicPath: "/my-ai-present-test/",

  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],

  npmClient: "pnpm",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
});
