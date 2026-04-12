import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Egg, Landmark, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import InquiryForm from "../components/InquiryForm";
import ShareSiteButton from "../components/ShareSiteButton";
import { useLeadWizard } from "../components/LeadWizardProvider";
import { buildWhatsAppUrl, siteConfig } from "../lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Home() {
  const { openLeadWizard } = useLeadWizard();

  return (
    <div className="overflow-x-hidden pb-20 md:pb-0">
      <section className="relative overflow-hidden px-6 pb-24 pt-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(76,86,175,0.12),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp} className="mb-7 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-amber-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-amber-700">
                {siteConfig.heroNote}
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-slate-600 shadow-sm">
                {siteConfig.partnerLabel}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-headline text-5xl font-extrabold leading-[1.02] tracking-tight text-slate-950 md:text-7xl"
            >
              Smart hatching systems built for
              <span className="block text-amber-700">precision, consistency, and rural readiness.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl"
            >
              SERE Smart Hatching helps poultry farms move from manual uncertainty to guided,
              automated incubation with models designed for real on-ground operating conditions.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => openLeadWizard()}
                className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-amber-700"
              >
                Start guided enquiry
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-slate-900 transition-colors hover:border-amber-300 hover:text-amber-700"
              >
                Speak to the team
              </Link>
              <ShareSiteButton
                className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-slate-900 transition-colors hover:border-amber-300 hover:text-amber-700"
                label="Share website"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">Hatch rate</p>
                <p className="mt-3 text-2xl font-black text-slate-950">{siteConfig.socialProof.hatchRate}</p>
              </div>
              <div className="rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">Best for</p>
                <p className="mt-3 text-lg font-bold text-slate-950">{siteConfig.socialProof.audience}</p>
              </div>
              <div className="rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">Positioning</p>
                <p className="mt-3 text-lg font-bold text-slate-950">{siteConfig.socialProof.position}</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2.8rem] border border-white/80 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.14)]">
              <img
                src={siteConfig.image.hero}
                alt="SERE Smart Hatching incubator"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-white/10" />
            </div>

            <div className="absolute -bottom-7 left-4 right-4 rounded-[1.9rem] border border-white/80 bg-white/92 p-5 shadow-xl backdrop-blur md:left-8 md:right-auto md:max-w-[320px]">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-amber-700">
                Built for action
              </p>
              <div className="mt-4 space-y-3">
                {[
                  "Affordable automation for small and growth-stage poultry farms",
                  "Practical capacity guidance across SERE 120, 240, and 500",
                  "Cleaner lead capture for demos, pricing, and partnerships",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-700">The real gap</p>
            <h2 className="mt-4 font-headline text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              The cost is not just manual work. It is lost hatch value, uneven planning, and avoidable drift.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Egg className="h-6 w-6" />,
                title: "Low-value egg utilization",
                body: "Fertile eggs often get sold or underused because small farms do not have dependable incubation capacity in place.",
              },
              {
                icon: <ShieldCheck className="h-6 w-6" />,
                title: "Recurring dependency costs",
                body: "Buying chicks repeatedly drains margins and makes farm planning more reactive than controlled.",
              },
              {
                icon: <Landmark className="h-6 w-6" />,
                title: "Technology access gap",
                body: "Industrial incubators are expensive, bulky, and not designed around the realities of smaller Indian farm operations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(76,86,175,0.12)]">
            <img
              src={siteConfig.image.technology}
              alt="SERE technology and incubation system"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-700">The solution</p>
            <h2 className="mt-4 font-headline text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Smart hatching, simplified for real farm operations.
            </h2>
            <div className="mt-8 space-y-5">
              {[
                "Automated cycle support for temperature, turning, and consistency planning.",
                "Model range that gives farms a practical path from smaller capacity to larger output.",
                "Rural-ready positioning with a sharper, easier demo-to-enquiry journey for serious buyers.",
              ].map((item) => (
                <div key={item} className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <p className="text-base leading-8 text-slate-600">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/technology"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-amber-700"
              >
                See the technology
              </Link>
              <a
                href={buildWhatsAppUrl("Hi, I want to understand which SERE model would suit my farm.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-slate-900 transition-colors hover:border-amber-300 hover:text-amber-700"
              >
                WhatsApp the team
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-300">Model range</p>
              <h2 className="mt-4 font-headline text-4xl font-extrabold tracking-tight md:text-5xl">
                Choose the right scale without losing simplicity.
              </h2>
            </div>
            <Link
              to="/metrics"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-amber-300 transition-colors hover:text-white"
            >
              Open model comparison
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "SERE 120", image: siteConfig.image.sere120, note: "For leaner hatch planning and entry setups." },
              { title: "SERE 240", image: siteConfig.image.sere240, note: "For farms ready to scale with steadier rhythm." },
              { title: "SERE 500", image: siteConfig.image.sere500, note: "For higher-capacity operations and larger planning windows." },
            ].map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm">
                <img src={item.image} alt={item.title} className="aspect-[4/3] w-full object-cover" loading="lazy" decoding="async" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[3rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-700">Enquiry form</p>
            <h2 className="mt-4 font-headline text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Prefer writing first? Send a grounded enquiry here.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              This uses the same live Naya lead pipeline that powers our other production landing
              systems, so demos, pricing requests, and serious farm enquiries are captured cleanly
              and routed for follow-up.
            </p>
            <div className="mt-8">
              <InquiryForm sourceCta="home-inline-form" />
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-surface-container-low p-5">
            <div className="overflow-hidden rounded-[2rem] bg-white">
              <img
                src={siteConfig.image.aicMahindra}
                alt="AIC Mahindra partner identity"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="mt-5 rounded-[1.8rem] bg-white p-6 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-amber-700">Good for</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>Farmers comparing model fit and pricing</li>
                <li>Institutional and partnership enquiries</li>
                <li>People who want a clean written follow-up before a call</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
