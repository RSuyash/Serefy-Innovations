import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import InquiryForm from "../components/InquiryForm";
import { buildWhatsAppUrl, siteConfig } from "../lib/site-config";

export default function Contact() {
  return (
    <div className="px-6 pb-24 pt-16 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-700">Contact</p>
          <h1 className="mt-4 font-headline text-5xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
            Let’s talk about the right hatching setup.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Whether you want a demo, model guidance, pricing clarity, or a partnership discussion,
            the team is ready to help you move from interest to a practical next step.
          </p>

          <div className="mt-12 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-950">Base</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{siteConfig.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-950">Email</h2>
                <a href={`mailto:${siteConfig.email}`} className="mt-2 block text-sm leading-7 text-slate-600 hover:text-slate-950">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-950">Phone / WhatsApp</h2>
                <a
                  href={buildWhatsAppUrl("Hi, I want to know more about SERE Smart Hatching.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-sm leading-7 text-slate-600 hover:text-slate-950"
                >
                  {siteConfig.whatsappDisplay}
                </a>
                <p className="mt-1 text-xs text-slate-400">Mon-Sat, working-hour follow-up</p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-slate-200 bg-surface-container-low p-6">
            <div className="flex items-center gap-3 text-amber-700">
              <MessageCircle className="h-5 w-5" />
              <p className="text-sm font-bold uppercase tracking-[0.18em]">Fastest path</p>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              If you already know your need, message on WhatsApp and mention whether you want a
              demo, model recommendation, pricing, or partnership details.
            </p>
            <a
              href={buildWhatsAppUrl("Hi, I want to know more about SERE Smart Hatching.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-amber-700"
            >
              Message the team
            </a>
          </div>
        </div>

        <div className="rounded-[2.4rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-10">
          <h2 className="font-headline text-3xl font-extrabold text-slate-950">Send an enquiry</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            This form is connected to the live Naya lead workflow, so your message gets captured and
            routed properly for follow-up.
          </p>
          <div className="mt-8">
            <InquiryForm sourceCta="contact-page-form" />
          </div>
        </div>
      </div>
    </div>
  );
}
