import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, CheckCircle, Send, ArrowRight, Compass } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  const formattedMsg = encodeURIComponent("Hello! I am contacting you from Nagpur after exploring the Travellers Travels website. I would love to consult with a custom travel advisor.");

  return (
    <section id="contact-section" className="py-24 bg-slate-50 min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-sunset mb-3">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-medium tracking-tight text-brand-ocean">
            Connect With Our <br />
            <span className="italic text-brand-ocean-light">Travel Architects</span>
          </h2>
          <div className="h-[1px] w-12 bg-brand-sunset/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Coordinates & WhatsApp CTA (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-brand-ocean">
                Nagpur Bureau
              </h3>
              <p className="font-sans text-xs text-slate-500 leading-relaxed font-light">
                Feel free to visit our comfortable consultation office or reach out using some of our direct channels below. All consultations are handled with strict privacy policy.
              </p>
            </div>

            {/* Coordinates Cards */}
            <div className="space-y-4">
              {/* Address */}
              <div className="flex gap-4 p-5 bg-white border border-brand-sand-dark/10 rounded-2xl shadow-sm">
                <div className="p-3 bg-brand-ocean/5 text-brand-ocean rounded-xl shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold text-brand-ocean uppercase tracking-wider">Address</h4>
                  <p className="font-sans text-xs text-slate-600 mt-1 leading-relaxed">
                    1st Floor, Luxury Chambers, Opposite Civil Lines Promenade, <br />
                    Nagpur, Maharashtra — 440001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 p-5 bg-white border border-brand-sand-dark/10 rounded-2xl shadow-sm">
                <div className="p-3 bg-brand-ocean/5 text-brand-ocean rounded-xl shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold text-brand-ocean uppercase tracking-wider">Hotlines</h4>
                  <p className="font-sans text-xs text-slate-600 mt-1">
                    <a href="tel:+919876543210" className="hover:text-brand-sunset transition-colors font-medium">
                      +91 98765 43210
                    </a>
                  </p>
                  <p className="font-sans text-[10px] text-slate-400 mt-0.5">Available 9:00 AM — 8:00 PM Daily</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 p-5 bg-white border border-brand-sand-dark/10 rounded-2xl shadow-sm">
                <div className="p-3 bg-brand-ocean/5 text-brand-ocean rounded-xl shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold text-brand-ocean uppercase tracking-wider">Email Correspondence</h4>
                  <p className="font-sans text-xs text-slate-600 mt-1">
                    <a href="mailto:curations@travellerstravelsnagpur.com" className="hover:text-brand-sunset transition-colors font-medium">
                      curations@travellerstravels.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Premium WhatsApp CTA */}
            <div className="p-6 bg-emerald-50/50 border border-emerald-100 rounded-3xl">
              <h4 className="font-serif text-sm font-semibold text-emerald-850 flex items-center gap-2 mb-2">
                <MessageSquare className="h-4 w-4 text-emerald-600" />
                <span>Instant Consult via WhatsApp</span>
              </h4>
              <p className="font-sans text-[11.5px] text-slate-600 leading-normal mb-4 font-light">
                Prefer an informal text conversation over messaging portals? Reach our travel designers with one tap on WhatsApp.
              </p>
              <a
                id="btn-whatsapp-cta"
                href={`https://wa.me/919876543210?text=${formattedMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs tracking-widest uppercase font-semibold rounded-full shadow-md transition-all scale-100 hover:scale-103 cursor-pointer"
              >
                <span>Initiate WhatsApp Chat</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-brand-sand-dark/10 rounded-3.5xl p-8 sm:p-12 shadow-md relative overflow-hidden">
            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-left mb-8">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-ocean">
                    Transmit Message
                  </h3>
                  <p className="font-sans text-xs text-slate-400 mt-1 font-light">
                    We typical response to web submissions within 4 standard hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block font-sans text-[11px] tracking-wider uppercase font-semibold text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      id="input-contact-name"
                      type="text"
                      required
                      placeholder="e.g. Meera Nair"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-800 focus:outline-none focus:border-brand-ocean focus:ring-1 focus:ring-brand-ocean/30 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-sans text-[11px] tracking-wider uppercase font-semibold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      id="input-contact-email"
                      type="email"
                      required
                      placeholder="e.g. meera@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-800 focus:outline-none focus:border-brand-ocean focus:ring-1 focus:ring-brand-ocean/30 transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block font-sans text-[11px] tracking-wider uppercase font-semibold text-slate-700 mb-2">
                    Subject / Concern
                  </label>
                  <select
                    id="input-contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-800 focus:outline-none focus:border-brand-ocean focus:ring-1 focus:ring-brand-ocean/30 transition-all cursor-pointer"
                  >
                    <option>General Inquiry</option>
                    <option>Feedback & Suggestions</option>
                    <option>Corporate Retreat Proposals</option>
                    <option>Bespoke Group Charters</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-sans text-[11px] tracking-wider uppercase font-semibold text-slate-700 mb-2">
                    Detailed Message
                  </label>
                  <textarea
                    id="input-contact-message"
                    required
                    rows={5}
                    placeholder="Describe your queries or custom schedules..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-800 focus:outline-none focus:border-brand-ocean focus:ring-1 focus:ring-brand-ocean/30 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4 flex justify-end">
                  <button
                    id="btn-contact-submit"
                    type="submit"
                    className="px-8 py-4 bg-brand-ocean text-white font-sans text-xs tracking-widest uppercase font-semibold rounded-full hover:bg-brand-ocean-light hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Transmit Message</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            ) : (
              /* High-End Submission block */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 px-4 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 stroke-[1.5]" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-brand-ocean mb-3">
                  Message Transmitted
                </h4>
                <p className="font-sans text-xs text-slate-500 max-w-md leading-relaxed mb-8 font-light">
                  Thank you and well received, <span className="font-semibold text-slate-800">{formData.name}</span>. Your correspondence has bypassed general message queues and landed with our Nagpur hospitality desk. One of our specialists will reach out shortly.
                </p>
                <button
                  id="btn-contact-reset"
                  onClick={() => {
                    setIsSent(false);
                    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="px-6 py-3 border border-brand-sand-dark text-slate-600 font-sans text-xs tracking-widest uppercase rounded-full hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Write Another Message
                </button>
              </motion.div>
            )}
          </div>
        </div>

        {/* =========================================================================
           MAP CANVAS SECTION
           ========================================================================= */}
        <div id="contact-map-frame" className="mt-20">
          <div className="text-left mb-6">
            <h4 className="font-serif text-lg font-semibold text-brand-ocean">
              Visual Office Orientation
            </h4>
            <p className="font-sans text-[11px] text-slate-400 font-light mt-0.5">
              Convenient parking is verified directly in front of our promenade gates.
            </p>
          </div>

          <div className="relative h-80 w-full rounded-3xl overflow-hidden border border-brand-sand-dark/20 shadow-md bg-slate-900 group select-none">
            {/* Elegant luxury minimalist map graphic representation */}
            <div className="absolute inset-0 bg-brand-sand-light flex flex-col items-center justify-center text-center p-6 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
              <div className="absolute top-10 left-[20%] w-0.5 h-60 bg-brand-sand-dark/40" />
              <div className="absolute top-[40%] left-10 w-full h-0.5 bg-brand-sand-dark/40" />
              
              <div className="p-4 bg-brand-ocean border-4 border-white text-white rounded-2xl shadow-xl z-20 flex flex-col items-center max-w-xs animate-float">
                <Compass className="h-6 w-6 text-brand-sand-accent animate-spin-slow mb-2" />
                <h5 className="font-serif text-sm font-bold tracking-wider uppercase">Travellers Travels</h5>
                <p className="font-sans text-[9px] text-slate-300 mt-1 uppercase">Civil Lines, Nagpur</p>
              </div>

              {/* Surrounding contextual annotations */}
              <div className="absolute top-[32%] left-[45%] text-[10px] font-mono text-slate-400 bg-white/60 px-2 py-0.5 rounded border border-slate-200">
                Civil Lines Promenade Rd
              </div>
              <div className="absolute top-[52%] left-[10%] text-[10px] font-mono text-slate-400 bg-white/60 px-2 py-0.5 rounded border border-slate-200">
                High Court Avenue
              </div>
              <div className="absolute bottom-10 right-12 text-[10px] font-sans text-slate-400 items-center gap-1 hidden sm:flex">
                <span className="w-2 h-2 rounded-full bg-slate-400 inline-block" />
                <span>Nagpur Central Garden</span>
              </div>
            </div>
            
            {/* Shorn gradient framing overlay */}
            <div className="absolute inset-0 border border-brand-sand/15 rounded-3xl pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
