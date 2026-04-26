import { siteConfig } from '../config/siteConfig';

export default function Technology() {
  return (
    <div className="pt-16 pb-16 min-h-screen bg-white">
      
      {/* Hero Section from Screenshot */}
      <section className="max-w-7xl mx-auto px-6 pt-4 pb-10 md:pt-8 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center px-3 py-1 mb-4 text-[9px] font-black tracking-widest uppercase bg-slate-900 text-white rounded-md shadow-xl">
               <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
               THE ILLUMINATED LABORATORY
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight mb-4">
              Bridging <span className="font-['Playfair_Display'] italic text-amber-600">Tradition</span> <br/>
              & <span className="text-indigo-600">Precision</span>
            </h1>
            <p className="text-base text-slate-900 font-black max-w-lg mb-6 leading-relaxed opacity-80">
              We are reimagining the heartbeat of small-scale farming through surgical technology and empathetic design.
            </p>
            <button className="bg-amber-600 text-white px-10 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center gap-3 shadow-xl shadow-amber-600/20 hover:-translate-y-1 transition-all active:scale-95">
              Explore Technology <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000">
             <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTyU9AIyw6mQegf3dqwyYikSGAkJuS052qMwep421pmNQrXbQ754Z-hjw2T8B-b9JzbsUBtabkbA7og0Jp-2WSVmSIRHqg3_Ekcf5T1_SquQ3moU_XzCh1U_PvAsJCPqMwuYMcPNnXuwdnmiR8GD1AuxEfNdfZGeY_Y_nGt66DdQYPNGa-qsjTp3XuURUHKg12Vm7AhYWv7aChDWRYfNoKcDp4F6EgfwKD-2SKtTfUbOc03BWkI5nm9rPZwMc4GyBaGYNvaWWh3w" alt="SERE Incubator" />
             </div>
             {/* Overlay Card from Screenshot */}
             <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-float">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
                   <span className="material-symbols-outlined text-indigo-600 text-xl">precision_manufacturing</span>
                </div>
                <div>
                   <p className="text-[9px] font-black text-slate-900 uppercase tracking-widest">R&D Precision</p>
                   <p className="text-[8px] font-bold text-slate-400">Validated Technology</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Mission Section from Screenshot */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-100">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
               <p className="text-amber-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Our Mission</p>
               <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Organic Precision</h2>
            </div>
            <div>
               <p className="text-lg text-slate-900 font-black mb-8 leading-relaxed opacity-80">
                  Agricultural technology often leaves small-scale farmers behind. We believe that innovation shouldn't be reserved for industrial giants.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-8 rounded-2xl border-l-4 border-amber-500 shadow-sm shadow-slate-100">
                     <p className="text-[9px] font-black text-amber-600 uppercase tracking-widest mb-3">Target Capacity</p>
                     <p className="text-xl font-black text-slate-900 mb-2">200–500 Birds</p>
                     <p className="text-[10px] font-black text-slate-400">Optimized for small enterprise sustainability.</p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border-l-4 border-indigo-600 shadow-sm shadow-slate-100">
                     <p className="text-[9px] font-black text-indigo-600 uppercase tracking-widest mb-3">Access Equity</p>
                     <p className="text-xl font-black text-slate-900 mb-2">Universal Tech</p>
                     <p className="text-[10px] font-black text-slate-400">Bridging the gap between rural grit and silicon tech.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Team Section - Fixed Descriptions */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-100">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-3 tracking-tighter">The Minds Behind the Lab</h2>
            <p className="text-slate-900 font-black text-base opacity-60">Founded by BCS 2025 researchers with a passion for pragmatic agricultural solutions.</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vidhya Card */}
            <div className="bg-slate-50/50 p-6 rounded-[2.5rem] flex flex-col md:flex-row gap-8 border border-slate-100 shadow-sm group hover:bg-white transition-all">
               <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnozhxILLQ_MwnMeEDUmOd6Op1L0TkvqcneVXpI8GHawBFD1T_UYSSpBTT1kGGBtgd1WXF1DbkadifLr5xL5jpWwHNU5sBnGExIKP0aGr5ceHFo6m76faFcOXLA5O6thiPM_G6IwAx7IvDUCRkmN3WBTBG4ktqdeFcXM5Em5Of3-KdSKMYo_Bkfma3x7l_TsAwzthvBCbjOhQ1W-8vYbz022lBhvcqDHPPc40OvFDgesjoW5XJpE6tTGdvAvbqIp703E-DthUnWA" alt="Vidhya Gaikwad" />
               </div>
               <div className="w-full md:w-2/3">
                  <p className="text-[9px] font-black text-indigo-600 uppercase tracking-widest mb-1">Founder & CEO</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-1 tracking-tight">Vidhya Gaikwad</h3>
                  <p className="text-[9px] font-black text-amber-600 uppercase tracking-widest mb-4">BCS 2025 | Head of R&D</p>
                  <p className="text-sm text-slate-900 font-black leading-relaxed opacity-70">
                     Leading the strategic vision and biological research for SERE. Vidhya's focus on incubation physics has been the cornerstone of our hardware development.
                  </p>
               </div>
            </div>

            {/* Aditya Card */}
            <div className="bg-slate-50/50 p-6 rounded-[2.5rem] flex flex-col md:flex-row gap-8 border border-slate-100 shadow-sm group hover:bg-white transition-all">
               <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO4veJTclq2nLkU3QHQGHvuDKZ9hJVOwHBhQIpxlV3Y6L-_dpNGpGI1ALxT3Rqni6laRTsqAsksaZal2mVcpH9abqr_1kQSUMsapl9V88Ttoj4HC9BuLywr9IVhxg35F0miiZsqM_H3hsk7fvAAZvCrGqai6aKNd4Dp8AR0pzCAlf6mOtHKGi7L2soWu1dgSPYDyADR_TF67GSXncWm1sen6iY6CpMjn2KAsrlV--qJmaGmiwb65dt0Wd_iaqwWZq_v9GpLq1shQ" alt="Aditya Magar" />
               </div>
               <div className="w-full md:w-2/3">
                  <p className="text-[9px] font-black text-indigo-600 uppercase tracking-widest mb-1">Co-Founder & CTO</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-1 tracking-tight">Aditya Magar</h3>
                  <p className="text-[9px] font-black text-amber-600 uppercase tracking-widest mb-4">BCS 2025 | Head of Systems</p>
                  <p className="text-sm text-slate-900 font-black leading-relaxed opacity-70">
                     Driving the technological stack and software architecture. Aditya specializes in IoT integration and predictive analytics for agricultural hardware.
                  </p>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
