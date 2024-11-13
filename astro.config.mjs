// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	adapter: cloudflare(),
	integrations: [tailwind(), svelte()],
	output: 'hybrid',
	experimental: {
		// serverIslands: true
	},
	redirects: {
		'/youtube/futacover': '/youtube/futamicover',
		'/youtube': '/youtube/futami',
		'/futami': '/youtube/futami',
		'/futamicover': '/youtube/futamicover',
		'/futamini': '/youtube/futamini'
	},
	vite: {
		css: {
			preprocessorOptions: { scss: { api: 'modern' } }
		}
	},
	build: {
		inlineStylesheets: 'never'
	}
});
