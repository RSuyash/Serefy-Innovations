import assert from "node:assert/strict";
import test from "node:test";

import { buildNayaLeadPayload, SERE_PUBLIC_LEAD_KEY } from "./naya-lead";

test("builds the Naya public lead payload for wizard enquiries", () => {
  const payload = buildNayaLeadPayload({
    firstName: "Aditi",
    lastName: "Patil",
    email: "aditi@example.com",
    phone: "+91 98765 43210",
    city: "Nanded",
    role: "farmer",
    capacity: "200",
    goal: "hatch-rate",
    sourceCta: "hero_cta",
  });

  assert.equal(SERE_PUBLIC_LEAD_KEY, "lead_SERE_innovations");
  assert.equal(payload.fullName, "Aditi Patil");
  assert.equal(payload.email, "aditi@example.com");
  assert.equal(payload.phone, "+91 98765 43210");
  assert.equal(payload.companyName, "SERE Enquiry");
  assert.equal(payload.consent, true);
  assert.match(payload.message, /Role: Farmer/);
  assert.match(payload.message, /Goal: Improve hatch rate/);
});

test("falls back to the email local part when a name is missing", () => {
  const payload = buildNayaLeadPayload({
    firstName: "",
    email: "buyer@example.com",
    sourceCta: "bottom_form",
  });

  assert.equal(payload.fullName, "buyer");
});
