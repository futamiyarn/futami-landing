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
 * Fetch data video terbaru dari Channel ID tertentu
 */
export const single = async (channelId: string, limit?: number | null) => {
	try {
		const response = await fetch(
			`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
		);

		if (!response.ok) throw new Error('Failed to fetch YouTube feed');

		const textData = await response.text();
		const allItems = parseYoutubeXML(textData);

		// Ambil sesuai limit jika ada
		const items = limit ? allItems.slice(0, limit) : allItems;

		return { items };
	} catch (error) {
		console.error('Error fetching YouTube data:', error);
		return { items: [] };
	}
};

// Export alias tipe data agar kompatibel dengan kode lain
export type { YouTubeVideo as YouTube };

