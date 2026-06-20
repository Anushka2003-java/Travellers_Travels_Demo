import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ShieldCheck, MapPin } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onPlanTripClick: () => void;
  onSelectDestination: (id: string) => void;
}

const BACKGROUNDS = [
  {
    url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1920',
    title: 'Bali',
    accent: 'Tropical Sanctuaries'
  },
  {
    url: 'https://images.unsplash.com/photo-1588096383098-2335ac1dc556?auto=format&fit=crop&q=80&w=1920',
    title: 'Kashmir',
    accent: 'Meadows of Gulmarg'
  },
  {
    url: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=1920',
    title: 'Kerala',
    accent: 'Silent Alleppey Backwaters'
  }
];

export default function Hero({ onExploreClick, onPlanTripClick, onSelectDestination }: HeroProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % BACKGROUNDS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero-section" className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.7, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2.2, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${BACKGROUNDS[index].url})` }}
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-950/70 z-10" />
      </div>

      {/* Floating Destination Card Tag */}
      <div className="absolute bottom-8 right-6 md:right-12 z-20 hidden sm:flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg animate-float">
        <MapPin className="h-4 w-4 text-brand-sunset-light animate-pulse" />
        <p className="font-sans text-[10px] tracking-wider text-white uppercase font-light">
          Experience: <span className="font-semibold text-brand-sand">{BACKGROUNDS[index].title}</span> — {BACKGROUNDS[index].accent}
        </p>
      </div>

      {/* Core Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">
        {/* Subtle Brand Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-sunset-light" />
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-brand-sand">
            Travellers Travels Nagpur
          </p>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-sunset-light" />
        </motion.div>

        {/* Primary Award-Winning Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl sm:text-6xl md:text-7.5xl font-medium tracking-tight leading-none mb-6 max-w-4xl"
        >
          Journeys Worth <br />
          <span className="italic text-brand-sand">Remembering</span>
        </motion.h1>

        {/* Storytelling Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-sans text-sm sm:text-base md:text-lg text-slate-300 font-light max-w-2xl mb-10 leading-relaxed"
        >
          From weekend escapes to international adventures, discover curated travel experiences designed around you. Created for Nagpur’s discerning travelers.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
        >
          <button
            id="btn-hero-explore"
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 bg-brand-sand border border-brand-sand text-brand-ocean font-sans text-xs tracking-widest uppercase font-semibold rounded-full hover:bg-white hover:border-white hover:scale-105 shadow-xl transition-all duration-300 cursor-pointer"
          >
            Explore Destinations
          </button>
          <button
            id="btn-hero-plan"
            onClick={onPlanTripClick}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/40 text-white font-sans text-xs tracking-widest uppercase rounded-full hover:bg-white/10 hover:border-white hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Plan My Trip</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </motion.div>

        {/* Luxury Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 font-light border-t border-white/5 pt-8 w-full max-w-3xl"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-brand-sand-accent" />
            <span>Curated Luxury Retreater</span>
          </div>
          <div className="hidden sm:block text-white/20">•</div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-brand-sand-accent" />
            <span>Zero Hidden Charges Guarantee</span>
          </div>
          <div className="hidden sm:block text-white/20">•</div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-brand-sand-accent" />
            <span>Dedicated Personal concierge</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Gradient Wave on Hero Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent z-10" />
    </section>
  );
}
