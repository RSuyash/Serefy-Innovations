export type InquiryFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  interest: string;
  capacity: string;
  message: string;
  consent: boolean;
};

type BuildLeadPayloadInput = {
  values: InquiryFormValues;
  sourceHost: string;
  sourcePage: string;
  sourceCta: string;
  utm: {
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
  };
};

export type InquiryLeadPayload = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  companyType: "other";
  websiteUrl: string;
  serviceInterest: string[];
  budgetRange: string;
  timeline: string;
  problemSummary: string;
  consent: true;
  sourcePage: string;
  sourceCta: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

const interestLabels: Record<string, string> = {
  "purchase-demo": "Purchase Demo",
  "pricing-breakdown": "Pricing Breakdown",
  "dealer-partnership": "Dealer or Partnership",
  "support-existing-unit": "Support for an Existing Unit",
  "institutional-enquiry": "Institutional Enquiry",
};

const capacityLabels: Record<string, string> = {
  "sere-120": "SERE 120",
  "sere-240": "SERE 240",
  "sere-500": "SERE 500",
  "need-guidance": "Need help choosing the right model",
};

function trimOrFallback(value: string, fallback: string) {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : fallback;
}

export function buildInquiryLeadPayload(input: BuildLeadPayloadInput): InquiryLeadPayload {
  const fullName = trimOrFallback(
    `${input.values.firstName} ${input.values.lastName}`.trim(),
    input.values.firstName.trim(),
  );
  const interestLabel = interestLabels[input.values.interest] ?? "General enquiry";
  const capacityLabel = capacityLabels[input.values.capacity] ?? "Capacity to be discussed";
  const cleanedMessage = trimOrFallback(
    input.values.message,
    "The visitor wants a callback to understand the right SERE setup.",
  );

  return {
    fullName,
    email: input.values.email.trim(),
    phone: input.values.phone.trim(),
    companyName: trimOrFallback(input.values.organization, "SERE Smart Hatching Enquiry"),
    companyType: "other",
    websiteUrl: "",
    serviceInterest: [input.values.interest || "purchase-demo", input.values.capacity || "need-guidance"],
    budgetRange: capacityLabel,
    timeline: "To be discussed with the SERE team",
    problemSummary: trimOrFallback(
      `Interest: ${interestLabel}. Preferred model: ${capacityLabel}. Message: ${cleanedMessage}. Submitted from ${input.sourceHost}.`,
      `Interest: ${interestLabel}. Preferred model: ${capacityLabel}. Submitted from ${input.sourceHost}.`,
    ),
    consent: true,
    sourcePage: input.sourcePage,
    sourceCta: input.sourceCta,
    utmSource: input.utm.utmSource,
    utmMedium: input.utm.utmMedium,
    utmCampaign: input.utm.utmCampaign,
  };
}

export function getLeadSourceHost() {
  if (typeof window === "undefined") {
    return "serefy-innovations.preview.nayagrowth.com";
  }

  const currentHost = window.location.hostname.trim();
  if (currentHost && currentHost !== "localhost" && currentHost !== "127.0.0.1") {
    return currentHost;
  }

  return "serefy-innovations.preview.nayagrowth.com";
}
