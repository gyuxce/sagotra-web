import type { ExperienceCategory } from "@/lib/content/types";

const gradients: Record<string, string> = {
  heritage: "linear-gradient(135deg, var(--color-deep-purple), var(--color-deep-purple-dark))",
  arts: "linear-gradient(135deg, var(--color-warm-red), var(--color-deep-purple))",
  culinary: "linear-gradient(135deg, var(--color-saffron), var(--color-warm-red))",
  community: "linear-gradient(135deg, var(--color-jade-green), var(--color-deep-purple))",
  default: "linear-gradient(135deg, var(--color-deep-purple), var(--color-jade-green))",
};

export type ImageAspect = "video" | "square" | "portrait";

interface PlaceholderImageProps {
  label: string;
  category?: ExperienceCategory | "default";
  className?: string;
  aspect?: ImageAspect;
}

export const aspectClasses: Record<ImageAspect, string> = {
  video: "aspect-[16/10]",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

export function PlaceholderImage({ label, category = "default", className = "", aspect = "video" }: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-end overflow-hidden rounded-2xl ${aspectClasses[aspect]} ${className}`}
      style={{ background: gradients[category] ?? gradients.default }}
    >
      <span className="pointer-events-none absolute inset-0 bg-black/10" />
      <span className="relative z-10 p-4 text-sm font-medium text-white/90">{label}</span>
    </div>
  );
}
