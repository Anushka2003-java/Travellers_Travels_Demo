import { motion } from 'motion/react';
import { Sparkles, HelpCircle, HeartHandshake } from 'lucide-react';

export default function WhyUs() {
  const points = [
    {
      icon: Sparkles,
      title: 'Curated Experiences',
      desc: 'No generic formulas. Every exquisite boutique hotel, private catamaran sail, or sunset valley dinner is hand-selected to craft unforgettable, lifelong memories.'
    },
    {
      icon: HeartHandshake,
      title: 'Transparent Pricing',
      desc: 'We publish honest rates with zero surprises. You will know exactly what is included and excluded in your personal proposal before embarking.'
    },
    {
      icon: HelpCircle,
      title: 'Dedicated Support',
      desc: 'Travel with absolute confidence. From boarding gates to mountaintop transfers, our Nagpur-based service desk and destination concierge are always 1 click away.'
    }
  ];

  return (
    <section id="why-us-section" className="py-24 bg-white border-y border-brand-sand/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-sunset mb-3">
            The Golden Standard
          </p>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-medium tracking-tight text-brand-ocean">
            Why Discerning Guests Choose <br />
            <span className="italic text-brand-ocean-light">Travellers Travels</span>
          </h2>
          <div className="h-[1px] w-12 bg-brand-sunset/40 mx-auto mt-6" />
        </div>

        {/* Core Value Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-brand-sand-light border border-brand-sand/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-4 bg-brand-ocean/5 rounded-2xl mb-6">
                  <Icon className="h-6 w-6 text-brand-ocean" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-brand-ocean mb-4">
                  {pt.title}
                </h3>
                <p className="font-sans text-xs text-slate-600 leading-relaxed max-w-sm">
                  {pt.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
