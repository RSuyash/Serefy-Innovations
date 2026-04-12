import { motion } from "motion/react";
import { ArrowRight, Cpu, Leaf, Microscope, Settings2 } from "lucide-react";

import { useLeadWizard } from "../components/LeadWizardProvider";
import { buildWhatsAppUrl, siteConfig } from "../lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Technology() {
  const { openLeadWizard } = useLeadWizard();

  return (
    <div className="px-6 pb-24 pt-16 md:pb-0">
      <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-700">
            The illuminated laboratory
          </p>
          <h1 className="mt-4 font-headline text-5xl font-extrabold leading-[1.02] tracking-tight text-slate-950 md:text-7xl">
            Bridging rural farming realities with
            <span className="block text-amber-700">precision hatching technology.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            SERE is built around a simple idea: small and growth-stage poultry farms deserve better
            incubation outcomes without being forced into industrial complexity.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => openLeadWizard()}
              className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-amber-700"
            >
              Request a guided demo
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={buildWhatsAppUrl("Hi, I want to understand the SERE technology better.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-slate-900 transition-colors hover:border-amber-300 hover:text-amber-700"
            >
              Ask on WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2.6rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
            <img
              className="aspect-square w-full object-cover"
              alt="Close-up of SERE hatching technology"
              src={siteConfig.image.technology}
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="absolute -bottom-7 left-5 rounded-[1.8rem] border border-white/70 bg-white/92 p-5 shadow-xl backdrop-blur md:left-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <Microscope className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-950">R&D-led product thinking</p>
                <p className="text-xs text-slate-500">Built for validated, repeatable incubation control.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl rounded-[3rem] bg-surface-container-low px-8 py-16 md:px-12">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: <Settings2 className="h-6 w-6" />,
              title: "Automation support",
              body: "Set up around easier operating control instead of recurring manual intervention.",
            },
            {
              icon: <Leaf className="h-6 w-6" />,
              title: "Rural-ready practicality",
              body: "Designed around the realities of small and growth-stage farm environments.",
            },
            {
              icon: <Cpu className="h-6 w-6" />,
              title: "Modular model path",
              body: "Move from SERE 120 to higher capacity without relearning the whole operating logic.",
            },
            {
              icon: <Microscope className="h-6 w-6" />,
              title: "Research-grounded positioning",
              body: "Built with a clearer biological and operational understanding than generic off-the-shelf equipment.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-white/60 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                {item.icon}
              </div>
              <h2 className="mt-5 text-2xl font-bold text-slate-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-24">
        <div className="mb-14 max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-700">Founders</p>
          <h2 className="mt-4 font-headline text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            The people shaping the system.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              name: "Vidhya Gaikwad",
              role: "Founder & CEO",
              image: siteConfig.image.founderVidhya,
              body: "Leading SERE’s biological research direction and the wider mission to make structured incubation more accessible for poultry farms.",
            },
            {
              name: "Aditya Magar",
              role: "Co-Founder & CTO",
              image: siteConfig.image.founderAditya,
              body: "Driving systems thinking, product direction, and the technology layer behind SERE’s automation-led hatching experience.",
            },
          ].map((founder) => (
            <div
              key={founder.name}
              className="flex flex-col gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:flex-row"
            >
              <div className="overflow-hidden rounded-[1.8rem] bg-slate-100 md:w-[220px] md:shrink-0">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="aspect-[4/5] h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-amber-700">{founder.role}</p>
                <h3 className="mt-3 text-3xl font-bold text-slate-950">{founder.name}</h3>
                <p className="mt-5 text-sm leading-7 text-slate-600">{founder.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
