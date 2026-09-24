import { useTranslations } from "next-intl";
import { formatPriceIDR } from "@/lib/format";
import type { Experience } from "@/lib/content/types";

export function PriceTag({ experience, className = "" }: { experience: Experience; className?: string }) {
  const t = useTranslations("Common");

  if (experience.priceOnRequest || !experience.retailPrice) {
    return <span className={`text-sm text-[var(--foreground)]/60 ${className}`}>{t("priceOnRequest")}</span>;
  }

  const unitLabel = experience.priceUnit === "per-group" ? t("perGroup") : t("perPerson");

  return (
    <span className={`text-sm font-semibold text-[var(--color-deep-purple)] ${className}`}>
      {formatPriceIDR(experience.retailPrice)}
      <span className="font-normal text-[var(--foreground)]/60">{unitLabel}</span>
    </span>
  );
}
