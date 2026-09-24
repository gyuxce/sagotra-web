import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getPartners } from "@/lib/content";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("About");
  return { title: t("pageTitle") };
}

export default async function AboutPage() {
  const [t, locale, partners] = await Promise.all([getTranslations("About"), getLocale(), getPartners()]);
  const loc = locale as Locale;

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <SectionHeading eyebrow={t("pageEyebrow")} title={t("pageTitle")} />

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[var(--color-deep-purple)]">{t("nameHeading")}</h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--foreground)]/80">{t("nameBody")}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[var(--color-deep-purple)]">{t("mandalaHeading")}</h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--foreground)]/80">{t("mandalaBody")}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[var(--color-deep-purple)]">{t("valuesHeading")}</h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--foreground)]/80">{t("valuesBody")}</p>
        </section>
      </div>

      <section className="mt-10">
        <div className="max-w-3xl">
          <h2 className="text-xl font-semibold text-[var(--color-deep-purple)]">{t("partnersHeading")}</h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--foreground)]/80">{t("partnersBody")}</p>
        </div>

        {partners.length > 0 ? (
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <li key={partner.name} className="rounded-xl border border-black/5 p-4">
                <p className="font-semibold text-[var(--color-deep-purple)]">{partner.name}</p>
                <p className="mt-1 text-sm text-[var(--foreground)]/70">{partner.role[loc]}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </section>
    </div>
  );
}
