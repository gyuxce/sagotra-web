# SAGOTRA Website

Awareness-first tourism experience website for SAGOTRA, built from the SAGOTRA Website PRD (v1.0). Phase 1 MVP scope: bilingual (ID/EN) marketing site with an experience catalog, destination pages, stories, and WhatsApp/form inquiries — no online payments (see PRD sections 2 and 13).

## Stack

- **Next.js 16** (App Router, Turbopack) + TypeScript + Tailwind CSS v4
- **next-intl** for Indonesian/English routing (`/id/...`, `/en/...`)
- **Sanity** headless CMS (schemas in `sanity/schemaTypes`, Studio at `/studio`)
- Content reads live from Sanity when a project is configured, falling back to local placeholder data otherwise (see below)

This project targets Next.js 16, which has meaningful breaking changes from earlier versions (e.g. `proxy.ts` replaces `middleware.ts`, `PageProps`/`LayoutProps` helper types). Check `node_modules/next/dist/docs/` before changing routing, caching, or data-fetching code.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/id` (default locale) or `/en` based on your browser's language.

## Content: Sanity CMS

Content is managed in Sanity. `src/lib/content/index.ts` is the single place pages call into (`getExperiences()`, `getDestination()`, etc.) — when `NEXT_PUBLIC_SANITY_PROJECT_ID` is set in `.env.local`, these fetch live via GROQ (`src/lib/sanity/queries.ts`); otherwise they fall back to the local placeholder arrays in `src/lib/content/mock-data.ts`, so the site still runs with zero external setup.

To manage content:

1. Copy `.env.local.example` to `.env.local` and fill in `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and (for writing inquiries) `SANITY_API_WRITE_TOKEN` — get these from [sanity.io/manage](https://www.sanity.io/manage) (Project ID is on the project overview page; create the token under API → Tokens with "Editor" permission).
2. Run `npm run dev` and open `/studio` to manage content — the schema matches the PRD's content model (section 8): Experience, Destination, Story, Partner, FAQ, Inquiry.
3. The PRD's Kadipaten launch content (8 experiences, the Kadipaten destination, 5 stories, FAQs, partners) was seeded once via `node --env-file=.env.local scripts/migrate-to-sanity.mts`. That script is idempotent (`createOrReplace`) — re-run it only if you want to reset that starter content back to the PRD draft; day-to-day edits should happen in `/studio` instead.

Photography hasn't been uploaded yet — pages currently render a colored placeholder block wherever a photo would go (`src/components/shared/PlaceholderImage.tsx`). Uploading real images to the `images`/`heroImage` fields in Studio and swapping those components for `next/sanity`'s image component is the next step before launch.

## Inquiries

The Plan Your Visit page (`/plan-your-visit`) offers both a WhatsApp deep link (`src/lib/whatsapp.ts`, prefilled with the experience name — FR05) and a form backed by a Server Action (`src/app/[locale]/plan-your-visit/actions.ts` — FR06). Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local`; without a Sanity write token configured, submissions validate successfully but are not persisted anywhere — wire up `SANITY_API_WRITE_TOKEN` (or another destination) before launch.

## What's still open (see PRD sections 15 & 17)

- Verified retail pricing, real photography, and confirmed partner permissions — the seeded Sanity content is still the PRD's placeholder draft and must be reviewed/replaced before launch (PRD section 9, Content Governance).
- Hosting/deployment decision (not yet deployed anywhere).
- Real WhatsApp business number (currently a placeholder in `.env.local`) and analytics wiring.

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl.dev)
- [Sanity Documentation](https://www.sanity.io/docs)
