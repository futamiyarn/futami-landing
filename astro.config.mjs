// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	adapter: cloudflare({ imageService: 'cloudflare' }),
	integrations: [tailwind(), svelte()],
	output: 'server',

	redirects: {
		'/youtube/futacover': '/youtube/futamicover',
		'/youtube': '/youtube/futami'
	},
	vite: {
		css: {
			preprocessorOptions: { scss: { api: 'modern' } }
		}
	}
});
