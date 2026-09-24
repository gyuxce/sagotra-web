import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function HowItWorks() {
  const t = useTranslations("Home");

  const steps = [
    { title: t("howItWorksStep1Title"), body: t("howItWorksStep1Body") },
    { title: t("howItWorksStep2Title"), body: t("howItWorksStep2Body") },
    { title: t("howItWorksStep3Title"), body: t("howItWorksStep3Body") },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={t("howItWorksEyebrow")}
        title={t("howItWorksHeading")}
        subtitle={t("howItWorksBody")}
        align="center"
      />
      <ol className="mt-10 grid gap-6 sm:grid-cols-3">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="flex flex-col items-center gap-3 rounded-2xl border border-black/5 p-6 text-center"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-saffron)] text-sm font-bold text-[var(--color-deep-purple)]">
              {index + 1}
            </span>
            <h3 className="text-base font-semibold text-[var(--color-deep-purple)]">{step.title}</h3>
            <p className="text-sm leading-relaxed text-[var(--foreground)]/70">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
