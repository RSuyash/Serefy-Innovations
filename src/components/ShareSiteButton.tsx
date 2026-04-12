import { Share2 } from "lucide-react";

type ShareSiteButtonProps = {
  className?: string;
  label?: string;
};

export default function ShareSiteButton({
  className = "inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-amber-300 hover:text-amber-700",
  label = "Share site",
}: ShareSiteButtonProps) {
  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareData = {
      title: "SERE Smart Hatching",
      text: "Take a look at SERE Smart Hatching.",
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // fall through to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      window.alert("Website link copied.");
    } catch {
      window.prompt("Copy this website link", shareUrl);
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className={className}
    >
      <Share2 className="h-4 w-4" />
      {label}
    </button>
  );
}
