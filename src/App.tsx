import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles, Navigation, ArrowUpRight, ArrowRight, ArrowRightCircle } from 'lucide-react';

// Modular Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractivePlanner from './components/InteractivePlanner';

// Authentic static data source
import { DESTINATIONS } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isPlannerOpen, setIsPlannerOpen] = useState<boolean>(false);
  const [preSelectedDestForPlanner, setPreSelectedDestForPlanner] = useState<string>('');
  
  // Cross-link triggers
  const [selectedDestIdForDetail, setSelectedDestIdForDetail] = useState<string | null>(null);
  const [selectedPackFilterId, setSelectedPackFilterId] = useState<string | null>(null);

  // Trigger custom holiday planner modal
  const handleOpenPlanner = (destinationId: string = '') => {
    setPreSelectedDestForPlanner(destinationId);
    setIsPlannerOpen(true);
  };

  const handleSelectDestinationForDetail = (id: string) => {
    setSelectedDestIdForDetail(id);
    setActiveTab('destinations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToPackages = (destinationId: string = '') => {
    setSelectedPackFilterId(destinationId);
    setActiveTab('packages');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Switch to dest tab and reset detail
  const handleExploreDestinationsClick = () => {
    setSelectedDestIdForDetail(null);
    setActiveTab('destinations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen relative bg-[#faf9f6]">
      {/* Invisible SEO Schema Coordinate Injections */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Travellers Travels Nagpur",
          "url": "https://travellerstravelsnagpur.com",
          "description": "Premium travel curations, bespoke holiday packages and luxury getaways in Nagpur, Maharashtra."
        })}
      </script>

      {/* Floating Header Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          // When clicking from header nav, reset specific internal nested filter states
          if (tab === 'destinations') setSelectedDestIdForDetail(null);
          if (tab === 'packages') setSelectedPackFilterId(null);
        }}
        onPlanTripClick={() => handleOpenPlanner('')}
      />

      {/* Primary Dynamic Content Flow */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-0"
            >
              {/* cinematic rotating hero banner section */}
              <Hero
                onExploreClick={handleExploreDestinationsClick}
                onPlanTripClick={() => handleOpenPlanner('')}
                onSelectDestination={handleSelectDestinationForDetail}
              />

              {/* Core Trust and values grid */}
              <WhyUs />

              {/* =========================================================================
                 IMMERSIVE POPULAR EXPERIENCES CAROUSEL SECTION
                 ========================================================================= */}
              <section id="popular-experiences-section" className="py-24 bg-white select-none">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div className="text-left">
                      <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-sunset mb-2">
                        Highly Demanded
                      </p>
                      <h2 className="font-serif text-3xl sm:text-4.5xl font-medium tracking-tight text-brand-ocean">
                        Inspirational Experiences <br />
                        <span className="italic text-brand-ocean-light">Awaiting Nagpur’s Travelers</span>
                      </h2>
                    </div>
                    <button
                      id="btn-carousel-all"
                      onClick={handleExploreDestinationsClick}
                      className="font-sans text-xs tracking-widest uppercase font-semibold text-brand-ocean hover:text-brand-sunset-dark transition-all flex items-center gap-2 cursor-pointer pt-4"
                    >
                      <span>Explore all 6 landscapes</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Summary grid showcasing selected destination tags */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DESTINATIONS.slice(0, 3).map((d, i) => (
                      <motion.div
                        key={d.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.15 }}
                        className="group relative h-[440px] rounded-3xl overflow-hidden shadow-md border border-slate-100 flex flex-col justify-end p-8 text-left cursor-pointer"
                        onClick={() => handleSelectDestinationForDetail(d.id)}
                      >
                        {/* Immersive landscape element */}
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                          style={{ backgroundImage: `url(${d.heroImage})` }}
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent transition-opacity duration-300" />

                        {/* Card metadata */}
                        <div className="relative z-10 text-white space-y-4">
                          <span className="font-mono text-[9px] tracking-widest uppercase text-brand-sand-accent font-semibold block">
                            {d.category} — {d.duration}
                          </span>
                          <h3 className="font-serif text-2xl sm:text-3xl font-semibold leading-none group-hover:text-brand-sand transition-colors">
                            {d.name}
                          </h3>
                          <p className="font-sans text-[11px] text-slate-300 font-light line-clamp-2 leading-relaxed">
                            {d.tagline}
                          </p>

                          <div className="pt-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-brand-sand border-t border-white/10 mt-4 select-none">
                            <span>Examine Itinerary</span>
                            <div className="p-2 bg-white/10 rounded-full group-hover:bg-brand-sand group-hover:text-brand-ocean transition-all duration-300">
                              <ArrowUpRight className="h-4 w-4" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Immersive customer quotes */}
              <Testimonials />

              {/* Interactive media block */}
              <Gallery />

              {/* Sleek inline CTA to plan custom getaways */}
              <section id="inline-planning-banner" className="py-24 bg-brand-ocean text-white relative overflow-hidden text-left select-none border-t border-brand-sand/15">
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
                <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
                  <span className="font-mono text-xs tracking-[0.3em] uppercase text-brand-sand-accent font-semibold">
                    Uniquely Engineered For You
                  </span>
                  <h2 className="font-serif text-4xl sm:text-5.5xl font-medium tracking-tight mt-3 mb-6 max-w-2xl leading-tight">
                    Inspiration is the First Step. <br />
                    Let Us Design the <span className="italic text-brand-sand">Second</span>.
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 font-light max-w-xl mb-10 leading-relaxed">
                    Consult directly with Nagpur's award-winning group-curators. No computer-generated cookie-cutters. Just an honest, carefully-spaced roadmap shaped around you.
                  </p>
                  <button
                    id="btn-inline-banner-plan"
                    onClick={() => handleOpenPlanner('')}
                    className="px-8 py-4 bg-brand-sand border border-brand-sand text-brand-ocean font-sans text-xs tracking-widest uppercase font-semibold rounded-full hover:bg-white hover:border-white transition-all shadow-xl hover:scale-103 cursor-pointer"
                  >
                    Plan My Dream Trip
                  </button>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'destinations' && (
            <motion.div
              key="destinations-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <Destinations
                onPlanTripClick={handleOpenPlanner}
                onGoToPackages={handleGoToPackages}
                initialSelectedId={selectedDestIdForDetail}
              />
            </motion.div>
          )}

          {activeTab === 'packages' && (
            <motion.div
              key="packages-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <Packages
                onPlanTripClick={handleOpenPlanner}
                filterByDestinationId={selectedPackFilterId}
              />
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div
              key="about-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <About />
            </motion.div>
          )}

          {activeTab === 'contact' && (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Brand Signoffs & footer coord integrations */}
      <Footer
        setActiveTab={setActiveTab}
        onSelectDestination={handleSelectDestinationForDetail}
      />

      {/* Multidimensional "Plan My Trip" scheduler wizard dialog */}
      <InteractivePlanner
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
        preSelectedDestinationId={preSelectedDestForPlanner}
      />
    </div>
  );
}
