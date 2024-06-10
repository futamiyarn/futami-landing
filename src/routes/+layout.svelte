<script lang="ts">
	import Header from './Header.svelte';
	import '$lib/styles/app.scss';
	import { onMount } from 'svelte';

	let status = 'active';
	let theme = '';

	onMount(() => {
		const darkSheme = window.matchMedia('(prefers-color-scheme: dark)');

		const changeTheme = () => (darkSheme.matches ? (theme = 'dark') : (theme = 'light'));
		const changeFavicon = () => {
			const visibility = document.visibilityState == 'visible';

			visibility ? (status = 'active') : (status = `inactive-${theme}`);
		};

		darkSheme.onchange = () => changeTheme();
		window.addEventListener('visibilitychange', () => changeFavicon());

		changeTheme();
		changeFavicon();
	});
</script>

<svelte:head>
	<!-- Favicon -->

	<link
		class="favicon"
		rel="apple-touch-icon"
		sizes="180x180"
		href="/favicon/{status}/apple-touch-icon.png"
	/>
	<link
		class="favicon"
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="/favicon/{status}/favicon-32x32.png"
	/>
	<link
		class="favicon"
		rel="icon"
		type="image/png"
		sizes="16x16"
		href="/favicon/{status}/favicon-16x16.png"
	/>
	<link class="favicon" rel="manifest" href="/favicon/{status}/site.webmanifest" />
</svelte:head>

<div class="app">
	<Header />

	<slot />

	<footer>
		<a href="http://x.com/futamiyarn" target="_blank" class="footer-link" rel="noopener noreferrer"
			>@FutamiYarn</a
		>
		&#169; {new Date().getFullYear()}
	</footer>
</div>

<style>
	.app {
		@apply flex max-h-screen flex-col font-body;
	}

	footer {
		@apply pb-6 pt-2 text-center font-heading text-sm font-bold text-ysn-black;
	}

	.footer-link {
		@apply text-primary-400 hover:text-primary-700;
	}
</style>
