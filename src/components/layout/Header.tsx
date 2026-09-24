"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { navItems } from "@/lib/constants";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-2 text-xl font-bold tracking-tight text-[var(--color-deep-purple)]">
          <Image src="/logo-mark.png" alt="" width={32} height={32} className="h-8 w-8" priority />
          SAGOTRA
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[var(--color-deep-purple)] text-white"
                    : "text-[var(--foreground)] hover:bg-[var(--color-deep-purple)]/10"
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="focus-ring inline-flex items-center justify-center rounded-full border border-black/10 p-2 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open ? (
        <nav className="border-t border-black/5 px-4 pb-4 lg:hidden" aria-label="Primary mobile">
          <ul className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring block rounded-lg px-3 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--color-deep-purple)]/10"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-3">
            <LanguageSwitcher />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
