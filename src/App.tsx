import React, { useState } from 'react';
import WizardModal, { type WizardFormData } from './components/WizardModal';
import ThankYouModal from './components/ThankYouModal';
import ProblemSlideshow from './components/ProblemSlideshow';
import AnimatedTags from './components/AnimatedTags';
import SectionWrapper from './components/SectionWrapper';
import GallerySection from './components/GallerySection';
import LegalModal from './components/LegalModal';
import { submitSerefyLead, type SerefyLeadInput } from './lib/naya-lead';
import { motion } from 'motion/react';
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

export default function App() {
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

  return (
    <div className="bg-surface text-on-surface font-body antialiased selection:bg-primary/20 flex flex-col min-h-screen">
      <nav className="sticky top-0 w-full z-50 bg-[#f8fdfa]/90 backdrop-blur-xl border-b border-outline-variant/30">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 w-full max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-2 overflow-hidden max-w-[50%]">
            <div className="w-8 h-8 rounded-full bg-primary flex shrink-0 items-center justify-center text-on-primary font-headline font-bold">
              S
            </div>
            <div className="text-lg md:text-xl font-extrabold text-on-surface tracking-tight font-headline whitespace-nowrap truncate block">
              Serefy Innovations
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors font-label text-sm" href="#problem">Problem</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors font-label text-sm" href="#solution">Solution</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors font-label text-sm" href="#how-it-works">Process</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors font-label text-sm" href="#capacity">Capacity</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors font-label text-sm" href="#team">Team</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors font-label text-sm" href="#seretalks">SereTalks</a>
          </div>
          <a className="btn-primary text-on-primary font-label font-medium px-4 md:px-6 py-2 md:py-2.5 rounded-full hover:bg-primary-container transition-colors duration-200 text-xs md:text-sm whitespace-nowrap shrink-0 cursor-pointer" onClick={(e) => handleOpenWizard(e, 'nav_header_cta')}>
            Pre-Order Now
          </a>
        </div>
      </nav>

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="w-full pt-12 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="w-full md:w-6/12 flex flex-col items-center md:items-start space-y-8 text-center md:text-left"
          >
            <AnimatedTags tags={["Made for Farmers", "Innovative", "Plug and Play", "Built to Scale"]} />
            <h1 className="font-headline text-5xl md:text-7xl lg:text-[5rem] font-extrabold text-on-surface tracking-tight leading-tight">
              Making technology <br /><span className="text-primary">easy for farmers.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
              Bridging the gap between farmers and technology. Serefy Innovations provides precision-engineered egg incubation systems that maintain the perfect environmental conditions for every hatch.
            </p>
            <div className="flex flex-col gap-4 w-full sm:w-auto items-center md:items-start">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <a className="btn-primary w-full sm:w-auto justify-center text-on-primary font-label font-medium px-10 py-5 rounded-full hover:bg-primary-container transition-colors flex items-center gap-3 shadow-xl cursor-pointer" onClick={(e) => handleOpenWizard(e, 'hero_cta')}>
                  Pre-Order Now <ArrowRight size={20} />
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <CheckCircle2 size={16} />
                  <span>Pre-orders open</span>
                </div>
                <p className="text-on-surface-variant text-sm font-medium">Easy to use & Better than market options</p>
              </div>
            </div>
            <div className="pt-4 border-t border-outline-variant/30 w-full">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3">Capacity Options</p>
              <div className="flex gap-6">
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-on-surface">120</span>
                  <span className="text-[10px] text-on-surface-variant font-bold uppercase">Eggs</span>
                </div>
                <div className="w-px h-8 bg-outline-variant/30 self-center"></div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-on-surface">200</span>
                  <span className="text-[10px] text-on-surface-variant font-bold uppercase">Eggs</span>
                </div>
                <div className="w-px h-8 bg-outline-variant/30 self-center"></div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-on-surface">500</span>
                  <span className="text-[10px] text-on-surface-variant font-bold uppercase">Eggs</span>
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
            <img alt="Farmer, happy, basic, no so complicated" referrerPolicy="no-referrer" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80" />
          </motion.div>
        </section>

        {/* 2. Problem / Opportunity */}
        <SectionWrapper className="w-full py-24 px-6 md:px-12 bg-surface-container-low border-y border-outline-variant/20" id="problem">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-6 leading-tight">
                  Bridging the <br /><span className="text-primary">'Efficiency Gap'</span>
                </h2>
                <p className="text-xl text-on-surface-variant leading-relaxed">
                  Modern cultivation faces extreme volatility. Traditional incubation methods lack the precision required for institutional scale, leading to unpredictable yields and resource waste.
                </p>
              </div>
              <div className="w-full">
                <ProblemSlideshow />
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* 3. Solution / Product Overview */}
        <SectionWrapper className="w-full py-32 px-6 md:px-12 bg-surface" id="solution">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-5/12">
              <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-on-surface tracking-tight mb-6 leading-tight">
                Modular <br /><span className="text-primary">Incubation</span> Hardware
              </h2>
            </div>
            <div className="w-full md:w-7/12 font-body text-xl text-on-surface-variant leading-relaxed space-y-6 border-l-4 border-primary pl-8">
              <p>
                Serefy Innovations delivers institutional-grade hardware designed for the modern operator. Our modular systems provide highly controlled environments that guarantee predictable outcomes through rigorous sensor integration.
              </p>
              <p>
                From thermal stability to automated humidity management, every component is engineered to eliminate human error and environmental variables.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* 4. How It Works */}
        <SectionWrapper className="w-full py-24 px-6 md:px-12 bg-surface-container-low border-y border-outline-variant/20" id="how-it-works">
          <div className="max-w-screen-xl mx-auto text-center mb-16">
            <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4">Plug and Play Simplicity</h2>
            <p className="text-on-surface-variant text-lg">Deploy industrial precision in three simple steps.</p>
          </div>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div whileHover={{ y: -10 }} className="text-center bg-surface p-8 rounded-3xl ambient-shadow ghost-border">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold font-headline">1</div>
              <h3 className="font-headline text-xl font-bold mb-3">Deploy</h3>
              <p className="text-on-surface-variant">Rapid installation with modular components that snap together effortlessly.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="text-center bg-surface p-8 rounded-3xl ambient-shadow ghost-border">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold font-headline">2</div>
              <h3 className="font-headline text-xl font-bold mb-3">Calibrate</h3>
              <p className="text-on-surface-variant">Automated systems sense your environment and optimize thermal profiles.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="text-center bg-surface p-8 rounded-3xl ambient-shadow ghost-border">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold font-headline">3</div>
              <h3 className="font-headline text-xl font-bold mb-3">Yield</h3>
              <p className="text-on-surface-variant">Experience consistent, high-percentage outcomes batch after batch.</p>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* 5. Product Options / Capacity Options */}
        <SectionWrapper className="w-full py-32 px-6 md:px-12 bg-surface" id="capacity">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-on-surface tracking-tight mb-6">Scalable Infrastructure</h2>
              <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto">Professional-grade capacity options for every scale of operation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Option 120 */}
              <div className="bg-surface-container-lowest p-10 rounded-3xl ghost-border ambient-shadow flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-12">
                  <span className="inline-block px-3 py-1 bg-surface-container-low rounded-full font-label text-xs font-bold text-primary tracking-widest uppercase mb-4">जीone Series 120</span>
                  <h3 className="font-headline text-5xl font-extrabold text-on-surface">120<span className="text-xl font-medium text-on-surface-variant ml-2">Eggs</span></h3>
                </div>
                <p className="font-body text-on-surface-variant mb-12 flex-grow">
                  Precision control for specialized breeders and high-value research batches.
                </p>
                <a className="w-full text-center bg-surface-container-low text-primary font-label font-bold px-6 py-4 rounded-xl hover:bg-primary hover:text-on-primary transition-colors border border-primary/20 cursor-pointer" onClick={(e) => handleOpenWizard(e, 'inquire_120')}>
                  Inquire
                </a>
              </div>
              {/* Option 200 */}
              <div className="bg-primary p-10 rounded-3xl ambient-shadow flex flex-col h-full relative overflow-hidden transform md:scale-105 z-10 text-on-primary">
                <div className="mb-12 relative z-10">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full font-label text-xs font-bold text-white tracking-widest uppercase mb-4">जीone Series 200</span>
                  <h3 className="font-headline text-5xl font-extrabold text-white">200<span className="text-xl font-medium text-white/80 ml-2">Eggs</span></h3>
                </div>
                <p className="font-body text-white/90 mb-12 flex-grow relative z-10">
                  The standard for mid-sized institutional operations. Balanced efficiency and yield.
                </p>
                <a className="w-full text-center bg-white text-primary font-label font-bold px-6 py-4 rounded-xl hover:bg-surface-container-low transition-colors relative z-10 shadow-lg cursor-pointer" onClick={(e) => handleOpenWizard(e, 'preorder_200')}>
                  Pre-Order जीone Series 200
                </a>
              </div>
              {/* Option 500 */}
              <div className="bg-surface-container-lowest p-10 rounded-3xl ghost-border ambient-shadow flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-12">
                  <span className="inline-block px-3 py-1 bg-surface-container-low rounded-full font-label text-xs font-bold text-primary tracking-widest uppercase mb-4">जीone Series 500</span>
                  <h3 className="font-headline text-5xl font-extrabold text-on-surface">500<span className="text-xl font-medium text-on-surface-variant ml-2">Eggs</span></h3>
                </div>
                <p className="font-body text-on-surface-variant mb-12 flex-grow">
                  Commercial-scale deployment with multi-unit networking capabilities.
                </p>
                <a className="w-full text-center bg-surface-container-low text-primary font-label font-bold px-6 py-4 rounded-xl hover:bg-primary hover:text-on-primary transition-colors border border-primary/20 cursor-pointer" onClick={(e) => handleOpenWizard(e, 'inquire_500')}>
                  Inquire
                </a>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* 6. Why Trust Sere */}
        <SectionWrapper className="w-full py-24 px-6 md:px-12 bg-surface-container-low border-y border-outline-variant/20">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4">Why Trust Serefy Innovations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <Cpu className="text-primary w-12 h-12 mb-6" />
                <h3 className="font-headline text-xl font-bold mb-3">Precision Engineering</h3>
                <p className="text-on-surface-variant">Aerospace-grade sensors and custom-molded thermal chambers for zero variance.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Thermometer className="text-primary w-12 h-12 mb-6" />
                <h3 className="font-headline text-xl font-bold mb-3">Data-Driven Thermal Mgmt</h3>
                <p className="text-on-surface-variant">Active feedback loops maintaining 0.01°C accuracy across the entire unit.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="text-primary w-12 h-12 mb-6" />
                <h3 className="font-headline text-xl font-bold mb-3">Institutional Standards</h3>
                <p className="text-on-surface-variant">Built to exceed international biosecurity and structural durability standards.</p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* 7. Team + Supported By */}
        <SectionWrapper className="w-full py-24 px-6 md:px-12 bg-surface" id="team">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-16">
              <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-12 text-center">Our Leadership & Partners</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-20">
                <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 p-6 md:p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 ambient-shadow">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center overflow-hidden shrink-0 border-4 border-surface shadow-md">
                    <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80" alt="Aditya Magar" className="w-full h-full object-cover" />
                  </div>
                  <div className="pt-2">
                    <h4 className="font-headline font-bold text-2xl mb-1">Aditya Magar</h4>
                    <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Founder</p>
                    <a href="https://www.linkedin.com/in/aditya-magar-513b0b2a7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-on-surface hover:text-white hover:bg-primary px-4 py-2 rounded-full border border-outline-variant transition-colors text-sm font-semibold">
                      <Linkedin size={16} /> Connect
                    </a>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 p-6 md:p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 ambient-shadow">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center overflow-hidden shrink-0 border-4 border-surface shadow-md">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" alt="Vidhya Gaikwad" className="w-full h-full object-cover" />
                  </div>
                  <div className="pt-2">
                    <h4 className="font-headline font-bold text-2xl mb-1">Vidhya Gaikwad</h4>
                    <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Founder</p>
                    <a href="https://www.linkedin.com/in/vidhya-gaikwad-402475255" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-on-surface hover:text-white hover:bg-primary px-4 py-2 rounded-full border border-outline-variant transition-colors text-sm font-semibold">
                      <Linkedin size={16} /> Connect
                    </a>
                  </div>
                </motion.div>
              </div>
              <div className="pt-12 border-t border-outline-variant/30 text-center">
                <p className="font-label text-xs font-bold text-primary uppercase tracking-widest mb-10">Supported By</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
                  <span className="font-headline font-bold text-lg md:text-xl text-on-surface-variant">AIC Mahindra</span>
                  <span className="font-headline font-bold text-lg md:text-xl text-on-surface-variant">NMIMS Atal Incubation Centre</span>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* 7.5 SereTalks (Media/Resources) */}
        <SectionWrapper className="w-full py-24 px-6 md:px-12 bg-surface border-t border-outline-variant/20" id="seretalks">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4">SereTalks</h2>
              <p className="text-on-surface-variant text-lg">Insights and updates from our journey</p>
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
        <SectionWrapper className="w-full py-32 px-6 md:px-12 bg-surface-container-low" id="pre-order">
          <div className="max-w-screen-md mx-auto bg-surface p-10 md:p-16 rounded-3xl border border-outline-variant/30 ambient-shadow">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface mb-4">Register Interest</h2>
              <p className="text-on-surface-variant">Secure your position in our next deployment cycle.</p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleBottomFormSubmit}>
              <div className="flex flex-col gap-2">
                <label className="font-label text-sm font-semibold text-on-surface-variant" htmlFor="first-name">First Name</label>
                <input className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" id="first-name" name="first-name" placeholder="John" required type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-sm font-semibold text-on-surface-variant" htmlFor="last-name">Last Name</label>
                <input className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" id="last-name" name="last-name" placeholder="Doe" required type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-sm font-semibold text-on-surface-variant" htmlFor="email">Email Address</label>
                <input className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" id="email" name="email" placeholder="john@doe.com" required type="email" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-sm font-semibold text-on-surface-variant" htmlFor="phone">Phone / WhatsApp</label>
                <input className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" id="phone" name="phone" placeholder="+91 98765 43210" required type="tel" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-sm font-semibold text-on-surface-variant" htmlFor="city">City / Location</label>
                <input className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" id="city" name="city" placeholder="Hyderabad" required type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-sm font-semibold text-on-surface-variant" htmlFor="role">I am a...</label>
                <select className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none appearance-none" id="role" name="role" required defaultValue="">
                  <option value="" disabled>Select your role</option>
                  <option value="farmer">Farmer</option>
                  <option value="hobbyist">Hobbyist</option>
                  <option value="investor">Investor / Institution</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-label text-sm font-semibold text-on-surface-variant" htmlFor="message">Message (Optional)</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none min-h-[80px] resize-y" id="message" name="message" placeholder="Any specific requirements..."></textarea>
              </div>
              <label className="md:col-span-2 flex items-start gap-3 rounded-2xl bg-surface-container-low px-4 py-3 text-left text-sm text-on-surface-variant">
                <input className="mt-1 h-4 w-4 rounded border-outline-variant accent-primary" required type="checkbox" name="consent" />
                <span>I agree to be contacted by the Serefy Innovations team via call, email, or WhatsApp about this enquiry.</span>
              </label>
              {leadError && !isWizardOpen ? (
                <p className="md:col-span-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {leadError}
                </p>
              ) : null}
              <div className="md:col-span-2 pt-4">
                <button className="w-full btn-primary text-on-primary font-label font-bold px-8 py-4 rounded-xl hover:bg-primary-container transition-all shadow-lg disabled:cursor-not-allowed disabled:opacity-60" disabled={isSubmittingLead} type="submit">
                  {isSubmittingLead ? 'Submitting Interest...' : 'Submit Interest'}
                </button>
              </div>
            </form>
          </div>
        </SectionWrapper>
      </main>

      <WizardModal isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} onSubmit={handleWizardSubmit} isSubmitting={isSubmittingLead} submitError={leadError} />
      <ThankYouModal isOpen={isThankYouOpen} onClose={() => setIsThankYouOpen(false)} name={submitName} />
      <LegalModal isOpen={!!legalModalOpen} onClose={() => setLegalModalOpen(null)} type={legalModalOpen} />

      {/* Footer */}
      <footer className="w-full bg-surface-container border-t border-outline-variant/30 py-16 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline font-bold text-sm">
                  S
                </div>
                <div className="text-xl font-extrabold text-on-surface font-headline tracking-tight">
                  Serefy Innovations
                </div>
              </div>
              <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed">
                Precision engineering for the next generation of institutional cultivation.
              </p>
              <div className="mt-2 text-on-surface-variant text-sm font-medium">
                Bahadurpally, Hyderabad 500043
              </div>
              <p className="font-label text-xs font-bold text-primary uppercase tracking-widest mt-4">Join Our Journey</p>
              <div className="flex gap-4">
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="mailto:serefy.connect@gmail.com" aria-label="Email"><Mail size={20} /></a>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.linkedin.com/company/serefy-innovations" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.youtube.com/@SERETalks" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={20} /></a>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.instagram.com/sere_talks" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.facebook.com/share/1FuWiwpX8R" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div className="flex flex-col gap-4">
                <p className="font-label text-xs font-bold text-primary uppercase tracking-widest">Company</p>
                <a className="text-on-surface-variant font-label text-sm hover:text-primary transition-colors" href="#">About Us</a>
                <a className="text-on-surface-variant font-label text-sm hover:text-primary transition-colors" href="#">Careers</a>
                <a className="text-on-surface-variant font-label text-sm hover:text-primary transition-colors" href="#">Press Kit</a>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-label text-xs font-bold text-primary uppercase tracking-widest">Support</p>
                <a className="text-on-surface-variant font-label text-sm hover:text-primary transition-colors" href="#">Help Center</a>
                <a className="text-on-surface-variant font-label text-sm hover:text-primary transition-colors" href="#">Documentation</a>
                <a className="text-on-surface-variant font-label text-sm hover:text-primary transition-colors" href="#">Contact Sales</a>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-label text-xs font-bold text-primary uppercase tracking-widest">Legal & Info</p>
                <a className="text-on-surface-variant font-label text-sm hover:text-primary transition-colors cursor-pointer" onClick={() => setLegalModalOpen('privacy')}>Privacy Policy</a>
                <a className="text-on-surface-variant font-label text-sm hover:text-primary transition-colors cursor-pointer" onClick={() => setLegalModalOpen('terms')}>Terms of Service</a>
                <a className="text-on-surface-variant font-label text-sm hover:text-primary transition-colors cursor-pointer" onClick={() => setLegalModalOpen('disclaimer')}>Disclaimer</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-on-surface-variant font-label text-sm tracking-wide">
              © 2026 Serefy Innovations. Empowering growth through stability.
            </div>
            <div className="text-on-surface-variant font-label text-sm">
              serefy.connect@gmail.com
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
