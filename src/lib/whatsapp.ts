import { siteConfig } from "./constants";

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export function buildExperienceInquiryMessage(experienceTitle: string, locale: string): string {
  return locale === "en"
    ? `Hi SAGOTRA, I'm interested in the "${experienceTitle}" experience. Could you share availability and pricing?`
    : `Halo SAGOTRA, saya tertarik dengan pengalaman "${experienceTitle}". Bisa dibantu info ketersediaan dan harganya?`;
}

export function buildGeneralInquiryMessage(locale: string): string {
  return locale === "en"
    ? "Hi SAGOTRA, I'd like to ask about planning a visit."
    : "Halo SAGOTRA, saya ingin bertanya seputar rencana kunjungan.";
}
