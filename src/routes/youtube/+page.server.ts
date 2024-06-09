import Parser from 'rss-parser';

interface YT {
	title: string;
	link: string;
	pubDate: string;
	author: string;
	id: string;
	isoDate: string;
}

const parseYoutube = async (url: string) => {
	const parser = new Parser();

	const data: any = await parser.parseURL(url);

	let results = data.items;

	results = results
		.flat()
		.slice(0, 6)
		.map((data: YT) => {
			if (data.id && data.id.includes('yt:video'))
				return {
					title: data.title,
					pubDate: data.pubDate,
					author: data.author,
					url: data.link,
					id: data.id.replace('yt:video:', '')
				};

			return results;
		});

	return { name: data.title, url: data.link, items: results };
};

export const load = async ({ url }) => {
	const futaMain = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCY_76_kibnLb0hgOdZXI-aQ';
	const futaMini = 'https://www.youtube.com/feeds/videos.xml?channel_id=UClUhaSDL2kdewsgi9b7J9aQ';
	const futaCover = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCvS8dMWixR99hkRmEhT16wA';

	let result: Array<any> = [];
	result = await Promise.all([
		parseYoutube(futaMain),
		parseYoutube(futaMini),
		parseYoutube(futaCover)
	]);

	// console.log(result);

	return { channels: result };
};
