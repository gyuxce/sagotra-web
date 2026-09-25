import { client } from "@/lib/sanity/client";
import { isSanityConfigured } from "@/lib/sanity/env";
import {
  destinationBySlugQuery,
  destinationsQuery,
  experienceBySlugQuery,
  experiencesBySlugsQuery,
  experiencesByDestinationQuery,
  experiencesQuery,
  faqsQuery,
  partnersQuery,
  storiesByDestinationQuery,
  storiesQuery,
  storyBySlugQuery,
} from "@/lib/sanity/queries";
import { getPublicExperiencePrices } from "@/lib/supabase/server";
import { destinations, experiences, faqs, partners, stories } from "./mock-data";
import type { Destination, Experience, Faq, Partner, Story } from "./types";

/**
 * Content accessors. When a Sanity project is configured (see
 * src/lib/sanity/env.ts), these read live content via GROQ. Otherwise they
 * fall back to the local placeholder data in ./mock-data.ts so the site
 * still runs with zero external setup.
 */

async function withCrmSalePrices(items: Experience[]): Promise<Experience[]> {
  if (items.length === 0) return items;
  const publicPrices = await getPublicExperiencePrices().catch(() => []);
  const pricesBySlug = new Map(publicPrices.map((price) => [price.experience_slug, price.sale_price]));
  return items.map((experience) => {
    const retailPrice = pricesBySlug.get(experience.slug);
    return { ...experience, retailPrice, priceOnRequest: retailPrice === undefined };
  });
}

export async function getExperiences(): Promise<Experience[]> {
  const items = isSanityConfigured ? await client.fetch<Experience[]>(experiencesQuery) : experiences;
  return withCrmSalePrices(items);
}

export async function getExperience(slug: string): Promise<Experience | undefined> {
  const item = isSanityConfigured
    ? await client.fetch<Experience | null>(experienceBySlugQuery, { slug })
    : experiences.find((experience) => experience.slug === slug);
  if (!item) return undefined;
  return (await withCrmSalePrices([item]))[0];
}

export async function getExperiencesBySlugs(slugs: string[]): Promise<Experience[]> {
  if (slugs.length === 0) return [];

  const results = isSanityConfigured
    ? await client.fetch<Experience[]>(experiencesBySlugsQuery, { slugs })
    : experiences.filter((experience) => slugs.includes(experience.slug));

  const bySlug = new Map(results.map((experience) => [experience.slug, experience]));
  const ordered = slugs.map((slug) => bySlug.get(slug)).filter((experience): experience is Experience => Boolean(experience));
  return withCrmSalePrices(ordered);
}


export async function getDestinations(): Promise<Destination[]> {
  if (isSanityConfigured) return client.fetch(destinationsQuery);
  return destinations;
}

export async function getDestination(slug: string): Promise<Destination | undefined> {
  if (isSanityConfigured) {
    const result = await client.fetch(destinationBySlugQuery, { slug });
    return result ?? undefined;
  }
  return destinations.find((destination) => destination.slug === slug);
}

export async function getExperiencesByDestination(slug: string): Promise<Experience[]> {
  const items = isSanityConfigured
    ? await client.fetch<Experience[]>(experiencesByDestinationQuery, { slug })
    : experiences.filter((experience) => experience.destinationSlug === slug);
  return withCrmSalePrices(items);
}

export async function getStories(): Promise<Story[]> {
  if (isSanityConfigured) return client.fetch(storiesQuery);
  return [...stories].sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));
}

export async function getStory(slug: string): Promise<Story | undefined> {
  if (isSanityConfigured) {
    const result = await client.fetch(storyBySlugQuery, { slug });
    return result ?? undefined;
  }
  return stories.find((story) => story.slug === slug);
}

export async function getStoriesByDestination(slug: string): Promise<Story[]> {
  if (isSanityConfigured) return client.fetch(storiesByDestinationQuery, { slug });
  return stories.filter((story) => story.destinationSlug === slug);
}

export async function getFaqs(): Promise<Faq[]> {
  if (isSanityConfigured) return client.fetch(faqsQuery);
  return faqs;
}

export async function getPartners(): Promise<Partner[]> {
  if (isSanityConfigured) return client.fetch(partnersQuery);
  return partners.filter((partner) => partner.permissionGranted);
}
