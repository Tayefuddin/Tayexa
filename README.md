# Tayexa Holdings

Corporate marketing site for Tayexa Holdings — a real estate development and
construction firm. Built as a static single-page site for deployment on
Hostinger (static hosting).

## Stack

- [Vite](https://vite.dev) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`, CSS-based `@theme` config)
- [lucide-react](https://lucide.dev) for icons
- [Inter](https://fonts.google.com/specimen/Inter) (body) via `@fontsource/inter`, bundled locally for static hosting

## Design tokens

Defined in `src/index.css` under `@theme`:

| Token | Value | Usage |
| --- | --- | --- |
| `--color-navy` | `#010736` | Page background / primary dark |
| `--color-surface` | `#0d1c42` | Card / secondary surface |
| `--color-slate` | `#22396f` | Borders / muted dividers |
| `--color-cream` | `#fcf1d0` | Primary accent / high-contrast text |
| `--font-heading` | Zodiak Bold → serif fallback | Headings |
| `--font-sans` | Inter → system sans fallback | Body copy |

These generate Tailwind utilities directly: `bg-navy`, `bg-surface`,
`border-slate`, `text-cream`, `font-heading`, `font-sans`, etc.

### Zodiak font

Zodiak is a licensed display serif (Pangram Pangram) and isn't bundled with
this repo. Drop the licensed `Zodiak-Bold.woff2` file into
`public/fonts/zodiak/` (see the README there) to activate it — headings fall
back to a robust serif stack until then.

## Project structure

```
src/
  components/layout/   Navbar, Footer, Section wrapper, PlaceholderBlock
  sections/            One component per page section (Hero, About, ...)
  lib/                 Shared config (nav links)
  index.css            Tailwind import, theme tokens, global reset
```

## Scripts

```
npm run dev        # start local dev server
npm run build       # type-check (tsc -b) and build static output to dist/
npm run preview     # preview the production build
npm run lint        # oxlint
```

The `dist/` output is a static bundle ready to upload to Hostinger.
