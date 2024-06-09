<script lang="ts">
	import FaYouTube from '$lib/images/font-awesome/youtube.svelte';
	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="totality-container">
	{#await data}
		Loading!
	{:then res}
		{#each res.channels as chn}
			<!-- {chn.name} -->

			<section class="cards-category">
				<h3 class="name-category">{chn.name}</h3>
				<div class="cards thumb-cards">
					{#each chn.items as item}
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
				</div>
				<div class="read-more">
					<a
						href={chn.url + '?sub_confirmation=1'}
						target="_blank"
						rel="noopener noreferrer"
						class="read-more__link">Subscribe</a
					>
				</div>
			</section>
		{/each}
	{/await}
</main>

<style lang="scss">
	.totality-container {
		@apply container mx-auto px-4 py-1 lg:max-w-[1024px];
	}

	.name-category {
		@apply font-heading text-3xl font-bold;
	}

	.cards-category {
		@apply bg-background-800 mb-4 flex flex-col gap-y-3 rounded-md p-5;
	}

	.cards {
		@apply flex flex-wrap justify-center gap-2 truncate;

		.card {
			@apply bg-primary-500 flex w-full items-center justify-center gap-x-1.5 truncate rounded-md px-3 py-2 text-center text-futa-white transition duration-200 ease-out hover:brightness-[.8];

			@media (min-width: 768px) {
				flex: 0 0 calc(50% - 10px);
			}

			&-icon {
				@apply flex aspect-square items-center justify-center text-[1.8rem];

				:global(svg) {
					@apply h-[1.25em] w-[1.25em] fill-current object-contain;
				}

				// img {
				// 	@apply h-[1.25em] min-w-[1.25em] rounded-md object-contain;
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
			@apply bg-primary-500 hover:bg-primary-400 clear-both inline-block rounded-full px-4 py-1 font-bold text-futa-white transition-colors duration-200 ease-out;
		}
	}
</style>
