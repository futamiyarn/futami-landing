// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import svelte from '@astrojs/svelte';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

const isPublic = process.env.STATUS === 'public';

// Helper function to load adapter dynamically
async function getAdapter() {
	if (isPublic) {
		// This line only runs if isPublic is true.
		// Therefore, Termux will never try to load the incompatible 'workerd' binary.
		const { default: cloudflare } = await import('@astrojs/cloudflare');
		return cloudflare();
	}
	return undefined;
}

// https://astro.build/config
export default defineConfig({
	// Use await here to resolve the dynamic import
	adapter: await getAdapter(),

	integrations: [svelte(), icon()],
	redirects: {
	},
	vite: {
		css: {
			preprocessorOptions: { scss: { api: 'modern' } }
		},

		plugins: [{
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
        },
      },
			tailwindcss(),
		]
	},
	build: {
		inlineStylesheets: 'never'
	}
});
