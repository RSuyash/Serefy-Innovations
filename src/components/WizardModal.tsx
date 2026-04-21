import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, Leaf, LayoutGrid, Briefcase, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface WizardFormData {
  role: string;
  capacity: string;
  partnershipType: string;
  goal: string;
  timeline: string;
  message: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
}

interface WizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: WizardFormData) => Promise<void> | void;
  isSubmitting?: boolean;
  submitError?: string;
}

const initialFormData: WizardFormData = {
  role: '',
  capacity: '',
  partnershipType: '',
  goal: '',
  timeline: '',
  message: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: ''
};

export default function WizardModal({ isOpen, onClose, onSubmit, isSubmitting = false, submitError = '' }: WizardModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<WizardFormData>(initialFormData);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset after closing animation 
      setTimeout(() => {
        setStep(1);
        setFormData(initialFormData);
      }, 300);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleNext = () => {
    if (step === 1 && !formData.role) return;
    if (step === 2 && (formData.role === 'farmer' || formData.role === 'hobbyist') && !formData.capacity) return;
    if (step === 2 && formData.role === 'investor' && !formData.partnershipType) return;
    if (step === 3 && (formData.role === 'farmer' || formData.role === 'hobbyist') && !formData.goal) return;
    if (step === 3 && formData.role === 'investor' && !formData.timeline) return;
    setStep((s) => s + 1);
  };

  const handlePrev = () => {
    setStep((s) => s - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  const totalSteps = 5;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-surface-container-lowest/80 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose}></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-surface w-full max-w-xl rounded-3xl shadow-2xl relative z-10 flex flex-col max-h-[90vh] overflow-hidden border border-outline-variant/30"
      >
        <div className="flex justify-between items-center p-6 border-b border-outline-variant/20">
          <div className="flex items-center gap-2">
            <span className="font-label text-xs font-bold text-primary uppercase tracking-widest">Step {step} of {totalSteps}</span>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">How do you identify?</h3>
                <p className="text-on-surface-variant mb-6 text-sm">Help us tailor the experience for you.</p>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { id: 'farmer', title: 'Farmer', icon: Leaf, desc: 'Individual or small-scale grower' },
                    { id: 'hobbyist', title: 'Hobbyist', icon: LayoutGrid, desc: 'Enthusiast or researcher' },
                    { id: 'investor', title: 'Investor / Institution', icon: Briefcase, desc: 'Commercial scale or funding' }
                  ].map((role) => (
                    <button
                      key={role.id}
                      onClick={() => { setFormData({ ...formData, role: role.id }); setTimeout(handleNext, 300); }}
                      className={`flex items-center p-4 rounded-2xl border-2 text-left transition-all ${formData.role === role.id ? 'border-primary bg-primary/5' : 'border-outline-variant/30 hover:border-outline bg-surface'}`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-4 ${formData.role === role.id ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant'}`}>
                        <role.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="font-headline font-bold text-lg text-on-surface">{role.title}</div>
                        <div className="text-on-surface-variant text-sm">{role.desc}</div>
                      </div>
                      <ChevronRight className={`transition-opacity ${formData.role === role.id ? 'opacity-100 text-primary' : 'opacity-0'}`} />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                {(formData.role === 'farmer' || formData.role === 'hobbyist') ? (
                  <>
                     <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">What capacity do you need?</h3>
                     <p className="text-on-surface-variant mb-6 text-sm">Select the hardware scale that fits your goals.</p>
                     <div className="grid grid-cols-1 gap-4">
                       {['120', '200', '500'].map((cap) => (
                         <button
                           key={cap}
                           onClick={() => { setFormData({ ...formData, capacity: cap }); setTimeout(handleNext, 300); }}
                           className={`p-5 rounded-2xl border-2 text-center transition-all flex justify-between items-center ${formData.capacity === cap ? 'border-primary bg-primary/5' : 'border-outline-variant/30 hover:border-outline bg-surface'}`}
                         >
                           <div className="font-headline text-2xl font-extrabold text-on-surface">जीone Series {cap}</div>
                           <ChevronRight className={`transition-opacity ${formData.capacity === cap ? 'opacity-100 text-primary' : 'opacity-0'}`} />
                         </button>
                       ))}
                     </div>
                  </>
                ) : (
                  <>
                     <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">What kind of partnership?</h3>
                     <p className="text-on-surface-variant mb-6 text-sm">Select the area best aligned with your goals.</p>
                     <div className="grid grid-cols-1 gap-4">
                       {[
                         { id: 'strategic', title: 'Strategic Investment' },
                         { id: 'reseller', title: 'Distribution / Reseller' },
                         { id: 'institutional', title: 'Institutional Buyer' },
                         { id: 'other', title: 'Other Partnership' }
                       ].map((type) => (
                         <button
                           key={type.id}
                           onClick={() => { setFormData({ ...formData, partnershipType: type.id }); setTimeout(handleNext, 300); }}
                           className={`p-5 rounded-2xl border-2 text-left transition-all flex justify-between items-center ${formData.partnershipType === type.id ? 'border-primary bg-primary/5' : 'border-outline-variant/30 hover:border-outline bg-surface'}`}
                         >
                           <div className="font-headline text-lg font-bold text-on-surface">{type.title}</div>
                           <ChevronRight className={`transition-opacity ${formData.partnershipType === type.id ? 'opacity-100 text-primary' : 'opacity-0'}`} />
                         </button>
                       ))}
                     </div>
                  </>
                )}
                <div className="mt-8 flex justify-between">
                  <button onClick={handlePrev} className="px-6 py-3 rounded-full font-label font-bold text-on-surface-variant hover:bg-surface-container transition-colors flex items-center gap-2">
                    <ArrowLeft size={18} /> Back
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                {(formData.role === 'farmer' || formData.role === 'hobbyist') ? (
                  <>
                     <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">What is your primary goal?</h3>
                     <p className="text-on-surface-variant mb-6 text-sm">Help us understand how we can help you succeed.</p>
                     <div className="grid grid-cols-1 gap-4">
                       {[
                         { id: 'hatch-rate', title: 'Improve hatch rate' },
                         { id: 'scale', title: 'Scale up operations' },
                         { id: 'research', title: 'Research / Specialty birds' },
                         { id: 'first-time', title: 'First time hatching' }
                       ].map((goal) => (
                         <button
                           key={goal.id}
                           onClick={() => { setFormData({ ...formData, goal: goal.id }); setTimeout(handleNext, 300); }}
                           className={`p-4 rounded-2xl border-2 text-left transition-all flex justify-between items-center ${formData.goal === goal.id ? 'border-primary bg-primary/5' : 'border-outline-variant/30 hover:border-outline bg-surface'}`}
                         >
                           <div className="font-headline text-lg font-bold text-on-surface">{goal.title}</div>
                           <ChevronRight className={`transition-opacity ${formData.goal === goal.id ? 'opacity-100 text-primary' : 'opacity-0'}`} />
                         </button>
                       ))}
                     </div>
                  </>
                ) : (
                  <>
                     <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">What is your timeline?</h3>
                     <p className="text-on-surface-variant mb-6 text-sm">When are you looking to move forward?</p>
                     <div className="grid grid-cols-1 gap-4">
                       {[
                         { id: 'immediate', title: 'Immediate (0-3 months)' },
                         { id: 'short', title: 'Short-term (3-6 months)' },
                         { id: 'exploring', title: 'Just exploring options for now' }
                       ].map((tl) => (
                         <button
                           key={tl.id}
                           onClick={() => { setFormData({ ...formData, timeline: tl.id }); setTimeout(handleNext, 300); }}
                           className={`p-4 rounded-2xl border-2 text-left transition-all flex justify-between items-center ${formData.timeline === tl.id ? 'border-primary bg-primary/5' : 'border-outline-variant/30 hover:border-outline bg-surface'}`}
                         >
                           <div className="font-headline text-lg font-bold text-on-surface">{tl.title}</div>
                           <ChevronRight className={`transition-opacity ${formData.timeline === tl.id ? 'opacity-100 text-primary' : 'opacity-0'}`} />
                         </button>
                       ))}
                     </div>
                  </>
                )}
                <div className="mt-8 flex justify-between">
                  <button onClick={handlePrev} className="px-6 py-3 rounded-full font-label font-bold text-on-surface-variant hover:bg-surface-container transition-colors flex items-center gap-2">
                    <ArrowLeft size={18} /> Back
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Any specific requirements?</h3>
                <p className="text-on-surface-variant mb-6 text-sm">Feel free to add any own details or questions (Optional).</p>
                <textarea 
                  className="w-full px-4 py-4 rounded-xl border-2 border-outline-variant/50 bg-surface focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none min-h-[160px] resize-y" 
                  placeholder={formData.role === 'investor' ? "We are looking for..." : "I currently use a different model..."}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                
                <div className="mt-8 flex justify-between">
                  <button onClick={handlePrev} className="px-6 py-3 rounded-full font-label font-bold text-on-surface-variant hover:bg-surface-container transition-colors flex items-center gap-2">
                    <ArrowLeft size={18} /> Back
                  </button>
                  <button onClick={handleNext} className="btn-primary text-on-primary px-8 py-3 rounded-full font-label font-bold hover:bg-primary-container transition-all flex items-center gap-2 shadow-lg">
                    Next <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Final Details</h3>
                <p className="text-on-surface-variant mb-6 text-sm">Where should we send the confirmation?</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider">First Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider">Last Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider">Email</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider">Phone / WhatsApp</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+91 98765 43210" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider">City / Location</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
                  </div>
                  
                  <div className="mt-6 flex justify-between">
                    <button type="button" onClick={handlePrev} className="px-6 py-3 rounded-full font-label font-bold text-on-surface-variant hover:bg-surface-container transition-colors flex items-center gap-2">
                      <ArrowLeft size={18} /> Back
                    </button>
                    <button type="submit" disabled={isSubmitting} className="btn-primary text-on-primary px-8 py-3 rounded-full font-label font-bold hover:bg-primary-container transition-all flex items-center gap-2 shadow-lg disabled:cursor-not-allowed disabled:opacity-60">
                      {isSubmitting ? 'Submitting...' : 'Submit'} <ArrowRight size={18} />
                    </button>
                  </div>
                  {submitError ? (
                    <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                      {submitError}
                    </p>
                  ) : null}
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
