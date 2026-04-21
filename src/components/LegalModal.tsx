import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'terms' | 'privacy' | 'disclaimer' | null;
}

const contentMap = {
  terms: {
    title: "Terms and Conditions",
    content: "By accessing this website, we assume you accept these terms and conditions. Do not continue to use Serefy Innovations if you do not agree to take all of the terms and conditions stated on this page. \n\nThe following terminology applies to these Terms and Conditions: \"Client\", \"You\" and \"Your\" refers to you, the person log on this website and compliant to the Company's terms and conditions. \"The Company\", \"Ourselves\", \"We\", \"Our\" and \"Us\", refers to our Company."
  },
  privacy: {
    title: "Privacy Policy",
    content: "At Serefy Innovations, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it. \n\nIf you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. We are a Data Controller of your information."
  },
  disclaimer: {
    title: "Disclaimer",
    content: "All the information on this website - Serefy Innovations - is published in good faith and for general information purpose only. Serefy Innovations does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website, is strictly at your own risk."
  }
};

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
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
