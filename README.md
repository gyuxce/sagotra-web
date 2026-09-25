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

Package descriptions, titles, and units are managed in Sanity. `src/lib/content/index.ts` is the single place pages call into (`getExperiences()`, `getDestination()`, etc.) — when `NEXT_PUBLIC_SANITY_PROJECT_ID` is set in `.env.local`, content fetches live via GROQ; otherwise it falls back to local placeholder data in `src/lib/content/mock-data.ts`.

Public package prices come only from CRM `crm_experience_pricing.sale_price`. The website overlays those prices by experience slug using the read-only `crm_public_experience_prices()` RPC; Sanity `retailPrice` and `priceOnRequest` are no longer used. The RPC exposes only experience ID, slug, and sale price—never cost, markup, or margin. If a package has no CRM sale price (or Supabase is not configured), the site shows the request-price label. Price-bearing public pages revalidate within 60 seconds of a CRM price change.

To manage content:

1. Copy `.env.local.example` to `.env.local` and set `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and `NEXT_PUBLIC_SANITY_API_VERSION` for public content reads. For CRM leads and public prices, the dashboard project's two Supabase migrations must be applied in order: `20260925091530_crm_core.sql`, then `20260925100000_public_experience_sale_price.sql`. If the core migration is already applied, apply the second migration only. Then set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to that project’s URL and anon/publishable key. The website uses only this public key; never add a service-role key to this project.
2. Run `npm run dev` and open `/studio` to manage content — the schema matches the PRD's content model (section 8): Experience, Destination, Story, Partner, FAQ, Inquiry.
3. The PRD's Kadipaten launch content (8 experiences, the Kadipaten destination, 5 stories, FAQs, partners) was seeded once via `node --env-file=.env.local scripts/migrate-to-sanity.mts`. That script is idempotent (`createOrReplace`) — re-run it only if you want to reset that starter content back to the PRD draft; day-to-day edits should happen in `/studio` instead.

Photography hasn't been uploaded yet — pages currently render a colored placeholder block wherever a photo would go (`src/components/shared/PlaceholderImage.tsx`). Uploading real images to the `images`/`heroImage` fields in Studio and swapping those components for `next/sanity`'s image component is the next step before launch.

The Owner/Admin sets each package's cost and markup in the CRM `/pricing` page. Saving pricing updates the public sale price used by the website; Sanity remains responsible for package content and price unit.

## Inquiries

The Plan Your Visit form (`src/app/[locale]/plan-your-visit/actions.ts`) and same-origin WhatsApp click-intent endpoint (`src/app/api/inquiry-intent/route.ts`) insert into Supabase `public.crm_leads` using the public anon/publishable key and RLS. They store experience ID/slug/title snapshots rather than cross-system references. Form leads use `channel='form'`, `status='new'`, `source='plan-your-visit'`, and `consent_given=true`; WhatsApp intent leads use `channel='whatsapp'`, `status='new'`, the current pathname as `source`, and make no identity or consent claim. If Supabase credentials are missing or the form insert fails, the form reports that it could not be saved. WhatsApp continues to open normally; intent recording is best-effort, and its endpoint returns an error if configuration or insertion fails. Public Sanity reads remain for website content and experience lookups; existing Sanity inquiry records/schema are retained as legacy data.

## What's still open (see PRD sections 15 & 17)

- CRM sale prices configured and approved per experience, real photography, and confirmed partner permissions. The seeded Sanity content is still the PRD's placeholder draft and must be reviewed/replaced before launch (PRD section 9, Content Governance).
- Hosting/deployment decision (not yet deployed anywhere).
- Real WhatsApp business number (currently a placeholder in `.env.local`) and analytics wiring.

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl.dev)
- [Sanity Documentation](https://www.sanity.io/docs)
