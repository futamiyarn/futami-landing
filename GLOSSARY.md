# GLOSSARY

Project-specific vocabulary for the **futami-landing** site (Astro + Material 3).
Only terms that carry a meaning special to this project are listed here.

---

## Theming

**Reference theme**
One of the two `code.html` design references under `stitch_material_you_linktree_clone/`:
the **v3.1 dark crimson** file (layout/shape source of truth) and the **v3.0 light crimson**
file (light-palette source). These are treated as shape/layout specs, **not** as literal
color sources — colors are re-expressed as M3 tokens.

**Dark crimson / light crimson**
The two color palettes defined in `crimson_expressive_2/DESIGN.md` (dark) and
`crimson_expressive_1/DESIGN.md` (light). "Crimson" is the brand hue; the palettes differ
only in tonal roles, not in layout.

**M3 token (token)**
A semantic CSS custom property following the Material 3 naming convention
(`--md-sys-color-{role}`), surfaced to Tailwind via `@theme` as `--color-{role}`.
Components must **only** reference tokens, never literal hex, so both themes resolve.
The one deliberate exception is the media scrim gradient in `VideoCard.astro`
(`#140c0d` — media stays dark in both themes).

**Role vs. foreground (canonical rule)**
A `*-container` token is a **background** role and must never be used as a **foreground**
(text/icon) color: in light mode containers are near-white and vanish on light surfaces.
Accent foregrounds use `primary` (or `on-*-container` when sitting on that container).
This rule was violated once — `text-primary-container` on section headers — making titles
invisible in light mode; it is now enforced.

**Deep crimson (`primary-deep`)**
The brand's signature deep-red accent (`#7d2937`), identical in both themes. Reserved for
*depth* (the ambient glow) rather than text/containers, so it never competes with the M3
on/container pairs. Dark mode's `primary-container` is itself a deep crimson (`#7d2937`)
with `on-primary-container` = light pink (`#ffb3b8`), matching the reference's
`bg-[#7D2937] text-[#FFB3B8]` featured treatment.

**Theme mode**
One of `system` | `light` | `dark`. Persisted in `localStorage['theme']`; `system`
resolves via `prefers-color-scheme`. Cycled by the footer toggle (`#theme-toggle`),
whose icon swaps between the three `theme-*` symbols.

**Ambient glow**
The single blurred `primary-deep` circle fixed behind the top of the viewport in
`Layout.astro` (`bg-primary-deep/20 … blur-3xl`, `fixed`, `-z-10`). Decorative depth,
not a token role; the background surface itself stays flat.

**Crimson shadow**
The low-opacity, brand-tinted elevation shadows (`--shadow-crimson`,
`--shadow-crimson-up`) applied to the header/footer in light mode for subtle depth.

---

## Components

**Featured card**
A `Card` rendered with `featured` — the highest-emphasis row. Maps to
`bg-primary-container text-on-primary-container`, i.e. soft pink in light mode and
**deep crimson** (`#7d2937`) with light-pink text in dark mode.

**Tonal pill / chip**
A full-radius (`rounded-full`) small surface row or icon button, e.g. the "Channels"
action pill, `NavbarButton`, the theme toggle. Uses `bg-surface-container-low` +
`border-outline-variant`.

**Media card**
A `VideoCard`/`CardYoutube` thumbnail tile: fixed `h-32`, `rounded-3xl`, image + dark
gradient scrim + status pill. The scrim stays dark in both themes.

**Action slot**
The `slot="action"` on `Section` — renders a trailing pill (e.g. the "Channels" link).

**Status pill**
The `YouTube` / `Shorts` badge on `VideoCard` (`bg-primary-container/90 …`).
