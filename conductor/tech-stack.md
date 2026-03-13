# Technology Stack

## Core Technologies

- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Framework**: [Astro 6.x](https://astro.build/) - Hybrid static/server rendering for optimal performance and SEO.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [SCSS](https://sass-lang.com/) for modern, responsive, and maintainable styling.

## Infrastructure & Deployment

- **Platform**: [Cloudflare Pages](https://pages.cloudflare.com/) - High-performance edge deployment.
- **Adapter**: `@astrojs/cloudflare` - Integration for Cloudflare Pages features.
- **Caching**: [Cloudflare KV](https://www.cloudflare.com/products/workers-kv/) - Used for caching dynamic YouTube data to improve load times and bypass API limits.

## Key Libraries & Tools

- **Icons**: `astro-icon` - For optimized, easy-to-use SVG icons.
- **Data Fetching**: `fetch` API & `axios` - For server-side and client-side API requests.
- **Image Optimization**: `sharp` - Integrated with Astro for efficient asset delivery.
- **Package Management**: `pnpm` - For fast, disk-efficient dependency management.
- **Formatting**: `Prettier` with `prettier-plugin-astro` and `prettier-plugin-tailwindcss`.

## Development Workflows

- **Environment**: Cloudflare Wrangler for local emulation and deployment.
- **API Strategy**: Proxy API routes located in `src/pages/api/` for dynamic content orchestration.
- **Styles**: SCSS modern API with Tailwind CSS v4 Vite plugin.
