import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://flightgear-polska.github.io',
  integrations: [tailwind(), sitemap()],
  compressHTML: true,
  build: {
    format: 'directory'
  }
});
