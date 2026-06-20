import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Menu, X, PhoneCall, Globe } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onPlanTripClick: () => void;
}

export default function Navbar({ activeTab, setActiveTab, onPlanTripClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'packages', label: 'Bespoke Packages' },
    { id: 'about', label: 'Our Story' },
    { id: 'contact', label: 'Connect' }
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-brand-sand-dark/20 py-4'
          : 'bg-gradient-to-b from-black/60 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="btn-brand-logo"
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group cursor-pointer text-left"
        >
          <div className="p-2 bg-brand-sand/10 rounded-full group-hover:bg-brand-sand/30 transition-all duration-300">
            <Compass
              className={`h-6 w-6 transition-all duration-500 ${
                isScrolled ? 'text-brand-ocean stroke-[1.5]' : 'text-brand-sand stroke-[1.5]'
              } group-hover:rotate-45`}
            />
          </div>
          <div>
            <h1
              className={`font-serif text-lg leading-tight tracking-wider transition-all duration-300 font-semibold ${
                isScrolled ? 'text-brand-ocean' : 'text-white'
              }`}
            >
              TRAVELLERS TRAVELS
            </h1>
            <p
              className={`font-mono text-[9px] tracking-[0.2em] uppercase transition-all duration-300 ${
                isScrolled ? 'text-brand-ocean-light' : 'text-brand-sand/90'
              }`}
            >
              Nagpur
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                id={`nav-item-${item.id}`}
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative py-1 pr-1 font-sans text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? isScrolled
                      ? 'text-brand-ocean font-medium'
                      : 'text-white font-medium'
                    : isScrolled
                    ? 'text-slate-600 hover:text-brand-ocean'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-underline"
                    className={`absolute bottom-0 left-0 w-full h-[1px] ${
                      isScrolled ? 'bg-brand-ocean' : 'bg-brand-sand'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            id="link-nav-call"
            href="tel:+919876543210"
            className={`flex items-center gap-2 text-xs tracking-wider transition-colors duration-300 ${
              isScrolled ? 'text-slate-600 hover:text-brand-ocean' : 'text-slate-200 hover:text-brand-sand'
            }`}
          >
            <PhoneCall className="h-3 w-3" />
            <span>+91 98765 43210</span>
          </a>
          <button
            id="btn-nav-plan-trip"
            onClick={onPlanTripClick}
            className={`text-xs tracking-widest font-sans uppercase px-6 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
              isScrolled
                ? 'bg-brand-ocean border-brand-ocean text-white hover:bg-brand-ocean-light hover:border-brand-ocean-light shadow-md shadow-brand-ocean/10'
                : 'bg-white/10 border-white/30 text-white hover:bg-white hover:text-brand-ocean hover:shadow-lg'
            }`}
          >
            Plan My Trip
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          id="btn-mobile-menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-full cursor-pointer focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-brand-ocean' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-brand-ocean' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-b border-brand-sand-dark/20 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    id={`mobile-nav-item-${item.id}`}
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`text-left font-sans text-xs tracking-widest uppercase py-1 ${
                      isActive ? 'text-brand-ocean font-semibold border-l-2 border-brand-ocean pl-3' : 'text-slate-600 pl-3'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="h-[1px] bg-brand-sand-dark/20 my-2" />

              <div className="flex flex-col gap-4 pl-3">
                <a
                  id="link-mobile-call"
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-xs tracking-wider text-slate-600"
                >
                  <PhoneCall className="h-4 w-4 text-brand-ocean" />
                  <span>+91 98765 43210</span>
                </a>
                <button
                  id="btn-mobile-plan-trip"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onPlanTripClick();
                  }}
                  className="bg-brand-ocean text-white font-sans text-xs tracking-widest uppercase py-3 rounded-full text-center hover:bg-brand-ocean-light transition-all duration-300"
                >
                  Plan My Trip
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
