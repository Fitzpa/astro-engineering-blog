import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import { SITE_URL } from "./src/consts.ts";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  site: SITE_URL,
  markdown: {
    drafts: true,
  },
  experimental: {
    assets: true,
  },
  integrations: [
    mdx({
      drafts: true,
    }),
    sitemap(),
    solidJs(),
    tailwind(),
    compress(),
  ],
});
