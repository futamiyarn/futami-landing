import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url }) => {
	const API_KEY = import.meta.env.YOUTUBE_API_KEY;
	const channelId =
		url.searchParams.get('channelId') || 'UCY_76_kibnLb0hgOdZXI-aQ'; // Default to futami
	const maxResults = url.searchParams.get('maxResults') || '15';

	if (!API_KEY) {
		return new Response(JSON.stringify({ error: 'API Key missing' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`;

	try {
		const response = await fetch(youtubeUrl);
		const data = await response.json();

		if (data.error) {
			return new Response(JSON.stringify(data), {
				status: response.status,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		return new Response(JSON.stringify(data), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'public, max-age=3600',
				'CDN-Cache-Control': 'max-age=43200'
			}
		});
	} catch {
		return new Response(
			JSON.stringify({ error: 'Failed to fetch YouTube data' }),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	}
};
