// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  site: "https://first-astro-docs.awwa500.workers.dev",
  integrations: [preact()],
});