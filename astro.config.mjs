import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'; // 1. インポートを追加

// https://astro.build/config
export default defineConfig({
  site: 'https://tsu.stki.org',
  integrations: [sitemap()], // 2. integrations に追加
});
