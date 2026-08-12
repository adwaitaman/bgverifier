import React from 'react';
import { Network, Code2, Cpu, ArrowRight, Layers, Database, Webhook, FileJson } from 'lucide-react';

interface IntegrationsProps {
  onOpenDemo: (type: 'demo') => void;
}

export const Integrations: React.FC<IntegrationsProps> = ({ onOpenDemo }) => {
  const integrations = [
    { name: 'ATS Systems', category: 'Recruitment & Hiring', desc: 'Sync candidate data directly from your Applicant Tracking System.', icon: <Layers className="w-5 h-5 text-sky-400" /> },
    { name: 'HRMS & HRIS', category: 'People Management', desc: 'Automatically pass verified reports into employee records.', icon: <Database className="w-5 h-5 text-purple-400" /> },
    { name: 'RESTful API', category: 'Custom Engineering', desc: 'Developer-friendly JSON endpoints for bespoke enterprise setups.', icon: <Code2 className="w-5 h-5 text-emerald-400" /> },
    { name: 'Webhooks Engine', category: 'Event Automation', desc: 'Real-time event notifications dispatches on status changes.', icon: <Webhook className="w-5 h-5 text-amber-400" />, },
    { name: 'Payroll Sync', category: 'Finance Operations', desc: 'Trigger tax & identity checks prior to payroll onboarding.', icon: <FileJson className="w-5 h-5 text-cyan-400" /> },
    { name: 'Slack & Teams', category: 'Team Notifications', desc: 'Instant alert notifications when high-priority checks clear.', icon: <Network className="w-5 h-5 text-rose-400" /> },
  ];

  return (
    <section id="integrations" className="py-24 relative bg-[#070B14] border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider">
            <Network className="w-3.5 h-3.5" />
            Seamless Ecosystem Connectivity
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Fits into the tools your{' '}
            <span className="block text-gradient-purple">HR team already uses.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Plug VeraTrust directly into your existing talent acquisition stack with native integrations, webhooks, and REST APIs.
          </p>
        </div>

        {/* Integration Architecture Flow Diagram */}
        <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-slate-800 text-center space-y-6">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            DATA PIPELINE INTEGRATION ARCHITECTURE
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center font-mono text-xs">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 font-bold">
              ATS PLATFORM
            </div>

            <div className="hidden md:flex justify-center text-sky-400">
              <ArrowRight className="w-5 h-5" />
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white font-bold shadow-lg shadow-sky-500/20 col-span-1 md:col-span-3">
              <div className="flex items-center justify-center gap-2">
                <Cpu className="w-4 h-4" /> VERATRUST ENGINE
              </div>
              <div className="text-[10px] text-sky-200 font-normal mt-0.5">REST API & Real-time Webhooks</div>
            </div>

            <div className="hidden md:flex justify-center text-emerald-400">
              <ArrowRight className="w-5 h-5" />
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 font-bold">
              HRMS / PAYROLL
            </div>
          </div>
        </div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {integrations.map((item, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-sky-500/40 transition-all space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 font-semibold">
                  {item.category}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center pt-2">
          <button
            onClick={() => onOpenDemo('demo')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
          >
            <span>Explore Integrations & Developer Documentation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
