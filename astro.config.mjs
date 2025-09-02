import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  site: 'https://deeplineanalytics.github.io/DeepLine/', // Your public URL
  base: '/DeepLine/', // Match your repository name (use this if it's a GitHub Project site)
  sitemap: true, // Generate sitemap (set to "false" to disable)
  integrations: [sitemap(), mdx(), lit(), icon()], // Add renderers to the config
});
