import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { MediaImage } from "@/components/shared/MediaImage";
import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { getExperiencesBySlugs, getStories, getStory } from "@/lib/content";
import { formatPublishDate } from "@/lib/format";

export const revalidate = 60;

export async function generateStaticParams() {
  const stories = await getStories();
  return routing.locales.flatMap((locale) => stories.map((story) => ({ locale, slug: story.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const story = await getStory(slug);
  if (!story) return {};
  const loc = locale as Locale;
  return { title: story.title[loc], description: story.excerpt[loc] };
}

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const [story, locale, t, tNav, tCommon] = await Promise.all([
    getStory(slug),
    getLocale(),
    getTranslations("Stories"),
    getTranslations("Nav"),
    getTranslations("Common"),
  ]);

  if (!story) notFound();

  const loc = locale as Locale;
  const relatedExperiences = await getExperiencesBySlugs(story.relatedExperienceSlugs);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/stories" className="focus-ring text-sm font-medium text-[var(--color-deep-purple)] hover:underline">
        ← {tCommon("backTo", { label: tNav("stories") })}
      </Link>

      <MediaImage image={story.heroImage} locale={loc} fallbackLabel={story.title[loc]} className="mt-6 w-full" />

      <span className="mt-6 block text-xs font-medium text-[var(--foreground)]/50">
        {t("publishedOn", { date: formatPublishDate(story.publishDate, loc) })}
      </span>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-deep-purple)] sm:text-4xl">
        {story.title[loc]}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-[var(--foreground)]/80">{story.excerpt[loc]}</p>

      <div className="prose-content mt-8 space-y-5">
        {story.body.map((paragraph) => (
          <p key={paragraph[loc]} className="text-base leading-relaxed text-[var(--foreground)]/85">
            {paragraph[loc]}
          </p>
        ))}
      </div>

      {relatedExperiences.length > 0 ? (
        <section className="mt-14">
          <h2 className="text-xl font-semibold text-[var(--color-deep-purple)]">{t("relatedExperiences")}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {relatedExperiences.map((experience) => (
              <ExperienceCard key={experience.slug} experience={experience} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
