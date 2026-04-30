import React from 'react';
import { motion } from 'motion/react';
import SectionWrapper from './SectionWrapper';
import { useLanguage } from '../context/LanguageContext';

export default function GallerySection() {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=800&q=80",
      alt: t('section.gallery.img1'),
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1592982537446-6086208a0d4c?w=800&q=80",
      alt: t('section.gallery.img2'),
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1628102491629-77858ab5721d?w=800&q=80",
      alt: t('section.gallery.img3'),
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1534346128695-121db5976b32?w=800&q=80",
      alt: t('section.gallery.img4'),
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-1"
    }
  ];
  return (
    <SectionWrapper className="w-full py-24 px-6 md:px-12 bg-surface" id="gallery">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4">{t('section.gallery.title')}</h2>
          <p className="text-on-surface-variant text-lg">{t('section.gallery.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow relative group ${img.colSpan} ${img.rowSpan}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
