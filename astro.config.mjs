import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://naru18vr.github.io',
  base: '/yomu-news',
  output: 'static',
  integrations: [sitemap()],
});
