export const SERE_PUBLIC_LEAD_KEY = "lead_SERE_innovations";

export type SERELeadInput = {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  city?: string;
  role?: string;
  capacity?: string;
  partnershipType?: string;
  goal?: string;
  timeline?: string;
  message?: string;
  sourceCta: string;
};

export type NayaLeadPayload = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  message: string;
  consent: true;
};

const labels: Record<string, string> = {
  farmer: "Farmer",
  hobbyist: "Hobbyist",
  investor: "Investor / Institution",
  strategic: "Strategic Investment",
  reseller: "Distribution / Reseller",
  institutional: "Institutional Buyer",
  "hatch-rate": "Improve hatch rate",
  scale: "Scale up operations",
  research: "Research / Specialty birds",
  "first-time": "First time hatching",
  immediate: "Immediate (0-3 months)",
  short: "Short-term (3-6 months)",
  exploring: "Just exploring options for now",
};

function clean(value: string | undefined | null) {
  return (value ?? "").trim();
}

function label(value: string | undefined | null) {
  const normalized = clean(value);
  return labels[normalized] ?? normalized;
}

function buildFullName(input: Pick<SERELeadInput, "firstName" | "lastName" | "email">) {
  const name = `${clean(input.firstName)} ${clean(input.lastName)}`.replace(/\s+/g, " ").trim();
  if (name) {
    return name;
  }

  return clean(input.email).split("@")[0] || "SERE Enquiry";
}

export function buildNayaLeadPayload(input: SERELeadInput): NayaLeadPayload {
  const messageParts = [
    `Source CTA: ${input.sourceCta}`,
    input.role ? `Role: ${label(input.role)}` : null,
    input.capacity ? `Capacity: ${input.capacity}` : null,
    input.partnershipType ? `Partnership: ${label(input.partnershipType)}` : null,
    input.goal ? `Goal: ${label(input.goal)}` : null,
    input.timeline ? `Timeline: ${label(input.timeline)}` : null,
    input.city ? `City / location: ${clean(input.city)}` : null,
    input.message ? `Message: ${clean(input.message)}` : null,
  ].filter(Boolean);

  return {
    fullName: buildFullName(input),
    email: clean(input.email),
    phone: clean(input.phone),
    companyName: "SERE Enquiry",
    message: messageParts.join("\n"),
    consent: true,
  };
}

export async function submitSERELead(input: SERELeadInput) {
  const response = await fetch(`/api/landing/public/${SERE_PUBLIC_LEAD_KEY}/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(buildNayaLeadPayload(input)),
  });

  const responseBody = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(
      responseBody && typeof responseBody.error === "string"
        ? responseBody.error
        : "Lead capture is temporarily unavailable. Please try again or email SERE.connect@gmail.com.",
    );
  }

  return responseBody as { success: true; leadId?: string; syncStatus?: string };
}
