function xmlToJson(xml: string): string {
	xml = xml.replace('<?xml version="1.0" encoding="UTF-8"?>', '');

	const channel = {
		name: xml.match(/<title>(.*?)<\/title>/)?.[1],
		id: xml.match(/<yt:channelId>(.*?)<\/yt:channelId>/)?.[1],
		url: xml
			.match(/<link\s+rel="alternate"\s+href="([^"]*)"/)?.[1]
			?.replace(/\\/g, ''),
		created_at: xml.match(/<published>(.*?)<\/published>/)?.[1]
	};

	const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g);

	const result = {
		channel,
		items: entries?.map((item) => {
			return {
				title: item.match(/<title>(.*?)<\/title>/)?.[1],
				link: item.match(/<link\s+rel="alternate"\s+href="([^"]*)"/)?.[1],
				pubDate: item.match(/<published>(.*?)<\/published>/)?.[1],
				author: item.match(/<name>(.*?)<\/name>/)?.[1],
				id: item.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1],
				stats: {
					viewCount: item.match(/<media:statistics views="(\d+)"/)?.[1],
					likeCount: item.match(/<media:starRating count="(\d+)/)?.[1]
				}
			};
		})
	};

	return JSON.stringify(result);
}

export default xmlToJson;
