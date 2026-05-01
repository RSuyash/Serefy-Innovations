import React from 'react';
import { motion } from 'motion/react';
import SectionWrapper from './SectionWrapper';
import { useLanguage } from '../context/LanguageContext';

export default function GallerySection() {
  const { t } = useLanguage();

  const images = [
    {
      src: "/media/gallery-farmer-design.jpg",
      alt: t('section.gallery.img1'),
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-2",
      category: "Innovation"
    },
    {
      src: "/media/gallery-farmer-setup.jpg",
      alt: t('section.gallery.img2'),
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
      category: "Setup"
    },
    {
      src: "/media/gallery-lab-testing.jpg",
      alt: t('section.gallery.img3'),
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
      category: "Testing"
    },
    {
      src: "/media/gallery-expert-meetups.jpg",
      alt: t('section.gallery.img4'),
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-1",
      category: "Collaboration"
    }
  ];

  return (
    <SectionWrapper className="w-full py-20 md:py-32 px-4 md:px-12 bg-surface overflow-hidden" id="gallery">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-primary/10 rounded-full font-label text-[10px] md:text-xs font-bold text-primary tracking-[0.2em] uppercase mb-4 md:mb-6"
            >
              Visual Journey
            </motion.div>
            <h2 className="font-headline text-3xl md:text-6xl font-extrabold text-on-surface mb-4 leading-tight">
              {t('section.gallery.title')}
            </h2>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed">
              {t('section.gallery.subtitle')}
            </p>
          </div>
          <div className="hidden md:block h-px flex-grow bg-outline-variant/30 mx-12 mb-6" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 relative group cursor-pointer ${img.colSpan} ${img.rowSpan} border border-outline-variant/20`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="space-y-2"
                >
                  <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                    {img.category}
                  </span>
                  <p className="text-white text-lg font-bold leading-snug">{img.alt}</p>
                </motion.div>
              </div>

              {/* Minimal Border Glow */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-500 rounded-[2rem]" />
            </motion.div>
          ))}
        </div>

        {/* Decorative background blur */}
        <div className="absolute top-1/2 -right-64 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 -left-64 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      </div>
    </SectionWrapper>
  );
}
