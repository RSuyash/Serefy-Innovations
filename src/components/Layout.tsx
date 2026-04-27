import { Link, Outlet, useLocation } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-amber-500/10">

      {/* Modern Minimalist Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
          <Link to="/" className="text-xl font-black text-slate-900 flex items-center gap-2 group">
            <img src="/media/logo.png" alt="Serefy Innovations" className="h-10 w-auto object-contain" />
            <span className="font-headline tracking-tighter">{siteConfig.brand.name}</span>
          </Link>
          <div className="hidden md:flex gap-10 items-center">
            {['Technology', 'Metrics', 'Gallery'].map((item) => {
              const path = `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;
              return (
                <Link
                  key={item}
                  to={path}
                  className={`transition-all font-black uppercase tracking-[0.2em] text-xs relative py-1 ${isActive ? 'text-amber-600' : 'text-slate-500 hover:text-amber-600'}`}
                >
                  {item}
                </Link>
              );
            })}
          </div>
          <Link to="/contact" className="bg-slate-900 text-white px-7 py-2.5 rounded-full font-black text-xs hover:bg-amber-600 hover:shadow-xl hover:shadow-amber-500/20 hover:-translate-y-0.5 transition-all active:scale-95">
            Get Started
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>


      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${siteConfig.brand.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-28 md:bottom-10 right-8 z-[70] w-14 h-14 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all group overflow-hidden"
        aria-label="Contact on WhatsApp"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <svg className="w-7 h-7 fill-current relative z-10" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>


      {/* High-Contrast Professional Footer */}
      <footer className="bg-slate-950 text-white w-full pt-20 pb-10 mt-auto relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 px-8 max-w-7xl mx-auto relative z-10">
          <div className="md:col-span-5">
            <div className="text-3xl font-black text-white mb-6 flex items-center gap-3">
              <img src="/media/logo.png" alt="Serefy Innovations" className="h-12 w-auto object-contain brightness-0 invert" />
              {siteConfig.brand.name}
            </div>
            <p className="text-slate-200 text-lg leading-relaxed max-w-md mb-8 font-black opacity-100">
              Pioneering automated precision for the future of sustainable poultry farming in rural and semi-urban ecosystems.
            </p>
            <div className="flex gap-4">
              {['share', 'rss_feed'].map(icon => (
                <a key={icon} href="#" className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 transition-all duration-300">
                  <span className="material-symbols-outlined text-xl">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h5 className="text-amber-500 font-black uppercase text-xs tracking-[0.4em] mb-8">Partners</h5>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col group">
                <img src="/media/aic-mahindra.webp" alt="AIC Mahindra" className="h-12 w-auto object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-all" />
                <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-2">Incubation Centre</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4">
            <h5 className="text-amber-500 font-black uppercase text-xs tracking-[0.4em] mb-8">Quick Links</h5>
            <div className="grid grid-cols-1 gap-4">
              {[
                { name: 'Technology', path: '/technology' },
                { name: 'Performance Metrics', path: '/metrics' },
                { name: 'Visual Gallery', path: '/gallery' },
                { name: 'Contact Us', path: '/contact' }
              ].map(link => (
                <Link key={link.name} to={link.path} className="text-slate-100 hover:text-amber-500 transition-all text-sm font-black tracking-tight underline underline-offset-4 decoration-white/20 hover:decoration-amber-500">{link.name}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-white/10 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.
          </p>
        </div>
      </footer>


    </div>
  );
}
