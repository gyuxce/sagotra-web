import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";

export function AwarenessStory() {
  const t = useTranslations("Home");
  const tCommon = useTranslations("Common");

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 rounded-3xl bg-[var(--color-deep-purple)] p-8 text-white sm:p-12 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-saffron)]">
            {t("storyEyebrow")}
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("storyHeading")}</h2>
          <p className="text-base leading-relaxed text-white/85">{t("storyBody")}</p>
          <Link
            href="/stories/budaya-yang-hidup"
            className="focus-ring mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-deep-purple)] hover:bg-white/90"
          >
            {tCommon("readMore")} →
          </Link>
        </div>
        <PlaceholderImage label={t("storyHeading")} category="default" className="w-full" />
      </div>
    </section>
  );
}
