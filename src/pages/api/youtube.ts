import type { APIRoute } from 'astro';

interface CloudflareEnv {
	FTM_KV: {
		get: (key: string, options?: { type: string }) => Promise<unknown>;
		put: (key: string, value: string) => Promise<void>;
	};
}

export const GET: APIRoute = async ({ url }) => {
	const API_KEY = import.meta.env.YOUTUBE_API_KEY;
	const channelId =
		url.searchParams.get('channelId') || 'UCY_76_kibnLb0hgOdZXI-aQ'; // Default to futami
	const maxResults = url.searchParams.get('maxResults') || '15';

	const cacheKey = `yt_api_${channelId}_${maxResults}`;

	// Disable cache in development
	const isDev = import.meta.env.DEV || import.meta.env.IS_DEV === 'true';
	let kv: CloudflareEnv['FTM_KV'] | undefined = undefined;

	if (!isDev) {
		try {
			// @ts-expect-error: cloudflare:workers is only available in production
			const { env } = await import('cloudflare:workers');
			kv = (env as CloudflareEnv).FTM_KV;
		} catch (e) {
			console.error('Failed to import cloudflare:workers', e);
		}
	}

	if (kv && typeof kv.get === 'function') {
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
		if (
			kv &&
			typeof kv.put === 'function' &&
			data.items &&
			data.items.length > 0
		) {
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
