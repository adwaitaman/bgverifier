import React from 'react';
import { Shield, Zap, Target } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  // Placeholder customer logos (easily updateable in code)
  const placeholderLogos = [
    { name: 'NEXUS CORP', icon: '⚡' },
    { name: 'HYPERION LABS', icon: '◈' },
    { name: 'APEX DIGITAL', icon: '▲' },
    { name: 'VOLTR CAPITAL', icon: '❖' },
    { name: 'PULSE GLOBAL', icon: '●' },
  ];

  // Placeholder metrics structured for easy updating
  const metrics = [
    {
      value: '10K+',
      label: 'Checks Processed Monthly',
      subtext: 'Across enterprise & startup workflows',
      icon: <Shield className="w-5 h-5 text-sky-400" />,
    },
    {
      value: '99.2%',
      label: 'Verification Accuracy*',
      subtext: 'Multi-source cross-validation engine',
      icon: <Target className="w-5 h-5 text-emerald-400" />,
    },
    {
      value: '70%+',
      label: 'Faster Turnaround Workflows*',
      subtext: 'Automated candidate follow-ups & AI matching',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
    },
  ];

  return (
    <section className="py-12 bg-[#0A0F1D] border-b border-slate-800/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Customer Logo Strip Header */}
        <div className="text-center space-y-4">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
            Trusted verification infrastructure for modern hiring teams
          </p>

          {/* Placeholder Logo Bar */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {placeholderLogos.map((logo, index) => (
              <div key={index} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer group">
                <span className="text-xl group-hover:scale-110 transition-transform">{logo.icon}</span>
                <span className="font-mono text-sm font-bold tracking-wider">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800/80">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all flex items-start gap-4 group"
            >
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-sky-500/40 transition-colors">
                {metric.icon}
              </div>
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight group-hover:text-sky-300 transition-colors">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-slate-200">{metric.label}</div>
                <div className="text-xs text-slate-400 font-mono">{metric.subtext}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimers note */}
        <div className="text-center">
          <span className="text-[11px] font-mono text-slate-400">
            * Benchmark statistics based on internal test data against traditional manual verification channels.
          </span>
        </div>
      </div>
    </section>
  );
};
