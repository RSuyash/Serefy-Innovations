import { Link, Outlet, useLocation } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import LanguageSelection from './LanguageSelection';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  const { t, language: selectedLang } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  // Open language modal on mount (refresh)
  useEffect(() => {
    setIsLangModalOpen(true);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = ['Technology', 'Metrics', 'Gallery'];

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-green-500/10 overflow-x-hidden">

      {/* Modern Minimalist Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-green-100">
        <div className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 w-full max-w-7xl mx-auto">
          <Link to="/" className="text-lg md:text-xl font-black text-black flex items-center gap-2 group shrink-0">
            <img src="/media/logo.png" alt="Serefy Innovations" className="h-8 md:h-10 w-auto object-contain" />
            <span className="font-headline tracking-tighter">{siteConfig.brand.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => {
              const path = `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;
              const translationKey = `nav.${item.toLowerCase()}`;
              return (
                <Link
                  key={item}
                  to={path}
                  className={`transition-all font-black uppercase tracking-[0.2em] text-[10px] relative py-1 ${isActive ? 'text-green-700' : 'text-black/60 hover:text-green-700'}`}
                >
                  {t(translationKey)}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Desktop Language Switcher */}
            <button
              onClick={() => setIsLangModalOpen(true)}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-green-200 hover:border-green-500/50 hover:bg-green-50 transition-all text-xs font-bold text-black/70"
            >
              <Globe size={14} className="text-green-600" />
              <span>{selectedLang}</span>
            </button>

            <Link to="/contact" className="hidden sm:block bg-black text-white px-5 md:px-7 py-2 md:py-2.5 rounded-full font-black text-[10px] md:text-xs hover:bg-green-700 hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-0.5 transition-all active:scale-95">
              {t('nav.getStarted')}
            </Link>

            {/* Mobile Language & Menu Toggle */}
            <div className="flex md:hidden items-center gap-1">
              <button
                onClick={() => setIsLangModalOpen(true)}
                className="p-2 text-black/60 hover:bg-green-50 rounded-xl transition-colors"
                aria-label="Change Language"
              >
                <Globe size={20} />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-black hover:bg-green-50 rounded-xl transition-colors"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-green-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navItems.map((item) => {
                  const path = `/${item.toLowerCase()}`;
                  const isActive = location.pathname === path;
                  const translationKey = `nav.${item.toLowerCase()}`;
                  return (
                    <Link
                      key={item}
                      to={path}
                      className={`transition-all font-black uppercase tracking-[0.2em] text-sm py-2 ${isActive ? 'text-green-700' : 'text-black/60'}`}
                    >
                      {t(translationKey)}
                    </Link>
                  );
                })}
                <Link
                  to="/contact"
                  className="bg-black text-white px-6 py-4 rounded-2xl font-black text-center text-xs mt-4 uppercase tracking-widest"
                >
                  {t('nav.getStarted')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>


      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${siteConfig.brand.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 md:bottom-10 right-6 md:right-8 z-[9999] w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all group overflow-hidden"
        aria-label="Contact on WhatsApp"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <svg className="w-6 h-6 md:w-7 md:h-7 fill-current relative z-10" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>


      {/* High-Contrast Professional Footer */}
      <footer className="bg-black text-white w-full pt-20 pb-10 mt-auto relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 px-8 max-w-7xl mx-auto relative z-10">
          <div className="md:col-span-5">
            <div className="text-3xl font-black text-white mb-6 flex items-center gap-3">
              <img src="/media/logo.png" alt="Serefy Innovations" className="h-14 w-auto object-contain invert brightness-200" />
              {siteConfig.brand.name}
            </div>
            <p className="text-white text-lg leading-relaxed max-w-md mb-8 font-black opacity-100">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              {['share', 'rss_feed'].map(icon => (
                <a key={icon} href="#" className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-green-600 hover:border-green-600 transition-all duration-300">
                  <span className="material-symbols-outlined text-xl">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h5 className="text-green-500 font-black uppercase text-xs tracking-[0.4em] mb-8">{t('footer.partners')}</h5>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-start group">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:border-green-500/30 transition-all duration-500">
                  <img src="/media/aic-mahindra.webp" alt="AIC Mahindra" className="h-16 md:h-20 w-auto object-contain" />
                </div>
                <span className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-4 ml-1">{t('footer.incubation')}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4">
            <h5 className="text-green-500 font-black uppercase text-xs tracking-[0.4em] mb-8">{t('footer.contact')}</h5>
            <div className="flex flex-col gap-4 text-white/80 text-sm font-medium">
              <p>{siteConfig.brand.address}</p>
              <p>{siteConfig.brand.email}</p>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 px-8 max-w-7xl mx-auto">
          <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} {siteConfig.brand.name}. {t('footer.rights')}
          </p>

          {/* Naya Growth & Developer Credit */}
          <div className="flex items-center gap-6">
            <motion.a
              href="https://nayagrowth.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center gap-3 group transition-all hover:bg-white/10"
            >
              <div className="w-8 h-8 bg-green-800 rounded-lg flex items-center justify-center font-black text-xs text-white shadow-lg">N</div>
              <div className="text-left">
                <p className="text-[8px] text-white/40 font-bold uppercase tracking-widest leading-none mb-1">{t('footer.partner')}</p>
                <p className="text-xs font-black text-white group-hover:text-green-400 transition-colors">Naya Growth</p>
              </div>
            </motion.a>

            <div className="h-8 w-px bg-white/10"></div>

            <a
              href="https://www.linkedin.com/in/bhavya-mishra-7a3b09324/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-green-500 transition-colors"
            >
              {t('footer.devBy')} <span className="text-white underline decoration-green-500/50 underline-offset-4">Bhavya</span>
            </a>
          </div>
        </div>
      </footer>


      <LanguageSelection isOpen={isLangModalOpen} onClose={() => setIsLangModalOpen(false)} />
    </div>
  );
}
