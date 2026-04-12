import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { buildStructuredData, getRouteSeo } from "../lib/route-seo";
import { absoluteSiteUrl } from "../lib/site-config";

function ensureMeta(selector: string, attrs: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function ensureLink(selector: string, attrs: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

export default function SeoController() {
  const location = useLocation();

  useEffect(() => {
    const seo = getRouteSeo(location.pathname);
    const canonicalUrl = absoluteSiteUrl(seo.path);

    document.title = seo.title;

    ensureMeta('meta[name="description"]', {
      name: "description",
      content: seo.description,
    });
    ensureMeta('meta[name="keywords"]', {
      name: "keywords",
      content: seo.keywords.join(", "),
    });
    ensureMeta('meta[property="og:title"]', {
      property: "og:title",
      content: seo.title,
    });
    ensureMeta('meta[property="og:description"]', {
      property: "og:description",
      content: seo.description,
    });
    ensureMeta('meta[property="og:type"]', {
      property: "og:type",
      content: seo.ogType ?? "website",
    });
    ensureMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    ensureMeta('meta[property="og:image"]', {
      property: "og:image",
      content: absoluteSiteUrl("/media/og-cover.jpg"),
    });
    ensureMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    ensureMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: seo.title,
    });
    ensureMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: seo.description,
    });
    ensureMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: absoluteSiteUrl("/media/og-cover.jpg"),
    });
    ensureLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });

    let schemaScript = document.getElementById("serefy-route-jsonld") as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.type = "application/ld+json";
      schemaScript.id = "serefy-route-jsonld";
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(buildStructuredData(location.pathname));
  }, [location.pathname]);

  return null;
}
