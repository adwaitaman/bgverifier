import React from 'react';
import { Bot, CheckCircle2, ArrowDown, RefreshCw, BellRing, Cpu } from 'lucide-react';

export const AIWorkflow: React.FC = () => {
  const workflowNodes = [
    { title: 'Candidate Submitted', detail: 'Application synced from ATS', status: 'COMPLETE', time: '10:42:01 AM' },
    { title: 'AI Analyzes Requirements', detail: 'Determines state & role compliance rules', status: 'COMPLETE', time: '10:42:04 AM' },
    { title: 'Checks Initiated', detail: 'Dispatches 5 parallel signal requests', status: 'COMPLETE', time: '10:42:08 AM' },
    { title: 'Documents Requested', detail: 'Smart OCR & deepfake check on upload', status: 'COMPLETE', time: '10:43:12 AM' },
    { title: 'Follow-ups Automated', detail: 'Zero manual HR calls needed', status: 'ACTIVE', time: 'Automated' },
    { title: 'Results Validated', detail: 'Cross-checked against 3 trusted registers', status: 'VERIFIED', time: '10:45:00 AM' },
    { title: 'HR Notified', detail: 'Report pushed to ATS dashboard', status: 'READY', time: 'Instant' },
  ];

  return (
    <section className="py-24 relative bg-[#070B14] border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
            <Bot className="w-3.5 h-3.5" />
            AI-Native Orchestration
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Verification that works{' '}
            <span className="block text-gradient-blue">while you work.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Automate repetitive HR follow-ups, document validation, and status tracking so your talent team can focus on making high-trust hires.
          </p>
        </div>

        {/* AI Workflow Visual Panel */}
        <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-slate-800 relative">
          
          {/* Top Live AI Status Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
              </span>
              <span className="text-sky-400 font-bold">AI WORKFLOW ACTIVE</span>
            </div>

            <div className="flex items-center gap-6 text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <strong className="text-white">5</strong> checks completed
              </span>
              <span className="flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                <strong className="text-white">0</strong> pending actions
              </span>
              <span className="flex items-center gap-1.5">
                <BellRing className="w-3.5 h-3.5 text-sky-400" />
                Auto-sync on
              </span>
            </div>
          </div>

          {/* Workflow Sequence Cards */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
            {workflowNodes.map((node, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-full p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-sky-500/40 transition-all text-center space-y-2 h-full flex flex-col justify-between">
                  <div className="text-[10px] font-mono text-slate-500">STEP 0{index + 1}</div>
                  <div className="font-bold text-white text-xs leading-snug group-hover:text-sky-300 transition-colors">
                    {node.title}
                  </div>
                  <div className="text-[10px] text-slate-400 leading-tight font-sans">
                    {node.detail}
                  </div>
                  <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[9px] font-mono">
                    <span className="text-emerald-400 font-bold">{node.status}</span>
                    <span className="text-slate-500">{node.time}</span>
                  </div>
                </div>

                {index < workflowNodes.length - 1 && (
                  <div className="md:hidden py-2 text-slate-600">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Transparency Callout */}
          <div className="mt-8 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-sky-400" />
              <span>AI assists & orchestrates; humans remain in full oversight of final hiring decisions.</span>
            </div>
            <span className="text-sky-400 font-semibold">100% AUDITABLE LOGS</span>
          </div>

        </div>
      </div>
    </section>
  );
};
