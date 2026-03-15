# Track Specification: Configure Cloudflare Pages Build Output

## Overview

Update Astro configuration to specify build output directories for Cloudflare Pages and ensure correct routing with a `_routes.json` file.

## Functional Requirements

- Update `astro.config.mjs` with `build.client` and `build.server` paths.
- Add `cloudflare()` adapter to `astro.config.mjs`.
- Create `public/_routes.json`.

## Acceptance Criteria

- [ ] `astro.config.mjs` contains the requested build configuration.
- [ ] `public/_routes.json` exists with correct routing rules.
