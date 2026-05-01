import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function ProblemSlideshow() {
  const { t } = useLanguage();
  
  const slides = [
    {
      id: 1,
      image: '/media/gallery-real-challenges.jpg',
      title: t('slides.1.title'),
      description: t('slides.1.desc')
    },
    {
      id: 2,
      image: '/media/gallery-problem-solve.jpg',
      title: t('slides.2.title'),
      description: t('slides.2.desc')
    },
    {
      id: 3,
      image: '/media/gallery-healthy-hatch.jpg',
      title: t('slides.3.title'),
      description: t('slides.3.desc')
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-surface-container border border-outline-variant/30 ambient-shadow">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img 
            src={slides[currentIndex].image} 
            alt={slides[currentIndex].title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            key={`img-${currentIndex}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-surface/95 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-xl"
            >
              <h4 className="font-headline font-bold text-primary mb-2 text-xl">{slides[currentIndex].title}</h4>
              <p className="text-on-surface-variant font-medium">{slides[currentIndex].description}</p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Indicators */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        {slides.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-6 bg-primary' : 'w-2 bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}
