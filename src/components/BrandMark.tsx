type BrandMarkProps = {
  compact?: boolean;
  tone?: "light" | "dark";
};

export default function BrandMark({ compact = false, tone = "dark" }: BrandMarkProps) {
  const textTone = tone === "light" ? "text-white" : "text-slate-950";
  const accentTone = tone === "light" ? "text-slate-300" : "text-slate-500";
  const iconSize = compact ? "h-11 w-11" : "h-14 w-14";

  return (
    <div className="flex items-center gap-3">
      <img
        src="/media/brand-mark.webp"
        alt="SERE Smart Hatching mark"
        className={`${iconSize} rounded-2xl object-contain bg-white/90 p-1 shadow-sm`}
      />
      <div className="min-w-0">
        <p className={`text-[10px] font-bold uppercase tracking-[0.28em] ${accentTone}`}>
          Serefy Innovations
        </p>
        <p className={`font-headline text-lg font-extrabold tracking-tight ${textTone}`}>
          SERE Smart Hatching
        </p>
      </div>
    </div>
  );
}
