import React from 'react';
import { Smartphone, CheckCircle2, Circle, ArrowRight, ShieldCheck, Zap, Lock } from 'lucide-react';

interface CandidateExperienceProps {
  onOpenDemo: (type: 'verify') => void;
}

export const CandidateExperience: React.FC<CandidateExperienceProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-24 relative bg-[#0A0F1D] border-b border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Value props */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
              <Smartphone className="w-3.5 h-3.5" />
              Candidate-Centric UX
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Verification shouldn't{' '}
              <span className="block text-gradient-emerald">feel like paperwork.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Candidates complete their background submission on any smartphone in under 2 minutes with zero app downloads required.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 mt-1">
                  <Zap className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Under 2 Minute Completion</h3>
                  <p className="text-xs sm:text-sm text-slate-300">Automated pre-filling of candidate credentials minimizes typing and reduces drop-off.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 mt-1">
                  <Lock className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Transparent Progress Tracking</h3>
                  <p className="text-xs sm:text-sm text-slate-300">Candidates get real-time SMS updates on their verification status without calling HR.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenDemo('verify')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-sm shadow-xl shadow-emerald-500/20 transition-all flex items-center gap-2"
              >
                <span>Test Candidate Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Fidelity Mobile Phone Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[340px] rounded-[44px] bg-slate-950 border-4 border-slate-800 p-4 shadow-2xl shadow-black glow-emerald">
              
              {/* Phone Notch & Speaker */}
              <div className="w-32 h-4 bg-slate-900 rounded-b-xl mx-auto mb-4 flex items-center justify-center">
                <div className="w-10 h-1 bg-slate-800 rounded-full" />
              </div>

              {/* Screen Content */}
              <div className="bg-[#070B14] rounded-[32px] p-5 border border-slate-800/80 space-y-5 font-sans">
                
                {/* Brand header */}
                <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-3">
                  <span className="font-bold text-white font-mono tracking-tight flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-sky-400" /> VeraTrust
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">SECURE SSL 256</span>
                </div>

                {/* Candidate Greeting */}
                <div className="space-y-1">
                  <div className="text-xs font-mono text-slate-400">HIRING AT NEXUS TECH</div>
                  <h4 className="text-lg font-bold text-white">You're almost verified.</h4>
                  <p className="text-[11px] text-slate-300">Just 1 step remaining to complete your onboarding package.</p>
                </div>

                {/* Verification checklist inside phone */}
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-200 font-sans text-xs">Identity Verification</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Done
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-200 font-sans text-xs">Education Credentials</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Done
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-between text-sky-300">
                    <span className="font-sans text-xs font-semibold">Employment History</span>
                    <span className="text-sky-400 font-bold flex items-center gap-1">
                      <Circle className="w-3.5 h-3.5 animate-pulse" /> Pending
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>PROGRESS: 66%</span>
                    <span className="text-emerald-400">~2 mins remaining</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sky-400 to-emerald-400 w-2/3" />
                  </div>
                </div>

                {/* Action button inside phone */}
                <button
                  onClick={() => onOpenDemo('verify')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-xs shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  <span>Continue Verification</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
