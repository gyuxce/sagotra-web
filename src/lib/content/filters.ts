import type { Audience, Experience, ExperienceCategory } from "./types";

export type DurationBucket = "short" | "half-day" | "extended";

export interface ExperienceFilterState {
  category?: ExperienceCategory;
  audience?: Audience;
  duration?: DurationBucket;
  destination?: string;
}

export function getDurationBucket(hours: number): DurationBucket {
  if (hours <= 2) return "short";
  if (hours <= 4) return "half-day";
  return "extended";
}

export function filterExperiences(experiences: Experience[], filters: ExperienceFilterState): Experience[] {
  return experiences.filter((experience) => {
    if (filters.category && experience.category !== filters.category) return false;
    if (filters.audience && !experience.audiences.includes(filters.audience)) return false;
    if (filters.duration && getDurationBucket(experience.durationHours) !== filters.duration) return false;
    if (filters.destination && experience.destinationSlug !== filters.destination) return false;
    return true;
  });
}

export function parseFilterState(searchParams: Record<string, string | string[] | undefined>): ExperienceFilterState {
  const get = (key: string) => {
    const value = searchParams[key];
    return Array.isArray(value) ? value[0] : value;
  };

  return {
    category: get("category") as ExperienceCategory | undefined,
    audience: get("audience") as Audience | undefined,
    duration: get("duration") as DurationBucket | undefined,
    destination: get("destination"),
  };
}
