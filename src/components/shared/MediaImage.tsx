import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import { PlaceholderImage, aspectClasses, type ImageAspect } from "./PlaceholderImage";
import type { ExperienceCategory, MediaImage as MediaImageValue } from "@/lib/content/types";
import type { Locale } from "@/i18n/routing";

interface MediaImageProps {
  image?: MediaImageValue;
  locale: Locale;
  fallbackLabel: string;
  category?: ExperienceCategory | "default";
  aspect?: ImageAspect;
  className?: string;
  sizes?: string;
}

export function MediaImage({
  image,
  locale,
  fallbackLabel,
  category = "default",
  aspect = "video",
  className = "",
  sizes = "(min-width: 1024px) 33vw, 100vw",
}: MediaImageProps) {
  const alt = image?.alt?.[locale] || fallbackLabel;

  if (image?.asset) {
    const url = urlForImage(image).width(1200).height(900).fit("crop").auto("format").url();

    return (
      <div className={`relative overflow-hidden rounded-2xl ${aspectClasses[aspect]} ${className}`}>
        <Image src={url} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }

  return <PlaceholderImage label={alt} category={category} aspect={aspect} className={className} />;
}
