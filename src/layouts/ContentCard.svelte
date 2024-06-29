<script lang="ts">
	import CardItem from '@components/CardItem.svelte';
	import { multi, single } from '@modules/yt-grabber';
	import FaYoutube from '@lib/images/font-awesome/svelte/youtube.svelte';

	export let url: string = '';
	export let urls: string[] = [];
	export let limit: number | null = null;

	let data: any;

	if (url) data = single(url, limit);
	else if (urls) data = multi(urls, limit);
</script>

{#each data as item}
	<CardItem
		name={item.title}
		url={item.url}
		description={item.author}
		bgImage={`https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`}
		svg={FaYoutube}
	/>
{/each}
