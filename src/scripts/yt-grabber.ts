export interface YouTubeVideo {
	id: string;
	title: string;
	url: string;
	pubDate: string;
	author: string;
}

/**
 * Helper untuk mengubah HTML Entities kembali ke karakter asli
 * Mengatasi masalah &quot; menjadi "
 */
function decodeHtml(text: string): string {
	if (!text) return '';
	return text
		.replace(/&quot;/g, '"')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&#39;/g, "'");
}

/**
 * Fungsi internal untuk mengubah XML YouTube Feed menjadi Objek JS
 */
function parseYoutubeXML(xml: string) {
	// Hapus deklarasi XML standar
	const cleanXml = xml.replace('<?xml version="1.0" encoding="UTF-8"?>', '');

	// Ambil semua blok <entry> (setiap video)
	const entries = cleanXml.match(/<entry>[\s\S]*?<\/entry>/g) || [];

	return entries.map((entry) => {
		const rawTitle = entry.match(/<title>(.*?)<\/title>/)?.[1] || '';
		const rawAuthor = entry.match(/<name>(.*?)<\/name>/)?.[1] || '';

		return {
			// Terapkan decodeHtml di sini
			title: decodeHtml(rawTitle),
			url: entry.match(/<link\s+rel="alternate"\s+href="([^"]*)"/)?.[1] || '',
			pubDate: entry.match(/<published>(.*?)<\/published>/)?.[1] || '',
			// Terapkan juga pada author jaga-jaga ada karakter khusus di nama channel
			author: decodeHtml(rawAuthor),
			id: entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] || ''
		};
	});
}

/**
 * Fetch data video terbaru dari Channel ID tertentu dengan caching KV
 */
 
export const single = async (
	channelId: string,
	limit?: number | null,
	kv?: unknown
) => {
	const cacheKey = `yt_feed_${channelId}`;
	let cachedData: YouTubeVideo[] | null = null;

	// Coba ambil dari cache KV jika tersedia
	if (kv) {
		try {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const cached = await (kv as any).get(cacheKey, { type: 'json' });
			if (cached) {
				cachedData = cached as YouTubeVideo[];
			}
		} catch (error) {
			console.error('Error reading from KV:', error);
		}
	}

	try {
		const response = await fetch(
			`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
			{
				// Timeout singkat agar tidak menggantung jika RSS lambat
				signal: AbortSignal.timeout(5000)
			}
		);

		if (!response.ok) throw new Error('Failed to fetch YouTube feed');

		const textData = await response.text();
		const allItems = parseYoutubeXML(textData);

		// Update cache jika data berubah atau tidak ada cache
		if (kv) {
			const isDifferent =
				!cachedData || JSON.stringify(allItems) !== JSON.stringify(cachedData);

			if (isDifferent) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				await (kv as any).put(cacheKey, JSON.stringify(allItems), {
					// Cache selama seminggu (604800 detik)
					expirationTtl: 604800
				});
			}
		}

		// Ambil sesuai limit jika ada
		const items = limit ? allItems.slice(0, limit) : allItems;
		return { items };
	} catch (error) {
		console.error('Error fetching YouTube data, falling back to cache:', error);

		// Gunakan cache jika feed RSS error
		if (cachedData) {
			const items = limit ? cachedData.slice(0, limit) : cachedData;
			return { items: items || [] };
		}

		return { items: [] };
	}
};

// Export alias tipe data agar kompatibel dengan kode lain
export type { YouTubeVideo as YouTube };
