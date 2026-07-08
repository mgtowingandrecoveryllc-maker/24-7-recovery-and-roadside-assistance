import { Star } from "lucide-react";

const REVIEW_URL = "https://g.page/r/CU9GkiGmsFaAEAE/review";

interface GoogleReviewButtonProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function GoogleReviewButton({
  variant = "light",
  className,
}: GoogleReviewButtonProps) {
  const variantClass =
    variant === "dark"
      ? "bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm w-full"
      : "bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors";

  return (
    <a
      href={REVIEW_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 ${className ?? variantClass}`}
    >
      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 shrink-0" />
      Leave us a Google Review ⭐
    </a>
  );
}
