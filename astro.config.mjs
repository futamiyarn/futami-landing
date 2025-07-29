// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// if using ubuntu, please disable this
// import cloudflare from '@astrojs/cloudflare';

import svelte from '@astrojs/svelte';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	// adapter: cloudflare(),
	integrations: [tailwind(), svelte(), icon()],
	redirects: {
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
