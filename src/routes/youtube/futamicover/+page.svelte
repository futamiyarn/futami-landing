<script lang="ts">
	import FaYouTube from '$lib/images/font-awesome/youtube.svelte';
	export let data;
</script>

<svelte:head>
	<title>Youtube - Futami</title>
	<meta name="description" content="Look my latest video" />
</svelte:head>

<main class="totality-container">
	<section class="cards-category">
		<h2 class="name-category">{data.name}</h2>
		<div class="cards">
			<!-- Futami Cover -->
			<a
				class="card"
				href="https://youtube.com/@futamicover?sub_confirmation=1"
				target="_blank"
				rel="noopener noreferrer"
				title="Futami Cover"
			>
				<div class="card-icon">
					<img
						src="https://yt3.googleusercontent.com/_EbhGCfH415MGzhp7SBR7DVt8TMBGvA57gD6pfZ5ug3D1qH5OkuRbpKwwFtEZrmbb_mTGxTv=s800-c-k-c0x00ffffff-no-rj"
						alt="Futami Cover"
					/>
				</div>
				<div class="card-content">
					<h3 class="card-content__title">Futami Cover</h3>
					<span class="card-content__author">AI Covers</span>
				</div>
			</a>
		</div>
	</section>

	<!-- {chn.name} -->

	<section class="cards-category">
		<h2 class="name-category">Latest Videos</h2>
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
		<div class="read-more">
			<a
				href={data.url + '?sub_confirmation=1'}
				target="_blank"
				rel="noopener noreferrer"
				class="read-more__link">Subscribe</a
			>
		</div>
	</section>
</main>
