"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LanguageSwitcher() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-black/10 p-1" aria-label={t("language")}>
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          className={`focus-ring rounded-full px-3 py-1 text-sm font-medium uppercase transition-colors ${
            loc === locale ? "bg-[var(--color-deep-purple)] text-white" : "text-[var(--foreground)] hover:bg-black/5"
          }`}
          aria-current={loc === locale ? "true" : undefined}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
