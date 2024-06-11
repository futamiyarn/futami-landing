import Parser from 'rss-parser';

interface YT {
	title: string;
	link: string;
	pubDate: string;
	author: string;
	id: string;
	isoDate: string;
}

export const load = async ({ url }) => {
	const futaMain = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCY_76_kibnLb0hgOdZXI-aQ';
	const futaMini = 'https://www.youtube.com/feeds/videos.xml?channel_id=UClUhaSDL2kdewsgi9b7J9aQ';
	const futaCover = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCvS8dMWixR99hkRmEhT16wA';
	const futaBlog = '';

	const parser = new Parser();

	let result: Array<any> = [];

	result = await Promise.all([
		parser.parseURL(futaMain),
		parser.parseURL(futaMini),
		parser.parseURL(futaCover)
	]);

	result = result
		.map((d) => d.items)
		.flat()
		.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
		.slice(0, 4);

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

	return { items: result };
};
