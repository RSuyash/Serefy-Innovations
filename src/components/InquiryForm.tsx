import { ChangeEvent, FormEvent, useMemo, useState } from "react";

import {
  buildInquiryLeadPayload,
  getLeadSourceHost,
  type InquiryFormValues,
} from "../lib/lead-form";
import { buildWhatsAppUrl, siteConfig } from "../lib/site-config";

type InquiryFormProps = {
  className?: string;
  sourceCta?: string;
};

type SubmissionStatus = {
  tone: "idle" | "success" | "error";
  message: string;
};

const initialValues: InquiryFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organization: "",
  interest: "purchase-demo",
  capacity: "need-guidance",
  message: "",
  consent: false,
};

const interestOptions = [
  { value: "purchase-demo", label: "Purchase a SERE unit" },
  { value: "pricing-breakdown", label: "Get pricing and model help" },
  { value: "dealer-partnership", label: "Dealer / partnership enquiry" },
  { value: "support-existing-unit", label: "Support for an existing unit" },
  { value: "institutional-enquiry", label: "Institutional or farm-scale enquiry" },
];

const capacityOptions = [
  { value: "need-guidance", label: "Help me choose the right model" },
  { value: "sere-120", label: "SERE 120" },
  { value: "sere-240", label: "SERE 240" },
  { value: "sere-500", label: "SERE 500" },
];

export default function InquiryForm({
  className = "",
  sourceCta = "contact-form",
}: InquiryFormProps) {
  const [values, setValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmissionStatus>({ tone: "idle", message: "" });

  const utmValues = useMemo(() => {
    if (typeof window === "undefined") {
      return {};
    }

    const params = new URLSearchParams(window.location.search);
    return {
      utmSource: params.get("utm_source") ?? undefined,
      utmMedium: params.get("utm_medium") ?? undefined,
      utmCampaign: params.get("utm_campaign") ?? undefined,
    };
  }, []);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const target = event.currentTarget;
    const nextValue =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;

    setValues((current) => ({
      ...current,
      [target.name]: nextValue,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!values.consent) {
      setStatus({
        tone: "error",
        message: "Please confirm consent so the SERE team can respond to your enquiry.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ tone: "idle", message: "" });

    const payload = buildInquiryLeadPayload({
      values,
      sourceHost: getLeadSourceHost(),
      sourcePage:
        typeof window === "undefined" ? siteConfig.websiteUrl : window.location.href,
      sourceCta,
      utm: utmValues,
    });

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseBody = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(
          responseBody && typeof responseBody.error === "string"
            ? responseBody.error
            : "Lead capture is temporarily unavailable. Please message on WhatsApp right away.",
        );
      }

      setValues(initialValues);
      setStatus({
        tone: "success",
        message:
          "Your enquiry is in. The SERE team will reach out shortly with the right next step.",
      });
    } catch (error) {
      setStatus({
        tone: "error",
        message:
          error instanceof Error && error.message
            ? error.message
            : "Lead capture is temporarily unavailable. Please message on WhatsApp right away.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
            First name
          </span>
          <input
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            minLength={2}
            value={values.firstName}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-amber-400"
            placeholder="Sweety"
          />
        </label>

        <label className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
            Last name
          </span>
          <input
            name="lastName"
            type="text"
            autoComplete="family-name"
            value={values.lastName}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-amber-400"
            placeholder="Gaikwad"
          />
        </label>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
            Email address
          </span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-amber-400"
            placeholder={siteConfig.email}
          />
        </label>

        <label className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
            Phone / WhatsApp
          </span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={values.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-amber-400"
            placeholder={siteConfig.whatsappDisplay}
          />
        </label>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
            Farm / organization
          </span>
          <input
            name="organization"
            type="text"
            value={values.organization}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-amber-400"
            placeholder="Name of your farm or business"
          />
        </label>

        <label className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
            Enquiry type
          </span>
          <select
            name="interest"
            value={values.interest}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-amber-400"
          >
            {interestOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-6 block space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
          Preferred model
        </span>
        <select
          name="capacity"
          value={values.capacity}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-amber-400"
        >
          {capacityOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-6 block space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
          What should the team know?
        </span>
        <textarea
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-amber-400"
          placeholder="Tell us about your current hatch setup, scale, or what you want to solve."
        />
      </label>

      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-slate-600">
        <input
          type="checkbox"
          name="consent"
          checked={values.consent}
          onChange={handleChange}
          className="mt-1 h-4 w-4 rounded border border-slate-200 accent-amber-500"
        />
        <span>I agree to be contacted by the SERE Smart Hatching team about this enquiry.</span>
      </label>

      <input type="text" name="website_url_extra" className="hidden" tabIndex={-1} autoComplete="off" />

      {status.message ? (
        <p
          role="status"
          aria-live="polite"
          className={`mt-6 rounded-2xl px-5 py-4 text-sm leading-7 ${
            status.tone === "success"
              ? "border border-emerald-300 bg-emerald-50 text-emerald-700"
              : "border border-rose-300 bg-rose-50 text-rose-700"
          }`}
        >
          {status.message}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? "Sending..." : "Send enquiry"}
        </button>

        <a
          href={buildWhatsAppUrl("Hi, I want to know more about SERE Smart Hatching.")}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-xl border border-slate-200 px-6 py-4 text-center text-sm font-semibold text-slate-800 transition-colors hover:border-amber-300 hover:text-amber-700 sm:w-auto"
        >
          Message on WhatsApp
        </a>
      </div>
    </form>
  );
}
