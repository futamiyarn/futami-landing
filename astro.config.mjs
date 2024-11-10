// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://astro.build/config
export default defineConfig({
	vite: {
		css: {
			preprocessorOptions: { scss: { api: 'modern' } }
		},
		plugins: [nodePolyfills()]
	},
	output: 'server',
	adapter: cloudflare(),
	experimental: {
		serverIslands: true
	},
	integrations: [tailwind()]
});
