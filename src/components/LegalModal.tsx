import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'terms' | 'privacy' | 'disclaimer' | null;
}

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  const { t } = useLanguage();

  const contentMap = {
    terms: {
      title: t('legal.terms.title'),
      content: t('legal.terms.content')
    },
    privacy: {
      title: t('legal.privacy.title'),
      content: t('legal.privacy.content')
    },
    disclaimer: {
      title: t('legal.disclaimer.title'),
      content: t('legal.disclaimer.content')
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-surface-container-lowest/80 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose}></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-surface w-full max-w-2xl rounded-3xl shadow-2xl relative z-10 flex flex-col max-h-[90vh] overflow-hidden border border-outline-variant/30"
      >
        <div className="flex justify-between items-center p-6 border-b border-outline-variant/20">
          <h3 className="font-headline text-xl font-bold">{contentMap[type].title}</h3>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <X size={20} />
          </button>
        </div>
        <div className="p-6 md:p-8 overflow-y-auto font-body text-on-surface-variant leading-relaxed whitespace-pre-wrap">
          {contentMap[type].content}
        </div>
      </motion.div>
    </div>
  );
}
