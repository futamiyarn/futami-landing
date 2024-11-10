// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: cloudflare(),
	vite: {
		css: {
			preprocessorOptions: { scss: { api: 'modern' } }
		},
		build: {
			minify: false
		},
		ssr: {
			external: ['rss-parser']
		}
	},
	experimental: {
		serverIslands: true
	},
	integrations: [tailwind()]
});
