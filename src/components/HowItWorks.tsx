import React, { useState } from 'react';
import { Send, Cpu, CheckCircle2, ShieldCheck, ArrowRight, UserPlus, FileCheck, Award } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: 'STEP 01',
      title: 'Invite',
      headline: 'Send a secure verification request',
      description: 'Trigger a candidate invitation via Email, SMS, or WhatsApp directly from your ATS or VeraTrust portal in one click. Candidates complete verification in under 2 minutes.',
      icon: <Send className="w-6 h-6 text-sky-400" />,
      visual: (
        <div className="space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-300 flex items-center gap-2">
              <UserPlus className="w-4 h-4 text-sky-400" /> Candidate Invitation Sent
            </span>
            <span className="text-emerald-400 font-bold">DELIVERED</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2">
            <div className="text-slate-400">To: candidate@domain.com</div>
            <div className="text-white font-bold">"VeraTrust Verification Link Request"</div>
            <div className="text-sky-400 text-[11px] underline">https://veratrust.app/v/a8942-token</div>
            <div className="pt-2 flex justify-end">
              <span className="px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 font-bold">Mobile First UI</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      step: 'STEP 02',
      title: 'Verify',
      headline: 'Automated AI checks validate background',
      description: 'VeraTrust AI initiates concurrent validation signals across government databases, tax authorities, universities, and court registries in parallel.',
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      visual: (
        <div className="space-y-2.5 font-mono text-xs">
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
            <span className="text-slate-300">Identity Protocol (Govt ID)</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED
            </span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
            <span className="text-slate-300">Education Registry Check</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED
            </span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
            <span className="text-slate-300">Employment History Match</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED
            </span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
            <span className="text-slate-300">Address & GPS Geo-Tag</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED
            </span>
          </div>
        </div>
      ),
    },
    {
      step: 'STEP 03',
      title: 'Decide',
      headline: 'Get a clear, centralized decision report',
      description: 'Review an immutable, audit-ready PDF and dashboard report with a unified Trust Score, risk flag breakdown, and 1-click hire approval.',
      icon: <Award className="w-6 h-6 text-emerald-400" />,
      visual: (
        <div className="p-4 rounded-xl bg-slate-950/90 border border-emerald-500/40 space-y-3 font-mono">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">FINAL REPORT STATUS</span>
            <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-extrabold text-xs">
              READY FOR HIRE
            </span>
          </div>
          <div className="flex items-center gap-4 py-2 border-y border-slate-800">
            <div className="text-3xl font-extrabold text-white">98</div>
            <div className="text-xs text-slate-300">
              <div className="font-bold text-emerald-400">TRUST SCORE: HIGH</div>
              <div>0 Risk Flags Identified</div>
            </div>
          </div>
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>Download Audit PDF</span>
            <FileCheck className="w-4 h-4 text-emerald-400" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative bg-[#070B14] border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            STREAMLINED THREE-STEP WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            From candidate to verified in{' '}
            <span className="block text-gradient-purple">three simple steps.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            No redundant phone calls or manual tracking spreadsheets. VeraTrust streamlines the entire screening lifecycle.
          </p>
        </div>

        {/* Step Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                activeStep === index
                  ? 'bg-slate-900/90 border-sky-400 shadow-xl shadow-sky-500/10 glow-blue'
                  : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 opacity-80'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded border border-sky-500/20">
                  {item.step}
                </span>
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {item.headline}
              </p>
            </button>
          ))}
        </div>

        {/* Selected Step Detailed View Card */}
        <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              ACTIVE PHASE: {steps[activeStep].step}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {steps[activeStep].headline}
            </h3>

            <p className="text-slate-300 text-base leading-relaxed font-sans">
              {steps[activeStep].description}
            </p>

            <div className="pt-2">
              <a
                href="#verifications"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>Learn more about automation rules</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-panel p-6 rounded-xl border border-slate-800 bg-slate-950/80">
              <div className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">
                SYSTEM INTERACTION PREVIEW
              </div>
              {steps[activeStep].visual}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
