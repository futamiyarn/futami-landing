// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	vite: {
		css: {
			preprocessorOptions: { scss: { api: 'modern' } }
		}
	},
	output: 'server',
	adapter: cloudflare(),
	integrations: [tailwind()]
});
