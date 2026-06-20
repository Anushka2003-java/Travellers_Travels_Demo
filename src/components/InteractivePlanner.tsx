import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ChevronRight, Calendar, Users, HelpCircle, ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '../data';

interface InteractivePlannerProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedDestinationId?: string;
}

export default function InteractivePlanner({ isOpen, onClose, preSelectedDestinationId = '' }: InteractivePlannerProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: preSelectedDestinationId || 'goa',
    departDate: '',
    durationDays: 5,
    travelersCount: 2,
    specialRequests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formStep, setFormStep] = useState(1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Real submission process simulation with high-end customer feedback
    setIsSubmitted(true);
  };

  const handleNextStep = () => {
    if (formStep < 2) setFormStep(formStep + 1);
  };

  const handlePrevStep = () => {
    if (formStep > 1) setFormStep(formStep - 1);
  };

  // Reset states
  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      destination: 'goa',
      departDate: '',
      durationDays: 5,
      travelersCount: 2,
      specialRequests: ''
    });
    setIsSubmitted(false);
    setFormStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          id="planner-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          id="planner-modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-brand-sand/30 z-10"
        >
          {/* Accent Line */}
          <div className="h-1.5 w-full bg-gradient-to-r from-brand-ocean via-brand-sand-accent to-brand-sunset" />

          {/* Close button */}
          <button
            id="btn-planner-close"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 transition-colors duration-200 text-slate-400 hover:text-slate-700 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="p-6 sm:p-10">
              {/* Header */}
              <div className="mb-8">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-brand-sunset font-semibold">
                  Custom Holiday Curations
                </span>
                <h3 className="font-serif text-2xl sm:text-3.5xl font-medium tracking-tight text-brand-ocean mt-1">
                  Plan Your Private Escape
                </h3>
                <p className="font-sans text-[11px] text-slate-500 mt-2">
                  Please outline your travel desires. Our dedicated lifestyle advisers will engineer a fully customized travel proposal within 24 hours.
                </p>
              </div>

              {/* Progress Steps Indicators */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold ${formStep === 1 ? 'bg-brand-ocean text-white' : 'bg-brand-ocean/10 text-brand-ocean'}`}>
                    1
                  </span>
                  <span className="font-sans text-[10px] tracking-wider uppercase font-semibold text-slate-700">Selections</span>
                </div>
                <div className="h-[1px] flex-1 bg-slate-200" />
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold ${formStep === 2 ? 'bg-brand-ocean text-white' : 'bg-slate-100 text-slate-400'}`}>
                    2
                  </span>
                  <span className="font-sans text-[10px] tracking-wider uppercase font-semibold text-slate-700">Personal Details</span>
                </div>
              </div>

              {/* Step 1 Content */}
              {formStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  {/* Destination Dropdown */}
                  <div>
                    <label className="block font-sans text-[11px] tracking-wider uppercase font-semibold text-slate-700 mb-2">
                      Where would you love to go?
                    </label>
                    <select
                      id="input-planner-destination"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full bg-brand-sand-light border border-brand-sand-dark/30 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-brand-ocean focus:ring-1 focus:ring-brand-ocean/30 transition-all cursor-pointer"
                    >
                      {DESTINATIONS.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.name} — {d.category} (Recommended duration: {d.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Departure Date */}
                    <div>
                      <label className="block font-sans text-[11px] tracking-wider uppercase font-semibold text-slate-700 mb-2 flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-slate-400" />
                        Target Departure Date
                      </label>
                      <input
                        id="input-planner-date"
                        type="date"
                        required
                        value={formData.departDate}
                        onChange={(e) => setFormData({ ...formData, departDate: e.target.value })}
                        className="w-full bg-brand-sand-light border border-brand-sand-dark/30 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-brand-ocean transition-all cursor-pointer"
                      />
                    </div>

                    {/* Guest Count */}
                    <div>
                      <label className="block font-sans text-[11px] tracking-wider uppercase font-semibold text-slate-700 mb-2 flex items-center gap-1">
                        <Users className="h-3 w-3 text-slate-400" />
                        Number of Travelers
                      </label>
                      <input
                        id="input-planner-travelers"
                        type="number"
                        min="1"
                        max="20"
                        required
                        value={formData.travelersCount}
                        onChange={(e) => setFormData({ ...formData, travelersCount: parseInt(e.target.value) || 2 })}
                        className="w-full bg-brand-sand-light border border-brand-sand-dark/30 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-brand-ocean transition-all"
                      />
                    </div>
                  </div>

                  {/* Trip Duration slider */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block font-sans text-[11px] tracking-wider uppercase font-semibold text-slate-700">
                        Stay Duration (Days)
                      </label>
                      <span className="font-mono text-xs font-semibold text-brand-ocean-light">
                        {formData.durationDays} Days / {formData.durationDays - 1} Nights
                      </span>
                    </div>
                    <input
                      id="input-planner-duration-range"
                      type="range"
                      min="3"
                      max="14"
                      value={formData.durationDays}
                      onChange={(e) => setFormData({ ...formData, durationDays: parseInt(e.target.value) })}
                      className="w-full accent-brand-ocean h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Move onward */}
                  <div className="pt-4 flex justify-end">
                    <button
                      id="btn-planner-next"
                      type="button"
                      onClick={handleNextStep}
                      className="px-6 py-3 bg-brand-ocean text-white font-sans text-xs tracking-widest uppercase rounded-full hover:bg-brand-ocean-light transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>Next Step</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2 Content */}
              {formStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block font-sans text-[11px] tracking-wider uppercase font-semibold text-slate-700 mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        id="input-planner-name"
                        type="text"
                        required
                        placeholder="e.g. Rahul Deshmukh"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-brand-sand-light border border-brand-sand-dark/30 rounded-xl px-4 py-3 text-xs placeholder:text-slate-400 focus:outline-none focus:border-brand-ocean transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block font-sans text-[11px] tracking-wider uppercase font-semibold text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="input-planner-email"
                        type="email"
                        required
                        placeholder="e.g. rahul@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-brand-sand-light border border-brand-sand-dark/30 rounded-xl px-4 py-3 text-xs placeholder:text-slate-400 focus:outline-none focus:border-brand-ocean transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block font-sans text-[11px] tracking-wider uppercase font-semibold text-slate-700 mb-1.5 flex items-center gap-1">
                      Phone / Mobile Number (preferably WhatsApp)
                    </label>
                    <input
                      id="input-planner-phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-brand-sand-light border border-brand-sand-dark/30 rounded-xl px-4 py-3 text-xs placeholder:text-slate-400 focus:outline-none focus:border-brand-ocean transition-all"
                    />
                  </div>

                  {/* Special requests */}
                  <div>
                    <label className="block font-sans text-[11px] tracking-wider uppercase font-semibold text-slate-700 mb-1.5 flex items-center gap-1">
                      Any custom requests or preferences?
                    </label>
                    <textarea
                      id="input-planner-special"
                      rows={3}
                      placeholder="e.g., Honeymoon setups, private villas pool preference, vegetarian chef, elderly support..."
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      className="w-full bg-brand-sand-light border border-brand-sand-dark/30 rounded-xl px-4 py-3 text-xs placeholder:text-slate-400 focus:outline-none focus:border-brand-ocean transition-all resize-none"
                    />
                  </div>

                  {/* Nav Actions */}
                  <div className="pt-4 flex items-center justify-between gap-4">
                    <button
                      id="btn-planner-back"
                      type="button"
                      onClick={handlePrevStep}
                      className="px-5 py-3 font-sans text-[10px] tracking-widest uppercase font-semibold text-slate-500 hover:text-slate-800 transition-all cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      id="btn-planner-submit"
                      type="submit"
                      className="px-8 py-3 bg-brand-sunset text-white font-sans text-xs tracking-widest uppercase font-semibold rounded-full hover:bg-brand-sunset-dark transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                    >
                      <span>Confirm & Send Inquiry</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          ) : (
            /* Success content block */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 sm:p-12 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 stroke-[1.5]" />
              </div>

              <h4 className="font-serif text-2xl sm:text-3.5xl font-semibold text-brand-ocean mb-3">
                Your Request is Registered
              </h4>

              <p className="font-sans text-xs text-slate-500 max-w-md mb-8 leading-relaxed">
                Thank you, <span className="font-semibold text-slate-800">{formData.fullName}</span>. Your customized holiday concept has been sent directly to our lead designer at <span className="font-medium text-brand-ocean">Travellers Travels Nagpur</span>. Under our commitment, we will compile and transmit a bespoke digital travel brochure PDF and pricing directly to you.
              </p>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-brand-sand-light border border-brand-sand-dark/25 w-full max-w-sm mb-8 text-left text-[11px] font-mono select-none">
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider">Destination</span>
                  <span className="text-brand-ocean font-semibold capitalize">{formData.destination}</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider">Travelers</span>
                  <span className="text-brand-ocean font-semibold">{formData.travelersCount} Guests</span>
                </div>
                <div className="mt-2">
                  <span className="text-slate-400 block uppercase tracking-wider">Target Date</span>
                  <span className="text-brand-ocean font-semibold">{formData.departDate || 'Not Fixed'}</span>
                </div>
                <div className="mt-2">
                  <span className="text-slate-400 block uppercase tracking-wider">Stay Range</span>
                  <span className="text-brand-ocean font-semibold">{formData.durationDays} Days</span>
                </div>
              </div>

              <button
                id="btn-planner-success-close"
                type="button"
                onClick={handleReset}
                className="px-8 py-3.5 bg-brand-ocean hover:bg-brand-ocean-light text-white font-sans text-xs tracking-widest uppercase rounded-full shadow-lg transition-all cursor-pointer"
              >
                Close Window
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
