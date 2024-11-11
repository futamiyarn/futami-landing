import xmlToJson from './xml_converter';

interface YT {
	title: string;
	link: string;
	pubDate: string;
	author: string;
	id: string;
	isoDate: string;
}

const single = async (id: string, limit?: number | null) => {
	const data = await fetch(
		`https://www.youtube.com/feeds/videos.xml?channel_id=${id}`
	)
		.then((res) => res.text())
		.then((data) => JSON.parse(xmlToJson(data)));
	///

	let result: any;

	result = limit ? data.items.slice(0, limit) : data.items;

	result = result.map((data: YT) => {
		if (data.id && data.id.includes('yt:video'))
			return {
				title: data.title,
				pubDate: data.pubDate,
				author: data.author,
				url: data.link,
				id: data.id
			};

		return data;
	});

	return { items: result, name: data.name, url: data.url };
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
