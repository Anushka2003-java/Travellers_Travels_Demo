import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, Compass, Key } from 'lucide-react';
import { GALLERY } from '../data';

export default function Gallery() {
  const [selectedDest, setSelectedDest] = useState<'Goa' | 'Kashmir' | 'Kerala' | 'Dubai' | 'Thailand' | 'Bali'>('Goa');
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; location: string } | null>(null);

  const filterTabs: { id: 'Goa' | 'Kashmir' | 'Kerala' | 'Dubai' | 'Thailand' | 'Bali'; label: string; tag: string }[] = [
    { id: 'Goa', label: 'Goa Beaches', tag: 'Sun & Sands' },
    { id: 'Kashmir', label: 'Kashmir Valley', tag: 'Alpine Slopes' },
    { id: 'Kerala', label: 'Kerala Eco-Waterways', tag: 'Serene Lakes' },
    { id: 'Bali', label: 'Bali Sanctuaries', tag: 'Tropical Jungle' },
    { id: 'Thailand', label: 'Thailand Islands', tag: 'Teal Lagoons' },
    { id: 'Dubai', label: 'Dubai Skyline', tag: 'Desert dunes' }
  ];

  const filteredItems = GALLERY.filter(item => item.category === selectedDest);

  return (
    <section id="gallery-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-sunset mb-3">
              Immersive Lens
            </p>
            <h2 className="font-serif text-3xl sm:text-4.5xl font-medium tracking-tight text-brand-ocean leading-tight">
              A Glimpse of the <br />
              <span className="italic text-brand-ocean-light">Estates We Curate</span>
            </h2>
          </div>
          <p className="font-sans text-xs text-slate-500 font-light max-w-sm leading-relaxed">
            Authentic landscape captures. Toggle destinations below to view specific local atmospheres. We strictly guarantee zero digital manipulation in our imagery.
          </p>
        </div>

        {/* Exquisite Navigation Tabs */}
        <div id="gallery-tabs" className="flex flex-wrap gap-2 md:gap-3 border-b border-brand-sand-dark/10 pb-6 mb-12">
          {filterTabs.map((tab) => {
            const isTabActive = selectedDest === tab.id;
            return (
              <button
                id={`gallery-tab-btn-${tab.id}`}
                key={tab.id}
                onClick={() => setSelectedDest(tab.id)}
                className={`flex-1 min-w-[140px] text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isTabActive
                    ? 'bg-brand-ocean border-brand-ocean text-white shadow-md'
                    : 'bg-brand-sand-light border-brand-sand-dark/10 text-slate-700 hover:border-brand-sand'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-serif text-sm font-semibold ${isTabActive ? 'text-brand-sand' : 'text-slate-800'}`}>
                    {tab.id}
                  </span>
                  <Compass className={`h-3 w-3 ${isTabActive ? 'text-brand-sand-accent animate-spin-slow' : 'text-slate-400'}`} />
                </div>
                <p className={`font-sans text-[10px] tracking-wider uppercase mt-1 ${isTabActive ? 'text-slate-300' : 'text-slate-400'}`}>
                  {tab.tag}
                </p>
              </button>
            );
          })}
        </div>

        {/* Gallery Image Grid with Staggered Animations */}
        <motion.div
          id="gallery-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 relative"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                onClick={() => setLightboxImage({ url: item.imageUrl, title: item.title, location: item.location })}
                className="group relative h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-md border border-slate-100 cursor-pointer"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                  referrerPolicy="no-referrer"
                />

                {/* Shading gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent transition-opacity duration-500" />

                {/* Floating details banner on hover */}
                <div className="absolute bottom-0 left-0 w-full p-8 flex items-end justify-between z-10">
                  <div className="text-left text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-mono text-[9px] tracking-widest uppercase text-brand-sand-accent">
                      {item.location}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium mt-1">
                      {item.title}
                    </h3>
                  </div>

                  {/* Expand badge */}
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 text-white opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox full-size Overlay modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div id="gallery-lightbox" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark mask */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            />

            {/* Core Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden z-10"
            >
              {/* Close controls */}
              <button
                id="btn-lightbox-close"
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 z-20 bg-black/40 hover:bg-black/80 backdrop-blur-md text-white p-3 rounded-full border border-white/10 transition-colors cursor-pointer"
              >
                ╳
              </button>

              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="w-full max-h-[80vh] object-contain mx-auto"
                referrerPolicy="no-referrer"
              />

              {/* Description Panel */}
              <div className="bg-slate-900 border-t border-white/5 p-6 text-left text-white">
                <span className="font-mono text-[9.5px] tracking-widest uppercase text-brand-sand-accent">
                  {lightboxImage.location}
                </span>
                <h4 className="font-serif text-xl font-semibold mt-1">
                  {lightboxImage.title}
                </h4>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
