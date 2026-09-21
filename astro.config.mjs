import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tsu.stki.org',
  integrations: [
    sitemap({
      // サイトマップのオプションを明示してエラーを防ぐ
      customPages: ['https://tsu.stki.org/'],
    }),
  ],
});
