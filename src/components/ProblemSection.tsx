import React, { useState } from 'react';
import { 
  MailWarning, Layers, AlertTriangle, UserX, Clock, 
  CheckCircle2, ArrowRight, ShieldCheck, Zap, XCircle, TrendingDown 
} from 'lucide-react';

interface ProblemScenario {
  id: string;
  tabLabel: string;
  badgeText: string;
  icon: React.ReactNode;
  legacyTitle: string;
  legacyDesc: string;
  legacyBadges: string[];
  legacyMetric: string;
  veraTitle: string;
  veraDesc: string;
  veraBadges: string[];
  veraMetric: string;
  timeSaved: string;
}

export const ProblemSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('chasing');

  const scenarios: ProblemScenario[] = [
    {
      id: 'chasing',
      tabLabel: 'Manual Follow-ups',
      badgeText: 'HR TIME DRAIN',
      icon: <MailWarning className="w-5 h-5 text-amber-400" />,
      legacyTitle: 'Endless Email & PDF Chasing',
      legacyDesc: 'HR teams spend dozens of hours emailing former employers, chasing unreadable scanned PDFs, and following up on missing phone reference calls.',
      legacyBadges: ['Unresponsive HR contacts', 'Lost attachments', 'Manual phone logs'],
      legacyMetric: '4.2 hrs lost per candidate',
      veraTitle: 'Instant AI Payroll & API Direct Match',
      veraDesc: 'VeraTrust automatically verifies past employment through direct API access to national payroll, tax databases, and verified digital employment records.',
      veraBadges: ['Direct payroll API', 'Automated OCR extraction', 'Zero HR emails needed'],
      veraMetric: 'Verified in under 5 seconds',
      timeSaved: '95% reduction in manual effort',
    },
    {
      id: 'portals',
      tabLabel: 'Tool Sprawl',
      badgeText: 'FRAGMENTATION',
      icon: <Layers className="w-5 h-5 text-rose-400" />,
      legacyTitle: '5+ Disconnected Vendor Portals',
      legacyDesc: 'Identity, education, court records, and drug tests live across separate vendor logins, creating chaotic spreadsheets and zero centralized view.',
      legacyBadges: ['5 separate logins', 'Mismatched CSV reports', 'No unified status'],
      legacyMetric: '5+ separate vendor contracts',
      veraTitle: 'Single Unified AI Command Center',
      veraDesc: 'All 10 verification categories reside in a single glass-panel dashboard with automated webhooks, ATS integrations, and real-time status feeds.',
      veraBadges: ['1 unified dashboard', 'Workday & Greenhouse ATS sync', 'Universal candidate ID'],
      veraMetric: '1 platform for all 10 check types',
      timeSaved: '100% vendor consolidation',
    },
    {
      id: 'risk',
      tabLabel: 'Compliance Blind Spots',
      badgeText: 'RISK EXPOSURE',
      icon: <AlertTriangle className="w-5 h-5 text-orange-400" />,
      legacyTitle: 'Opaque Reports & Missed Red Flags',
      legacyDesc: 'Traditional background check reports arrive weeks late with ambiguous "Pending" statuses, forcing HR to either delay start dates or hire blindly.',
      legacyBadges: ['Delayed start dates', 'Opaque status updates', 'Compliance liability'],
      legacyMetric: '12-14 days average wait',
      veraTitle: 'Real-Time Audit Trail & AI Risk Scores',
      veraDesc: 'Every verification step is cryptographically logged with instant anomaly detection, flagging discrepancies in real-time before contracts are signed.',
      veraBadges: ['Tamper-evident logs', 'Instant fraud warnings', 'FCRA & GDPR compliant'],
      veraMetric: 'Real-time live audit trail',
      timeSaved: '< 24 hr turnaround time',
    },
    {
      id: 'dropoff',
      tabLabel: 'Candidate Friction',
      badgeText: 'BAD UX',
      icon: <UserX className="w-5 h-5 text-purple-400" />,
      legacyTitle: 'Complex 10-Page Mobile Forms',
      legacyDesc: 'Candidates are forced to print, sign, scan, and re-enter their work history into clunky desktop web forms, resulting in high drop-off rates.',
      legacyBadges: ['32% candidate drop-off', 'Desktop-only interfaces', 'Frustrated candidates'],
      legacyMetric: '32% candidate drop-off rate',
      veraTitle: '2-Minute Mobile-First Experience',
      veraDesc: 'Candidates complete verification on mobile or WhatsApp in under 2 minutes with zero paper forms and instant camera document upload.',
      veraBadges: ['WhatsApp integration', 'Instant ID selfie scan', '98% completion rate'],
      veraMetric: '98% candidate completion',
      timeSaved: '6x faster candidate completion',
    },
  ];

  const currentScenario = scenarios.find((s) => s.id === activeTab) || scenarios[0];

  const quickStats = [
    { label: 'Turnaround Time', legacy: '12 - 14 Days', vera: '< 24 Hours', icon: <Clock className="w-4 h-4 text-sky-400" /> },
    { label: 'HR Manual Chasing', legacy: '4.2 hrs / candidate', vera: '0 hrs (Automated)', icon: <MailWarning className="w-4 h-4 text-emerald-400" /> },
    { label: 'Vendor Portals', legacy: '5+ Portals', vera: '1 Unified Platform', icon: <Layers className="w-4 h-4 text-purple-400" /> },
    { label: 'Candidate Completion', legacy: '68% (32% Drop-off)', vera: '98% Completed', icon: <CheckCircle2 className="w-4 h-4 text-cyan-400" /> },
  ];

  return (
    <section id="problem" className="py-24 relative bg-[#070B14] border-b border-slate-800/60 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono tracking-widest uppercase">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>The Traditional Hiring Bottleneck</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Hiring moves fast.{' '}
            <span className="block text-gradient-purple">Verification shouldn't hold you back.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Legacy background check providers rely on manual paperwork, unresponsive vendor networks, and fragmented dashboards. Here is how VeraTrust eliminates traditional friction.
          </p>
        </div>

        {/* Quick Comparison Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickStats.map((stat, idx) => (
            <div key={idx} className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">{stat.icon} {stat.label}</span>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-xs text-rose-400/80 line-through font-mono">{stat.legacy}</span>
                <span className="text-sm sm:text-base font-bold text-emerald-400 font-mono flex items-center gap-1">
                  {stat.vera}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Scenario Selector Tabs */}
        <div className="space-y-8">
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {scenarios.map((scenario) => {
              const isActive = scenario.id === activeTab;
              return (
                <button
                  key={scenario.id}
                  onClick={() => setActiveTab(scenario.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 border whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-slate-800 text-white border-sky-500/50 shadow-lg shadow-sky-500/10'
                      : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  {scenario.icon}
                  <span>{scenario.tabLabel}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Interactive Side-by-Side Comparison Card */}
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-8 transition-all duration-300">
            
            {/* Header Badge */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  {currentScenario.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 font-bold">
                    {currentScenario.badgeText}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {currentScenario.tabLabel} Breakdown
                  </h3>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
                <TrendingDown className="w-4 h-4" />
                <span>{currentScenario.timeSaved}</span>
              </div>
            </div>

            {/* Side-by-Side Comparison Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Legacy BGV (The Problem) */}
              <div className="rounded-2xl p-6 bg-slate-950/80 border border-rose-500/20 space-y-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-rose-500/10 border-l border-b border-rose-500/20 text-rose-400 text-[11px] font-mono font-bold flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5" /> TRADITIONAL BGV
                </div>

                <div className="space-y-3 pt-2">
                  <h4 className="text-lg font-bold text-rose-200 flex items-center gap-2">
                    {currentScenario.legacyTitle}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {currentScenario.legacyDesc}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Common Issues</div>
                  <div className="flex flex-wrap gap-2">
                    {currentScenario.legacyBadges.map((badge, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-rose-500/5 border border-rose-500/20 text-rose-300 text-xs font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-rose-500/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Impact Metric</span>
                  <span className="text-rose-400 font-bold">{currentScenario.legacyMetric}</span>
                </div>
              </div>

              {/* VeraTrust AI (The Solution) */}
              <div className="rounded-2xl p-6 bg-gradient-to-br from-slate-900/90 to-sky-950/40 border border-sky-500/40 space-y-6 relative overflow-hidden shadow-xl shadow-sky-500/5 group">
                <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-emerald-500/10 border-l border-b border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> VERATRUST AI ENGINE
                </div>

                <div className="space-y-3 pt-2">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    {currentScenario.veraTitle}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {currentScenario.veraDesc}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Automated Advantages</div>
                  <div className="flex flex-wrap gap-2">
                    {currentScenario.veraBadges.map((badge, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-sky-500/20 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1 text-sky-400">
                    <Zap className="w-3.5 h-3.5" /> Performance Benchmark
                  </span>
                  <span className="text-emerald-400 font-bold">{currentScenario.veraMetric}</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 3 Static Problem Cards Grid (Redesigned & Polished) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div className="glass-panel glass-panel-hover rounded-2xl p-8 border border-slate-800 hover:border-amber-500/50 space-y-6 group">
            <div className="flex items-center justify-between">
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <MailWarning className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                01 • FRICTION
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                Manual Email Chasing
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                HR teams waste up to 4.2 hours per candidate following up on unverified previous employment documents and missing certificates.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-amber-400 flex items-center gap-1">
                <XCircle className="w-3.5 h-3.5" /> High Productivity Waste
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="glass-panel glass-panel-hover rounded-2xl p-8 border border-slate-800 hover:border-rose-500/50 space-y-6 group">
            <div className="flex items-center justify-between">
              <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
                <Layers className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                02 • FRAGMENTATION
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white group-hover:text-rose-300 transition-colors">
                Vendor Portal Sprawl
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Identity, education, court records, and address verification live in separate vendor portals, creating chaotic spreadsheets and data silos.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-rose-400 flex items-center gap-1">
                <XCircle className="w-3.5 h-3.5" /> 5+ Disconnected Tools
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="glass-panel glass-panel-hover rounded-2xl p-8 border border-slate-800 hover:border-purple-500/50 space-y-6 group">
            <div className="flex items-center justify-between">
              <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                03 • RISK & DELAY
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                Blind Spots & Slow Turnaround
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                12-day background check delays force HR to either hold up critical start dates or hire candidates blindly without full compliance checks.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-purple-400 flex items-center gap-1">
                <XCircle className="w-3.5 h-3.5" /> High Risk Exposure
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

