<script lang="ts">
	import FaYouTube from '$lib/images/font-awesome/youtube.svelte';
	export let data;
</script>

<svelte:head>
	<title>Youtube ({data.name}) - Futami</title>
	<meta name="description" content="Look my latest video" />
</svelte:head>

<main class="totality-container">
	<section class="cards-category">
		<h2 class="name-category">{data.name}</h2>
		<div class="cards">
			<!-- Futami ch. -->
			<a
				class="card"
				href="https://youtube.com/@futamiyarn?sub_confirmation=1"
				target="_blank"
				rel="noopener noreferrer"
				title="Futami Ch."
			>
				<div class="card-icon">
					<img
						src="https://yt3.googleusercontent.com/S5IfQ0LxW6Pp4JxilCMZMrrEm59QBVCXQSqL7IZ1d4M6BIwuHsWSfpnPzibCpVxCBjZDp1CVpA=s800-c-k-c0x00ffffff-no-rj"
						alt="Futami Profile Pic"
					/>
				</div>
				<div class="card-content">
					<h3 class="card-content__title">Futami Ch.</h3>
					<span class="card-content__author">Games, Tutorial, and More</span>
				</div>
			</a>

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
