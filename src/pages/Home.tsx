import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-20 pb-24 md:pb-0">
      {/* Hero Section */}
      <section className="relative px-6 pt-12 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-tight tracking-tighter mb-6">
              Empowering Farmers with <span className="text-primary italic">Precision</span> Hatching.
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              The world's first truly automated, affordable egg incubator designed for self-reliant poultry farming. Maximize your yield, minimize your effort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-primary/20 transition-all text-center">
                Request a Demonstration
              </Link>
              <div className="flex items-center gap-3 px-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">DST NIDHI Recognized</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/10 rounded-[2rem] blur-3xl -rotate-6"></div>
            <img alt="SERE Incubator" className="relative z-10 w-full rounded-[2rem] shadow-2xl object-cover aspect-[4/5] transform group-hover:scale-[1.02] transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYIlAsKjTyO1ZIRMQT0nc0KD891ts0ZmEZQODcyNsYBRhVn0Qb9URajfnThQXcRMiUXMhZvboJ-6dWcztFUAsr6GpLhl7AZLNFOVjxJfxbHEE1yhB6d5HlVlrBS2lV_Jcr90lsCkLb1_8IDthAj0RcBBofDBu4yGnPfr-v5vFW5vf-RVvYmA0WAa0pQpmmwXZeAO0MTN4vCx1fp3MgjJ1516OW0lav73HrkiMjie2eToUilcKRwXAKPGEbN1UbnMqV3yqHnZwClQ" />
            {/* High Yield Badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-green-600 text-3xl">trending_up</span>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase">Success Rate</p>
                <p className="text-2xl font-black text-green-700">85–90% Yield</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="bg-surface-container-low py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-headline text-3xl font-extrabold text-secondary mb-4 uppercase tracking-tight">The Problem</h2>
            <p className="text-4xl font-headline font-bold text-on-surface">Stopping the Financial Drain on Small-Scale Farmers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-highest/50 p-8 rounded-xl grayscale hover:grayscale-0 transition-all duration-500 border-b-4 border-error/20">
              <span className="material-symbols-outlined text-error text-4xl mb-6">money</span>
              <h3 className="text-xl font-bold mb-3">Egg Utilization Gap</h3>
              <p className="text-on-surface-variant">Millions of fertile eggs go to waste or are sold at low food prices because farmers lack hatching capacity.</p>
            </div>
            <div className="bg-surface-container-highest/50 p-8 rounded-xl grayscale hover:grayscale-0 transition-all duration-500 border-b-4 border-error/20">
              <span className="material-symbols-outlined text-error text-4xl mb-6">payments</span>
              <h3 className="text-xl font-bold mb-3">Financial Drain</h3>
              <p className="text-on-surface-variant">Buying day-old chicks every month costs small farmers over ₹5,000 in recurring expenses.</p>
            </div>
            <div className="bg-surface-container-highest/50 p-8 rounded-xl grayscale hover:grayscale-0 transition-all duration-500 border-b-4 border-error/20">
              <span className="material-symbols-outlined text-error text-4xl mb-6">settings_input_component</span>
              <h3 className="text-xl font-bold mb-3">Costly Complexity</h3>
              <p className="text-on-surface-variant">Existing industrial incubators cost ₹25,000+ and require specialized knowledge to operate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-5 gap-2 max-w-sm mx-auto md:mx-0">
                {Array.from({ length: 25 }).map((_, i) => {
                  const isActive = [2, 7, 8, 12, 13, 14, 17, 18, 22].includes(i);
                  return (
                    <div key={i} className={`aspect-square rounded-lg ${isActive ? 'bg-tertiary shadow-lg shadow-tertiary/30' : 'bg-tertiary-container/30'} flex items-center justify-center transition-all duration-500`}>
                      {isActive && <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>egg</span>}
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 flex items-center gap-4 bg-tertiary-container/20 p-4 rounded-xl border border-tertiary/10">
                <span className="material-symbols-outlined text-tertiary">info</span>
                <p className="text-sm font-medium text-on-tertiary-container">Smart Tray Monitoring: Automated rotation and temperature mapping for every cell.</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-headline text-3xl font-extrabold text-primary mb-4 uppercase tracking-tight">The Solution</h2>
              <h3 className="text-5xl font-headline font-bold text-on-surface mb-8">Smart Hatching, Simplified.</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontWeight: 700 }}>check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">One-Touch Automation</h4>
                    <p className="text-on-surface-variant">Set and forget. Our AI handles humidity, turning, and heating cycles.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontWeight: 700 }}>check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Solar Compatibility</h4>
                    <p className="text-on-surface-variant">Engineered for rural India. Works seamlessly with existing power grids or solar kits.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontWeight: 700 }}>check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Modular Tray System</h4>
                    <p className="text-on-surface-variant">Scale from 50 to 500 eggs by simply adding stackable smart modules.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
