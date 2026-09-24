import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { ExperienceCategory } from "@/lib/content/types";

const pillars: { key: ExperienceCategory; messageKey: string }[] = [
  { key: "heritage", messageKey: "heritage" },
  { key: "arts", messageKey: "arts" },
  { key: "culinary", messageKey: "culinary" },
  { key: "community", messageKey: "community" },
];

export function PillarGrid() {
  const t = useTranslations("Home");
  const tPillars = useTranslations("Pillars");

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={t("pillarsEyebrow")}
        title={t("pillarsHeading")}
        subtitle={t("pillarsSubheading")}
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar) => (
          <Link
            key={pillar.key}
            href={{ pathname: "/experiences", query: { category: pillar.key } }}
            className="focus-ring group flex flex-col gap-3 rounded-2xl border border-black/5 p-6 transition-colors hover:border-[var(--color-deep-purple)]/30 hover:bg-[var(--color-cream)]"
          >
            <span
              aria-hidden="true"
              className="h-2 w-10 rounded-full"
              style={{
                background:
                  pillar.key === "heritage"
                    ? "var(--color-deep-purple)"
                    : pillar.key === "arts"
                      ? "var(--color-warm-red)"
                      : pillar.key === "culinary"
                        ? "var(--color-saffron)"
                        : "var(--color-jade-green)",
              }}
            />
            <h3 className="text-lg font-semibold text-[var(--color-deep-purple)]">
              {tPillars(`${pillar.messageKey}.title`)}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--foreground)]/70">
              {tPillars(`${pillar.messageKey}.description`)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
