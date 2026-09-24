"use client";

import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { ExperienceFilterState } from "@/lib/content/filters";

interface FilterBarProps {
  destinations: { slug: string; label: string }[];
}

const categories = ["heritage", "arts", "culinary", "community"] as const;
const audiences = ["cultural-traveler", "family", "school-community", "corporate", "international-visitor"] as const;
const durations = ["short", "half-day", "extended"] as const;

export function FilterBar({ destinations }: FilterBarProps) {
  const t = useTranslations("Experiences.filters");
  const tPillars = useTranslations("Pillars");
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const current: ExperienceFilterState = {
    category: (searchParams.get("category") as ExperienceFilterState["category"]) ?? undefined,
    audience: (searchParams.get("audience") as ExperienceFilterState["audience"]) ?? undefined,
    duration: (searchParams.get("duration") as ExperienceFilterState["duration"]) ?? undefined,
    destination: searchParams.get("destination") ?? undefined,
  };

  function updateFilter(key: keyof ExperienceFilterState, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname);
  }

  const hasActiveFilters = Boolean(current.category || current.audience || current.duration || current.destination);

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-black/5 bg-white p-4">
      <label className="flex flex-col gap-1 text-xs font-medium text-[var(--foreground)]/70">
        {t("category")}
        <select
          value={current.category ?? ""}
          onChange={(event) => updateFilter("category", event.target.value)}
          className="focus-ring rounded-lg border border-black/10 px-3 py-2 text-sm"
        >
          <option value="">{t("allCategories")}</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {tPillars(`${category}.title`)}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1 text-xs font-medium text-[var(--foreground)]/70">
        {t("audience")}
        <select
          value={current.audience ?? ""}
          onChange={(event) => updateFilter("audience", event.target.value)}
          className="focus-ring rounded-lg border border-black/10 px-3 py-2 text-sm"
        >
          <option value="">{t("allAudiences")}</option>
          {audiences.map((audience) => (
            <option key={audience} value={audience}>
              {t(`audienceLabels.${audience}`)}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1 text-xs font-medium text-[var(--foreground)]/70">
        {t("duration")}
        <select
          value={current.duration ?? ""}
          onChange={(event) => updateFilter("duration", event.target.value)}
          className="focus-ring rounded-lg border border-black/10 px-3 py-2 text-sm"
        >
          <option value="">{t("allDurations")}</option>
          {durations.map((duration) => (
            <option key={duration} value={duration}>
              {t(`durationLabels.${duration}`)}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1 text-xs font-medium text-[var(--foreground)]/70">
        {t("location")}
        <select
          value={current.destination ?? ""}
          onChange={(event) => updateFilter("destination", event.target.value)}
          className="focus-ring rounded-lg border border-black/10 px-3 py-2 text-sm"
        >
          <option value="">{t("allLocations")}</option>
          {destinations.map((destination) => (
            <option key={destination.slug} value={destination.slug}>
              {destination.label}
            </option>
          ))}
        </select>
      </label>

      {hasActiveFilters ? (
        <button
          type="button"
          onClick={() => router.replace(pathname)}
          className="focus-ring ml-auto self-end rounded-full px-4 py-2 text-sm font-medium text-[var(--color-deep-purple)] hover:underline"
        >
          {t("reset")}
        </button>
      ) : null}
    </div>
  );
}
