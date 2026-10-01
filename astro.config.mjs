// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change `site` to the real Vercel URL after the first deploy; canonical URLs,
// sitemap, robots.txt, llms.txt and JSON-LD all derive from it.
export default defineConfig({
  site: 'https://kurulu-drives.vercel.app',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
