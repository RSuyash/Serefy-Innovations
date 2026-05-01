import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, X, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSelection() {
  const [isOpen, setIsOpen] = useState(false);
  const { language: selectedLang, setLanguage, t } = useLanguage();

  useEffect(() => {
    const hasSelected = localStorage.getItem('serefy-lang');
    if (!hasSelected) {
      setTimeout(() => setIsOpen(true), 1500);
    }
  }, []);

  const handleSelect = (lang: string) => {
    setLanguage(lang as any);
    setIsOpen(false);
  };

  const languages = [
    { name: 'English', native: 'English', desc: 'Global Standard' },
    { name: 'Hindi', native: 'हिन्दी', desc: 'मातृभाषा' },
    { name: 'Marathi', native: 'मराठी', desc: 'प्रादेशिक' }
  ];

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 md:bottom-10 left-6 md:left-8 z-[60] bg-white/90 backdrop-blur-xl text-slate-900 w-12 h-12 md:w-auto md:h-auto md:px-6 md:py-3 rounded-2xl shadow-2xl border border-slate-200 flex items-center justify-center md:justify-start gap-3 hover:border-amber-500/50 transition-all font-label text-sm font-bold group"
        aria-label="Select Language"
      >
        <div className="w-8 h-8 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors shrink-0">
          <Globe size={18} />
        </div>
        <div className="text-left hidden md:block">
          <p className="text-[9px] uppercase tracking-widest text-slate-500 leading-none mb-1">Language</p>
          <p className="leading-none text-xs">{selectedLang}</p>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-6 bg-surface-container-lowest/80 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.05)_0%,transparent_70%)]" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-surface w-full max-w-md rounded-[2.5rem] p-6 md:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-outline-variant/30 relative overflow-hidden"
            >
              {/* Decorative Background Elements */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-10">
                <motion.div
                  initial={{ rotate: -10 }}
                  animate={{ rotate: 0 }}
                  className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner"
                >
                  <Globe className="text-primary w-10 h-10" />
                </motion.div>
                <h2 className="font-headline text-3xl font-extrabold tracking-tight">Choose Language</h2>
                <p className="text-on-surface-variant text-base mt-2 px-4 leading-relaxed">Customize your experience by selecting your preferred language.</p>
              </div>

              <div className="space-y-4">
                {languages.map((lang, idx) => (
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={lang.name}
                    onClick={() => handleSelect(lang.name)}
                    className={`w-full p-5 rounded-3xl border-2 transition-all flex items-center justify-between group relative overflow-hidden ${selectedLang === lang.name
                        ? 'border-primary bg-primary/5'
                        : 'border-outline-variant/50 hover:border-primary/30 hover:bg-surface-container-low'
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg transition-colors ${selectedLang === lang.name ? 'bg-primary text-white' : 'bg-surface-container text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary'
                        }`}>
                        {lang.native[0]}
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-black uppercase tracking-[0.1em] text-primary/60">{lang.name}</div>
                        <div className="text-xl font-bold text-on-surface">{lang.native}</div>
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${selectedLang === lang.name ? 'border-primary bg-primary text-white scale-110' : 'border-outline-variant group-hover:border-primary/30'
                      }`}>
                      {selectedLang === lang.name && <Check size={16} strokeWidth={3} />}
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-outline-variant/20">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full btn-primary text-on-primary py-5 rounded-2xl font-label font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 active:scale-95 transition-all"
                >
                  Continue / आगे बढ़ें
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
