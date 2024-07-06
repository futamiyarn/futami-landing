<script>
	import youtube from '@lib/data/youtube.json';
	import CardItem from '@components/svelte/CardItem.svelte';

	function fisherYatesShuffle(array) {
		let m = array.length,
			t,
			i;

		// While there remain elements to shuffle...
		while (m) {
			// Pick a remaining element...
			i = Math.floor(Math.random() * m--);

			// And swap it with the current element.
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}

		return array;
	}

	const playlist = fisherYatesShuffle(
		youtube
			.map((yt) => yt.playlist ?? [])
			.reduce((a, c) => [...c, ...a].slice(0, 4))
	);
</script>

{#each playlist as pl}
	<CardItem
		name={pl.name}
		url={`https://www.youtube.com/playlist?list=${pl.id}`}
		description={pl.description}
		icon="hugeicons:playlist-01"
	/>
{/each}
