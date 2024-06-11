<script lang="ts">
	import { page } from '$app/stores';
	// Logo
	import LogoIcon from '$lib/images/logo-icon.svelte';
	import LogoText from '$lib/images/logo-text.svelte';
	// Icons
	import FaBlog from '$lib/images/font-awesome/blog-solid.svelte';
	import FaUsers from '$lib/images/font-awesome/users-solid.svelte';
	import FaCoins from '$lib/images/font-awesome/coins-solid.svelte';
	// Brand Icons
	import FaYouTube from '$lib/images/font-awesome/youtube.svelte';

	console.log($page.url.pathname);
</script>

<header class="navbar">
	<a href="/" class="navbar-logo" aria-label="Logo Futami">
		<LogoIcon /><LogoText />
	</a>

	<nav>
		<ul class="navbar-menu">
			<li aria-current={$page.url.pathname.startsWith('/blog') ? 'page' : undefined}>
				<a href="/blog" class="navbar-menu__item" aria-label="Blog Page"><FaBlog /></a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/youtube') ? 'page' : undefined}>
				<a href="/youtube" class="navbar-menu__item" aria-label="Youtube Video Page"
					><FaYouTube /></a
				>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/social') ? 'page' : undefined}>
				<a href="/social" class="navbar-menu__item" aria-label="Sosial Link Page"><FaUsers /></a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/donate') ? 'page' : undefined}>
				<a href="/donate" class="navbar-menu__item" aria-label="Donate Link Page"><FaCoins /></a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	.navbar {
		@apply container mx-auto my-2 flex flex-col items-center gap-3 px-4 py-4 md:flex-row md:justify-between md:py-2;

		&-logo {
			@apply flex h-8 gap-[10px] text-futa-red transition duration-150 ease-out hover:text-primary-600;
		}

		&-menu {
			@apply flex items-center gap-[12px];

			&__item {
				@apply flex aspect-square h-full items-center justify-center rounded-md bg-primary-900 p-1 text-primary-500 transition duration-150 ease-out hover:bg-primary-600/75 hover:text-primary-900;

				:global(svg) {
					@apply h-[1em] w-[1.25em] fill-current;
				}
			}
		}
	}

	[aria-current='page'] .navbar-menu__item {
		@apply bg-primary-500 text-primary-900 hover:bg-primary-500 hover:text-primary-900;
	}
</style>
