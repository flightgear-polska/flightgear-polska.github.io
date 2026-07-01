import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://flightgear-polska.github.io',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      serialize(item) {
        if (item.url === 'https://flightgear-polska.github.io/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (/\/lotniska\/polska\/[a-z]{4}\/$/.test(item.url)) {
          item.priority = 0.4;
          item.changefreq = 'monthly';
        } else if (
          item.url.endsWith('/samoloty/') ||
          item.url.endsWith('/poradniki/') ||
          item.url.endsWith('/addony/') ||
          item.url.endsWith('/lotniska/polska/')
        ) {
          item.priority = 0.8;
        } else if (/\/(samoloty|poradniki|addony)\/[^/]+\/$/.test(item.url)) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else if (item.url.endsWith('/wydarzenia/')) {
          item.priority = 0.6;
          item.changefreq = 'daily';
        } else {
          item.priority = 0.6;
        }
        return item;
      },
    }),
  ],
  compressHTML: true,
  build: {
    format: 'directory'
  }
});
