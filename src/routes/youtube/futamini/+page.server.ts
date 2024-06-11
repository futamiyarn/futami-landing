import type { PageServerLoad } from './$types';

const ssr = 'https://www.youtube.com/feeds/videos.xml?channel_id=UClUhaSDL2kdewsgi9b7J9aQ';

import Parser from 'rss-parser';

interface YT {
	title: string;
	link: string;
	pubDate: string;
	author: string;
	id: string;
	isoDate: string;
}

export const load = (async () => {
	const parser = new Parser();

	let data: any;
	let result: any;

	data = await parser.parseURL(ssr);
	result = data.items.flat().slice(0, 10);

	result = result.map((data: YT) => {
		if (data.id && data.id.includes('yt:video'))
			return {
				title: data.title,
				pubDate: data.pubDate,
				author: data.author,
				url: data.link,
				id: data.id.replace('yt:video:', '')
			};

		return data;
	});

	return { items: result, name: data.title, url: data.link };
}) satisfies PageServerLoad;
