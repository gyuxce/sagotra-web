export const siteConfig = {
  name: "SAGOTRA",
  tagline: "Indonesia Tourism Ecosystem",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sagotra.com",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6281234567890",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "arsasagotra@gmail.com",
  instagramHandle: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE ?? "arasasagotra",
};

export const navItems = [
  { href: "/", key: "home" },
  { href: "/experiences", key: "experiences" },
  { href: "/destinations", key: "destinations" },
  { href: "/stories", key: "stories" },
  { href: "/about", key: "about" },
  { href: "/plan-your-visit", key: "planYourVisit" },
] as const;

export const categoryColors: Record<string, string> = {
  heritage: "var(--color-deep-purple)",
  arts: "var(--color-warm-red)",
  culinary: "var(--color-saffron)",
  community: "var(--color-jade-green)",
};
