import {
  ChangeEvent,
  createContext,
  FormEvent,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Sparkles, X } from "lucide-react";

import {
  buildInquiryLeadPayload,
  getLeadSourceHost,
  type InquiryFormValues,
} from "../lib/lead-form";
import { buildWhatsAppUrl, siteConfig } from "../lib/site-config";

type LeadWizardContextValue = {
  openLeadWizard: () => void;
  closeLeadWizard: () => void;
};

const LeadWizardContext = createContext<LeadWizardContextValue | null>(null);

const needOptions = [
  "I want to buy a SERE incubator",
  "I need help choosing the right model",
  "I want to improve hatch consistency",
  "I run a farm or institution and need a serious setup",
  "I want dealership or partnership information",
];

const modelOptions = [
  { value: "need-guidance", label: "Help me choose the right model" },
  { value: "sere-120", label: "SERE 120" },
  { value: "sere-240", label: "SERE 240" },
  { value: "sere-500", label: "SERE 500" },
];

type WizardValues = {
  need: string;
  capacity: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consent: boolean;
};

const initialValues: WizardValues = {
  need: "",
  capacity: "need-guidance",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  consent: false,
};

type SubmissionStatus = {
  tone: "idle" | "success" | "error";
  message: string;
};

function LeadWizardModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmissionStatus>({ tone: "idle", message: "" });
  const formId = "sere-guided-enquiry-form";

  const utmValues = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return {
      utmSource: params.get("utm_source") ?? undefined,
      utmMedium: params.get("utm_medium") ?? undefined,
      utmCampaign: params.get("utm_campaign") ?? undefined,
    };
  }, []);

  const resetAndClose = () => {
    onClose();
    window.setTimeout(() => {
      setStep(0);
      setValues(initialValues);
      setStatus({ tone: "idle", message: "" });
      setIsSubmitting(false);
    }, 250);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const nextValue = target.type === "checkbox" ? target.checked : target.value;
    setValues((current) => ({ ...current, [target.name]: nextValue }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!values.consent) {
      setStatus({
        tone: "error",
        message: "Please confirm consent so the SERE team can reach you with the right next step.",
      });
      return;
    }

    const formValues: InquiryFormValues = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      organization: "",
      interest: "guided-wizard",
      capacity: values.capacity,
      message: `Primary need: ${values.need || "Not specified"}. Preferred model: ${
        modelOptions.find((option) => option.value === values.capacity)?.label ?? values.capacity
      }.`,
      consent: values.consent,
    };

    const payload = buildInquiryLeadPayload({
      values: formValues,
      sourceHost: getLeadSourceHost(),
      sourcePage: window.location.href,
      sourceCta: "guided-wizard",
      utm: utmValues,
    });

    setIsSubmitting(true);
    setStatus({ tone: "idle", message: "" });

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
            : "Lead capture is temporarily unavailable. Please try again or message on WhatsApp.",
        );
      }

      setStatus({
        tone: "success",
        message: "You're in. The SERE team will reach out shortly with the right model guidance.",
      });

      window.setTimeout(() => {
        resetAndClose();
      }, 1200);
    } catch (error) {
      setStatus({
        tone: "error",
        message:
          error instanceof Error && error.message
            ? error.message
            : "Lead capture is temporarily unavailable. Please try again or message on WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          onClick={resetAndClose}
        >
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl" />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-[640px] overflow-hidden rounded-[2rem] border border-white/40 bg-white shadow-[0_32px_80px_rgba(15,23,42,0.22)]"
          >
            <button
              type="button"
              onClick={resetAndClose}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 transition-colors hover:bg-white"
              aria-label="Close guided enquiry"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="border-b border-slate-100 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.22),transparent_52%),linear-gradient(180deg,#fffdf8,rgba(255,255,255,0.92))] px-7 pb-6 pt-7 md:px-10">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-700">
                    Guided enquiry
                  </p>
                  <h3 className="font-headline text-2xl font-extrabold text-slate-950">
                    Let's match you with the right SERE setup
                  </h3>
                </div>
              </div>

              <div className="flex gap-2">
                {[0, 1, 2].map((index) => (
                  <div key={index} className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                    <motion.div
                      className="h-full rounded-full bg-amber-500"
                      initial={false}
                      animate={{ width: step > index ? "100%" : step === index ? "55%" : "0%" }}
                      transition={{ duration: 0.28 }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="px-7 py-8 md:px-10 md:py-10">
              {step === 0 ? (
                <div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.26em] text-amber-700">
                    Step 1
                  </p>
                  <h4 className="font-headline text-3xl font-extrabold text-slate-950">
                    What do you need help with most?
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Choose the closest intent so the team can reply with something useful instead
                    of a generic brochure follow-up.
                  </p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {needOptions.map((need) => {
                      const selected = values.need === need;
                      return (
                        <button
                          key={need}
                          type="button"
                          onClick={() => setValues((current) => ({ ...current, need }))}
                          className={`rounded-[1.6rem] border px-5 py-4 text-left transition-all ${
                            selected
                              ? "border-amber-300 bg-amber-50 text-slate-950 shadow-sm"
                              : "border-slate-200 bg-white text-slate-600 hover:border-amber-200 hover:bg-amber-50/60"
                          }`}
                        >
                          <span className="text-sm font-semibold leading-6">{need}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : null}

              {step === 1 ? (
                <div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.26em] text-amber-700">
                    Step 2
                  </p>
                  <h4 className="font-headline text-3xl font-extrabold text-slate-950">
                    Which model range are you considering?
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    If you are not sure, choose the guidance option and the team will help you map
                    the right capacity to your farm.
                  </p>
                  <div className="mt-8 space-y-3">
                    {modelOptions.map((option) => {
                      const selected = values.capacity === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setValues((current) => ({ ...current, capacity: option.value }))}
                          className={`flex w-full items-center justify-between rounded-[1.6rem] border px-5 py-4 text-left transition-all ${
                            selected
                              ? "border-amber-300 bg-amber-50 text-slate-950 shadow-sm"
                              : "border-slate-200 bg-white text-slate-600 hover:border-amber-200 hover:bg-amber-50/60"
                          }`}
                        >
                          <span className="text-sm font-semibold">{option.label}</span>
                          {selected ? <CheckCircle2 className="h-5 w-5 text-amber-700" /> : null}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : null}

              {step === 2 ? (
                <form id={formId} onSubmit={handleSubmit} noValidate>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.26em] text-amber-700">
                    Step 3
                  </p>
                  <h4 className="font-headline text-3xl font-extrabold text-slate-950">
                    Where should the team reach you?
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    We’ll only use these details to respond to this enquiry.
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <input
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      required
                      placeholder="First name"
                      className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-5 py-4 text-sm outline-none transition-shadow focus:ring-2 focus:ring-amber-400"
                    />
                    <input
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-5 py-4 text-sm outline-none transition-shadow focus:ring-2 focus:ring-amber-400"
                    />
                    <input
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      required
                      placeholder={siteConfig.email}
                      className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-5 py-4 text-sm outline-none transition-shadow focus:ring-2 focus:ring-amber-400"
                    />
                    <input
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={handleChange}
                      required
                      placeholder={siteConfig.whatsappDisplay}
                      className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-5 py-4 text-sm outline-none transition-shadow focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

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

                  {status.message ? (
                    <p
                      role="status"
                      aria-live="polite"
                      className={`mt-5 rounded-[1.4rem] px-4 py-3 text-sm ${
                        status.tone === "success"
                          ? "border border-emerald-300 bg-emerald-50 text-emerald-700"
                          : "border border-rose-300 bg-rose-50 text-rose-700"
                      }`}
                    >
                      {status.message}
                    </p>
                  ) : null}
                </form>
              ) : null}

              <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={() => setStep((current) => current - 1)}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-amber-50"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                  ) : null}
                  <a
                    href={buildWhatsAppUrl("Hi, I want to know more about SERE Smart Hatching.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-amber-50"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp instead
                  </a>
                </div>

                {step < 2 ? (
                  <button
                    type="button"
                    onClick={() => setStep((current) => current + 1)}
                    disabled={step === 0 && !values.need}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    form={formId}
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Submit enquiry"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function LeadWizardProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LeadWizardContext.Provider
      value={{
        openLeadWizard: () => setIsOpen(true),
        closeLeadWizard: () => setIsOpen(false),
      }}
    >
      {children}
      <LeadWizardModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </LeadWizardContext.Provider>
  );
}

export function useLeadWizard() {
  const context = useContext(LeadWizardContext);

  if (!context) {
    throw new Error("useLeadWizard must be used within LeadWizardProvider");
  }

  return context;
}
