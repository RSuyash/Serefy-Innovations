import { ArrowRight, BookOpen, FileText, PlayCircle } from "lucide-react";

import { useLeadWizard } from "../components/LeadWizardProvider";
import { buildWhatsAppUrl } from "../lib/site-config";

export default function Library() {
  const { openLeadWizard } = useLeadWizard();

  return (
    <div className="px-6 pb-24 pt-16 md:pb-0">
      <header className="mx-auto mb-16 max-w-7xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-700">Resources</p>
        <h1 className="mt-4 font-headline text-5xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
          Everything you need to move from curiosity to a clearer decision.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Instead of dead downloads, this section is now designed to route you to the right next
          conversation. Ask for the brochure, a founder conversation, or a setup-oriented walkthrough.
        </p>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
        {[
          {
            title: "Product brochure",
            body: "Get the current SERE range overview, positioning, and model guidance notes.",
            icon: <FileText className="h-6 w-6" />,
            action: () => openLeadWizard(),
            cta: "Request brochure",
          },
          {
            title: "Founder conversation",
            body: "Connect with the team if you want to understand the product vision, fit, or partnership context.",
            icon: <BookOpen className="h-6 w-6" />,
            href: buildWhatsAppUrl("Hi, I want to connect with the SERE founders and understand the product better."),
            cta: "Open WhatsApp",
          },
          {
            title: "Demo and setup guidance",
            body: "Best for farms or institutions that want a clearer operational walkthrough before deciding.",
            icon: <PlayCircle className="h-6 w-6" />,
            action: () => openLeadWizard(),
            cta: "Request walkthrough",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              {item.icon}
            </div>
            <h2 className="mt-6 text-2xl font-bold text-slate-950">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">{item.body}</p>
            {"href" in item ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-amber-700 transition-colors hover:text-slate-950"
              >
                {item.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <button
                type="button"
                onClick={item.action}
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-amber-700 transition-colors hover:text-slate-950"
              >
                {item.cta}
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
