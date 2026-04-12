import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm dark:shadow-none">
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
          <Link to="/" className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-600 dark:text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>egg</span>
            <span className="font-headline tracking-tight">SERE Innovations</span>
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/technology" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 transition-colors font-label uppercase tracking-wider text-xs">Technology</Link>
            <Link to="/metrics" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 transition-colors font-label uppercase tracking-wider text-xs">Metrics</Link>
            <Link to="/library" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 transition-colors font-label uppercase tracking-wider text-xs">Library</Link>
          </div>
          <Link to="/contact" className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-bold scale-95 active:scale-90 transition-transform shadow-sm">
            Order Now
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#1A237E] dark:bg-slate-950 w-full pt-12 pb-8 mt-auto hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto text-center md:text-left">
          <div>
            <div className="text-lg font-bold text-white mb-4 flex items-center gap-2 justify-center md:justify-start">
              <span className="material-symbols-outlined text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>egg</span>
              SERE Innovations
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">Pioneering automation for the future of sustainable poultry farming in rural ecosystems.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-amber-500 font-bold uppercase text-xs tracking-widest mb-2">Partners</h5>
            <span className="text-slate-300 text-sm">AIC Mahindra</span>
            <span className="text-slate-300 text-sm">MSInS</span>
            <span className="text-slate-300 text-sm">DST NIDHI</span>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-amber-500 font-bold uppercase text-xs tracking-widest mb-2">Legal</h5>
            <Link to="/contact" className="text-slate-300 hover:text-amber-400 transition-colors text-sm">Contact</Link>
            <span className="text-slate-300 text-sm">Privacy Policy</span>
            <span className="text-slate-300 text-sm">Terms of Service</span>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-slate-300 text-sm tracking-wide">© 2024 SERE Innovations. All rights reserved.</p>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-outline-variant/10 z-[60] flex justify-around py-3 px-2 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <Link to="/" className={`flex flex-col items-center gap-1 ${location.pathname === '/' ? 'text-amber-600' : 'text-slate-400'}`}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: location.pathname === '/' ? "'FILL' 1" : "'FILL' 0" }}>home</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Home</span>
        </Link>
        <Link to="/technology" className={`flex flex-col items-center gap-1 ${location.pathname === '/technology' ? 'text-amber-600' : 'text-slate-400'}`}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: location.pathname === '/technology' ? "'FILL' 1" : "'FILL' 0" }}>settings_accessibility</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Process</span>
        </Link>
        <Link to="/metrics" className={`flex flex-col items-center gap-1 ${location.pathname === '/metrics' ? 'text-amber-600' : 'text-slate-400'}`}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: location.pathname === '/metrics' ? "'FILL' 1" : "'FILL' 0" }}>monitoring</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Metrics</span>
        </Link>
        <Link to="/library" className={`flex flex-col items-center gap-1 ${location.pathname === '/library' ? 'text-amber-600' : 'text-slate-400'}`}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: location.pathname === '/library' ? "'FILL' 1" : "'FILL' 0" }}>library_books</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Library</span>
        </Link>
      </nav>
    </div>
  );
}
