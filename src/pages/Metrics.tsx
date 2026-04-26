import { useState } from 'react';

export default function Metrics() {
  return (
    <div className="pt-24 pb-32 min-h-screen bg-white">

      {/* Header Section Matches Screenshot Styling */}
      <header className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[9px] font-black tracking-[0.4em] uppercase bg-slate-900 text-white rounded-md shadow-lg">
              Performance Analysis
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight mb-6">
              Precision <span className="font-['Playfair_Display'] italic font-black text-amber-500 lowercase mx-1">Poultry</span> ROI.
            </h1>
            <p className="text-base md:text-lg text-slate-900 font-black leading-relaxed">
              Experience the shift from traditional guesswork to automated precision. SERE incubators don't just hatch eggs; they secure your biological assets through climate-controlled institutional technology.
            </p>
          </div>

          <div className="flex gap-4 animate-in fade-in slide-in-from-right-8 duration-1000">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest shadow-xl shadow-amber-600/20 hover:-translate-y-1 transition-all active:scale-95">
              Request a Demo
            </button>
            <button className="bg-indigo-400/80 text-white px-8 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest shadow-xl shadow-indigo-400/20 hover:-translate-y-1 transition-all active:scale-95">
              Download Report
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 space-y-12">

        {/* Model Comparison & Efficiency Delta Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left: Model Comparison Table */}
          <section className="lg:col-span-8 bg-slate-50 rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-2xl font-black text-slate-900 mb-10 tracking-tight underline decoration-amber-500/30 underline-offset-8">Model Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-separate border-spacing-y-4">
                <thead>
                  <tr className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">
                    <th className="pb-4 pl-6">Specifications</th>
                    <th className="pb-4 text-center">SERE 120</th>
                    <th className="pb-4 text-center text-amber-600">SERE 240</th>
                    <th className="pb-4 text-center">SERE 500</th>
                  </tr>
                </thead>
                <tbody className="space-y-4 text-center">
                  <tr className="bg-white rounded-3xl overflow-hidden shadow-sm group hover:shadow-md transition-shadow">
                    <td className="p-8 text-left font-black text-indigo-600 text-[11px] uppercase tracking-widest">Visual Profile</td>
                    <td className="p-4"><img className="h-28 w-28 object-contain mx-auto group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfRLyvkPl0Jp685yDHoanGUzyoNn4cdNj296165CodKjseI5s6Lm_yhDrrqxV1tKZJB9_tD6QNH19Ynj8A5bRbQ0W6jnAoG4OIRKwn1pWzYdYykTDm6tV7gwzjMh6cSZ5vZ354vb4Qa88-ksx25KjOH5RVU9zobjMgqZqxb5EjU8l-LU0q4_AyBbvtZD8gecfUCREDEhKPtpK8yY-I15I1J93kDVtcP1j89xp_BGBNby3_Q7LQqyf8s_k3hf8CxivO72P-20Ijug" /></td>
                    <td className="p-4"><img className="h-28 w-28 object-contain mx-auto group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaNCIKRXyxmOF_ww1lkMIK5vdeB1YdihyGnbvrECcJmADVWqJ5BKsM_mXt5_VX868cb9mLPr17vbkRUKc79dy-1KCjnwVmFIW6_3lSzYv9grzvSrwZmeAjC6aJhyjSDYBE8rY_6UKOGfUsubmIUEFdGaRo93DCnCzOBWBJ_zhCPZvhVkp-NS5ARHPBaRXao8pyd9zeweWG1MERmrPHAHLRQXIfsDgnA9Ar0y4p8fBBNNsIN_XbBzay98YATfjsOOoyEAdZlLmk_g" /></td>
                    <td className="p-4"><img className="h-28 w-28 object-contain mx-auto group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_MAU0OfH5CmD34vb00O73nHvd2W1P-9qr5f3_qZCoj3TVDNIdkYsFR9CFl8gaHgrX4DKq3U9ZA18gLDWDppQDTFl7cyrVXd0QH1tIHpMoyWa_Kgp8EuMw3vpuNut4ufYnaQ8Bb5bQo4XPK__PjoT_KuyiNp4HRzj5XXejhUc7Hx5g5ST42aVsGK2dLLKhRRhhrVI8m8ynuK4pXnNALmFMlg1K4aRMN1nf12rcqMJbh8o3jVuM-JJpDOtYYLTmB2-VK9L-bZCHaQ" /></td>
                  </tr>
                  <tr className="bg-white rounded-3xl overflow-hidden shadow-sm">
                    <td className="p-6 text-left font-black text-slate-900 text-xs uppercase tracking-widest">Egg Capacity</td>
                    <td className="p-6 font-black text-slate-900">120 Units</td>
                    <td className="p-6 font-black text-amber-600">240 Units</td>
                    <td className="p-6 font-black text-slate-900">500 Units</td>
                  </tr>
                  <tr className="bg-white rounded-3xl overflow-hidden shadow-sm">
                    <td className="p-6 text-left font-black text-slate-900 text-xs uppercase tracking-widest">Investment</td>
                    <td className="p-6 font-black text-slate-900">₹10,500</td>
                    <td className="p-6 font-black text-amber-600">₹22,000</td>
                    <td className="p-6 font-black text-slate-900">₹34,800</td>
                  </tr>
                  <tr className="bg-white rounded-3xl overflow-hidden shadow-sm">
                    <td className="p-6 text-left font-black text-slate-900 text-xs uppercase tracking-widest">Hatch Rate</td>
                    <td className="p-6 font-black text-slate-900">✅ 85%</td>
                    <td className="p-6 font-black text-amber-600">✅ 88%</td>
                    <td className="p-6 font-black text-slate-900">✅ 92%</td>
                  </tr>
                  <tr className="bg-white rounded-3xl overflow-hidden shadow-sm">
                    <td className="p-6 text-left font-black text-slate-900 text-xs uppercase tracking-widest">Automation</td>
                    <td className="p-6 font-black text-slate-900 text-sm">Full Control</td>
                    <td className="p-6 font-black text-indigo-600 text-sm">Smart-Sync</td>
                    <td className="p-6 font-black text-slate-900 text-sm">Enterprise</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Right: Efficiency Delta Card from Screenshot */}
          <aside className="lg:col-span-4 bg-[#4A55A2] rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full"></div>
            <h3 className="text-xl font-black mb-10 tracking-tight">Efficiency Delta</h3>
            <div className="space-y-12">
              <div>
                <div className="flex justify-between items-end mb-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white">SERE Technology</p>
                  <p className="text-3xl font-black text-amber-400">90%</p>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[90%] bg-amber-500 rounded-full shadow-lg shadow-amber-500/40"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Traditional Method</p>
                  <p className="text-3xl font-black text-white">60%</p>
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
        <section className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-sm animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">ROI Intelligence</h2>
              <p className="text-slate-900 font-black mb-12 opacity-80 leading-relaxed">Our data reflects the real-world performance of 2,000+ units deployed across rural and commercial hubs.</p>

              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-2xl flex items-center gap-6 group hover:bg-slate-100 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-amber-600">payments</span>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-900 uppercase tracking-widest">Year 1 Savings</p>
                    <p className="text-xl font-black text-slate-900">₹50,000+</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl flex items-center gap-6 group hover:bg-slate-100 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-indigo-600">trending_up</span>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-900 uppercase tracking-widest">Profit Growth</p>
                    <p className="text-xl font-black text-slate-900">32% Increase</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 flex flex-col items-center justify-center text-center">
              <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] mb-4">Financial Summary</p>
              <h3 className="text-6xl font-black text-slate-900 mb-2 tracking-tighter">₹50K</h3>
              <p className="text-slate-900 font-black mb-8 opacity-90 text-lg">Net Impact in 12 Months</p>

              <div className="grid grid-cols-2 gap-8 w-full border-t border-slate-200 pt-8 mb-10">
                <div>
                  <p className="text-[9px] font-black text-slate-900 uppercase mb-1">Hatchery Cost Savings</p>
                  <p className="text-rose-600 font-black text-lg">- ₹18,400</p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-900 uppercase mb-1">Production Upside</p>
                  <p className="text-emerald-600 font-black text-lg">+ ₹68,400</p>
                </div>
              </div>

              <button className="w-full bg-amber-500 text-white py-5 rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-amber-500/20 hover:brightness-110 transition-all active:scale-95">
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
