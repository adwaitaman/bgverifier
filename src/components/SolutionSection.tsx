import React from 'react';
import { 
  Fingerprint, MapPin, Briefcase, GraduationCap, Gavel, 
  UserCheck, Globe, Award, FileText, Sliders, CheckCircle2, ShieldCheck 
} from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const categories = [
    {
      id: 'identity',
      title: 'Identity Verification',
      desc: 'Instant biometric & official ID matching via national government APIs.',
      icon: <Fingerprint className="w-6 h-6 text-sky-400" />,
      span: 'col-span-1 md:col-span-2 lg:col-span-2',
      status: 'VERIFIED IN 4 SEC',
      statusBg: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      highlight: true,
    },
    {
      id: 'employment',
      title: 'Employment Verification',
      desc: 'Direct tax, payroll & HR database cross-referencing for past roles.',
      icon: <Briefcase className="w-6 h-6 text-emerald-400" />,
      span: 'col-span-1 md:col-span-2 lg:col-span-2',
      status: 'CONFIRMED VIA PAYROLL',
      statusBg: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
      highlight: true,
    },
    {
      id: 'education',
      title: 'Education Verification',
      desc: 'Validation of degrees, transcripts & academic honors from verified universities.',
      icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
      span: 'col-span-1 lg:col-span-1',
      status: 'AUTHENTICATED',
      statusBg: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    },
    {
      id: 'address',
      title: 'Address Verification',
      desc: 'Digital GPS geo-tagging & physical field agent verification.',
      icon: <MapPin className="w-6 h-6 text-amber-400" />,
      span: 'col-span-1 lg:col-span-1',
      status: 'GEO-TAG MATCHED',
      statusBg: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
    {
      id: 'criminal',
      title: 'Criminal & Court Records',
      desc: 'Real-time search across high court, district court & police databases.',
      icon: <Gavel className="w-6 h-6 text-cyan-400" />,
      span: 'col-span-1 lg:col-span-1',
      status: 'RECORD CLEAR',
      statusBg: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    },
    {
      id: 'reference',
      title: 'Reference Checks',
      desc: 'Automated digital surveys & confidential phone reference logs.',
      icon: <UserCheck className="w-6 h-6 text-indigo-400" />,
      span: 'col-span-1 lg:col-span-1',
      status: 'COMPLETED (3/3)',
      statusBg: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      id: 'global',
      title: 'Global Database Screening',
      desc: 'Sanction lists, PEP (Politically Exposed Persons) & global AML watchlists.',
      icon: <Globe className="w-6 h-6 text-rose-400" />,
      span: 'col-span-1 lg:col-span-1',
      status: 'PASSED NO MATCH',
      statusBg: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      id: 'license',
      title: 'Professional License Checks',
      desc: 'Medical, legal, engineering & financial board certification audits.',
      icon: <Award className="w-6 h-6 text-teal-400" />,
      span: 'col-span-1 lg:col-span-1',
      status: 'ACTIVE LICENSE',
      statusBg: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    },
    {
      id: 'document',
      title: 'AI Document Verification',
      desc: 'Deepfake & tamper detection on submitted PDF/image certificates.',
      icon: <FileText className="w-6 h-6 text-blue-400" />,
      span: 'col-span-1 md:col-span-2 lg:col-span-2',
      status: 'ORIGINAL CERTIFIED',
      statusBg: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    },
    {
      id: 'custom',
      title: 'Custom & Role-Based Checks',
      desc: 'Credit history, drug testing, and bespoke compliance questionnaires.',
      icon: <Sliders className="w-6 h-6 text-slate-300" />,
      span: 'col-span-1 md:col-span-2 lg:col-span-1',
      status: 'CONFIGURABLE',
      statusBg: 'text-slate-300 bg-slate-800 border-slate-700',
    },
  ];

  return (
    <section id="verifications" className="py-24 relative bg-[#0A0F1D] border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
            THE VERIFICATION BENTO GRID
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            One platform.{' '}
            <span className="block text-gradient-blue">Complete verification.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Everything your HR team needs to verify candidates from a single intelligent workflow — fully customizable to your hiring requirements.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`${cat.span} glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between group relative overflow-hidden`}
            >
              {/* Subtle top light bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-sky-500/40 transition-colors">
                    {cat.icon}
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${cat.statusBg} flex items-center gap-1`}>
                    <CheckCircle2 className="w-3 h-3" />
                    {cat.status}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {cat.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer status indicator bar */}
              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  API Direct Connect
                </span>
                <span className="text-[10px] text-slate-400 uppercase">99.9% UPTIME</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
