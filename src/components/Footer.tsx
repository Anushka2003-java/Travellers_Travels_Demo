import { Compass, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onSelectDestination: (id: string) => void;
}

export default function Footer({ setActiveTab, onSelectDestination }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { label: 'Goa Coastline', id: 'goa' },
    { label: 'Kashmir Meadows', id: 'kashmir' },
    { label: 'Kerala Backwaters', id: 'kerala' },
    { label: 'Bali Sanctuaries', id: 'bali' },
    { label: 'Thailand Islands', id: 'thailand' },
    { label: 'Dubai Opulence', id: 'dubai' }
  ];

  const quickNav = [
    { label: 'Home Page', tab: 'home' },
    { label: 'Destinations', tab: 'destinations' },
    { label: 'Bespoke Packages', tab: 'packages' },
    { label: 'Our Story', tab: 'about' },
    { label: 'Connect Desk', tab: 'contact' }
  ];

  // Schema structured markup injected inside a standard script container.
  // It gives the search architectures exactly what they need for Nagpur locale coordinates,
  // without messing with our pristine, luxury typography.
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Travellers Travels Nagpur",
    "image": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1200",
    "@id": "https://travellerstravelsnagpur.com/#agency",
    "url": "https://travellerstravelsnagpur.com",
    "telephone": "+91 98765 43210",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, Luxury Chambers, Opposite Civil Lines Promenade",
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "postalCode": "440001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1458,
      "longitude": 79.0882
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-400 font-sans text-xs pt-20 pb-12 relative overflow-hidden select-none">
      {/* Dynamic structured data loaded silently within code only */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      {/* Backdrop aesthetic gradient details */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-ocean-light/10 blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-sunset/5 blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left mb-16">
        
        {/* Brand Block */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/5 rounded-full border border-white/10">
              <Compass className="h-5 w-5 text-brand-sand-accent" />
            </div>
            <div>
              <h4 className="font-serif text-slate-100 font-bold tracking-widest text-base">
                TRAVELLERS TRAVELS
              </h4>
              <p className="font-mono text-[8px] tracking-[0.25em] text-brand-sand">
                NAGPUR
              </p>
            </div>
          </div>
          
          <p className="text-slate-500 text-[11px] leading-relaxed font-light">
            Crafting curated travel narratives and luxury resort experiences. We design around you, ensuring every touchpoint builds a lifelong memory.
          </p>

          <div className="flex flex-col gap-2 font-mono text-[10px] text-slate-500 pt-2 gap-1.5">
            <span className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-brand-sand-accent" />
              <span>+91 98765 43210</span>
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-brand-sand-accent" />
              <span>curations@travellerstravels.com</span>
            </span>
          </div>
        </div>

        {/* Quick Navigation Pages */}
        <div className="space-y-4">
          <h5 className="font-serif text-slate-100 font-semibold uppercase tracking-wider text-xs pb-2 border-b border-white/5">
            Quick Navigation
          </h5>
          <ul className="space-y-2.5">
            {quickNav.map((link) => (
              <li key={link.tab}>
                <button
                  id={`footer-nav-${link.tab}`}
                  onClick={() => {
                    setActiveTab(link.tab);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white hover:translate-x-1 transition-all text-slate-400 font-light cursor-pointer text-left py-0.5"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore Links of specific destinations strictly aligned */}
        <div className="space-y-4">
          <h5 className="font-serif text-slate-100 font-semibold uppercase tracking-wider text-xs pb-2 border-b border-white/5">
            Curated Landscapes
          </h5>
          <ul className="space-y-2.5">
            {exploreLinks.map((link) => (
              <li key={link.id}>
                <button
                  id={`footer-explore-${link.id}`}
                  onClick={() => {
                    setActiveTab('destinations');
                    onSelectDestination(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white hover:translate-x-1 transition-all text-slate-400 font-light cursor-pointer text-left py-0.5 flex items-center gap-1.5"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="h-2.5 w-2.5 text-slate-600" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Nagpur Bureau coordinates */}
        <div className="space-y-4">
          <h5 className="font-serif text-slate-100 font-semibold uppercase tracking-wider text-xs pb-2 border-b border-white/5">
            Nagpur Headquarters
          </h5>
          <div className="space-y-3.5 text-slate-500 font-light leading-relaxed">
            <span className="flex gap-2 text-left">
              <MapPin className="h-4 w-4 text-brand-sand-accent shrink-0 mt-0.5" />
              <span>
                1st Floor, Luxury Chambers, Opposite Civil Lines Promenade, <br />
                Nagpur, Maharashtra — 440001
              </span>
            </span>
            
            <p className="border-t border-white/5 pt-3.5 text-[10px] text-slate-600 font-mono">
              Regular Hours: <br />
              Mon — Sun: 9:00 AM — 8:00 PM <br />
              Appt recommended.
            </p>
          </div>
        </div>

      </div>

      {/* Decorative footer dividers */}
      <div className="h-[1px] bg-white/5 max-w-7xl mx-auto px-6 md:px-12 mb-8" />

      {/* Copyright Strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-[10px] font-mono leading-none">
        <p>© {currentYear} Travellers Travels Nagpur. All rights verified.</p>
        <div className="flex gap-4">
          <span className="hover:text-slate-400 transition-colors">Bespoke Curation Standard v3.1</span>
        </div>
      </div>
    </footer>
  );
}
