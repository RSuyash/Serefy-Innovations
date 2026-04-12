import { ArrowRight, CheckCircle2, Download } from "lucide-react";

import { useLeadWizard } from "../components/LeadWizardProvider";
import { buildWhatsAppUrl, siteConfig } from "../lib/site-config";

const products = [
  {
    name: "SERE 120",
    image: siteConfig.image.sere120,
    capacity: "120 eggs",
    pricing: "Request quote",
    hatchRate: "Approx. 85%",
    fit: "Lean setups and smaller batch planning.",
  },
  {
    name: "SERE 240",
    image: siteConfig.image.sere240,
    capacity: "240 eggs",
    pricing: "Request quote",
    hatchRate: "Approx. 88%",
    fit: "Balanced growth-stage farm operations.",
  },
  {
    name: "SERE 500",
    image: siteConfig.image.sere500,
    capacity: "500 eggs",
    pricing: "Request quote",
    hatchRate: "Approx. 92%",
    fit: "Higher-capacity planning and commercial expansion.",
  },
];

export default function Metrics() {
  const { openLeadWizard } = useLeadWizard();

  return (
    <div className="px-6 pb-24 pt-16 md:pb-0">
      <header className="mx-auto mb-16 max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-700">Models and ROI</p>
            <h1 className="mt-4 font-headline text-5xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
              Compare the SERE range and plan the right next move.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              These reference bands help farmers and institutions move from interest to a more
              practical decision. For pricing, capacity guidance, or a tailored recommendation, use
              the guided enquiry and the team will respond directly.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => openLeadWizard()}
              className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-amber-700"
            >
              Request a demo
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={buildWhatsAppUrl("Hi, I want the SERE brochure and model guidance.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-slate-900 transition-colors hover:border-amber-300 hover:text-amber-700"
            >
              <Download className="h-4 w-4" />
              Ask for brochure
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl overflow-hidden rounded-[2.6rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0">
            <thead className="bg-surface-container-low">
              <tr className="text-left">
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">Model</th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">Capacity</th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">Reference pricing</th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">Reference hatch rate</th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">Best fit</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.name}>
                  <td className={`px-6 py-6 align-top ${index < products.length - 1 ? "border-b border-slate-100" : ""}`}>
                    <div className="flex min-w-[260px] gap-4">
                      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-20 w-24 object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-slate-950">{product.name}</p>
                        <p className="mt-1 text-sm text-slate-500">Smart hatching unit</p>
                      </div>
                    </div>
                  </td>
                  <td className={`px-6 py-6 align-top text-sm font-semibold text-slate-900 ${index < products.length - 1 ? "border-b border-slate-100" : ""}`}>{product.capacity}</td>
                  <td className={`px-6 py-6 align-top text-sm text-slate-600 ${index < products.length - 1 ? "border-b border-slate-100" : ""}`}>{product.pricing}</td>
                  <td className={`px-6 py-6 align-top ${index < products.length - 1 ? "border-b border-slate-100" : ""}`}>
                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
                      <CheckCircle2 className="h-4 w-4" />
                      {product.hatchRate}
                    </div>
                  </td>
                  <td className={`px-6 py-6 align-top text-sm leading-7 text-slate-600 ${index < products.length - 1 ? "border-b border-slate-100" : ""}`}>{product.fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2.3rem] bg-slate-950 p-8 text-white shadow-xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-300">Efficiency delta</p>
          <h2 className="mt-4 text-3xl font-bold">Why automation changes the outcome</h2>
          <div className="mt-8 space-y-6">
            <div>
              <div className="mb-2 flex items-end justify-between">
                <span className="text-sm text-slate-300">SERE technology</span>
                <span className="text-3xl font-black">90%</span>
              </div>
              <div className="h-3 w-full rounded-full bg-white/10">
                <div className="h-3 w-[90%] rounded-full bg-amber-400" />
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-end justify-between">
                <span className="text-sm text-slate-300">Traditional method</span>
                <span className="text-3xl font-black text-white/60">60%</span>
              </div>
              <div className="h-3 w-full rounded-full bg-white/10">
                <div className="h-3 w-[60%] rounded-full bg-white/35" />
              </div>
            </div>
          </div>
          <p className="mt-8 border-l-2 border-amber-300 pl-4 text-sm leading-7 text-slate-300">
            The goal here is not just better numbers. It is better predictability, less avoidable
            waste, and a stronger operating rhythm for the farm.
          </p>
        </div>

        <div className="rounded-[2.3rem] border border-slate-200 bg-surface-container-low p-8 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-700">Commercial view</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-950">What the conversation usually needs next</h2>
          <div className="mt-8 space-y-5">
            {[
              "Which model best matches the current farm size and hatch cycle?",
              "How should the farm compare recurring chick purchase versus a structured hatching setup?",
              "What does onboarding, support, and the next operational step look like?",
            ].map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-amber-700" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => openLeadWizard()}
              className="rounded-full bg-slate-950 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-amber-700"
            >
              Get model guidance
            </button>
            <a
              href={buildWhatsAppUrl("Hi, I want help choosing the right SERE model.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-slate-900 transition-colors hover:border-amber-300 hover:text-amber-700"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
