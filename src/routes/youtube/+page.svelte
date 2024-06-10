<script lang="ts">
	import FaYouTube from '$lib/images/font-awesome/youtube.svelte';
	export let data;
</script>

<svelte:head>
	<title>Youtube - Futami</title>
	<meta name="description" content="Look my latest video" />
</svelte:head>

<main class="totality-container">
	{#await data}
		Loading!
	{:then res}
		{#each res.channels as chn}
			<!-- {chn.name} -->

			<section class="cards-category">
				<h2 class="name-category">{chn.name}</h2>
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
