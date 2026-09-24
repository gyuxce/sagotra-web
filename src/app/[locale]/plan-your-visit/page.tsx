import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { InstagramIcon, MailIcon } from "@/components/shared/icons";
import { InquiryForm } from "@/components/plan-your-visit/InquiryForm";
import { getExperiences, getFaqs } from "@/lib/content";
import { buildGeneralInquiryMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/constants";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("PlanYourVisit");
  return { title: t("pageTitle"), description: t("pageSubtitle") };
}

export default async function PlanYourVisitPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const [t, locale, experiences, faqs, resolvedSearchParams] = await Promise.all([
    getTranslations("PlanYourVisit"),
    getLocale(),
    getExperiences(),
    getFaqs(),
    searchParams,
  ]);

  const loc = locale as Locale;
  const whatsappHref = buildWhatsAppLink(buildGeneralInquiryMessage(loc));
  const experienceParam = resolvedSearchParams.experience;
  const defaultExperienceSlug = Array.isArray(experienceParam) ? experienceParam[0] : experienceParam;

  const experienceOptions = experiences.map((experience) => ({
    slug: experience.slug,
    title: experience.title[loc],
  }));

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={t("pageEyebrow")} title={t("pageTitle")} subtitle={t("pageSubtitle")} align="center" className="mx-auto text-center" />

      <div className="mt-12 flex flex-col gap-8 rounded-2xl bg-[var(--color-deep-purple)] p-8 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">{t("whatsappHeading")}</h2>
          <p className="mt-1 max-w-md text-sm leading-relaxed text-white/85">{t("whatsappBody")}</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
            <a
              href={`mailto:${siteConfig.email}`}
              className="focus-ring inline-flex items-center gap-2 hover:text-white hover:underline"
            >
              <MailIcon className="h-4 w-4 shrink-0" />
              {siteConfig.email}
            </a>
            <a
              href={`https://instagram.com/${siteConfig.instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 hover:text-white hover:underline"
            >
              <InstagramIcon className="h-4 w-4 shrink-0" />
              @{siteConfig.instagramHandle}
            </a>
          </div>
        </div>
        <WhatsAppButton href={whatsappHref} label={t("whatsappCta")} className="w-fit shrink-0" />
      </div>

      <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-black/5 p-8">
        <h2 className="text-xl font-semibold text-[var(--color-deep-purple)]">{t("formHeading")}</h2>
        <p className="mt-1 text-sm text-[var(--foreground)]/70">{t("formSubheading")}</p>
        <div className="mt-6">
          <InquiryForm experiences={experienceOptions} defaultExperienceSlug={defaultExperienceSlug} />
        </div>
      </div>

      {faqs.length > 0 ? (
        <section className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-deep-purple)]">{t("faqHeading")}</h2>
          <dl className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question[loc]} className="rounded-xl border border-black/5 p-5">
                <dt className="font-semibold text-[var(--color-deep-purple)]">{faq.question[loc]}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/80">{faq.answer[loc]}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}
    </div>
  );
}
