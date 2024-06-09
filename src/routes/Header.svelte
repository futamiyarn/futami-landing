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
</script>

<header class="navbar">
	<a href="/" class="navbar-logo">
		<LogoIcon /><LogoText />
	</a>

	<nav>
		<ul class="navbar-menu">
			<li aria-current={$page.url.pathname === '/blog' ? 'page' : undefined}>
				<a href="/blog" class="navbar-menu__item"><FaBlog /></a>
			</li>
			<li aria-current={$page.url.pathname === '/youtube' ? 'page' : undefined}>
				<a href="/youtube" class="navbar-menu__item"><FaYouTube /></a>
			</li>
			<li aria-current={$page.url.pathname === '/social' ? 'page' : undefined}>
				<a href="/social" class="navbar-menu__item"><FaUsers /></a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/donate') ? 'page' : undefined}>
				<a href="/donate" class="navbar-menu__item"><FaCoins /></a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	.navbar {
		@apply container mx-auto my-2 flex flex-col items-center gap-3 px-4 py-4 md:flex-row md:justify-between md:py-2;

		&-logo {
			@apply text-futa-red hover:text-primary-600 flex h-8 gap-[10px] transition duration-150 ease-out;
		}

		&-menu {
			@apply flex items-center gap-[12px];

			&__item {
				@apply bg-primary-900 text-primary-500 hover:bg-primary-600/75 hover:text-primary-900 flex aspect-square h-full items-center justify-center rounded-md p-1 transition duration-150 ease-out;

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
