<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<slot />

	<footer>
		{new Date().getFullYear()} &#169; Futami (<a
			href="http://x.com/futamiyarn"
			target="_blank"
			class="footer-link"
			rel="noopener noreferrer">@FutamiYarn</a
		>)
	</footer>
</div>

<style>
	.app {
		@apply flex max-h-screen flex-col font-body;
	}

	footer {
		@apply pb-6 pt-2 text-center text-sm text-gray-500;
	}

	.footer-link {
		@apply text-primary-700 hover:text-primary-800;
	}
</style>
