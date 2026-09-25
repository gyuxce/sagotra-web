import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { FilterBar } from "@/components/experiences/FilterBar";
import { getDestinations, getExperiences } from "@/lib/content";
import { filterExperiences, parseFilterState } from "@/lib/content/filters";
import type { Locale } from "@/i18n/routing";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Experiences");
  return { title: t("pageTitle"), description: t("pageSubtitle") };
}

export default async function ExperiencesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const [t, locale, experiences, destinations, resolvedSearchParams] = await Promise.all([
    getTranslations("Experiences"),
    getLocale(),
    getExperiences(),
    getDestinations(),
    searchParams,
  ]);

  const filters = parseFilterState(resolvedSearchParams);
  const filtered = filterExperiences(experiences, filters);
  const destinationOptions = destinations.map((destination) => ({
    slug: destination.slug,
    label: destination.name[locale as Locale],
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={t("pageEyebrow")} title={t("pageTitle")} subtitle={t("pageSubtitle")} />

      <div className="mt-8">
        <FilterBar destinations={destinationOptions} />
      </div>

      <p className="mt-6 text-sm text-[var(--foreground)]/60">
        {t("filters.showing", { count: filtered.length, total: experiences.length })}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((experience) => (
            <ExperienceCard key={experience.slug} experience={experience} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-sm text-[var(--foreground)]/60">{t("noResults")}</p>
      )}
    </div>
  );
}
