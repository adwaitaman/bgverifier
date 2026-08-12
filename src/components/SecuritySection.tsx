import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, Server, Key, ArrowRight, UserCheck } from 'lucide-react';

interface SecuritySectionProps {
  onOpenDemo: (type: 'demo') => void;
}

export const SecuritySection: React.FC<SecuritySectionProps> = ({ onOpenDemo }) => {
  const securityPillars = [
    {
      title: 'Encrypted Data Architecture',
      desc: 'AES-256 encryption at rest and TLS 1.3 in transit across all candidate data buffers.',
      icon: <Lock className="w-5 h-5 text-sky-400" />,
      tag: 'AES-256 / TLS 1.3',
    },
    {
      title: 'Role-Based Access Control (RBAC)',
      desc: 'Granular permissions ensure HR reps only view candidate data relevant to their role.',
      icon: <Key className="w-5 h-5 text-emerald-400" />,
      tag: 'GRANULAR PERMISSIONS',
    },
    {
      title: 'Immutable Audit Trails',
      desc: 'Every document view, verification query, and status change is logged with cryptographic timestamps.',
      icon: <FileText className="w-5 h-5 text-purple-400" />,
      tag: 'CRYPTO TIMESTAMPED',
    },
    {
      title: 'Zero-Trust Infrastructure',
      desc: 'Isolated tenant environments with automated vulnerability scanning and threat detection.',
      icon: <Server className="w-5 h-5 text-amber-400" />,
      tag: 'ZERO-TRUST ARCH',
    },
    {
      title: 'Strict Consent Management',
      desc: 'Candidates explicitly grant and can revoke verification consent at any point in the lifecycle.',
      icon: <UserCheck className="w-5 h-5 text-cyan-400" />,
      tag: 'CANDIDATE CONSENT',
    },
    {
      title: 'Privacy Controls',
      desc: 'Automated data purging schedule aligned with global privacy directives.',
      icon: <Eye className="w-5 h-5 text-rose-400" />,
      tag: 'AUTO PURGE SYSTEM',
    },
  ];

  return (
    <section id="security" className="py-24 relative bg-[#0A0F1D] border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            ENTERPRISE-GRADE PROTECTION
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Your data deserves{' '}
            <span className="block text-gradient-emerald">more than a lock icon.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Security and candidate privacy are not afterthoughts — they are architected directly into every step of our verification workflow.
          </p>
        </div>

        {/* Security Command Panel */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 relative glow-emerald">
          
          {/* Header Banner inside Panel */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 mb-8 border-b border-slate-800 gap-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
                SECURITY BY DESIGN FRAMEWORK
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">Zero-Trust Verification Infrastructure</h3>
            </div>

            <button
              onClick={() => onOpenDemo('demo')}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono font-semibold text-white flex items-center gap-2 transition-all"
            >
              <span>Explore Security Architecture</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>

          {/* 6 Security Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityPillars.map((pillar, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 font-bold">
                    {pillar.tag}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance Assurance Bar */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              STRICT COMPLIANCE CONTROLS ACTIVE
            </span>
            <div className="flex items-center gap-6">
              <span>ENCRYPTED END-TO-END</span>
              <span>CONSENT ENGINE ENABLED</span>
              <span>ISOLATED TENANT STORAGE</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
