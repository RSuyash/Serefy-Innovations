export const siteConfig = {
  projectName: "SERE Smart Hatching",
  brandName: "Serefy Innovations",
  leadCompanyName: "SERE Smart Hatching Enquiry",
  websiteUrl: "https://serefy-innovations.preview.nayagrowth.com",
  email: "contact@sereinnovations.com",
  ownerEmail: "sweetygaikwad62@gmail.com",
  whatsappNumber: "919373577961",
  whatsappDisplay: "+91 93735 77961",
  location: "AIC Mahindra, Pune, Maharashtra, India",
  partnerLabel: "AIC Mahindra supported",
  heroNote: "DST NIDHI recognized incubation innovation",
  productLine: ["SERE 120", "SERE 240", "SERE 500"],
  socialProof: {
    hatchRate: "85-92%",
    audience: "Small and growth-stage poultry farms",
    position: "Automated hatch planning for self-reliant farming",
  },
  image: {
    brandMark: "/media/brand-mark.webp",
    brandLogo: "/media/brand-logo.webp",
    hero: "/media/hero-incubator.webp",
    technology: "/media/technology-incubator.webp",
    founderVidhya: "/media/founder-vidhya.webp",
    founderAditya: "/media/founder-aditya.webp",
    sere120: "/media/sere-120.webp",
    sere240: "/media/sere-240.webp",
    sere500: "/media/sere-500.webp",
    aicMahindra: "/media/aic-mahindra.webp",
    shareCard: "/media/og-cover.jpg",
  },
} as const;

export function buildWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message?.trim()) {
    return base;
  }

  return `${base}?text=${encodeURIComponent(message.trim())}`;
}

export function absoluteSiteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.websiteUrl}${normalizedPath}`;
}
