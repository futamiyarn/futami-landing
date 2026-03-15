import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url }) => {
	const API_KEY = import.meta.env.YOUTUBE_API_KEY;
	const channelId =
		url.searchParams.get('channelId') || 'UCY_76_kibnLb0hgOdZXI-aQ'; // Default to futami
	const maxResults = url.searchParams.get('maxResults') || '15';

	const cacheKey = `yt_api_${channelId}_${maxResults}`;
	
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

	if (kv) {
		try {
			const cached = await kv.get(cacheKey, { type: 'json' });
			if (cached) {
				return new Response(JSON.stringify(cached), {
					status: 200,
					headers: {
						'Content-Type': 'application/json',
						'X-Cache': 'HIT'
					}
				});
			}
		} catch (error) {
			console.error('Error reading from KV:', error);
		}
	}

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

		// Update KV cache if available
		if (kv && data.items && data.items.length > 0) {
			try {
				await kv.put(cacheKey, JSON.stringify(data));
			} catch (error) {
				console.error('Error writing to KV:', error);
			}
		}

		return new Response(JSON.stringify(data), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'public, max-age=3600',
				'CDN-Cache-Control': 'max-age=43200',
				'X-Cache': 'MISS'
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
