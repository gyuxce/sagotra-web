import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MediaImage } from "@/components/shared/MediaImage";
import { getStories } from "@/lib/content";
import type { Locale } from "@/i18n/routing";
import { formatPublishDate } from "@/lib/format";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Stories");
  return { title: t("pageTitle"), description: t("pageSubtitle") };
}

export default async function StoriesPage() {
  const [t, locale, stories] = await Promise.all([getTranslations("Stories"), getLocale(), getStories()]);
  const loc = locale as Locale;

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={t("pageEyebrow")} title={t("pageTitle")} subtitle={t("pageSubtitle")} />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <Link
            key={story.slug}
            href={`/stories/${story.slug}`}
            className="focus-ring group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
          >
            <MediaImage
              image={story.heroImage}
              locale={loc}
              fallbackLabel={story.title[loc]}
              className="transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="flex flex-1 flex-col gap-2 p-5">
              <span className="text-xs font-medium text-[var(--foreground)]/50">
                {t("publishedOn", { date: formatPublishDate(story.publishDate, loc) })}
              </span>
              <h2 className="text-lg font-semibold text-[var(--color-deep-purple)]">{story.title[loc]}</h2>
              <p className="text-sm leading-relaxed text-[var(--foreground)]/75">{story.excerpt[loc]}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
