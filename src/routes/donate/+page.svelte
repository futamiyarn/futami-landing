<script>
	import Trakteer from '$lib/images/trakteer.svelte';
</script>

<main class="totality-container">
	<section class="cards-category">
		<h3 class="name-category">In Indonesia (IDR)</h3>
		<div class="cards">
			<!-- Trakteer -->
			<a
				class="card"
				href="https://trakteer.id/futami"
				target="_blank"
				rel="noopener noreferrer"
				title="Trakteer"
			>
				<div class="card-icon">
					<Trakteer />
				</div>
				<div class="card-content">
					<h3 class="card-content__title">Trakteer</h3>
					<span class="card-content__author">Rp. 5.000 each</span>
				</div>
			</a>

			<!-- Saweria -->
			<a
				class="card"
				href="https://saweria.co/futami"
				target="_blank"
				rel="noopener noreferrer"
				title="Saweria"
			>
				<div class="card-icon">
					<img src="/img/saweria.png" alt="Futamini" />
				</div>
				<div class="card-content">
					<h3 class="card-content__title">Saweria</h3>
					<span class="card-content__author">Min Rp. 5.000</span>
				</div>
			</a>
		</div>
	</section>

	<section class="cards-category">
		<h3 class="name-category">Overseas (Dollar)</h3>
		<div class="cards">
			<!-- YouTube Shorts -->
			<a
				class="card"
				href="https://ko-fi.com/futami"
				target="_blank"
				rel="noopener noreferrer"
				title="YouTube Shorts"
			>
				<div class="card-icon">
					<img src="/img/kofi.png" alt="Futamini" />
				</div>
				<div class="card-content">
					<h3 class="card-content__title">Ko-fi</h3>
					<span class="card-content__author">$3 each</span>
				</div>
			</a>
		</div>
	</section>
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
			@apply bg-primary-500 flex w-full items-center justify-center gap-x-1.5 rounded-md px-3 py-2 text-center text-futa-white transition duration-200 ease-out hover:brightness-[.8];

			@media (min-width: 768px) {
				flex: 0 0 calc(50% - 10px);
			}

			&-icon {
				@apply flex aspect-square items-center justify-center text-[1.8rem];

				:global(svg) {
					@apply h-[1.25em] w-[1.25em] fill-current object-contain;
				}

				img {
					@apply h-[1.25em] min-w-[1.25em] rounded-md object-contain;
				}
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
</style>
