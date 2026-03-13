# Futami Landing Project

A high-performance "Linktree" style landing page for Futami, built with Astro and optimized for Cloudflare Pages.

## Project Overview

- **Framework**: [Astro 6.x](https://astro.build/) (SSG/SSR Hybrid)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & SCSS
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/) with `@astrojs/cloudflare` adapter.
- **Key Features**:
  - Dynamic YouTube content fetching via RSS feeds and Data API.
  - Integration with Cloudflare KV for efficient data caching.
  - "Secret theme" implementation (accessible via `src/scripts/theme-selector.ts`).
  - Modular component architecture with Astro components.

## Building and Running

### Development
```bash
# Install dependencies
pnpm install

# Start local development server
npm run dev
```
The dev server runs on `localhost:4321` using the default Node.js runtime (defined in `astro.config.mjs`).

### Production Build
```bash
# Build for production (Cloudflare Pages)
npm run build
```
This command runs `astro check` followed by `astro build` using `astro.config.build.mjs`, which enables the Cloudflare adapter and KV integration.

### Other Commands
- `npm run preview`: Preview the production build locally.
- `npm run prettier`: Format the entire codebase using Prettier.

## Architecture and Design

### Directory Structure
- `src/components/`: Reusable Astro components (cards, navbar, sections).
- `src/layouts/`: Main page layouts.
- `src/pages/`: File-based routing. Includes API routes in `src/pages/api/`.
- `src/scripts/`: Client-side and server-side logic (e.g., `yt-grabber.ts` for YouTube integration).
- `src/lib/styles/`: Modular SCSS styles and theme configurations.
- `src/data/`: Static JSON data (e.g., channel IDs).

### Data Flow
1. **YouTube Data**: Fetched using `src/scripts/yt-grabber.ts` which parses YouTube RSS feeds. It optionally uses Cloudflare KV for caching to avoid rate limits and improve performance.
2. **Blog Content**: Fetched directly from `blog.futami.my.id` API in page templates.
3. **API Proxy**: `src/pages/api/youtube.ts` acts as a proxy for YouTube Data API v3 calls.

### Development Conventions
- **TypeScript**: Used for all scripts and component logic.
- **Path Aliases**: Use `@components/*`, `@layouts/*`, `@lib/*`, `@assets/*`, `@data/*`, `@scripts/*`, and `@styles/*` for cleaner imports.
- **SSR/SSG**: Pages default to SSG, but some are explicitly set to `export const prerender = false;` for dynamic data fetching (e.g., `index.astro`).
- **Icons**: Handled via `astro-icon`. SVG icons are stored in `src/icons/`.

## Environment Variables
- `YOUTUBE_API_KEY`: Required for YouTube Data API features in `src/pages/api/youtube.ts`.
- `KV`: Cloudflare KV namespace binding for caching YouTube feeds.
