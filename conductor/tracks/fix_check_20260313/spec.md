# Track Specification: Fix Astro Check Diagnostics

## Overview
Resolve warnings and diagnostics reported by `pnpm astro check` to ensure code quality and clean builds.

## Functional Requirements
- Remove unused variables in components.
- Fix any other diagnostics reported by the check tool.

## Acceptance Criteria
- [ ] `pnpm astro check` returns "0 errors, 0 warnings, 0 hints" (or just 0 errors/warnings).
