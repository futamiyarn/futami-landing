import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	integrations: [
		svelte(),
		tailwind(),
		icon({
			include: {
				mdi: ['youtube', 'newspaper-variant-multiple'],
				icondir: ['youtube', 'tiktok', 'donate'],
				bx: ['bxs-donate-heart'],
				'simple-icons': ['kofi'],
				solar: [
					'users-group-two-rounded-bold',
					'users-group-two-rounded-line-duotone'
				],
				hugeicons: [
					'playlist-01',
					'new-twitter-rectangle',
					'facebook-01',
					'instagram'
				]
			},
			iconDir: 'src/lib/icons'
		})
	],
	redirects: {
		'/youtube': '/youtube/futami'
	}
});
