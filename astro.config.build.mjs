import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// Dedicated Cloudflare adapter
	adapter: cloudflare(),

	integrations: [icon()],
	redirects: {},
	vite: {
		css: {
			preprocessorOptions: { scss: { api: 'modern' } }
		},
		plugins: [
			// We don't need the 'watch-local-icons' plugin here
			// because this config is only used for building, not the dev server.
			tailwindcss()
		]
	},
	build: {
		inlineStylesheets: 'never'
	}
});
