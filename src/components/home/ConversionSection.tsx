import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function ConversionSection() {
  const t = useTranslations("Home");

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-5 rounded-3xl border border-[var(--color-deep-purple)]/15 bg-white p-10 text-center shadow-sm sm:p-14">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--color-deep-purple)] sm:text-3xl">
          {t("conversionHeading")}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-[var(--foreground)]/75">{t("conversionBody")}</p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            href="/experiences"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-[var(--color-deep-purple)] px-6 py-3 text-sm font-semibold text-[var(--color-deep-purple)] hover:bg-[var(--color-deep-purple)]/5"
          >
            {t("conversionCtaPrimary")}
          </Link>
          <Link
            href="/plan-your-visit"
            className="focus-ring inline-flex items-center justify-center rounded-full bg-[var(--color-deep-purple)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-deep-purple-dark)]"
          >
            {t("conversionCtaSecondary")}
          </Link>
        </div>
      </div>
    </section>
  );
}
