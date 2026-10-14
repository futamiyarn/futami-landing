# ADR 0001 — Token-driven theming (tokens over reference hex)

- **Status:** Accepted
- **Date:** 2026-02-13
- **Deciders:** project owner + agent
- **Related:** `redesign-plan.md`, `GLOSSARY.md`

## Context

The redesign follows two reference `code.html` files (v3.1 dark crimson, v3.0 light
crimson). Those files express color as literal hex in Tailwind arbitrary values.

The prior implementation copied those hex values directly into components
(`#1A1112`, `#FCEEED`, `#23191A`, `#36292A`, `#7D2937`, `#5C1D27`, `#D8C2C3`, …).
Because the design is dark-first, copying dark hex made the site **hard-code the dark
theme**: light mode rendered dark surfaces with dark text and was effectively broken.

`main.css` already defined a Material 3 token layer, but it registered only a subset of
roles and used non-canonical names (e.g. `--color-primary-on`).

## Decision

**All color is driven by semantic M3 tokens; components never reference literal hex.**

1. `main.css` `@theme` registers the **full canonical M3 role set** using M3-native
   naming (`--color-on-primary`, `--color-on-primary-container`,
   `--color-on-secondary-container`, …, plus surface-bright/dim, inverse-*, tertiary,
   error, and `*-fixed*` variants).
2. `:root` holds the light palette; `html.dark` holds the dark palette — so a single
   component class resolves correctly in both themes.
3. The only literal hex kept is the `VideoCard` media scrim gradient (`#140c0d`), which
   must stay dark in both themes for media legibility.

## Consequences

- **Positive:** both themes work from one set of components; theme switching is a class
  toggle on `<html>`; future components need no color knowledge beyond token names.
- **Positive:** token names now match the M3 spec and the `crimson_expressive_*`
  `DESIGN.md` sources, so references map 1:1.
- **Negative:** a one-time mechanical sweep renamed tokens across ~6 files
  (`text-primary-on` → `text-on-primary`, etc.). Done and verified by build.
- **Negative:** the reference and the implementation no longer look byte-identical at the
  hex level — parity is by tonal role, not by literal value. This is intended.

## Alternatives considered

- **Copy reference hex per theme** (e.g. duplicate components for light/dark): rejected —
  doubles maintenance and re-introduces the drift that broke light mode.
- **Keep the partial token set and inline the missing roles as hex:** rejected — the gap
  is exactly what caused theme leakage.
- **CSS `light-dark()` / `color-scheme` only:** noted as a future simplification, but
  rejected now because the existing `@theme` + `html.dark` mechanism is already wired
  through `astro-icon` and Tailwind v4.

---

## Addendum (2026-02-13) — role-vs-foreground bug, deep crimson, flat background

Following review, three refinements were made and remain consistent with the decision above.

1. **Container roles are never foregrounds.** `text-primary-container` had been used as an
   accent on section headers, the 404/500 links, and a card icon tray. In light mode
   `primary-container` is near-white (`#ffdada`), so those elements were **effectively
   invisible** (~1.05:1). Fixed by using `primary` for accent foregrounds (7.7:1 light,
   14.4:1 dark, AA-pass). `on-*-container` remains correct *on* its container.

2. **Dark mode now expresses the brand as deep crimson, not pink.** Dark
   `primary-container` was `#ffb3b8` (pastel), which made featured cards / pills / glow read
   as washed-out pink. It is now `#7d2937` (deep crimson) with `on-primary-container` =
   `#ffb3b8`, matching the reference's `bg-[#7D2937] text-[#FFB3B8]` (5.5:1, AA-pass).

3. **A dedicated `primary-deep` role was added** (`#7d2937`, identical in both themes) for
   *depth only* — the single ambient glow behind the viewport top. The background itself
   stays **flat** (`bg-surface`); the glow and two brand-tinted `--shadow-crimson*`
   shadows (light mode, header/footer) are the only depth. This avoids overloading the
   container roles with a decorative duty.

The one literal-hex exception remains the `VideoCard` scrim (`#140c0d`).
