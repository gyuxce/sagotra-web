import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { navItems, siteConfig } from "@/lib/constants";
import { buildGeneralInquiryMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import { InstagramIcon, MailIcon, WhatsAppIcon } from "@/components/shared/icons";

export async function Footer() {
  const t = await getTranslations();
  const locale = await getLocale();
  const whatsappHref = buildWhatsAppLink(buildGeneralInquiryMessage(locale));

  return (
    <footer className="mt-24 border-t border-black/5 bg-[var(--color-cream)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="text-xl font-bold tracking-tight text-[var(--color-deep-purple)]">{siteConfig.name}</p>
          <p className="mt-1 text-sm font-medium text-[var(--color-jade-green)]">{siteConfig.tagline}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--foreground)]/80">
            {t("Footer.description")}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--foreground)]/60">
            {t("Footer.explore")}
          </h2>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="focus-ring text-sm text-[var(--foreground)]/80 hover:text-[var(--color-deep-purple)]">
                  {t(`Nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--foreground)]/60">
            {t("Footer.getInTouch")}
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 font-medium text-[var(--color-jade-green)] hover:underline"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                {t("Footer.whatsapp")}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="focus-ring inline-flex items-center gap-2 text-[var(--foreground)]/80 hover:text-[var(--color-deep-purple)]"
              >
                <MailIcon className="h-4 w-4 shrink-0" />
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${siteConfig.instagramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 text-[var(--foreground)]/80 hover:text-[var(--color-deep-purple)]"
              >
                <InstagramIcon className="h-4 w-4 shrink-0" />
                @{siteConfig.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/5 px-4 py-6 text-center text-xs text-[var(--foreground)]/60 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {siteConfig.name}. {t("Footer.rights")}
      </div>
    </footer>
  );
}
