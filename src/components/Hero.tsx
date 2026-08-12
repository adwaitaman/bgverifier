import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Clock, Sparkles, Lock, Cpu, Activity, UserCheck } from 'lucide-react';

interface HeroProps {
  onOpenDemo: (type: 'verify' | 'demo') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Glow effects & ambient radial light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 text-xs font-mono text-sky-300 shadow-inner">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span className="font-semibold text-white">NEXT-GEN BGV PLATFORM</span>
            <span className="text-slate-500">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              Automated Trust Workflows
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
            Hire with confidence.{' '}
            <span className="block text-gradient-blue">Verify without the wait.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            AI-powered background verification that helps businesses verify identity, education, employment, address and more — <span className="text-white font-medium">faster, easier and with complete visibility.</span>
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenDemo('verify')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-base shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 group"
            >
              <span>Start Verifying</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onOpenDemo('demo')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-slate-500 text-slate-200 hover:text-white font-semibold text-base backdrop-blur-md transition-all flex items-center justify-center gap-2 group"
            >
              <Cpu className="w-4 h-4 text-sky-400" />
              <span>Book a Demo</span>
            </button>
          </div>

          {/* Trust line */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Secure</span>
            <span>•</span>
            <Activity className="w-4 h-4 text-sky-400" />
            <span>Automated</span>
            <span>•</span>
            <Lock className="w-4 h-4 text-purple-400" />
            <span>Built for modern hiring</span>
          </div>
        </div>

        {/* Hero Visual — Verification Intelligence Dashboard */}
        <div className="mt-14 lg:mt-20 relative max-w-5xl mx-auto">
          {/* Main Command Center Dashboard */}
          <div className="relative rounded-2xl glass-panel border border-slate-700/60 p-6 md:p-8 shadow-2xl shadow-black/80 glow-blue overflow-hidden">
            {/* Top Bar controls */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400 ml-2">VERIFICATION INTELLIGENCE DASHBOARD v4.2</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  LIVE ENGINE ONLINE
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Column: Candidate Info & Checks Checklist */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 p-[2px] shadow-md">
                      <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-sky-300 font-bold text-lg font-mono">
                        AS
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-white text-lg">Aarav Sharma</h3>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                          REQ-8942
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">Senior Software Engineer • Enterprise Tier</p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                    <UserCheck className="w-3.5 h-3.5" /> Ready for Hire
                  </span>
                </div>

                {/* Checklist Panel */}
                <div className="bg-slate-950/70 rounded-xl border border-slate-800 p-4 font-mono text-sm space-y-3">
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-2 flex justify-between">
                    <span>Verification Signal</span>
                    <span>Status</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                    <span className="text-slate-200 flex items-center gap-2 font-sans">
                      <span className="w-2 h-2 rounded-full bg-sky-400"></span> Identity Check (SSN/Aadhaar/Passport)
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400 font-bold text-xs">
                      <CheckCircle2 className="w-4 h-4" /> PASS
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                    <span className="text-slate-200 flex items-center gap-2 font-sans">
                      <span className="w-2 h-2 rounded-full bg-sky-400"></span> Education Credentials (IIT / MS Computer Science)
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400 font-bold text-xs">
                      <CheckCircle2 className="w-4 h-4" /> VERIFIED
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                    <span className="text-slate-200 flex items-center gap-2 font-sans">
                      <span className="w-2 h-2 rounded-full bg-sky-400"></span> Employment History (5 Yrs - Lead Tech Companies)
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400 font-bold text-xs">
                      <CheckCircle2 className="w-4 h-4" /> CONFIRMED
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                    <span className="text-slate-200 flex items-center gap-2 font-sans">
                      <span className="w-2 h-2 rounded-full bg-sky-400"></span> Physical & Digital Address Verification
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400 font-bold text-xs">
                      <CheckCircle2 className="w-4 h-4" /> MATCHED
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                    <span className="text-slate-200 flex items-center gap-2 font-sans">
                      <span className="w-2 h-2 rounded-full bg-sky-400"></span> Criminal & Court Records Check
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400 font-bold text-xs">
                      <CheckCircle2 className="w-4 h-4" /> CLEAR
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Trust Score Ring & Timeline */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-xl bg-slate-950/80 border border-slate-800 relative">
                {/* Radial Trust Score Gauge */}
                <div className="relative w-44 h-44 flex items-center justify-center my-2">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#1E293B"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="url(#score-gradient)"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset="10"
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="score-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38BDF8" />
                        <stop offset="50%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#10B981" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-extrabold text-white font-mono tracking-tight">96</span>
                    <span className="text-[11px] font-mono text-emerald-400 tracking-wider uppercase font-bold mt-0.5">
                      VERIFIED
                    </span>
                    <span className="text-[10px] text-slate-400">TRUST SCORE</span>
                  </div>
                </div>

                <div className="w-full text-center space-y-2 mt-2 pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-center gap-1.5 text-xs text-slate-300 font-mono">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    <span>Verification completed <strong>2h 14m ago</strong></span>
                  </div>
                  <p className="text-[11px] text-slate-400">5 of 5 verification protocols completed with zero flags.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Floating Badges around Dashboard */}
          <div className="hidden md:flex absolute -top-6 -left-6 glass-panel px-4 py-2.5 rounded-xl border border-emerald-500/30 text-xs font-semibold text-emerald-300 shadow-xl items-center gap-2 animate-float">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Identity Verified ✓</span>
          </div>

          <div className="hidden md:flex absolute -top-8 -right-6 glass-panel px-4 py-2.5 rounded-xl border border-sky-500/30 text-xs font-semibold text-sky-300 shadow-xl items-center gap-2 animate-float-delayed">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            <span>Employment Verified ✓</span>
          </div>

          <div className="hidden md:flex absolute -bottom-6 -left-8 glass-panel px-4 py-2.5 rounded-xl border border-purple-500/30 text-xs font-semibold text-purple-300 shadow-xl items-center gap-2 animate-float">
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            <span>Education Verified ✓</span>
          </div>

          <div className="hidden md:flex absolute -bottom-8 -right-8 glass-panel px-4 py-2.5 rounded-xl border border-amber-500/30 text-xs font-semibold text-amber-300 shadow-xl items-center gap-2 animate-float-delayed">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Address Verified ✓</span>
          </div>
        </div>
      </div>
    </section>
  );
};
