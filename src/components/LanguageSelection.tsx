import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSelection() {
  const [isOpen, setIsOpen] = useState(false);
  const { language: selectedLang, setLanguage } = useLanguage();

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
    { name: 'English', native: 'English' },
    { name: 'Hindi', native: 'हिन्दी' },
    { name: 'Marathi', native: 'मराठी' }
  ];

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-40 right-8 z-[60] bg-white text-on-surface px-4 py-2 rounded-full shadow-lg border border-outline-variant flex items-center gap-2 hover:bg-surface-container transition-all font-label text-sm font-bold"
      >
        <Globe size={16} className="text-primary" />
        {selectedLang}
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-surface w-full max-w-sm rounded-3xl p-8 shadow-2xl border border-outline-variant relative"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-on-surface-variant hover:text-on-surface"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-primary w-8 h-8" />
                </div>
                <h2 className="font-headline text-2xl font-bold">Select Language</h2>
                <p className="text-on-surface-variant text-sm mt-2">Choose your preferred language for a better experience.</p>
              </div>

              <div className="space-y-3">
                {languages.map((lang) => (
                  <button
                    key={lang.name}
                    onClick={() => handleSelect(lang.name)}
                    className={`w-full p-4 rounded-2xl border transition-all flex items-center justify-between group ${
                      selectedLang === lang.name 
                        ? 'border-primary bg-primary/5 text-primary font-bold' 
                        : 'border-outline-variant hover:border-primary/50'
                    }`}
                  >
                    <div className="text-left">
                      <div className="text-sm uppercase tracking-widest opacity-60 font-bold">{lang.name}</div>
                      <div className="text-lg">{lang.native}</div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedLang === lang.name ? 'border-primary bg-primary' : 'border-outline-variant group-hover:border-primary/30'
                    }`}>
                      {selectedLang === lang.name && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setIsOpen(false)}
                className="w-full mt-8 btn-primary text-on-primary py-4 rounded-xl font-label font-bold shadow-lg"
              >
                Continue
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
