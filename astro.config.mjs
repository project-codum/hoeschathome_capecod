// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

const env = /** @type {Record<string, string | undefined>} */ (
  (/** @type {any} */ (globalThis)).process?.env ?? {}
);
const nodeEnv = env.NODE_ENV ?? 'development';
const site = env.SITE_URL ?? 'https://capecodbeachhouse.example';
const base = env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  integrations: [react()],
  output: 'static',
  i18n: {
    defaultLocale: 'de',
    locales: ['en', 'de'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    define: {
      'process.env.NODE_ENV': JSON.stringify(nodeEnv),
    },
  },
});
