import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { MediaImage } from "@/components/shared/MediaImage";
import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { PriceTag } from "@/components/experiences/PriceTag";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { getDestination, getExperience, getExperiences, getExperiencesBySlugs } from "@/lib/content";
import { buildExperienceInquiryMessage, buildWhatsAppLink } from "@/lib/whatsapp";

export async function generateStaticParams() {
  const experiences = await getExperiences();
  return routing.locales.flatMap((locale) =>
    experiences.map((experience) => ({ locale, slug: experience.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const experience = await getExperience(slug);
  if (!experience) return {};

  const loc = locale as Locale;
  return {
    title: experience.title[loc],
    description: experience.summary[loc],
  };
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const [experience, locale, t, tCommon, tNav] = await Promise.all([
    getExperience(slug),
    getLocale(),
    getTranslations("ExperienceDetail"),
    getTranslations("Common"),
    getTranslations("Nav"),
  ]);

  if (!experience) notFound();

  const loc = locale as Locale;
  const [destination, related] = await Promise.all([
    getDestination(experience.destinationSlug),
    getExperiencesBySlugs(experience.relatedExperienceSlugs),
  ]);

  const whatsappHref = buildWhatsAppLink(buildExperienceInquiryMessage(experience.title[loc], loc));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: experience.title[loc],
    description: experience.summary[loc],
    touristType: experience.audiences,
    address: destination ? destination.name[loc] : undefined,
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <Link href="/experiences" className="focus-ring text-sm font-medium text-[var(--color-deep-purple)] hover:underline">
        ← {tCommon("backTo", { label: tNav("experiences") })}
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <MediaImage
            image={experience.images[0]}
            locale={loc}
            fallbackLabel={experience.title[loc]}
            category={experience.category}
            className="w-full"
          />

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-[var(--color-deep-purple)] sm:text-4xl">
            {experience.title[loc]}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-[var(--foreground)]/80">{experience.summary[loc]}</p>

          {destination ? (
            <p className="mt-2 text-sm font-medium text-[var(--color-jade-green)]">{destination.name[loc]}</p>
          ) : null}

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-[var(--color-deep-purple)]">{t("storyLabel")}</h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--foreground)]/80">{experience.story[loc]}</p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-[var(--color-deep-purple)]">{t("highlightsLabel")}</h2>
            <ul className="mt-3 space-y-2">
              {experience.highlights.map((highlight) => (
                <li key={highlight[loc]} className="flex gap-3 text-base leading-relaxed text-[var(--foreground)]/80">
                  <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-saffron)]" />
                  {highlight[loc]}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-[var(--color-deep-purple)]">{t("includesLabel")}</h2>
              <ul className="mt-3 space-y-1.5">
                {experience.includes.map((item) => (
                  <li key={item[loc]} className="text-sm leading-relaxed text-[var(--foreground)]/80">
                    + {item[loc]}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[var(--color-deep-purple)]">{t("excludesLabel")}</h2>
              <ul className="mt-3 space-y-1.5">
                {experience.excludes.map((item) => (
                  <li key={item[loc]} className="text-sm leading-relaxed text-[var(--foreground)]/80">
                    − {item[loc]}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-10 rounded-2xl bg-[var(--color-cream)] p-6">
            <h2 className="text-lg font-semibold text-[var(--color-deep-purple)]">{t("responsibleLabel")}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/80">
              {experience.responsibleVisitNotes[loc]}
            </p>
          </section>
        </div>

        <aside className="h-fit rounded-2xl border border-black/5 p-6 lg:sticky lg:top-24">
          <h2 className="text-lg font-semibold text-[var(--color-deep-purple)]">{t("practicalLabel")}</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="font-medium text-[var(--foreground)]/60">{t("duration")}</dt>
              <dd className="text-[var(--foreground)]/90">{experience.durationHours}h</dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--foreground)]/60">{t("meetingPoint")}</dt>
              <dd className="text-[var(--foreground)]/90">{experience.practicalDetails.meetingPoint[loc]}</dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--foreground)]/60">{t("minimumGroup")}</dt>
              <dd className="text-[var(--foreground)]/90">{experience.practicalDetails.minimumGroup[loc]}</dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--foreground)]/60">{t("language")}</dt>
              <dd className="text-[var(--foreground)]/90">{experience.languages.join(" / ").toUpperCase()}</dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--foreground)]/60">{t("accessibility")}</dt>
              <dd className="text-[var(--foreground)]/90">{experience.practicalDetails.accessibility[loc]}</dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--foreground)]/60">{t("whatToBring")}</dt>
              <dd className="text-[var(--foreground)]/90">{experience.practicalDetails.whatToBring[loc]}</dd>
            </div>
          </dl>

          <div className="mt-6 border-t border-black/10 pt-6">
            <PriceTag experience={experience} className="block text-lg" />
            <h3 className="mt-3 text-base font-semibold text-[var(--color-deep-purple)]">{t("inquiryLabel")}</h3>
            <p className="mt-2 text-sm text-[var(--foreground)]/70">{t("inquiryBody")}</p>
            <div className="mt-4 flex flex-col gap-2">
              <WhatsAppButton href={whatsappHref} label={t("whatsappCta")} className="w-full" />
              <Link
                href={{ pathname: "/plan-your-visit", query: { experience: experience.slug } }}
                className="focus-ring inline-flex items-center justify-center rounded-full border border-[var(--color-deep-purple)] px-6 py-3 text-sm font-semibold text-[var(--color-deep-purple)] hover:bg-[var(--color-deep-purple)]/5"
              >
                {t("formCta")}
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="text-xl font-semibold text-[var(--color-deep-purple)]">{t("relatedLabel")}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ExperienceCard key={item.slug} experience={item} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
