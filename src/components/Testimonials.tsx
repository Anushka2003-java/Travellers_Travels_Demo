import { motion } from 'motion/react';
import { Star, Quote, ShieldAlert } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials-section" className="py-24 bg-brand-sand-light relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 rounded-full bg-brand-sand/30 blur-3xl z-0" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 rounded-full bg-brand-sunset/5 blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-sunset mb-3">
            Real Experiences
          </p>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-medium tracking-tight text-brand-ocean">
            Stories Written by Our <br />
            <span className="italic text-brand-ocean-light">Privileged Guests</span>
          </h2>
          <div className="h-[1px] w-12 bg-brand-sunset/40 mx-auto mt-6" />
        </div>

        {/* Testimonials List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl border border-brand-sand-dark/10 shadow-lg relative flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Quote icon accent */}
              <Quote className="absolute top-6 right-8 h-10 w-10 text-slate-100 group-hover:text-brand-sand/40 transition-colors duration-300 stroke-[1.2]" />

              <div>
                {/* Five Star Indicator */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-sand-accent text-brand-sand-accent" />
                  ))}
                </div>

                {/* Body paragraph */}
                <p className="font-sans text-xs text-slate-600 leading-relaxed italic mb-8 relative z-10">
                  "{t.text}"
                </p>
              </div>

              {/* Reviewer Meta Row */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-brand-sand"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <h4 className="font-serif text-sm font-semibold text-brand-ocean leading-tight">
                    {t.name}
                  </h4>
                  <p className="font-sans text-[10px] text-slate-400 mt-0.5">
                    {t.location}
                  </p>
                  <span className="inline-block px-2 py-0.5 bg-brand-sand/40 rounded-full font-mono text-[8px] text-brand-ocean-light tracking-[0.05em] mt-2 select-none">
                    {t.tripTaken}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Co-Signature and Trust footnote */}
        <div className="mt-16 text-center select-none">
          <p className="font-serif italic text-sm text-slate-500">
            "We do not promise trips. We engineer journeys that become beautiful nostalgic recollections."
          </p>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-brand-ocean-light mt-2">
            — The Travellers Travels Curation Directive
          </p>
        </div>
      </div>
    </section>
  );
}
