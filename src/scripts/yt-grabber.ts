export interface YouTubeVideo {
	id: string;
	title: string;
	url: string;
	pubDate: string;
	author: string;
	isShorts?: boolean;
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
 * Cek apakah video adalah YouTube Shorts menggunakan oEmbed API
 */
async function checkIsShort(videoId: string): Promise<boolean> {
	try {
		// Menggunakan format /shorts/ untuk memaksa oEmbed memberikan rasio portrait jika video memang portrait
		const videoUrl = `https://www.youtube.com/shorts/${videoId}`;
		const oembedUrl = `https://www.youtube.com/oembed?url=${videoUrl}&format=json`;

		const res = await fetch(oembedUrl, {
			signal: AbortSignal.timeout(3000)
		});

		if (!res.ok) return false;

		const data = await res.json();
		// Jika width lebih kecil dari height, maka dianggap Shorts (Portrait)
		return data.width < data.height;
	} catch (error) {
		console.error(`Error checking isShort for ${videoId}:`, error);
		return false;
	}
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

export const single = async (channelId: string, limit?: number | null) => {
	const cacheKey = `yt_feed_${channelId}`;
	let cachedData: YouTubeVideo[] | null = null;
	
	// Disable cache in development
	const isDev = import.meta.env.DEV || import.meta.env.IS_DEV === 'true';
	let kv: any = undefined;

	if (!isDev) {
		try {
			// @ts-ignore
			const { env } = await import('cloudflare:workers');
			kv = env.FTM_KV;
		} catch (e) {
			console.error('Failed to import cloudflare:workers', e);
		}
	}

	// Coba ambil dari cache KV jika tersedia
	if (kv) {
		try {
			const cached = await kv.get(cacheKey, { type: 'json' });
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
		let allItems = parseYoutubeXML(textData);

		// Ambil sesuai limit jika ada
		const itemsToProcess = limit ? allItems.slice(0, limit) : allItems;

		// Cek isShorts untuk setiap video yang akan diproses
		// Memanfaatkan parallel processing agar lebih cepat
		const itemsWithShortsStatus = await Promise.all(
			itemsToProcess.map(async (item) => {
				// Cek apakah data isShorts sudah ada di cache sebelumnya untuk ID ini
				const cachedItem = cachedData?.find((c) => c.id === item.id);
				if (cachedItem && typeof cachedItem.isShorts !== 'undefined') {
					return { ...item, isShorts: cachedItem.isShorts };
				}
				
				// Jika tidak ada di cache, lakukan fetch ke oEmbed
				const isShorts = await checkIsShort(item.id);
				return { ...item, isShorts };
			})
		);

		// Update cache jika data berubah atau tidak ada cache
		if (kv) {
			const isDifferent =
				!cachedData || JSON.stringify(itemsWithShortsStatus) !== JSON.stringify(cachedData);

			// Hanya update jika data berbeda dan tidak kosong (menghindari cache "not found" kosong)
			if (isDifferent && itemsWithShortsStatus.length > 0) {
				await kv.put(cacheKey, JSON.stringify(itemsWithShortsStatus));
			}
		}

		return { items: itemsWithShortsStatus };
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
