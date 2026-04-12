import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, MessageCircle, X } from "lucide-react";

import BrandMark from "./BrandMark";
import SeoController from "./SeoController";
import ShareSiteButton from "./ShareSiteButton";
import { useLeadWizard } from "./LeadWizardProvider";
import { buildWhatsAppUrl, siteConfig } from "../lib/site-config";

export default function Layout() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openLeadWizard } = useLeadWizard();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/technology", label: "Technology" },
    { path: "/metrics", label: "Models & ROI" },
    { path: "/library", label: "Resources" },
    { path: "/contact", label: "Contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <SeoController />

      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <Link to="/" className="min-w-0 shrink" aria-label="Go to SERE Smart Hatching home">
            <BrandMark compact />
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`border-b-2 pb-1 text-[11px] font-bold uppercase tracking-[0.22em] transition-colors ${
                    active
                      ? "border-amber-600 text-amber-700"
                      : "border-transparent text-slate-500 hover:text-slate-950"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ShareSiteButton
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-800 transition-colors hover:border-amber-300 hover:text-amber-700"
              label="Share"
            />
            <a
              href={buildWhatsAppUrl("Hi, I want to know more about SERE Smart Hatching.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700 transition-colors hover:border-emerald-300"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <button
              type="button"
              onClick={() => openLeadWizard()}
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-amber-700"
            >
              Request demo
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => openLeadWizard()}
              className="inline-flex h-11 items-center rounded-full bg-slate-950 px-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white"
            >
              Start
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-slate-200 bg-white px-6 pb-6 md:hidden">
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] transition-colors ${
                    location.pathname === item.path
                      ? "bg-amber-50 text-amber-700"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-950"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-5 grid gap-3">
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  openLeadWizard();
                }}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
              >
                Open guided enquiry
              </button>
              <ShareSiteButton
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-900"
                label="Share website"
              />
              <a
                href={buildWhatsAppUrl("Hi, I want to know more about SERE Smart Hatching.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="mt-auto bg-slate-950 px-6 py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <BrandMark tone="light" />
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Automated hatching systems for small and growth-stage poultry farms, built to make
              precision incubation practical, affordable, and easier to operate.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-slate-400">
              <span className="rounded-full border border-white/10 px-3 py-2">
                {siteConfig.heroNote}
              </span>
              <span className="rounded-full border border-white/10 px-3 py-2">
                {siteConfig.partnerLabel}
              </span>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-300">
              Explore
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-300">
              Contact
            </p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              <p>{siteConfig.location}</p>
              <a href={`mailto:${siteConfig.email}`} className="block transition-colors hover:text-white">
                {siteConfig.email}
              </a>
              <a
                href={buildWhatsAppUrl("Hi, I want to know more about SERE Smart Hatching.")}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-white"
              >
                {siteConfig.whatsappDisplay}
              </a>
              <button
                type="button"
                onClick={() => openLeadWizard()}
                className="mt-2 inline-flex items-center rounded-full bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-950 transition-colors hover:bg-amber-100"
              >
                Start an enquiry
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-8 text-sm text-slate-400">
          © 2026 Serefy Innovations. Preview delivery powered by Naya Growth.
        </div>
      </footer>
    </div>
  );
}
