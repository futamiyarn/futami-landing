# Track Specification: Foundation: Astro check and ESLint setup

## Overview

Perform a baseline health check on the Astro project and set up basic linting tools as a foundation for future work.

## Functional Requirements

- Verify existing code for errors and diagnostics.
- Install ESLint plugin for Astro.

## Acceptance Criteria

- [x] `pnpm astro check` runs successfully with no errors.
- [x] `eslint-plugin-astro` is present in `package.json` devDependencies.

## Out of Scope

- Full ESLint configuration.
- Fixing all hints/warnings found by `astro check`.
