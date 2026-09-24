import { WhatsAppIcon } from "./icons";

interface WhatsAppButtonProps {
  href: string;
  label: string;
  variant?: "solid" | "outline";
  className?: string;
}

export function WhatsAppButton({ href, label, variant = "solid", className = "" }: WhatsAppButtonProps) {
  const base =
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors";
  const styles =
    variant === "solid"
      ? "bg-[var(--color-jade-green)] text-white hover:bg-[var(--color-jade-green)]/90"
      : "border border-[var(--color-jade-green)] text-[var(--color-jade-green)] hover:bg-[var(--color-jade-green)]/10";

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      <WhatsAppIcon className="h-4 w-4" />
      {label}
    </a>
  );
}
