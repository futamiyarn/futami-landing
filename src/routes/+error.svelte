<script lang="ts">
	import { page } from '$app/stores';
	let tilin: HTMLAudioElement;
</script>

<svelte:head>
	<title>Error</title>
	<meta name="description" content="Why are you here?" />
</svelte:head>

<main class="my-40 flex flex-col items-center justify-center px-8 text-center">
	<audio src="/assets/audios/tilin.ogg" bind:this={tilin}></audio>
	<button
		class="mb-4 transition duration-200 ease-out hover:brightness-75"
		on:click={async () => await tilin.play()}
	>
		<img src="/assets/images/tilin.webp" alt="tilin" class="md:w-30 w-24" />
	</button>
	<h1 class="font-heading text-3xl font-bold md:text-5xl">This page not found</h1>
	<p class="md:text-xl">
		<a
			href="https://www.youtube.com/watch?v=HiRaQaxORFw"
			target="_blank"
			rel="noopener noreferrer"
			class="text-slate-600 underline hover:text-slate-800">Serika</a
		>
		can't find <span class="font-bold">{$page.url.pathname}</span>
	</p>
</main>

<style>
</style>
