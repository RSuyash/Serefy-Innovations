export default function Metrics() {
  return (
    <div className="pt-24 pb-24 md:pb-0 px-6 max-w-7xl mx-auto">
      <header className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        <div>
          <span className="font-label text-xs font-bold tracking-widest uppercase text-secondary mb-4 block">Performance Analysis</span>
          <h1 className="font-headline text-5xl font-extrabold text-on-surface tracking-tight mb-6">Precision Poultry ROI.</h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
            Experience the shift from traditional guesswork to automated precision. SERE incubators don't just hatch eggs; they secure your biological assets through climate-controlled institutional technology.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-bold shadow-lg shadow-primary/10 hover:scale-[1.02] transition-transform active:scale-95">
            Request a Demo
          </button>
          <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-lg font-bold hover:bg-secondary hover:text-white transition-colors">
            Download Report
          </button>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl p-8 overflow-hidden">
          <h2 className="font-headline text-2xl font-bold mb-8">Model Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-4">
              <thead>
                <tr className="text-secondary font-label text-[10px] tracking-widest uppercase">
                  <th className="pb-4 pl-4">Specifications</th>
                  <th className="pb-4">SERE 120</th>
                  <th className="pb-4">SERE 240</th>
                  <th className="pb-4">SERE 500</th>
                </tr>
              </thead>
              <tbody className="space-y-4">
                <tr className="bg-surface-container-lowest rounded-lg overflow-hidden group">
                  <td className="p-6 font-bold text-secondary">Visual Profile</td>
                  <td className="p-6">
                    <div className="h-32 w-full rounded-lg bg-surface-variant overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="SERE 120" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfRLyvkPl0Jp685yDHoanGUzyoNn4cdNj296165CodKjseI5s6Lm_yhDrrqxV1tKZJB9_tD6QNH19Ynj8A5bRbQ0W6jnAoG4OIRKwn1pWzYdYykTDm6tV7gwzjMh6cSZ5vZ354vb4Qa88-ksx25KjOH5RVU9zobjMgqZqxb5EjU8l-LU0q4_AyBbvtZD8gecfUCREDEhKPtpK8yY-I15I1J93kDVtcP1j89xp_BGBNby3_Q7LQqyf8s_k3hf8CxivO72P-20Ijug" />
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="h-32 w-full rounded-lg bg-surface-variant overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="SERE 240" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaNCIKRXyxmOF_ww1lkMIK5vdeB1YdihyGnbvrECcJmADVWqJ5BKsM_mXt5_VX868cb9mLPr17vbkRUKc79dy-1KCjnwVmFIW6_3lSzYv9grzvSrwZmeAjC6aJhyjSDYBE8rY_6UKOGfUsubmIUEFdGaRo93DCnCzOBWBJ_zhCPZvhVkp-NS5ARHPBaRXao8pyd9zeweWG1MERmrPHAHLRQXIfsDgnA9Ar0y4p8fBBNNsIN_XbBzay98YATfjsOOoyEAdZlLmk_g" />
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="h-32 w-full rounded-lg bg-surface-variant overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="SERE 500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_MAU0OfH5CmD34vb00O73nHvd2W1P-9qr5f3_qZCoj3TVDNIdkYsFR9CFl8gaHgrX4DKq3U9ZA18gLDWDppQDTFl7cyrVXd0QH1tIHpMoyWa_Kgp8EuMw3vpuNut4ufYnaQ8Bb5bQo4XPK__PjoT_KuyiNp4HRzj5XXejhUc7Hx5g5ST42aVsGK2dLLKhRRhhrVI8m8ynuK4pXnNALmFMlg1K4aRMN1nf12rcqMJbh8o3jVuM-JJpDOtYYLTmB2-VK9L-bZCHaQ" />
                    </div>
                  </td>
                </tr>
                <tr className="bg-surface-container-lowest/50">
                  <td className="p-6 font-medium text-on-surface-variant">Egg Capacity</td>
                  <td className="p-6 font-bold">120 Units</td>
                  <td className="p-6 font-bold text-primary">240 Units</td>
                  <td className="p-6 font-bold">500 Units</td>
                </tr>
                <tr className="bg-surface-container-lowest">
                  <td className="p-6 font-medium text-on-surface-variant">Investment</td>
                  <td className="p-6 font-bold">₹10,500</td>
                  <td className="p-6 font-bold">₹22,000</td>
                  <td className="p-6 font-bold">₹34,800</td>
                </tr>
                <tr className="bg-surface-container-lowest/50">
                  <td className="p-6 font-medium text-on-surface-variant">Hatch Rate</td>
                  <td className="p-6">
                    <div className="flex items-center gap-2 text-[#2E7D32]">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="font-bold">85%</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2 text-[#2E7D32]">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="font-bold">88%</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2 text-[#2E7D32]">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                      <span className="font-bold">92%</span>
                    </div>
                  </td>
                </tr>
                <tr className="bg-surface-container-lowest">
                  <td className="p-6 font-medium text-on-surface-variant">Automation</td>
                  <td className="p-6">Full Control</td>
                  <td className="p-6 font-bold text-secondary">Smart-Sync</td>
                  <td className="p-6">Enterprise</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <aside className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-secondary p-8 rounded-xl text-on-secondary relative overflow-hidden h-full flex flex-col justify-between">
            <div className="relative z-10">
              <h3 className="font-headline text-xl font-bold mb-8">Efficiency Delta</h3>
              <div className="mb-10">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm opacity-80 uppercase tracking-widest font-label">SERE Technology</span>
                  <span className="text-3xl font-extrabold">90%</span>
                </div>
                <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                  <div className="bg-primary-container h-full w-[90%]"></div>
                </div>
              </div>
              <div className="mb-8">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm opacity-80 uppercase tracking-widest font-label">Traditional Method</span>
                  <span className="text-3xl font-extrabold opacity-60">60%</span>
                </div>
                <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                  <div className="bg-white/40 h-full w-[60%]"></div>
                </div>
              </div>
              <p className="text-sm opacity-90 leading-relaxed italic border-l-2 border-primary-container pl-4">
                "The 30% delta represents the difference between breaking even and consistent profitability."
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-10">
              <span className="material-symbols-outlined text-[160px]">monitoring</span>
            </div>
          </div>
        </aside>

        <section className="col-span-12 bg-surface-container-lowest rounded-xl p-8 lg:p-12 shadow-xl shadow-surface-container-low relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="font-headline text-3xl font-bold mb-6">ROI Intelligence</h2>
              <p className="text-on-surface-variant mb-10 max-w-md">Our data reflects the real-world performance of 2,000+ units deployed across rural and commercial hubs.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 bg-surface-container-low rounded-lg transition-colors hover:bg-primary-container/10">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <div>
                    <div className="text-xs font-label uppercase tracking-wider text-outline">Year 1 Savings</div>
                    <div className="text-2xl font-extrabold text-on-surface">₹50,000+</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-6 bg-surface-container-low rounded-lg transition-colors hover:bg-secondary-container/10">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">trending_up</span>
                  </div>
                  <div>
                    <div className="text-xs font-label uppercase tracking-wider text-outline">Profit Growth</div>
                    <div className="text-2xl font-extrabold text-secondary">32% Increase</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F2F3FD] p-8 rounded-2xl flex flex-col justify-center text-center">
              <span className="font-label text-xs tracking-widest text-secondary font-bold mb-2 uppercase">Financial Summary</span>
              <div className="text-6xl font-black text-primary mb-4 tracking-tighter">₹50K</div>
              <div className="text-xl font-bold text-on-surface mb-6">Net Impact in 12 Months</div>
              <div className="grid grid-cols-2 gap-4 border-t border-outline-variant pt-8">
                <div>
                  <div className="text-[10px] uppercase font-bold text-outline-variant mb-1">Hatchery Cost Savings</div>
                  <div className="font-bold text-error">− ₹18,400</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-outline-variant mb-1">Production Upside</div>
                  <div className="font-bold text-[#2E7D32]">+ ₹68,400</div>
                </div>
              </div>
              <button className="mt-10 w-full bg-primary-container py-4 rounded-lg text-on-primary-container font-extrabold flex items-center justify-center gap-2 hover:brightness-95 transition-all">
                <span className="material-symbols-outlined">calculate</span>
                Calculate Your Specific Savings
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
