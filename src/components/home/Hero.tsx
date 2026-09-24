import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { buildGeneralInquiryMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import type { Locale } from "@/i18n/routing";

export function Hero() {
  const t = useTranslations("Home");
  const locale = useLocale() as Locale;
  const whatsappHref = buildWhatsAppLink(buildGeneralInquiryMessage(locale));

  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20 lg:px-8">
      <div className="flex flex-col gap-5">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-saffron)]">
          {t("heroEyebrow")}
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-[var(--color-deep-purple)] sm:text-5xl">
          {t("heroTitle")}
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-[var(--foreground)]/80 sm:text-lg">
          {t("heroSubtitle")}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/experiences"
            className="focus-ring inline-flex items-center justify-center rounded-full bg-[var(--color-deep-purple)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-deep-purple-dark)]"
          >
            {t("heroCtaPrimary")}
          </Link>
          <WhatsAppButton href={whatsappHref} label={t("heroCtaSecondary")} variant="outline" />
        </div>
      </div>

      <PlaceholderImage label="SAGOTRA — Kadipaten Yogyakarta" category="default" aspect="square" className="w-full" />
    </section>
  );
}
