import React from 'react';
import { Eye, Clock, ShieldCheck } from 'lucide-react';

export const TransparencyTimeline: React.FC = () => {
  const events = [
    {
      time: '10:42 AM',
      event: 'Candidate submitted consent & documents',
      details: 'Candidate Aarav Sharma uploaded identity & employment records via mobile web link.',
      status: 'SYSTEM EVENT',
      badgeBg: 'bg-slate-800 text-slate-300',
    },
    {
      time: '10:43 AM',
      event: 'Identity verification initiated',
      details: 'Dispatched automated query to national ID registry via encrypted API.',
      status: 'API DISPATCHED',
      badgeBg: 'bg-sky-500/10 text-sky-400 border border-sky-500/20',
    },
    {
      time: '10:47 AM',
      event: 'Education credentials authenticated',
      details: 'Digital degree certificate validated against academic depository registry.',
      status: 'VERIFIED ✓',
      badgeBg: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
    },
    {
      time: '11:02 AM',
      event: 'Employment history cross-referenced',
      details: 'Past 5 years payroll & tax records confirmed with previous employers.',
      status: 'CONFIRMED ✓',
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    },
    {
      time: '11:18 AM',
      event: 'Comprehensive report ready for HR decision',
      details: 'All 5 checks cleared with Trust Score 96. Report synced to ATS dashboard.',
      status: 'COMPLETE ✓',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40',
    },
  ];

  return (
    <section className="py-24 relative bg-[#070B14] border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
            <Eye className="w-3.5 h-3.5" />
            100% Auditability
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            No black boxes.{' '}
            <span className="block text-gradient-blue">Know what's happening.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Give HR teams and compliance officers complete line-by-line visibility into every verification event, API latency, and status change.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto glass-panel p-6 sm:p-10 rounded-2xl border border-slate-800 relative">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-8">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>LIVE AUDIT TRAIL LOG — VERIFICATION #BGV-9042</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
              TOTAL TIME: 36 MINS
            </span>
          </div>

          {/* Timeline Nodes */}
          <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-sky-500 before:via-purple-500 before:to-emerald-500">
            {events.map((ev, index) => (
              <div key={index} className="relative group">
                {/* Node dot */}
                <div className="absolute -left-6 sm:-left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-sky-400 group-hover:scale-125 transition-transform" />

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                    <span className="text-sky-400 font-bold">{ev.time}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${ev.badgeBg}`}>
                      {ev.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white font-sans">{ev.event}</h3>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">{ev.details}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-slate-800 text-center text-xs font-mono text-slate-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Audit logs are cryptographically sealed and exportable in JSON / PDF format.</span>
          </div>

        </div>
      </div>
    </section>
  );
};
