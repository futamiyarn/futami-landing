import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// Only use cloudflare adapter in production (build) to avoid dev environment network interface restrictions
	adapter: process.env.NODE_ENV === 'production' ? cloudflare() : undefined,

	output: 'server',

	integrations: [icon()],
	redirects: {},
	vite: {
		css: {
			preprocessorOptions: { scss: { api: 'modern' } }
		},
		plugins: [
			{
				name: 'watch-local-icons',
				configureServer(server) {
					// Menambahkan event listener ke watcher Vite
					server.watcher.on('all', (event, path) => {
						// Cek apakah file yang berubah ada di folder src/icons
						if (path.includes('src/icons')) {
							console.log(`🎨 Icon changed: ${event} - reloading...`);
							// Kirim sinyal full-reload ke browser
							server.ws.send({ type: 'full-reload' });
						}
					});
				}
			},
			tailwindcss()
		]
	},
	build: {
		inlineStylesheets: 'never'
	}
});
