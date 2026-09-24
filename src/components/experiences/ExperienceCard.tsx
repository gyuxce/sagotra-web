import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MediaImage } from "@/components/shared/MediaImage";
import { PriceTag } from "./PriceTag";
import type { Experience } from "@/lib/content/types";
import type { Locale } from "@/i18n/routing";

const categoryLabels: Record<string, { id: string; en: string }> = {
  heritage: { id: "Warisan & Budaya", en: "Heritage & Culture" },
  arts: { id: "Kesenian & Pembelajaran", en: "Arts & Learning" },
  culinary: { id: "Kuliner", en: "Culinary" },
  community: { id: "Komunitas & Kreativitas", en: "Community & Creative Life" },
};

export function ExperienceCard({ experience }: { experience: Experience }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Experiences");

  return (
    <Link
      href={`/experiences/${experience.slug}`}
      className="focus-ring group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <MediaImage
        image={experience.images[0]}
        locale={locale}
        fallbackLabel={experience.title[locale]}
        category={experience.category}
        className="transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-jade-green)]">
          {categoryLabels[experience.category]?.[locale]}
        </span>
        <h3 className="text-lg font-semibold text-[var(--color-deep-purple)]">{experience.title[locale]}</h3>
        <p className="text-sm leading-relaxed text-[var(--foreground)]/75">{experience.summary[locale]}</p>
        <PriceTag experience={experience} className="mt-auto pt-2" />
        <span className="pt-1 text-sm font-semibold text-[var(--color-deep-purple)] group-hover:underline">
          {t("cardCta")} →
        </span>
      </div>
    </Link>
  );
}
