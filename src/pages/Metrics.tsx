import { useLanguage } from '../context/LanguageContext';

export default function Metrics() {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-32 min-h-screen bg-white">

      {/* Header Section */}
      <header className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[9px] font-black tracking-[0.4em] uppercase bg-black text-white rounded-xl shadow-lg">
              Performance Analysis
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-black tracking-tighter leading-tight mb-6">
              {t('metrics.title')}
            </h1>
            <p className="text-base md:text-lg text-black font-black leading-relaxed">
              {t('metrics.desc')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-right-8 duration-1000">
            <button className="bg-green-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-black text-[10px] md:text-[11px] uppercase tracking-widest shadow-xl shadow-green-700/20 hover:-translate-y-1 hover:scale-[1.02] transition-all active:scale-95">
              Request a Demo
            </button>
            <button className="bg-green-950 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-black text-[10px] md:text-[11px] uppercase tracking-widest shadow-xl shadow-green-950/20 hover:-translate-y-1 hover:scale-[1.02] transition-all active:scale-95">
              Download Report
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 space-y-12">

        {/* Model Comparison & Efficiency Delta Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          <section className="lg:col-span-8 bg-green-50/30 rounded-[2rem] p-8 md:p-10 border border-green-100 shadow-sm animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-2xl font-black text-black mb-10 tracking-tight underline decoration-green-500/30 underline-offset-8">{t('metrics.compare.title')}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-separate border-spacing-y-4">
                <thead>
                  <tr className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-black">
                    <th className="pb-4 pl-2 md:pl-6">Feature</th>
                    <th className="pb-4 text-center">Traditional</th>
                    <th className="pb-4 text-center">Competitors</th>
                    <th className="pb-4 text-center text-green-700">SERE</th>
                  </tr>
                </thead>
                <tbody className="space-y-4 text-center">
                  <tr className="bg-white rounded-3xl overflow-hidden shadow-sm group hover:shadow-md transition-shadow">
                    <td className="p-6 text-left font-black text-black text-xs uppercase tracking-widest">Hatch Rate</td>
                    <td className="p-6 font-black text-black opacity-40">~60%</td>
                    <td className="p-6 font-black text-black opacity-40">75% - 80%</td>
                    <td className="p-6 font-black text-green-700">✅ 90%+</td>
                  </tr>
                  <tr className="bg-white rounded-3xl overflow-hidden shadow-sm">
                    <td className="p-6 text-left font-black text-black text-xs uppercase tracking-widest">Operation</td>
                    <td className="p-6 font-black text-black opacity-40">Manual Guesswork</td>
                    <td className="p-6 font-black text-black opacity-40">Semi-Automatic</td>
                    <td className="p-6 font-black text-green-700">Plug & Play AI</td>
                  </tr>
                  <tr className="bg-white rounded-3xl overflow-hidden shadow-sm">
                    <td className="p-6 text-left font-black text-black text-xs uppercase tracking-widest">Monitoring</td>
                    <td className="p-6 font-black text-black opacity-40">Constant Presence</td>
                    <td className="p-6 font-black text-black opacity-40">Dials & Switches</td>
                    <td className="p-6 font-black text-green-700">Automated Sensors</td>
                  </tr>
                  <tr className="bg-white rounded-3xl overflow-hidden shadow-sm">
                    <td className="p-6 text-left font-black text-black text-xs uppercase tracking-widest">Yield Risk</td>
                    <td className="p-6 font-black text-black opacity-60">High (Volatility)</td>
                    <td className="p-6 font-black text-black opacity-40">Moderate</td>
                    <td className="p-6 font-black text-green-700 font-black">Zero Variance</td>
                  </tr>
                  <tr className="bg-white rounded-3xl overflow-hidden shadow-sm">
                    <td className="p-6 text-left font-black text-black text-xs uppercase tracking-widest">Build Quality</td>
                    <td className="p-6 font-black text-black opacity-40">Basic/Open</td>
                    <td className="p-6 font-black text-black opacity-40">Industrial Metal</td>
                    <td className="p-6 font-black text-green-700 text-sm">Aerospace Insulation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Right: Efficiency Delta Card from Screenshot */}
          <aside className="lg:col-span-4 bg-green-900 rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full"></div>
            <h3 className="text-xl font-black mb-10 tracking-tight">Efficiency Delta</h3>
            <div className="space-y-8 md:space-y-12">
              <div>
                <div className="flex justify-between items-end mb-3">
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white">SERE Tech</p>
                  <p className="text-2xl md:text-3xl font-black text-green-400">90%</p>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[90%] bg-green-500 rounded-full shadow-lg shadow-green-500/40"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-3">
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white">Traditional</p>
                  <p className="text-2xl md:text-3xl font-black text-white">60%</p>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[60%] bg-white/40 rounded-full"></div>
                </div>
              </div>
            </div>
            <p className="mt-16 text-sm italic text-white leading-relaxed font-black opacity-90">
              "The 30% delta represents the difference between breaking even and consistent profitability."
            </p>
          </aside>
        </div>

        {/* ROI Intelligence Section from Screenshot */}
        <section className="bg-white rounded-[2rem] p-8 md:p-12 border border-green-100 shadow-sm animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-black text-black mb-4 tracking-tighter">{t('metrics.roi.title')}</h2>
              <p className="text-black font-black mb-12 opacity-80 leading-relaxed">Our data reflects the real-world performance of deployed units.</p>

              <div className="space-y-6">
                <div className="bg-green-50/50 p-6 rounded-3xl flex items-center gap-6 group hover:bg-green-50 hover:scale-[1.02] transition-all">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-green-700">payments</span>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-black uppercase tracking-widest">Year 1 Savings</p>
                    <p className="text-xl font-black text-black">₹50,000+</p>
                  </div>
                </div>
                <div className="bg-green-50/50 p-6 rounded-3xl flex items-center gap-6 group hover:bg-green-50 hover:scale-[1.02] transition-all">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-green-700">trending_up</span>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-black uppercase tracking-widest">Profit Growth</p>
                    <p className="text-xl font-black text-black">32% Increase</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50/50 rounded-[2rem] p-10 border border-green-100 flex flex-col items-center justify-center text-center">
              <p className="text-[10px] font-black text-black uppercase tracking-[0.3em] mb-4">Financial Summary</p>
              <h3 className="text-6xl font-black text-black mb-2 tracking-tighter">₹50K</h3>
              <p className="text-black font-black mb-8 opacity-90 text-lg">Net Impact in 12 Months</p>

              <div className="grid grid-cols-2 gap-8 w-full border-t border-green-200 pt-8 mb-10">
                <div>
                  <p className="text-[9px] font-black text-black uppercase mb-1">Hatchery Cost Savings</p>
                  <p className="text-black font-black text-lg">- ₹18,400</p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-black uppercase mb-1">Production Upside</p>
                  <p className="text-green-700 font-black text-lg">+ ₹68,400</p>
                </div>
              </div>

              <button className="w-full bg-green-600 text-white py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-green-600/20 hover:brightness-110 hover:scale-[1.02] transition-all active:scale-95">
                <span className="material-symbols-outlined text-sm">calculate</span>
                Calculate Your Specific Savings
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
