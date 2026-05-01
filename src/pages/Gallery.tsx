import { useState } from 'react';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

  const photos = [
    { id: 1, title: 'Expert Meetups', description: 'Collaborating with industry experts to refine technology.', url: '/media/gallery-expert-meetups.jpg' },
    { id: 2, title: 'Farmer Centric Design', description: 'Testing our incubators directly on the field with local farmers.', url: '/media/gallery-farmer-design.jpg' },
    { id: 3, title: 'Farmer Capacity Setup', description: 'A local farmer showcasing the precision transition.', url: '/media/gallery-farmer-setup.jpg' },
    { id: 4, title: 'Real Challenges', description: 'Understanding real problems faced by small-scale farmers.', url: '/media/gallery-real-challenges.jpg' },
    { id: 5, title: 'Healthy Hatch Results', description: '90%+ hatch rates from our incubator machines.', url: '/media/gallery-healthy-hatch.jpg' },
    { id: 6, title: 'The Problem We Solve', description: 'Eliminating cruel handling of birds with automation.', url: '/media/gallery-problem-solve.jpg' },
    { id: 7, title: 'Incubator Assembly', description: 'Precision manufacturing process for SERE units.', url: '/media/gallery-incubator-assembly.jpg' },
    { id: 8, title: 'Lab & Testing', description: 'Quality control and rigorous testing of our hardware.', url: '/media/gallery-lab-testing.jpg' },
    { id: 9, title: 'Team at Work', description: 'Our team building the next generation of smart incubation.', url: '/media/gallery-team-work.jpg' },
  ];

  return (
    <div className="pt-24 pb-32 min-h-screen bg-white">

      {/* Calligraphy Mix Header - Compact Scale */}
      <header className="max-w-5xl mx-auto px-6 mb-16 text-center animate-in fade-in slide-in-from-top-4 duration-1000">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.4em] uppercase bg-slate-900 text-white rounded-md shadow-xl">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
          Visual Journey
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
          Gallery <span className="font-['Playfair_Display'] italic font-black text-amber-500 lowercase mx-2">of</span> Impact.
        </h1>

        <div className="max-w-xl mx-auto">
          <p className="text-base md:text-lg text-slate-900 font-black leading-relaxed">
            Real moments from the field — team meetings, field visits, farmer interactions, and the precision engineering behind SERE.
          </p>
        </div>
        <div className="w-16 h-1 bg-amber-500 mx-auto mt-8 rounded-full opacity-20"></div>
      </header>

      {/* Modern Compact Switcher */}
      <div className="flex justify-center mb-16 px-6">
        <div className="bg-slate-50 p-1.5 rounded-2xl flex gap-1 border border-slate-100 shadow-sm">
          <button
            onClick={() => setActiveTab('photos')}
            className={`px-6 md:px-10 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'photos' ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Photos
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-6 md:px-10 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'videos' ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Videos
          </button>
        </div>
      </div>

      {/* 3x3 Equal Grid */}
      <main className="max-w-7xl mx-auto px-6">
        {activeTab === 'photos' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, i) => (
              <div
                key={photo.id}
                className="group relative animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="aspect-square rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-xl shadow-slate-200/50 transform group-hover:-translate-y-2 transition-all duration-700">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />

                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <h3 className="text-white text-xl font-black mb-2 tracking-tight">{photo.title}</h3>
                    <p className="text-white text-xs font-black leading-relaxed opacity-90">{photo.description}</p>
                  </div>
                </div>

                <div className="mt-4 px-4 group-hover:opacity-0 transition-opacity duration-300 text-center lg:text-left">
                  <p className="text-amber-600 text-[10px] font-black uppercase tracking-widest mb-1">{photo.title}</p>
                  <p className="text-slate-900 text-xs font-black line-clamp-1">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-40 text-center bg-slate-50 rounded-[4rem] border-2 border-dashed border-slate-200">
            <span className="material-symbols-outlined text-slate-200 text-4xl mb-4">play_circle</span>
            <h3 className="text-xl font-black text-slate-900">Videos coming soon</h3>
          </div>
        )}
      </main>
    </div>
  );
}
