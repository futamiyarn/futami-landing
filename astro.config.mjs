// @ts-check
import { defineConfig } from 'astro/config';
// REMOVE the static import for cloudflare
// import cloudflare from '@astrojs/cloudflare';

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
		'/youtube/futacover': '/youtube/futamicover',
		'/youtube': '/youtube/futami',
		'/futami': '/youtube/futami',
		'/futamicover': '/youtube/futamicover',
		'/futamini': '/youtube/futamini'
	},
	vite: {
		css: {
			preprocessorOptions: { scss: { api: 'modern' } }
		},

		plugins: [tailwindcss()]
	},
	build: {
		inlineStylesheets: 'never'
	}
});
