<script lang="ts">
	import FaYouTube from '$lib/images/font-awesome/youtube.svelte';
	import FaTiktok from '$lib/images/font-awesome/tiktok.svelte';
	import FaCoins from '$lib/images/font-awesome/coins-solid.svelte';
	import FaUsers from '$lib/images/font-awesome/users-solid.svelte';

	import grettings from '$lib/data/grettings.json';
	import { onMount } from 'svelte';
	let gretting: string = '';

	onMount(() => (gretting = grettings[Math.floor(Math.random() * grettings.length)].fact));

	export let data;
</script>

<svelte:head>
	<title>Futami Website</title>
	<meta name="description" content="Official *Linktree* Futami" />
</svelte:head>

<main class="totality-container">
	<!-- Random trivia -->
	<h1 class="trivia">
		{gretting}
	</h1>

	<!-- YouTube -->
	<section class="cards-category">
		<h2 class="name-category">YouTube</h2>
		<div class="cards thumb-cards">
			{#await data}
				Loading!
			{:then res}
				{#each res.items as item}
					<a
						class="card"
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
						title={item.title}
						style="background-image:linear-gradient(rgba(0, 0, 0, 0.6),
rgba(0, 0, 0, 0.6)), url(https://i.ytimg.com/vi/{item.id}/hqdefault.jpg);"
					>
						<div class="card-icon">
							<FaYouTube />
						</div>
						<div class="card-content">
							<h3 class="card-content__title">{item.title}</h3>
							<span class="card-content__author">{item.author}</span>
						</div>
					</a>
				{/each}
			{/await}
		</div>
		<div class="cards">
			<!-- FutaLatest -->
			<a
				class="card"
				href="https://www.youtube.com/playlist?list=PLQX-jAZdOlz6t8ODAhKbW1D85Es6l5msE"
				target="_blank"
				rel="noopener noreferrer"
				title="FutaLatest"
			>
				<div class="card-icon">
					<FaYouTube />
				</div>
				<div class="card-content">
					<h3 class="card-content__title">FutaLatest</h3>
					<span class="card-content__author">News and Popcuture</span>
				</div>
			</a>

			<!-- Tutorial -->
			<a
				class="card"
				href="https://www.youtube.com/playlist?list=PLQX-jAZdOlz6t8ODAhKbW1D85Es6l5msE"
				target="_blank"
				rel="noopener noreferrer"
				title="FutaLatest"
			>
				<div class="card-icon">
					<FaYouTube />
				</div>
				<div class="card-content">
					<h3 class="card-content__title">Tutorial</h3>
					<span class="card-content__author">How To series</span>
				</div>
			</a>
		</div>
		<div class="read-more"><a href="/youtube" class="read-more__link">Look more</a></div>
	</section>

	<!-- Short Bio Link -->
	<section class="cards-category">
		<h2 class="name-category">Socials</h2>
		<div class="cards">
			<!-- YouTube -->
			<a
				class="card"
				href="https://youtube.com/@futamiyarn"
				target="_blank"
				rel="noopener noreferrer"
				title="Main Channel"
			>
				<div class="card-icon">
					<FaYouTube />
				</div>
				<div class="card-content">
					<h3 class="card-content__title">Main Channel</h3>
					<span class="card-content__author">Games, Tutorial, and More</span>
				</div>
			</a>

			<!-- Tiktok -->
			<a
				class="card"
				href="https://tiktok.com/@futamiyarn"
				target="_blank"
				rel="noopener noreferrer"
				title="TikTok"
			>
				<div class="card-icon">
					<FaTiktok />
				</div>
				<div class="card-content">
					<h3 class="card-content__title">TikTok</h3>
					<span class="card-content__author">More Short content</span>
				</div>
			</a>

			<!-- Social -->
			<a class="card" href="/social" title="Social">
				<div class="card-icon">
					<FaUsers />
				</div>
				<div class="card-content">
					<h3 class="card-content__title">Social</h3>
					<span class="card-content__author">Look another social</span>
				</div>
			</a>

			<!-- Donate -->
			<a class="card" href="/donate" title="Donate">
				<div class="card-icon">
					<FaCoins />
				</div>
				<div class="card-content">
					<h3 class="card-content__title">Donate</h3>
					<span class="card-content__author">Support this creator</span>
				</div>
			</a>
		</div>
	</section>
</main>

<style lang="scss">
	.trivia {
		@apply mb-8 mt-2 text-center font-heading text-base font-bold md:text-3xl xl:text-5xl;
	}
</style>
