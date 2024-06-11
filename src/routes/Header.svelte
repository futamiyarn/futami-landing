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
