import { motion } from 'motion/react';
import { Award, Eye, Heart, Milestone } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '14+', label: 'Years of Curation' },
    { number: '2,800+', label: 'Discerning Families Served' },
    { number: '100%', label: 'Tailored Proposals' },
    { number: '24/7', label: 'Concierge Backing' }
  ];

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-sunset mb-3">
            Our Story
          </p>
          <h1 className="font-serif text-3.5xl sm:text-5xl font-medium tracking-tight text-brand-ocean">
            A Quiet Commitment to <br />
            <span className="italic text-brand-ocean-light">Exceptional Expeditions</span>
          </h1>
          <div className="h-[1px] w-12 bg-brand-sunset/40 mx-auto mt-6" />
        </div>

        {/* Narrative Split Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 text-left">
          {/* Big Editorial Image Framing (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-brand-sand rounded-3xl translate-x-3 translate-y-3 -z-10" />
            <img
              src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1200"
              alt="Bespoke luxury setting"
              className="rounded-3xl object-cover h-[450px] w-full shadow-lg border-2 border-white"
              referrerPolicy="no-referrer"
            />
            {/* Visual credential badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-ocean border border-brand-sand/15 text-white p-6 rounded-2xl shadow-xl max-w-[200px] select-none animate-float">
              <span className="font-serif text-3xl font-semibold text-brand-sand block">No. 1</span>
              <span className="font-sans text-[9px] tracking-wider uppercase text-slate-300 mt-1 block">
                Bespoke Curation Boutique in Nagpur
              </span>
            </div>
          </div>

          {/* Core Brand Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3.5xl font-semibold text-brand-ocean leading-tight">
              Bridging Nagpur to the <br />
              <span className="italic text-brand-sunset-dark">World’s Most Secluded Refuges</span>
            </h3>

            <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              Founded in Nagpur over a decade ago, **Travellers Travels** was born out of a simple, rebellious premise: *travel should never be mass-produced*. We watched the industry fill with mechanical booking systems, pre-packaged itineraries, and rushed itineraries. We chose a different, quiet road.
            </p>

            <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              We operate as travel architects. Rather than relying on simple computer algorithms, we spend hundreds of hours personally surveying every boutique resort, testing sunset yachts, speaking with local mountaineering guides in Kashmir, and securing private beach enclaves in Goa. When you request an itinerary from our Nagpur-based bureau, you are securing a masterfully crafted, completely custom roadmap designed around your specific pacing, privacy filters, and dining wishes.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <div className="mt-1 p-2 bg-brand-sand/40 text-brand-ocean rounded-xl shrink-0">
                  <Eye className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-brand-ocean">Inspective Standards</h4>
                  <p className="font-sans text-[11px] text-slate-500 mt-1">We do not list any property or catamaran we have not personally inspected.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 p-2 bg-brand-sand/40 text-brand-ocean rounded-xl shrink-0">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-brand-ocean">Complete Transparency</h4>
                  <p className="font-sans text-[11px] text-slate-500 mt-1">Our quotes are comprehensive. We guarantee zero silent surcharges of any description.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row Block */}
        <div id="about-stats-row" className="bg-brand-sand-light rounded-3.5xl border border-brand-sand/20 py-12 px-6 sm:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 select-none">
          {stats.map((st, i) => (
            <div key={i} className="text-center">
              <span className="font-serif text-3xl sm:text-5xl font-bold text-brand-ocean block">
                {st.number}
              </span>
              <span className="font-sans text-[10px] tracking-wider uppercase text-slate-500 mt-2 block font-medium">
                {st.label}
              </span>
            </div>
          ))}
        </div>

        {/* Storytelling sign-off block */}
        <div className="mt-24 text-center max-w-xl mx-auto space-y-4">
          <Heart className="h-6 w-6 text-brand-sunset mx-auto" />
          <h4 className="font-serif text-lg font-semibold text-brand-ocean">Our Promise to You</h4>
          <p className="font-sans text-xs text-slate-500 italic leading-relaxed">
            "Your weekend getaways, annual family holidays, and romantic honeymoons are moments of high sentimental equity. We vow to handle every single inquiry with the premium attention, focus, and luxurious detail it deserves."
          </p>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-brand-ocean-light">
            — The Team at Travellers Travels Nagpur
          </p>
        </div>

      </div>
    </div>
  );
}
