import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { getExperiences } from "@/lib/content";

export async function FeaturedExperiences() {
  const [t, tCommon, experiences] = await Promise.all([
    getTranslations("Home"),
    getTranslations("Common"),
    getExperiences(),
  ]);

  const featured = experiences.slice(0, 6);

  return (
    <section className="bg-[var(--color-cream)] py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow={t("featuredEyebrow")}
            title={t("featuredHeading")}
            subtitle={t("featuredSubheading")}
          />
          <Link
            href="/experiences"
            className="focus-ring hidden shrink-0 text-sm font-semibold text-[var(--color-deep-purple)] hover:underline sm:inline-block"
          >
            {tCommon("viewAll")} →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((experience) => (
            <ExperienceCard key={experience.slug} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
