import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MediaImage } from "@/components/shared/MediaImage";
import { getDestinations } from "@/lib/content";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Destinations");
  return { title: t("pageTitle"), description: t("pageSubtitle") };
}

export default async function DestinationsPage() {
  const [t, locale, destinations] = await Promise.all([
    getTranslations("Destinations"),
    getLocale(),
    getDestinations(),
  ]);
  const loc = locale as Locale;

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={t("pageEyebrow")} title={t("pageTitle")} subtitle={t("pageSubtitle")} />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {destinations.map((destination) => (
          <Link
            key={destination.slug}
            href={`/destinations/${destination.slug}`}
            className="focus-ring group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
          >
            <MediaImage
              image={destination.heroImage}
              locale={loc}
              fallbackLabel={destination.name[loc]}
              className="transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="p-5">
              <h2 className="text-lg font-semibold text-[var(--color-deep-purple)]">{destination.name[loc]}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/75">{destination.overview[loc]}</p>
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-10 text-sm text-[var(--foreground)]/60">{t("comingSoon")}</p>
    </div>
  );
}
