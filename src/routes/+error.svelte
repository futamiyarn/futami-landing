<script lang="ts">
	import { page } from '$app/stores';
	let tilin: HTMLAudioElement;
</script>

<svelte:head>
	<title>Error</title>
	<meta name="description" content="Why are you here?" />
</svelte:head>

<main class="container-error">
	<audio src="/assets/audios/tilin.ogg" bind:this={tilin}></audio>
	<button class="container-error__button" on:click={async () => await tilin.play()}>
		<img src="/assets/images/tilin.webp" alt="tilin" class="md:w-30 w-24" />
	</button>
	<h1 class="container-error__heading">This page not found</h1>
	<p class="container-error__paragraph">
		<a href="https://www.youtube.com/watch?v=HiRaQaxORFw" target="_blank" rel="noopener noreferrer"
			>Serika</a
		>
		can't find <b>{$page.url.pathname}</b>
	</p>
</main>

<style>
</style>
