import Parser from 'rss-parser';

interface YT {
	title: string;
	link: string;
	pubDate: string;
	author: string;
	id: string;
	isoDate: string;
}

const single = async (url: string, limit?: number) => {
	const parser = new Parser();

	let data: any;
	let result: any;

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

const multi = async (urls: string[], limit?: number) => {
	const parser = new Parser();

	let result: Array<any> = [];

	result = await Promise.all(
		urls.map(async (url) => await parser.parseURL(url))
	);

	result = result
		.map((d) => d.items)
		.flat()
		.sort(
			(a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
		);
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

	return { items: result };
};

export { single, multi };
