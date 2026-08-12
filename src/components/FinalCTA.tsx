import React from 'react';
import { ArrowRight, ShieldCheck, Lock, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenDemo: (type: 'verify' | 'demo') => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-24 sm:py-32 relative bg-[#070B14] overflow-hidden">
      {/* Ambient background particles & radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-sky-500/15 via-blue-600/15 to-emerald-500/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel p-10 sm:p-16 rounded-3xl border border-slate-700/60 text-center space-y-8 shadow-2xl glow-blue">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-sky-500/30 text-xs font-mono text-sky-300">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            READY TO UPGRADE YOUR VERIFICATION STACK?
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Build a workforce{' '}
            <span className="block text-gradient-blue">you can confidently trust.</span>
          </h2>

          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Start verifying candidates with a faster, smarter background verification platform built for modern hiring teams.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenDemo('verify')}
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-base shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
            >
              <span>Start Verifying</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onOpenDemo('demo')}
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-semibold text-base transition-all flex items-center justify-center gap-2"
            >
              <span>Talk to Sales</span>
            </button>
          </div>

          {/* Reassurance string */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400 border-t border-slate-800/80 max-w-xl mx-auto">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-400" /> Secure onboarding
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-purple-400" /> Enterprise-ready
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
