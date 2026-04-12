import { absoluteSiteUrl, siteConfig } from "./site-config";

export type RouteSeo = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  ogType?: "website" | "article";
};

const defaultKeywords = [
  "SERE Smart Hatching",
  "Serefy Innovations",
  "egg incubator india",
  "smart incubator for poultry farm",
  "automated egg incubator pune",
  "poultry hatching technology",
];

const routeMap: Record<string, RouteSeo> = {
  "/": {
    title: "SERE Smart Hatching | Automated Egg Incubators for Precision Poultry Farming",
    description:
      "Explore automated egg incubators built for small and growth-stage poultry farms. SERE Smart Hatching helps farmers improve hatch consistency, reduce manual effort, and scale with precision.",
    path: "/",
    keywords: [...defaultKeywords, "poultry incubation automation", "smart hatchery equipment"],
  },
  "/technology": {
    title: "Technology | SERE Smart Hatching",
    description:
      "See how SERE combines automation, incubation control, and rural-ready product design to make precision hatching practical for modern poultry farmers.",
    path: "/technology",
    keywords: [...defaultKeywords, "incubation technology", "poultry automation"],
  },
  "/metrics": {
    title: "Models and ROI | SERE Smart Hatching",
    description:
      "Compare SERE 120, SERE 240, and SERE 500 models, and understand how automated incubation improves hatch outcomes and planning for poultry businesses.",
    path: "/metrics",
    keywords: [...defaultKeywords, "incubator pricing", "poultry ROI", "SERE 120", "SERE 240", "SERE 500"],
  },
  "/library": {
    title: "Resources | SERE Smart Hatching",
    description:
      "Request setup guides, founder conversations, and product resources for SERE Smart Hatching. Everything is organized to help buyers move from interest to decision quickly.",
    path: "/library",
    keywords: [...defaultKeywords, "incubator brochure", "poultry farming resources"],
  },
  "/contact": {
    title: "Contact | SERE Smart Hatching",
    description:
      "Talk to the SERE Smart Hatching team about demos, pricing, partnerships, and support for automated poultry incubation systems.",
    path: "/contact",
    keywords: [...defaultKeywords, "contact SERE Smart Hatching", "incubator demo request"],
  },
};

export function getRouteSeo(pathname: string): RouteSeo {
  return routeMap[pathname] ?? routeMap["/"];
}

export function buildStructuredData(pathname: string) {
  const page = getRouteSeo(pathname);

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.projectName,
    alternateName: siteConfig.brandName,
    url: siteConfig.websiteUrl,
    logo: absoluteSiteUrl("/favicon.png"),
    email: siteConfig.email,
    telephone: siteConfig.whatsappDisplay,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.projectName,
    url: siteConfig.websiteUrl,
    description: page.description,
  };

  const productCollection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SERE incubator range",
    url: absoluteSiteUrl("/metrics"),
    hasPart: siteConfig.productLine.map((item) => ({
      "@type": "Product",
      name: item,
      brand: siteConfig.projectName,
      description: "Automated incubation system for precision poultry farming.",
    })),
  };

  return pathname === "/" ? [organization, website, productCollection] : [organization, website];
}
