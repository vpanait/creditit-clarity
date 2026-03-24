# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build (static export to out/)
npm run preview   # Serve the static export locally
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

**Stack**: Next.js (App Router) + TypeScript + Tailwind CSS 4 + shadcn/ui

**Static export**: `next.config.mjs` sets `output: 'export'`, so this is a fully static site with no API routes. Images are unoptimized. Deployed to Vercel.

**Path alias**: `@/*` maps to `./src/*`

### Component layers

- [src/components/ui/](src/components/ui/) — shadcn/ui primitives (auto-generated, avoid manual edits)
- [src/components/atoms/](src/components/atoms/) — small reusable components (BookCallButton, PhoneInput, RequestCallForm, etc.)
- [src/components/feature/_landing-page/](src/components/feature/_landing-page/) — landing page sections (Hero, Services, Benefits, Testimonials, FAQs, Contact, Footer, etc.)
- [src/components/feature/_newsroom/](src/components/feature/_newsroom/) — newsroom/blog components

### Routing (App Router)

- `/` — home/landing page
- `/newsroom` — news listing
- `/newsroom/[slug]` — individual articles
- `/privacy-policy`, `/terms-of-use`, `/cookies` — legal pages
- `/sitemap-viewer` — sitemap utility

### Key patterns

**Providers** ([src/app/layout.tsx](src/app/layout.tsx)): `ClientProviders` wraps `QueryClientProvider` (TanStack Query), `TooltipProvider`, `GTMProvider`, and `Toaster` (Sonner).

**Analytics**: `GTMProvider` in [src/hooks/use-gtm.ts](src/hooks/use-gtm.ts) manages Google Tag Manager (container `GTM-K4H528HR`) and integgtagrates with cookie consent. Cookie consent state lives in [src/lib/cookie-consent.ts](src/lib/cookie-consent.ts).

**Forms**: React Hook Form + Zod validation. The contact/request form POSTs to the external endpoint defined in [src/const/](src/const/) as `GET_STARTED_FORM_URL = "https://api.creditit.ai/creditit/request"`.

**Constants**: [src/const/](src/const/) centralizes routes (`ROUTE`), metadata (`META`), contact info, and external URLs.

**Types**: [src/types/](src/types/) contains domain types for calculator, industry, integration, and use-case features.

### Styling

Tailwind CSS 4 with `@import` syntax (not the v3 `@tailwind` directives). Theme uses CSS variables; base color is slate. Custom fonts: Syne (headings), Roboto, and a custom Dirham font in [src/fonts/](src/fonts/).

TypeScript strict mode is **off** (`strict: false`, `strictNullChecks: false`).
