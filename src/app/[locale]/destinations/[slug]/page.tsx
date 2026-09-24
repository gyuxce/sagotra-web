import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { MediaImage } from "@/components/shared/MediaImage";
import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { getDestination, getDestinations, getExperiencesByDestination, getStoriesByDestination } from "@/lib/content";

export async function generateStaticParams() {
  const destinations = await getDestinations();
  return routing.locales.flatMap((locale) =>
    destinations.map((destination) => ({ locale, slug: destination.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const destination = await getDestination(slug);
  if (!destination) return {};
  const loc = locale as Locale;
  return { title: destination.name[loc], description: destination.overview[loc] };
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const [destination, locale, t] = await Promise.all([
    getDestination(slug),
    getLocale(),
    getTranslations("DestinationDetail"),
  ]);

  if (!destination) notFound();

  const loc = locale as Locale;
  const [experiences, stories] = await Promise.all([
    getExperiencesByDestination(destination.slug),
    getStoriesByDestination(destination.slug),
  ]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <MediaImage image={destination.heroImage} locale={loc} fallbackLabel={destination.name[loc]} className="w-full" />

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-[var(--color-deep-purple)] sm:text-4xl">
        {destination.name[loc]}
      </h1>

      <section className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-[var(--color-deep-purple)]">{t("overviewLabel")}</h2>
          <p className="mt-2 text-base leading-relaxed text-[var(--foreground)]/80">{destination.overview[loc]}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-[var(--color-deep-purple)]">{t("contextLabel")}</h2>
          <p className="mt-2 text-base leading-relaxed text-[var(--foreground)]/80">{destination.culturalContext[loc]}</p>
        </div>
      </section>

      <section className="mt-8 rounded-2xl bg-[var(--color-cream)] p-6">
        <h2 className="text-lg font-semibold text-[var(--color-deep-purple)]">{t("practicalLabel")}</h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/80">{destination.practicalNotes[loc]}</p>
      </section>

      {destination.zones.length > 0 ? (
        <section className="mt-14">
          <h2 className="text-xl font-semibold text-[var(--color-deep-purple)]">{t("zonesLabel")}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--foreground)]/70">{t("zonesSubtitle")}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destination.zones.map((zone) => (
              <div key={zone.order} className="rounded-xl border border-black/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-jade-green)]">
                  {t("zonePrefix")} {zone.order}
                </p>
                <p className="mt-1 font-semibold text-[var(--color-deep-purple)]">{zone.name[loc]}</p>
                <ul className="mt-2 space-y-1">
                  {zone.highlights.map((highlight) => (
                    <li key={highlight[loc]} className="text-sm leading-relaxed text-[var(--foreground)]/75">
                      {highlight[loc]}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {experiences.length > 0 ? (
        <section className="mt-14">
          <h2 className="text-xl font-semibold text-[var(--color-deep-purple)]">{t("experiencesLabel")}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.slug} experience={experience} />
            ))}
          </div>
        </section>
      ) : null}

      {stories.length > 0 ? (
        <section className="mt-14">
          <h2 className="text-xl font-semibold text-[var(--color-deep-purple)]">{t("storiesLabel")}</h2>
          <ul className="mt-6 space-y-3">
            {stories.map((story) => (
              <li key={story.slug}>
                <Link
                  href={`/stories/${story.slug}`}
                  className="focus-ring text-base font-medium text-[var(--color-deep-purple)] hover:underline"
                >
                  {story.title[loc]}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
