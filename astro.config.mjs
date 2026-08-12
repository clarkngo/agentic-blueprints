// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://clarkngo.github.io',
  base: '/agentic-blueprints',
  trailingSlash: 'always',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
