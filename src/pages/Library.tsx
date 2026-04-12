export default function Library() {
  return (
    <div className="pt-24 pb-24 md:pb-0 px-6 max-w-7xl mx-auto">
      <header className="mb-16">
        <h1 className="font-headline text-5xl font-extrabold text-on-surface tracking-tight mb-4">Knowledge Base</h1>
        <p className="text-on-surface-variant text-lg max-w-2xl">
          Access our comprehensive collection of manuals, research papers, and operational guides for SERE technology.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Manuals Category */}
        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/20 hover:border-primary/30 transition-colors group">
          <div className="w-12 h-12 bg-primary-container/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
            <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">menu_book</span>
          </div>
          <h2 className="font-headline text-2xl font-bold mb-4">User Manuals</h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center justify-between group/link">
                <div>
                  <p className="font-bold text-on-surface group-hover/link:text-primary transition-colors">SERE 120 Setup Guide</p>
                  <p className="text-xs text-on-surface-variant">PDF • 2.4 MB</p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover/link:text-primary">download</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between group/link">
                <div>
                  <p className="font-bold text-on-surface group-hover/link:text-primary transition-colors">SERE 240 Operations</p>
                  <p className="text-xs text-on-surface-variant">PDF • 3.1 MB</p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover/link:text-primary">download</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between group/link">
                <div>
                  <p className="font-bold text-on-surface group-hover/link:text-primary transition-colors">Troubleshooting Handbook</p>
                  <p className="text-xs text-on-surface-variant">PDF • 1.8 MB</p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover/link:text-primary">download</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Research Category */}
        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/20 hover:border-secondary/30 transition-colors group">
          <div className="w-12 h-12 bg-secondary-container/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
            <span className="material-symbols-outlined text-secondary group-hover:text-white transition-colors">science</span>
          </div>
          <h2 className="font-headline text-2xl font-bold mb-4">Research &amp; Data</h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center justify-between group/link">
                <div>
                  <p className="font-bold text-on-surface group-hover/link:text-secondary transition-colors">Hatch Rate Optimization Study</p>
                  <p className="text-xs text-on-surface-variant">Whitepaper • 2023</p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover/link:text-secondary">open_in_new</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between group/link">
                <div>
                  <p className="font-bold text-on-surface group-hover/link:text-secondary transition-colors">Solar Integration Efficiency</p>
                  <p className="text-xs text-on-surface-variant">Case Study • 2024</p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover/link:text-secondary">open_in_new</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Video Guides */}
        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/20 hover:border-tertiary/30 transition-colors group">
          <div className="w-12 h-12 bg-tertiary-container/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-tertiary transition-colors">
            <span className="material-symbols-outlined text-tertiary group-hover:text-white transition-colors">play_circle</span>
          </div>
          <h2 className="font-headline text-2xl font-bold mb-4">Video Tutorials</h2>
          <div className="space-y-4">
            <a href="#" className="block relative rounded-lg overflow-hidden group/vid">
              <div className="aspect-video bg-surface-variant relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-4xl opacity-80 group-hover/vid:scale-110 transition-transform">play_circle</span>
                </div>
              </div>
              <div className="mt-2">
                <p className="font-bold text-sm text-on-surface">Initial Setup &amp; Calibration</p>
                <p className="text-xs text-on-surface-variant">4:25 mins</p>
              </div>
            </a>
            <a href="#" className="block relative rounded-lg overflow-hidden group/vid">
              <div className="aspect-video bg-surface-variant relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-4xl opacity-80 group-hover/vid:scale-110 transition-transform">play_circle</span>
                </div>
              </div>
              <div className="mt-2">
                <p className="font-bold text-sm text-on-surface">Cleaning the Smart Trays</p>
                <p className="text-xs text-on-surface-variant">2:10 mins</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
