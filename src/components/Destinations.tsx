import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, ArrowRight, Sparkles, ChevronLeft, ArrowUpRight } from 'lucide-react';
import { DESTINATIONS } from '../data';
import { Destination } from '../types';

interface DestinationsProps {
  onPlanTripClick: (destinationId?: string) => void;
  onGoToPackages: (destinationId?: string) => void;
  initialSelectedId?: string | null;
}

export default function Destinations({ onPlanTripClick, onGoToPackages, initialSelectedId = null }: DestinationsProps) {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  // Synchronize if an external trigger asks us to view a specific destination
  useEffect(() => {
    if (initialSelectedId) {
      const found = DESTINATIONS.find(d => d.id === initialSelectedId);
      if (found) {
        setSelectedDestination(found);
      }
    }
  }, [initialSelectedId]);

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatePresence mode="wait">
          {!selectedDestination ? (
            /* =========================================================================
               GRID VIEW OVERVIEW
               ========================================================================= */
            <motion.div
              key="dest-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="text-center max-w-2xl mx-auto mb-16">
                <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-sunset mb-3 animate-pulse">
                  Unveiling the Extraordinary
                </p>
                <h2 className="font-serif text-3xl sm:text-4.5xl font-medium tracking-tight text-brand-ocean">
                  Chosen Landscapes to <br />
                  <span className="italic text-brand-ocean-light">Inspire Your Next Chapters</span>
                </h2>
                <div className="h-[1px] w-12 bg-brand-sunset/40 mx-auto mt-6" />
              </div>

              {/* Grid representation */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {DESTINATIONS.map((d, index) => (
                  <motion.div
                    key={d.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-md border border-brand-sand-dark/10 flex flex-col justify-between group h-full cursor-pointer hover:shadow-xl transition-all duration-300"
                  >
                    <div>
                      {/* Thumbnail frame */}
                      <div className="relative h-64 w-full overflow-hidden">
                        <img
                          src={d.heroImage}
                          alt={d.name}
                          className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        {/* Soft overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                        {/* Category Floating label */}
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1 rounded-full border border-brand-sand-dark/25 shadow-sm">
                          <span className="font-sans text-[9px] font-bold tracking-wider uppercase text-brand-ocean-light">
                            {d.category}
                          </span>
                        </div>
                      </div>

                      {/* Content block */}
                      <div className="p-6 text-left">
                        <h3 className="font-serif text-2xl font-semibold text-brand-ocean group-hover:text-brand-sunset-dark transition-colors duration-300">
                          {d.name}
                        </h3>
                        <p className="font-sans italic text-xs text-slate-500 font-light mt-1">
                          {d.tagline}
                        </p>
                        <p className="font-sans text-xs text-slate-600 line-clamp-3 mt-4 leading-relaxed">
                          {d.overview}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action strip */}
                    <div className="px-6 py-4 bg-brand-sand-light/50 border-t border-brand-sand-dark/10 flex items-center justify-between select-none">
                      <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {d.duration}
                        </span>
                      </div>
                      <button
                        id={`btn-view-${d.id}`}
                        onClick={() => setSelectedDestination(d)}
                        className="flex items-center gap-2 font-sans font-semibold text-xs tracking-wider uppercase text-brand-ocean group-hover:text-brand-sunset-dark transition-all"
                      >
                        <span>Examines details</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* =========================================================================
               DETAILED VIEW DEEP-DIVE
               ========================================================================= */
            <motion.div
              key="dest-detail"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3.5xl overflow-hidden shadow-2xl border border-brand-sand-dark/20"
            >
              {/* Back controls */}
              <div className="p-6 sm:px-10 border-b border-brand-sand-dark/12 flex items-center">
                <button
                  id="btn-dest-back-grid"
                  onClick={() => setSelectedDestination(null)}
                  className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase font-semibold text-slate-500 hover:text-brand-ocean transition-all cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Return to Destinations</span>
                </button>
              </div>

              {/* Large Hero Banner */}
              <div className="relative h-[420px] md:h-[500px] w-full">
                <img
                  src={selectedDestination.heroImage}
                  alt={selectedDestination.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

                {/* Left/Bottom title overlays */}
                <div className="absolute bottom-10 left-6 sm:left-12 text-left text-white max-w-3xl">
                  <span className="font-mono text-xs tracking-[0.3em] uppercase text-brand-sand-accent font-semibold block mb-2">
                    {selectedDestination.category}
                  </span>
                  <h1 className="font-serif text-4xl sm:text-5.5xl font-semibold tracking-tight leading-none">
                    {selectedDestination.name}
                  </h1>
                  <p className="font-sans italic text-slate-300 text-sm sm:text-base font-light mt-3 max-w-xl">
                    "{selectedDestination.tagline}"
                  </p>
                </div>
              </div>

              {/* Deep Details Page Body */}
              <div className="p-6 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
                {/* Left/Primary column: Overview & Highlights (8 cols) */}
                <div className="lg:col-span-8 space-y-10">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-brand-ocean mb-4">
                      About the Journey
                    </h3>
                    <p className="font-sans text-slate-600 text-sm leading-relaxed font-light">
                      {selectedDestination.overview}
                    </p>
                  </div>

                  {/* Highlights section */}
                  <div className="p-8 bg-brand-sand-light rounded-3xl border border-brand-sand/15">
                    <h4 className="font-serif text-lg font-semibold text-brand-ocean mb-6 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-brand-sand-accent" />
                      <span>Curated Signature Highlights</span>
                    </h4>
                    <ul className="space-y-4">
                      {selectedDestination.highlights.map((h, index) => (
                        <li key={index} className="flex gap-3 text-xs text-slate-700 leading-normal">
                          <span className="font-mono text-brand-sunset font-bold">0{index + 1}.</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Guided activities */}
                  <div>
                    <h4 className="font-serif text-xl font-bold text-brand-ocean mb-4">
                      Bespoke Experiences
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedDestination.popularActivities.map((act, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                          <span className="w-2.5 h-2.5 rounded-full bg-brand-sunset" />
                          <span className="font-sans text-xs font-medium text-slate-800">{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Spec card (4 cols) */}
                <div className="lg:col-span-4 space-y-8">
                  {/* Practical Specs Block */}
                  <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl space-y-6">
                    <h4 className="font-serif text-lg font-semibold text-brand-ocean pb-4 border-b border-slate-200">
                      Bespoke Details
                    </h4>

                    {/* Season */}
                    <div>
                      <span className="font-sans text-[10px] tracking-wider uppercase text-slate-400 block font-semibold mb-1">
                        Best Season to View
                      </span>
                      <p className="font-serif text-sm font-semibold text-brand-ocean-light flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-brand-sunset" />
                        {selectedDestination.bestSeason}
                      </p>
                    </div>

                    {/* Ideal stay range */}
                    <div>
                      <span className="font-sans text-[10px] tracking-wider uppercase text-slate-400 block font-semibold mb-1">
                        Ideal Stay Duration
                      </span>
                      <p className="font-serif text-sm font-semibold text-brand-ocean flex items-center gap-2">
                        <Clock className="h-4 w-4 text-brand-sunset" />
                        {selectedDestination.duration}
                      </p>
                    </div>

                    {/* Fast info footnote */}
                    <p className="font-sans text-[10px] text-slate-400 font-light pt-2 leading-relaxed">
                      *All itineraries are customized specifically for premium travelers arriving out of Nagpur.
                    </p>
                  </div>

                  {/* Booking Cta Prompts */}
                  <div className="space-y-4">
                    <button
                      id="btn-detail-order-packages"
                      onClick={() => onGoToPackages(selectedDestination.id)}
                      className="w-full bg-brand-ocean text-white font-sans text-xs tracking-widest uppercase font-semibold py-4 px-6 rounded-2xl hover:bg-brand-ocean-light transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      <span>Explore Matching Packages</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                    <button
                      id="btn-detail-order-custom"
                      onClick={() => onPlanTripClick(selectedDestination.id)}
                      className="w-full bg-brand-sand-light border border-brand-sand text-brand-ocean font-sans text-xs tracking-widest uppercase font-semibold py-4 px-6 rounded-2xl hover:bg-brand-sand hover:text-brand-ocean transition-all cursor-pointer"
                    >
                      Bespoke Plan My Trip
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
