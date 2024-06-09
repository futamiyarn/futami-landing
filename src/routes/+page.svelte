<script lang="ts">
	import FaYouTube from '$lib/images/font-awesome/youtube.svelte';
	import FaTiktok from '$lib/images/font-awesome/tiktok.svelte';
	import FaCoins from '$lib/images/font-awesome/coins-solid.svelte';
	import FaUsers from '$lib/images/font-awesome/users-solid.svelte';

	import { onMount } from 'svelte';

	export let data;

	onMount(() => {
		console.log('reset');
	});
</script>

<svelte:head>
	<title>Futami Website</title>
	<meta name="description" content="Official *Linktree* Futami" />
</svelte:head>

<main class="totality-container">
	<!-- Random trivia -->
	<h1 class="trivia">Hay</h1>

	<!-- Latest Video -->
	<section class="cards-category">
		<h3 class="name-category">Latest Videos</h3>
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
		<div class="read-more"><a href="/youtube" class="read-more__link">Look more</a></div>
	</section>

	<!-- Short Bio Link -->
	<section class="cards-category">
		<h3 class="name-category">Socials</h3>
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
	.totality-container {
		@apply container mx-auto px-4 py-1 lg:max-w-[1024px];
	}

	.trivia {
		@apply mb-8 mt-2 text-center font-heading text-5xl font-bold;
	}

	.name-category {
		@apply font-heading text-3xl font-bold;
	}

	.cards-category {
		@apply mb-4 flex flex-col gap-y-3 rounded-md bg-background-800 p-5;
	}

	.cards {
		@apply flex flex-wrap justify-center gap-2 truncate;

		.card {
			@apply flex w-full items-center justify-center gap-x-1.5 truncate rounded-md bg-primary-500 px-3 py-2 text-center text-futa-white transition duration-200 ease-out hover:brightness-[.8];

			@media (min-width: 768px) {
				flex: 0 0 calc(50% - 10px);
			}

			&-icon {
				@apply flex aspect-square items-center justify-center text-[1.8rem];

				:global(svg) {
					@apply h-[1.25em] w-[1.25em] fill-current object-contain;
				}

				// img {
				// 	@apply aspect-square w-[1.25em] object-contain;
				// }
			}

			&-content {
				@apply flex w-full flex-col truncate;

				&__title {
					@apply w-full truncate font-heading font-bold;
				}

				&__author {
					@apply w-full truncate text-sm leading-none;
				}
			}
		}
	}

	.thumb-cards {
		.card {
			@apply aspect-[16/5] items-end justify-start bg-cover bg-center text-left text-white;
			&:first-child {
				@apply aspect-video;
			}

			@media (min-width: 768px) {
				&:nth-child(-n + 2) {
					@apply aspect-video;
				}
			}
		}
	}

	.read-more {
		@apply flex justify-end;

		&__link {
			@apply clear-both inline-block rounded-full bg-primary-500 px-4 py-1 font-bold text-futa-white transition-colors duration-200 ease-out hover:bg-primary-400;
		}
	}
</style>
