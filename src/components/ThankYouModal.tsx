import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
}

export default function ThankYouModal({ isOpen, onClose, name }: ThankYouModalProps) {
  const { t } = useLanguage();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Trigger confetti
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 110 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);

    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-surface-container-lowest/90 backdrop-blur-md">
      <div className="absolute inset-0" onClick={onClose}></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 40 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-surface w-full max-w-md rounded-3xl shadow-2xl relative z-10 flex flex-col overflow-hidden border border-outline-variant/30 text-center p-10"
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
          <X size={20} />
        </button>
        
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 size={48} />
        </motion.div>

        <h3 className="font-headline text-3xl font-extrabold text-on-surface mb-4">
          {t('thanks.title')} <span className="text-primary">{name || (t('Language') === 'English' ? 'there' : '')}</span>!
        </h3>
        <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
          {t('thanks.desc')}
        </p>
        <button onClick={onClose} className="w-full btn-primary text-on-primary font-label font-bold px-8 py-4 rounded-2xl hover:bg-primary-container hover:scale-[1.02] transition-all shadow-lg">
          {t('thanks.cta')}
        </button>
      </motion.div>
    </div>
  );
}
