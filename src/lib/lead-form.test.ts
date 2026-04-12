import assert from "node:assert/strict";
import test from "node:test";

import { buildInquiryLeadPayload } from "./lead-form";

test("buildInquiryLeadPayload maps the SERE enquiry into the Naya lead contract", () => {
  const payload = buildInquiryLeadPayload({
    values: {
      firstName: "Sweety",
      lastName: "Gaikwad",
      email: "sweety@example.com",
      phone: "+91 93735 77961",
      organization: "Gaikwad Poultry Farm",
      interest: "pricing-breakdown",
      capacity: "sere-240",
      message: "We need help choosing the right incubator for our next phase.",
      consent: true,
    },
    sourceHost: "serefy-innovations.preview.nayagrowth.com",
    sourcePage: "https://serefy-innovations.preview.nayagrowth.com/contact?utm_source=meta",
    sourceCta: "contact-form",
    utm: {
      utmSource: "meta",
      utmMedium: "paid-social",
      utmCampaign: "launch",
    },
  });

  assert.equal(payload.fullName, "Sweety Gaikwad");
  assert.equal(payload.companyName, "Gaikwad Poultry Farm");
  assert.deepEqual(payload.serviceInterest, ["pricing-breakdown", "sere-240"]);
  assert.equal(payload.budgetRange, "SERE 240");
  assert.equal(payload.timeline, "To be discussed with the SERE team");
  assert.match(payload.problemSummary, /Pricing Breakdown/);
  assert.match(payload.problemSummary, /SERE 240/);
  assert.equal(payload.utmCampaign, "launch");
});
