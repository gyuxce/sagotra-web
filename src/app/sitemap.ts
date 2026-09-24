import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/constants";
import { getDestinations, getExperiences, getStories } from "@/lib/content";

const staticPaths = ["", "/experiences", "/destinations", "/stories", "/about", "/plan-your-visit"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [experiences, destinations, stories] = await Promise.all([
    getExperiences(),
    getDestinations(),
    getStories(),
  ]);

  const dynamicPaths = [
    ...experiences.map((experience) => `/experiences/${experience.slug}`),
    ...destinations.map((destination) => `/destinations/${destination.slug}`),
    ...stories.map((story) => `/stories/${story.slug}`),
  ];

  const allPaths = [...staticPaths, ...dynamicPaths];

  return routing.locales.flatMap((locale) =>
    allPaths.map((path) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      lastModified: new Date(),
    })),
  );
}
