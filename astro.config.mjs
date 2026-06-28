// https://astro.build/config
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://sofinun.github.io',
  base: '/Portfolio-games/',

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },

  integrations: [
    sitemap(),
    mdx(),
  ],

  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern',
      },
    },
  },
});