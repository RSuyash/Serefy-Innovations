import React, { useState } from 'react';
import WizardModal, { type WizardFormData } from '../components/WizardModal';
import ThankYouModal from '../components/ThankYouModal';
import ProblemSlideshow from '../components/ProblemSlideshow';
import AnimatedTags from '../components/AnimatedTags';
import SectionWrapper from '../components/SectionWrapper';
import GallerySection from '../components/GallerySection';
import LegalModal from '../components/LegalModal';
import { submitSerefyLead, type SerefyLeadInput } from '../lib/naya-lead';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Thermometer,
  ShieldCheck,
  User,
  Link as LinkIcon,
  Video,
  Mail,
  Linkedin,
  Youtube,
  Play,
  Facebook,
  Instagram
} from 'lucide-react';

export default function Home() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [submitName, setSubmitName] = useState('');
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadError, setLeadError] = useState('');
  const [legalModalOpen, setLegalModalOpen] = useState<'terms' | 'privacy' | 'disclaimer' | null>(null);

  // Simulated Inhouse API function for tracking and submissions
  const trackEvent = async (eventName: string, data: any = {}) => {
    try {
      console.log(`[API TRACKING] ${eventName}:`, data);
      // await fetch('/api/track', { method: 'POST', body: JSON.stringify({ eventName, data }) });
    } catch (e) {
      console.error(e);
    }
  };

  const submitLead = async (data: SerefyLeadInput) => {
    setLeadError('');
    setIsSubmittingLead(true);

    try {
      await submitSerefyLead(data);
      trackEvent('lead_submitted', data);
      setSubmitName(data.firstName || 'There');
      setIsThankYouOpen(true);
      return true;
    } catch (error) {
      const message =
        error instanceof Error && error.message
          ? error.message
          : 'Lead capture is temporarily unavailable. Please email serefy.connect@gmail.com.';
      setLeadError(message);
      return false;
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const handleWizardSubmit = async (data: WizardFormData) => {
    trackEvent('wizard_form_submitted', data);
    const ok = await submitLead({
      ...data,
      sourceCta: 'guided_wizard',
    });

    if (ok) {
      setIsWizardOpen(false);
    }
  };

  const handleOpenWizard = (e: React.MouseEvent, source: string) => {
    e.preventDefault();
    setLeadError('');
    trackEvent('wizard_opened', { source });
    setIsWizardOpen(true);
  };

  const handleBottomFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const ok = await submitLead({
      firstName: String(formData.get('first-name') ?? ''),
      lastName: String(formData.get('last-name') ?? ''),
      email: String(formData.get('email') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      city: String(formData.get('city') ?? ''),
      role: String(formData.get('role') ?? ''),
      message: String(formData.get('message') ?? ''),
      sourceCta: 'bottom_interest_form',
    });

    if (ok) {
      form.reset();
    }
  };

  const { t } = useLanguage();

  return (
    <div className="bg-surface text-on-surface font-body antialiased selection:bg-primary/20 flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="w-full pt-20 md:pt-12 pb-16 md:pb-24 px-4 md:px-12 max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="w-full md:w-6/12 flex flex-col items-center md:items-start space-y-6 md:space-y-8 text-center md:text-left"
          >
            <AnimatedTags tags={t('hero.tags').split(',')} />
            <h1 className="font-headline text-3xl sm:text-5xl md:text-7xl lg:text-[5rem] font-extrabold text-on-surface tracking-tight leading-[1.1] md:leading-tight">
              {t('hero.title').split(' ').map((word, i, arr) => (
                <React.Fragment key={i}>
                  {word === 'Efficient' || word === 'Smart' || word === 'कुशल' || word === 'स्मार्ट' || word === 'कार्यक्षम' ? <span className="text-primary">{word} </span> : word + ' '}
                </React.Fragment>
              ))}
            </h1>
            <p className="font-body text-sm md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
              {t('hero.tagline')}
            </p>
            <div className="flex flex-col gap-4 w-full sm:w-auto items-center md:items-start">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <a className="btn-primary w-full sm:w-auto justify-center text-on-primary font-label font-medium px-10 py-5 rounded-full hover:bg-primary-container transition-colors flex items-center gap-3 shadow-xl cursor-pointer" onClick={(e) => handleOpenWizard(e, 'hero_cta')}>
                  {t('hero.cta')} <ArrowRight size={20} />
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <CheckCircle2 size={16} />
                  <span>{t('hero.preorder')}</span>
                </div>
                <p className="text-on-surface-variant text-sm font-medium">{t('hero.incubated')}</p>
              </div>
            </div>
            <div className="pt-4 border-t border-outline-variant/30 w-full max-w-xs md:max-w-none">
              <p className="text-[10px] md:text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3">{t('hero.capacity')}</p>
              <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2 justify-center md:justify-start">
                <div className="flex flex-col">
                  <span className="text-base md:text-xl font-extrabold text-on-surface">120</span>
                  <span className="text-[7px] md:text-[10px] text-on-surface-variant font-bold uppercase">{t('hero.eggs')}</span>
                </div>
                <div className="w-px h-6 md:h-8 bg-outline-variant/30 self-center hidden xs:block"></div>
                <div className="flex flex-col">
                  <span className="text-base md:text-xl font-extrabold text-on-surface">200</span>
                  <span className="text-[7px] md:text-[10px] text-on-surface-variant font-bold uppercase">{t('hero.eggs')}</span>
                </div>
                <div className="w-px h-6 md:h-8 bg-outline-variant/30 self-center hidden xs:block"></div>
                <div className="flex flex-col">
                  <span className="text-base md:text-xl font-extrabold text-on-surface">500</span>
                  <span className="text-[7px] md:text-[10px] text-on-surface-variant font-bold uppercase">{t('hero.eggs')}</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-5/12 rounded-3xl aspect-square relative overflow-hidden ghost-border ambient-shadow bg-surface-container"
          >
            <img alt="Happy Indian poultry farmer" referrerPolicy="no-referrer" className="w-full h-full object-cover" src="/media/happy-poultry-farmer.png" />
          </motion.div>
        </section>

        {/* 2. Problem / Opportunity */}
        <SectionWrapper className="w-full py-16 md:py-24 px-4 md:px-12 bg-surface-container-low border-y border-outline-variant/20" id="problem">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="text-center md:text-left">
                <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-on-surface mb-6 leading-tight">
                  {t('section.problem.title')}
                </h2>
                <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
                  {t('section.problem.desc')}
                </p>
              </div>
              <div className="w-full">
                <ProblemSlideshow />
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* 3. Solution / Product Overview */}
        <SectionWrapper className="w-full py-20 md:py-32 px-4 md:px-12 bg-surface" id="solution">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-6xl font-extrabold text-on-surface tracking-tight mb-6">
                {t('section.solution.title')}
              </h2>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
                {t('section.solution.desc')}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="w-full md:w-6/12 relative">
                <img src="/media/sere-120.webp" alt="Serefy 120 Egg Incubator" className="w-full rounded-3xl shadow-2xl border border-primary/20" />
                {/* Solution pointers would go here in a more complex UI */}
              </div>
              <div className="w-full md:w-6/12 space-y-8">
                <div className="p-6 bg-surface-container-low rounded-2xl border border-primary/10">
                  <h3 className="font-headline font-bold text-xl mb-2 text-primary">{t('section.solution.feat1.title')}</h3>
                  <p className="text-on-surface-variant">{t('section.solution.feat1.desc')}</p>
                </div>
                <div className="p-6 bg-surface-container-low rounded-2xl border border-primary/10">
                  <h3 className="font-headline font-bold text-xl mb-2 text-primary">{t('section.solution.feat2.title')}</h3>
                  <p className="text-on-surface-variant">{t('section.solution.feat2.desc')}</p>
                </div>
                <div className="p-6 bg-surface-container-low rounded-2xl border border-primary/10">
                  <h3 className="font-headline font-bold text-xl mb-2 text-primary">{t('section.solution.feat3.title')}</h3>
                  <p className="text-on-surface-variant">{t('section.solution.feat3.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* 4. How It Works */}
        <SectionWrapper className="w-full py-16 md:py-24 px-4 md:px-12 bg-surface-container-low border-y border-outline-variant/20" id="how-it-works">
          <div className="max-w-screen-xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface mb-4">{t('section.how.title')}</h2>
            <p className="text-on-surface-variant text-base md:text-lg">{t('section.how.subtitle')}</p>
          </div>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div whileHover={{ y: -10 }} className="text-center bg-surface p-8 rounded-3xl ambient-shadow ghost-border">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold font-headline">1</div>
              <h3 className="font-headline text-xl font-bold mb-3">{t('section.how.step1')}</h3>
              <p className="text-on-surface-variant">{t('section.how.step1.desc')}</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="text-center bg-surface p-8 rounded-3xl ambient-shadow ghost-border">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold font-headline">2</div>
              <h3 className="font-headline text-xl font-bold mb-3">{t('section.how.step2')}</h3>
              <p className="text-on-surface-variant">{t('section.how.step2.desc')}</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="text-center bg-surface p-8 rounded-3xl ambient-shadow ghost-border">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold font-headline">3</div>
              <h3 className="font-headline text-xl font-bold mb-3">{t('section.how.step3')}</h3>
              <p className="text-on-surface-variant">{t('section.how.step3.desc')}</p>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* 5. Product Options / Capacity Options */}
        <SectionWrapper className="w-full py-20 md:py-32 px-4 md:px-12 bg-surface" id="capacity">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-12 md:mb-20 text-center">
              <h2 className="font-headline text-3xl md:text-6xl font-extrabold text-on-surface tracking-tight mb-6">{t('section.infra.title')}</h2>
              <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">{t('section.infra.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Option 120 */}
              <div className="bg-primary/5 p-6 md:p-10 rounded-3xl border-2 border-primary/20 ambient-shadow flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                <div className="mb-8 md:mb-12">
                  <span className="inline-block px-3 py-1 bg-primary/10 rounded-full font-label text-xs font-bold text-primary tracking-widest uppercase mb-4">{t('section.infra.120.title')}</span>
                  <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">120<span className="text-lg md:text-xl font-medium text-on-surface-variant ml-2">{t('hero.eggs')}</span></h3>
                </div>
                <p className="font-body text-sm md:text-base text-on-surface-variant mb-8 md:mb-12 flex-grow">
                  {t('section.infra.120.desc')}
                </p>
                <a className="w-full text-center bg-primary text-on-primary font-label font-bold px-6 py-4 rounded-xl hover:bg-primary-container transition-colors shadow-lg cursor-pointer" onClick={(e) => handleOpenWizard(e, 'preorder_120')}>
                  {t('hero.cta')}
                </a>
              </div>
              {/* Option 200 */}
              <div className="bg-primary p-6 md:p-10 rounded-3xl ambient-shadow flex flex-col h-full relative overflow-hidden transform md:scale-105 z-10 text-on-primary">
                <div className="mb-8 md:mb-12 relative z-10">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full font-label text-xs font-bold text-white tracking-widest uppercase mb-4">{t('section.infra.200.title')}</span>
                  <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-white">200<span className="text-lg md:text-xl font-medium text-white/80 ml-2">{t('hero.eggs')}</span></h3>
                </div>
                <p className="font-body text-sm md:text-base text-white/90 mb-8 md:mb-12 flex-grow relative z-10">
                  {t('section.infra.200.desc')}
                </p>
                <a className="w-full text-center bg-white text-primary font-label font-bold px-6 py-4 rounded-xl hover:bg-surface-container-low transition-colors relative z-10 shadow-lg cursor-pointer" onClick={(e) => handleOpenWizard(e, 'preorder_200')}>
                  {t('hero.cta')}
                </a>
              </div>
              {/* Option 500 */}
              <div className="bg-surface-container-lowest p-6 md:p-10 rounded-3xl ghost-border ambient-shadow flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-8 md:mb-12">
                  <span className="inline-block px-3 py-1 bg-surface-container-low rounded-full font-label text-xs font-bold text-primary tracking-widest uppercase mb-4">{t('section.infra.500.title')}</span>
                  <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">500<span className="text-lg md:text-xl font-medium text-on-surface-variant ml-2">{t('hero.eggs')}</span></h3>
                </div>
                <p className="font-body text-sm md:text-base text-on-surface-variant mb-8 md:mb-12 flex-grow">
                  {t('section.infra.500.desc')}
                </p>
                <a className="w-full text-center bg-surface-container-low text-primary font-label font-bold px-6 py-4 rounded-xl hover:bg-primary hover:text-on-primary transition-colors border border-primary/20 cursor-pointer" onClick={(e) => handleOpenWizard(e, 'inquire_500')}>
                  {t('section.infra.inquiry')}
                </a>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* 6. Why Trust Sere */}
        <SectionWrapper className="w-full py-24 px-6 md:px-12 bg-surface-container-low border-y border-outline-variant/20">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4">{t('section.trust.title')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <Cpu className="text-primary w-12 h-12 mb-6" />
                <h3 className="font-headline text-xl font-bold mb-3">{t('section.trust.feat1.title')}</h3>
                <p className="text-on-surface-variant">{t('section.trust.feat1.desc')}</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Thermometer className="text-primary w-12 h-12 mb-6" />
                <h3 className="font-headline text-xl font-bold mb-3">{t('section.trust.feat2.title')}</h3>
                <p className="text-on-surface-variant">{t('section.trust.feat2.desc')}</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="text-primary w-12 h-12 mb-6" />
                <h3 className="font-headline text-xl font-bold mb-3">{t('section.trust.feat3.title')}</h3>
                <p className="text-on-surface-variant">{t('section.trust.feat3.desc')}</p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* 7. Team + Supported By */}
        <SectionWrapper className="w-full py-24 px-6 md:px-12 bg-surface" id="team">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-16">
              <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-12 text-center">{t('section.team.title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-20">
                <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 p-6 md:p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 ambient-shadow">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center overflow-hidden shrink-0 border-4 border-surface shadow-md bg-surface-container-low">
                    <img src="/media/founder-vidhya.webp" alt="Vidhya Gaikwad" className="w-full h-full object-cover" />
                  </div>
                  <div className="pt-2">
                    <h4 className="font-headline font-bold text-2xl mb-1">Vidhya Gaikwad</h4>
                    <p className="text-primary font-bold text-sm tracking-widest uppercase mb-1">{t('section.team.vidhya.title')}</p>
                    <p className="text-on-surface-variant font-medium text-sm mb-3">BCS 2025 | Head of R&D</p>
                    <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                      {t('section.team.vidhya.desc')}
                    </p>
                    <a href="https://www.linkedin.com/in/vidhya-gaikwad-402475255" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-on-surface hover:text-white hover:bg-primary px-4 py-2 rounded-full border border-outline-variant transition-colors text-sm font-semibold">
                      <Linkedin size={16} /> Connect
                    </a>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 p-6 md:p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 ambient-shadow">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center overflow-hidden shrink-0 border-4 border-surface shadow-md bg-surface-container-low">
                    <img src="/media/founder-aditya.webp" alt="Aditya Magar" className="w-full h-full object-cover" />
                  </div>
                  <div className="pt-2">
                    <h4 className="font-headline font-bold text-2xl mb-1">Aditya Magar</h4>
                    <p className="text-primary font-bold text-sm tracking-widest uppercase mb-1">{t('section.team.aditya.title')}</p>
                    <p className="text-on-surface-variant font-medium text-sm mb-3">BCS 2025 | Head of Systems</p>
                    <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                      {t('section.team.aditya.desc')}
                    </p>
                    <a href="https://www.linkedin.com/in/aditya-magar-513b0b2a7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-on-surface hover:text-white hover:bg-primary px-4 py-2 rounded-full border border-outline-variant transition-colors text-sm font-semibold">
                      <Linkedin size={16} /> Connect
                    </a>
                  </div>
                </motion.div>
              </div>
              <div className="pt-12 border-t border-outline-variant/30 text-center">
                <p className="font-label text-xs font-bold text-primary uppercase tracking-widest mb-10">{t('section.team.supported')}</p>
                <div className="flex justify-center items-center">
                  <img src="/media/aic-mahindra.webp" alt="AIC Mahindra" className="h-20 md:h-28 w-auto object-contain transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* 7.5 SereTalks (Media/Resources) */}
        <SectionWrapper className="w-full py-24 px-6 md:px-12 bg-surface border-t border-outline-variant/20" id="seretalks">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4">{t('section.seretalks.title')}</h2>
              <p className="text-on-surface-variant text-lg">{t('section.seretalks.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[ 
                { id: 'OfX2jiyLpI8', title: 'Introduction to Sere Talks' },
                { id: 'XAeP_gbSZ4g', title: 'Educational Informative Talks' },
                { id: 'kyaz1ve2UBI', title: 'Poultry Farming Insights' }
              ].map((video) => (
                <a key={video.id} href={`https://youtu.be/${video.id}`} target="_blank" rel="noopener noreferrer" className="group rounded-3xl overflow-hidden border border-outline-variant/30 bg-surface-container-lowest ambient-shadow block transform hover:-translate-y-2 transition-all duration-300">
                  <div className="aspect-[9/16] bg-surface-container relative flex items-center justify-center overflow-hidden">
                     <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt="SereTalks Thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity transform group-hover:scale-105 duration-700" />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary/90 text-on-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform backdrop-blur-sm">
                          <Play className="w-6 h-6 ml-1" fill="currentColor" />
                        </div>
                     </div>
                  </div>
                  <div className="p-6">
                     <h3 className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors line-clamp-2">{video.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* 7.6 Gallery */}
        <GallerySection />

        {/* 8. Pre-Order / Interest Form */}
        <SectionWrapper className="w-full py-20 md:py-32 px-4 md:px-12 bg-surface-container-low" id="pre-order">
          <div className="max-w-screen-md mx-auto bg-surface p-6 sm:p-10 md:p-16 rounded-3xl border border-outline-variant/30 ambient-shadow">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="font-headline text-2xl md:text-4xl font-extrabold text-on-surface mb-4">{t('section.interest.title')}</h2>
              <p className="text-sm md:text-base text-on-surface-variant">{t('section.interest.desc')}</p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleBottomFormSubmit}>
              <div className="flex flex-col gap-2">
                <label className="font-label text-sm font-semibold text-on-surface-variant" htmlFor="first-name">{t('form.firstName')}</label>
                <input className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" id="first-name" name="first-name" placeholder="John" required type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-sm font-semibold text-on-surface-variant" htmlFor="last-name">{t('form.lastName')}</label>
                <input className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" id="last-name" name="last-name" placeholder="Doe" required type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-sm font-semibold text-on-surface-variant" htmlFor="email">{t('form.email')}</label>
                <input className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" id="email" name="email" placeholder="john@doe.com" required type="email" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-sm font-semibold text-on-surface-variant" htmlFor="phone">{t('form.phone')}</label>
                <input className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" id="phone" name="phone" placeholder="+91 98765 43210" required type="tel" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-sm font-semibold text-on-surface-variant" htmlFor="city">{t('form.city')}</label>
                <input className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" id="city" name="city" placeholder="Hyderabad" required type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-sm font-semibold text-on-surface-variant" htmlFor="role">{t('form.role')}</label>
                <select className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none appearance-none" id="role" name="role" required defaultValue="">
                  <option value="" disabled>Select your role</option>
                  <option value="farmer">Farmer</option>
                  <option value="hobbyist">Hobbyist</option>
                  <option value="investor">Investor / Institution</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-label text-sm font-semibold text-on-surface-variant" htmlFor="message">{t('form.message')}</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none min-h-[80px] resize-y" id="message" name="message" placeholder="Any specific requirements..."></textarea>
              </div>
              <label className="md:col-span-2 flex items-start gap-3 rounded-2xl bg-surface-container-low px-4 py-3 text-left text-sm text-on-surface-variant">
                <input className="mt-1 h-4 w-4 rounded border-outline-variant accent-primary" required type="checkbox" name="consent" />
                <span>{t('form.consent')}</span>
              </label>
              {leadError && !isWizardOpen ? (
                <p className="md:col-span-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {leadError}
                </p>
              ) : null}
              <div className="md:col-span-2 pt-4">
                <button className="w-full btn-primary text-on-primary font-label font-bold px-8 py-4 rounded-xl hover:bg-primary-container transition-all shadow-lg disabled:cursor-not-allowed disabled:opacity-60" disabled={isSubmittingLead} type="submit">
                  {isSubmittingLead ? '...' : t('form.submit')}
                </button>
              </div>
            </form>
          </div>
        </SectionWrapper>
      </main>

      <WizardModal isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} onSubmit={handleWizardSubmit} isSubmitting={isSubmittingLead} submitError={leadError} />
      <ThankYouModal isOpen={isThankYouOpen} onClose={() => setIsThankYouOpen(false)} name={submitName} />
      <LegalModal isOpen={!!legalModalOpen} onClose={() => setLegalModalOpen(null)} type={legalModalOpen} />
    </div>
  );
}
