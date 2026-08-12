import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle2, ShieldCheck, Sparkles, Activity } from 'lucide-react';

export const VerificationAnimation: React.FC = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [trustScore, setTrustScore] = useState(0);

  const checkItems = [
    { id: 'identity', label: 'Identity Verification (SSN / Aadhaar / Passport)', delay: 600 },
    { id: 'employment', label: 'Employment History & Tax Data Cross-Check', delay: 1200 },
    { id: 'education', label: 'University Degree & Registrar Authentication', delay: 1800 },
    { id: 'address', label: 'Geospatial Address & Residency Match', delay: 2400 },
    { id: 'records', label: 'Court Record & Law Enforcement Indexing', delay: 3000 },
  ];

  const handleStartSimulation = () => {
    setIsSimulating(true);
    setCurrentStepIndex(0);
    setTrustScore(0);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isSimulating && currentStepIndex < checkItems.length) {
      timer = setTimeout(() => {
        setCurrentStepIndex((prev) => prev + 1);
      }, 700);
    } else if (isSimulating && currentStepIndex === checkItems.length) {
      // Animate score count up
      let score = 0;
      const scoreInterval = setInterval(() => {
        score += 2;
        if (score >= 98) {
          setTrustScore(98);
          clearInterval(scoreInterval);
        } else {
          setTrustScore(score);
        }
      }, 20);
    }
    return () => clearTimeout(timer);
  }, [isSimulating, currentStepIndex]);

  return (
    <section className="py-24 relative bg-[#0A0F1D] border-b border-slate-800/60 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Engine Simulator
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            See the AI Verification Engine in action.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Experience how VeraTrust executes multi-layer background screening synchronously in seconds rather than weeks.
          </p>
        </div>

        {/* Interactive Engine Container */}
        <div className="max-w-3xl mx-auto glass-panel p-6 sm:p-10 rounded-2xl border border-slate-800 shadow-2xl relative glow-emerald">
          
          {/* Top Simulation Toolbar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-slate-300 uppercase font-bold">
                REAL-TIME SIMULATOR NODE #492
              </span>
            </div>

            <button
              onClick={handleStartSimulation}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-xs font-mono flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
            >
              {isSimulating ? <RotateCcw className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              {isSimulating ? 'Re-run Simulation' : 'Run Live Simulation'}
            </button>
          </div>

          {/* Verification Items Checklist */}
          <div className="space-y-4">
            {checkItems.map((item, index) => {
              const isVerified = currentStepIndex > index;
              const isProcessing = isSimulating && currentStepIndex === index;

              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-xl border font-mono transition-all duration-300 flex items-center justify-between ${
                    isVerified
                      ? 'bg-slate-900/90 border-emerald-500/40 text-white shadow-md shadow-emerald-500/5'
                      : isProcessing
                      ? 'bg-slate-900/80 border-sky-400/80 text-sky-200 animate-pulse'
                      : 'bg-slate-950/60 border-slate-800/80 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500">0{index + 1}</span>
                    <span className="text-sm font-sans font-medium">{item.label}</span>
                  </div>

                  <div>
                    {isVerified ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED
                      </span>
                    ) : isProcessing ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold border border-sky-500/30">
                        <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" /> SCANNING...
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 text-slate-500 text-xs font-bold">
                        ● PENDING
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Final Score Banner */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-slate-400">ENGINE EXECUTION STATE:</div>
              <div className="text-sm font-bold text-white flex items-center gap-2 mt-0.5">
                {currentStepIndex === checkItems.length ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" /> VERIFICATION COMPLETE (0.42s latency)
                  </span>
                ) : isSimulating ? (
                  <span className="text-sky-400">Executing async protocols...</span>
                ) : (
                  <span className="text-slate-400">Ready to initiate live test</span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-950 px-5 py-3 rounded-xl border border-slate-800">
              <div className="text-right">
                <div className="text-[10px] font-mono text-slate-400">COMPOSITE SCORE</div>
                <div className="text-xs font-mono font-bold text-emerald-400">VERIFIED STATUS</div>
              </div>
              <div className="text-4xl font-extrabold font-mono text-white tracking-tight">
                {trustScore}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
