import Parser from 'rss-parser';

interface YT {
	title: string;
	link: string;
	pubDate: string;
	author: string;
	id: string;
	isoDate: string;
}

const single = async (id: string, limit?: number | null) => {
	const parser = new Parser();

	let data: any;
	let result: any;
	const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${id}`;

	data = await parser.parseURL(url);
	result = data.items.flat();
	result = limit ? result.slice(0, limit) : result;

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
};

// const multi = async (id: string[], limit?: number | null) => {
// 	const parser = new Parser();

// 	const urls = id.map(
// 		(id) => `https://www.youtube.com/feeds/videos.xml?channel_id=${id}`
// 	);
// 	let result: Array<any> = [];

// 	result = await Promise.all(
// 		urls.map(async (url) => await parser.parseURL(url))
// 	);

// 	result = result
// 		.map((d) => d.items)
// 		.flat()
// 		.sort(
// 			(a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
// 		);
// 	result = limit ? result.slice(0, limit) : result;

// 	result = result.map((data: YT) => {
// 		if (data.id && data.id.includes('yt:video'))
// 			return {
// 				title: data.title,
// 				pubDate: data.pubDate,
// 				author: data.author,
// 				url: data.link,
// 				id: data.id.replace('yt:video:', '')
// 			};

// 		return data;
// 	});

// 	return { items: result };
// };

export { single };
export type { YT as YouTube };
