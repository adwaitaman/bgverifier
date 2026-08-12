import React, { useState } from 'react';
import { Rocket, Building2, Users, Truck, ShieldAlert, ArrowRight } from 'lucide-react';

interface UseCasesProps {
  onOpenDemo: (type: 'demo') => void;
}

export const UseCases: React.FC<UseCasesProps> = ({ onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState(0);

  const useCases = [
    {
      id: 'startups',
      title: 'Startups & High Growth',
      icon: <Rocket className="w-5 h-5 text-sky-400" />,
      headline: 'Verify candidates without building a large HR ops team.',
      desc: 'Fast-growing startups use VeraTrust to onboard key hires in 24 hours without dedicating headcount to chasing documents manually.',
      benefits: ['Pay-as-you-go verification tiers', 'Instant self-serve candidate onboarding', 'Direct ATS plug-and-play'],
    },
    {
      id: 'enterprises',
      title: 'Enterprises & Multinational',
      icon: <Building2 className="w-5 h-5 text-purple-400" />,
      headline: 'Standardize verification across large hiring volumes.',
      desc: 'Enterprise talent teams get custom SLA guarantees, dedicated compliance oversight, and role-based access controls across global offices.',
      benefits: ['Custom compliance workflow rules', 'Dedicated account management & SLA', 'Single Sign-On (SSO) & audit logs'],
    },
    {
      id: 'staffing',
      title: 'Staffing & Recruitment',
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      headline: 'Verify candidates quickly across multiple clients.',
      desc: 'Staffing agencies present verified candidate badges to corporate clients, speeding up placement decisions by 65%.',
      benefits: ['Client-facing verification badges', 'Bulk verification upload options', 'Multi-tenant portal view'],
    },
    {
      id: 'gig',
      title: 'Gig Economy Platforms',
      icon: <Truck className="w-5 h-5 text-amber-400" />,
      headline: 'Build trust across distributed workforces.',
      desc: 'On-demand delivery, mobility, and service platforms screen high volumes of gig partners with instant automated background checks.',
      benefits: ['Real-time mobile identity check', 'Automated driver & police checks', 'Scalable API infrastructure'],
    },
    {
      id: 'regulated',
      title: 'Regulated Industries',
      icon: <ShieldAlert className="w-5 h-5 text-rose-400" />,
      headline: 'Support rigorous compliance and financial screening.',
      desc: 'Fintech, healthcare, and defense sector employers enforce strict regulatory screening with zero risk of audit failure.',
      benefits: ['Global sanctions & AML check', 'Professional license tracking', 'Cryptographic audit archives'],
    },
  ];

  return (
    <section id="solutions" className="py-24 relative bg-[#0A0F1D] border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            TAILORED INDUSTRY SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Built for every team{' '}
            <span className="block text-gradient-emerald">that hires.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Whether you hire 5 people a month or 5,000, VeraTrust adapts to your volume and regulatory requirements.
          </p>
        </div>

        {/* Tabs Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {useCases.map((uc, index) => (
            <button
              key={uc.id}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 font-mono ${
                activeTab === index
                  ? 'bg-slate-900 border-2 border-sky-400 text-white shadow-lg shadow-sky-500/20'
                  : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {uc.icon}
              <span>{uc.title}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Panel */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase">
              {useCases[activeTab].icon}
              <span>{useCases[activeTab].title} WORKFLOW</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              {useCases[activeTab].headline}
            </h3>

            <p className="text-slate-300 text-base leading-relaxed">
              {useCases[activeTab].desc}
            </p>

            <div className="space-y-3 pt-2">
              {useCases[activeTab].benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenDemo('demo')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/20 flex items-center gap-2"
              >
                <span>Request Custom Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4">
              <div className="text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                WORKFLOW ROI METRIC
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-extrabold text-white font-mono">
                  70% <span className="text-xs text-slate-400 font-normal">Turnaround Speedup</span>
                </div>
                <p className="text-xs text-slate-300">
                  Automated background checks reduce average hiring lag from 14 days to under 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
