import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, X, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSelectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LanguageSelection({ isOpen, onClose }: LanguageSelectionProps) {
  const { language: selectedLang, setLanguage, t } = useLanguage();

  useEffect(() => {
    // Note: Auto-open logic is now handled by the caller or by a separate effect if needed
  }, []);

  const handleSelect = (lang: string) => {
    setLanguage(lang as any);
    onClose();
  };

  const languages = [
    { name: 'English', native: 'English', desc: 'Global Standard' },
    { name: 'Hindi', native: 'हिन्दी', desc: 'मातृभाषा' },
    { name: 'Marathi', native: 'मराठी', desc: 'प्रादेशिक' }
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md overflow-y-auto">
            <div className="fixed inset-0" onClick={onClose} />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-[90%] sm:max-w-md rounded-[2rem] p-6 md:p-10 shadow-2xl border border-slate-100 relative z-10"
            >
              {/* Decorative Background Elements */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X size={18} />
              </button>

              <div className="text-center mb-8">
                <motion.div
                  initial={{ rotate: -10 }}
                  animate={{ rotate: 0 }}
                  className="w-16 h-16 md:w-20 md:h-20 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-inner"
                >
                  <Globe className="text-amber-600 w-8 h-8 md:w-10 md:h-10" />
                </motion.div>
                <h2 className="font-headline text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Choose Language</h2>
                <p className="text-slate-500 text-sm md:text-base mt-2 leading-relaxed">Customize your experience by selecting your preferred language.</p>
              </div>

              <div className="space-y-3 md:space-y-4">
                {languages.map((lang, idx) => (
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={lang.name}
                    onClick={() => handleSelect(lang.name)}
                    className={`w-full p-4 md:p-5 rounded-2xl border-2 transition-all flex items-center justify-between group relative overflow-hidden ${selectedLang === lang.name
                        ? 'border-amber-500 bg-amber-50/50'
                        : 'border-slate-100 hover:border-amber-200 hover:bg-slate-50'
                      }`}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-black text-base md:text-lg transition-colors ${selectedLang === lang.name ? 'bg-amber-500 text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-amber-100 group-hover:text-amber-600'
                        }`}>
                        {lang.native[0]}
                      </div>
                      <div className="text-left">
                        <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] text-amber-600/60">{lang.name}</div>
                        <div className="text-lg md:text-xl font-black text-slate-900">{lang.native}</div>
                      </div>
                    </div>

                    <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center transition-all ${selectedLang === lang.name ? 'border-amber-500 bg-amber-500 text-white scale-110' : 'border-slate-200 group-hover:border-amber-300'
                      }`}>
                      {selectedLang === lang.name && <Check size={14} strokeWidth={3} />}
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <button
                  onClick={onClose}
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-black text-sm md:text-base shadow-xl hover:bg-amber-600 transition-all"
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
