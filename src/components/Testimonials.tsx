import React from 'react';
import { Quote, Star, Building, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  // Placeholder testimonials clearly marked as demo content
  const testimonials = [
    {
      quote: "VeraTrust cut our verification turnaround time from 9 days down to 24 hours. The candidate mobile experience is insanely smooth.",
      name: "Priya Sundaram",
      role: "Head of People & Talent",
      company: "Apex Tech Labs",
      badge: "VERIFIED HR LEADER",
      initials: "PS",
    },
    {
      quote: "We eliminated almost all manual candidate follow-up emails. The real-time status timeline gives our compliance team complete peace of mind.",
      name: "Marcus Vance",
      role: "VP of HR Operations",
      company: "Hyperion Global",
      badge: "ENTERPRISE TIER",
      initials: "MV",
    },
    {
      quote: "Integrating VeraTrust into our ATS took less than a day. Our hiring managers get clear verified reports without leaving GreenHouse.",
      name: "Devon Chen",
      role: "Director of Recruitment",
      company: "Voltr Capital",
      badge: "TECH SCALEUP",
      initials: "DC",
    },
  ];

  return (
    <section className="py-24 relative bg-[#070B14] border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
            SOCIAL PROOF & FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Trusted by teams that{' '}
            <span className="block text-gradient-blue">take hiring seriously.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            See how modern HR leaders reduce hiring risk and streamline candidate verification.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="glass-panel p-8 rounded-2xl border border-slate-800 hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Quote className="w-8 h-8 text-sky-400/40 group-hover:text-sky-400 transition-colors" />
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 p-[1px] flex-shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-bold font-mono text-xs text-sky-300">
                    {t.initials}
                  </div>
                </div>

                <div className="space-y-0.5 text-left">
                  <div className="flex items-center gap-1.5 font-bold text-white text-sm">
                    {t.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                  <div className="text-[11px] font-mono text-sky-400 flex items-center gap-1">
                    <Building className="w-3 h-3" /> {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note indicating placeholder testimonial nature */}
        <div className="text-center">
          <span className="text-[11px] font-mono text-slate-400">
            [Note: Testimonial cards structured as placeholder content for product demonstration]
          </span>
        </div>

      </div>
    </section>
  );
};
