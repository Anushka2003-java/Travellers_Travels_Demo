import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, ShieldCheck, CheckCircle2, Ticket, Sparkles, Filter } from 'lucide-react';
import { PACKAGES } from '../data';
import { TourPackage } from '../types';

interface PackagesProps {
  onPlanTripClick: (destinationId?: string) => void;
  filterByDestinationId?: string | null;
}

export default function Packages({ onPlanTripClick, filterByDestinationId = null }: PackagesProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Sync if another page requests filtering
  useEffect(() => {
    if (filterByDestinationId) {
      setActiveFilter(filterByDestinationId);
    }
  }, [filterByDestinationId]);

  const filterButtons = [
    { id: 'all', label: 'All Packages' },
    { id: 'goa', label: 'Goa Coast' },
    { id: 'kashmir', label: 'Kashmir Valleys' },
    { id: 'kerala', label: 'Kerala Serenity' },
    { id: 'bali', label: 'Bali Safaris' },
    { id: 'thailand', label: 'Thailand Islands' },
    { id: 'dubai', label: 'Dubai Opulence' }
  ];

  const filteredPackages = activeFilter === 'all'
    ? PACKAGES
    : PACKAGES.filter(p => p.destinationId === activeFilter);

  return (
    <section id="packages-section" className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-sunset mb-3">
            Bespoke Holiday Packages
          </p>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-medium tracking-tight text-brand-ocean">
            Hand-Designed Itineraries <br />
            <span className="italic text-brand-ocean-light">Ready to Embark</span>
          </h2>
          <div className="h-[1px] w-12 bg-brand-sunset/40 mx-auto mt-6" />
        </div>

        {/* Filter Controls */}
        <div id="packages-filter-bar" className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16 select-none max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-slate-400 mr-2 text-xs font-mono">
            <Filter className="h-3.5 w-3.5" />
            <span>Filter:</span>
          </div>
          {filterButtons.map((btn) => (
            <button
              id={`pack-filter-btn-${btn.id}`}
              key={btn.id}
              onClick={() => setActiveFilter(btn.id)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === btn.id
                  ? 'bg-brand-ocean text-white shadow-md font-medium'
                  : 'bg-white border border-brand-sand-dark/12 text-slate-600 hover:border-brand-sand hover:text-brand-ocean'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Package list grid */}
        <motion.div
          id="packages-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-brand-sand-dark/10 flex flex-col justify-between group h-full hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  {/* Thumbnail Banner with duration overlay */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                    {/* Popular Tag */}
                    {pkg.isPopular && (
                      <div className="absolute top-4 left-4 bg-brand-sunset text-white px-3 py-1 rounded-full border border-brand-sunset-light/20 shadow-md">
                        <span className="font-sans text-[8px] font-bold tracking-widest uppercase flex items-center gap-1">
                          <Sparkles className="h-2.5 w-2.5 animate-pulse" />
                          Signature Choice
                        </span>
                      </div>
                    )}

                    {/* Duration badge */}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3.5 py-1 rounded-full border border-white/50 flex items-center gap-1.5 shadow-sm">
                      <Clock className="h-3 w-3 text-brand-ocean" />
                      <span className="font-sans text-[10px] font-semibold text-brand-ocean">
                        {pkg.duration}
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 text-left">
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-brand-sunset font-semibold">
                      {pkg.destinationName} Escape
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-brand-ocean leading-snug mt-1 group-hover:text-brand-sunset-dark transition-colors duration-300">
                      {pkg.title}
                    </h3>

                    {/* Price banner */}
                    <div className="my-4 pb-4 border-b border-slate-100 flex items-baseline gap-1.5">
                      <span className="font-sans text-[9px] text-slate-400 uppercase tracking-widest font-semibold">starts at</span>
                      <span className="font-serif text-xl sm:text-2xl font-bold text-brand-ocean">{pkg.startingPrice}</span>
                      <span className="font-sans text-[9px] text-slate-400">/ person</span>
                    </div>

                    {/* Checklists - Highlights */}
                    <div className="space-y-4 text-left">
                      <div>
                        <span className="font-sans text-[9.5px] tracking-wider uppercase text-slate-400 font-bold block mb-2">
                          Experience Highlights
                        </span>
                        <ul className="space-y-1.5 list-none">
                          {pkg.highlights.slice(0, 2).map((h, i) => (
                            <li key={i} className="flex gap-2 text-[11px] text-slate-700 leading-normal">
                              <span className="text-brand-sunset-light font-bold">•</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Checklists - Inclusions */}
                      <div>
                        <span className="font-sans text-[9.5px] tracking-wider uppercase text-slate-400 font-bold block mb-2">
                          Inclusions
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {pkg.inclusions.slice(0, 3).map((inc, i) => (
                            <span key={i} className="px-2 py-0.5 bg-slate-50 border border-slate-100 rounded-lg text-[9px] font-semibold text-slate-500 font-mono">
                              ✓ {inc}
                            </span>
                          ))}
                          {pkg.inclusions.length > 3 && (
                            <span className="px-1.5 py-0.5 bg-slate-50 text-[9px] text-slate-400 font-medium font-mono">
                              +{pkg.inclusions.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="p-6 bg-brand-sand-light/40 border-t border-slate-100">
                  <button
                    id={`btn-pkg-inquire-${pkg.id}`}
                    onClick={() => onPlanTripClick(pkg.destinationId)}
                    className="w-full bg-brand-ocean hover:bg-brand-ocean-light text-white font-sans text-xs tracking-widest uppercase py-3.5 px-4 rounded-xl shadow-md transition-all cursor-pointer text-center font-semibold"
                  >
                    Send Bespoke Inquiry
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
