import React, { useState } from 'react';
import { Network, Fingerprint, GraduationCap, Building2, MapPin, ShieldAlert, CheckCircle2, Cpu } from 'lucide-react';

interface NodeData {
  id: string;
  label: string;
  category: string;
  status: string;
  source: string;
  latency: string;
  icon: React.ReactNode;
  x: number;
  y: number;
}

export const TrustNetwork: React.FC = () => {
  const [activeNode, setActiveNode] = useState<NodeData | null>(null);

  const nodes: NodeData[] = [
    {
      id: 'identity',
      label: 'Identity Registry',
      category: 'Biometric & Govt ID',
      status: 'VERIFIED',
      source: 'National ID & Passport API',
      latency: '1.2s',
      icon: <Fingerprint className="w-5 h-5 text-sky-400" />,
      x: 18,
      y: 25,
    },
    {
      id: 'education',
      label: 'Education Gateway',
      category: 'Degree & University',
      status: 'AUTHENTICATED',
      source: 'National Academic Depository',
      latency: '2.4s',
      icon: <GraduationCap className="w-5 h-5 text-purple-400" />,
      x: 20,
      y: 75,
    },
    {
      id: 'candidate',
      label: 'Candidate Intelligence Node',
      category: 'Unified Identity Graph',
      status: 'TRUST SCORE: 96',
      source: 'VeraTrust Engine v4',
      latency: 'Instant',
      icon: <Network className="w-6 h-6 text-white" />,
      x: 50,
      y: 50,
    },
    {
      id: 'employment',
      label: 'Employment History',
      category: 'Payroll & Tax Verification',
      status: 'CONFIRMED',
      source: 'EPFO & Tax Records API',
      latency: '3.1s',
      icon: <Building2 className="w-5 h-5 text-emerald-400" />,
      x: 82,
      y: 25,
    },
    {
      id: 'address',
      label: 'Geospatial Address',
      category: 'Physical & Digital GPS',
      status: 'MATCHED',
      source: 'Utility & GPS Verification',
      latency: '0.8s',
      icon: <MapPin className="w-5 h-5 text-amber-400" />,
      x: 80,
      y: 75,
    },
    {
      id: 'records',
      label: 'Court & Criminal Checks',
      category: 'Legal Database Screening',
      status: 'CLEAR',
      source: 'Judicial Database Index',
      latency: '4.5s',
      icon: <ShieldAlert className="w-5 h-5 text-cyan-400" />,
      x: 50,
      y: 88,
    },
  ];

  return (
    <section className="py-20 relative bg-[#070B14] border-y border-slate-800/60 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            Signature Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Trust Network Visualizer
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Hover over any signal node to inspect how VeraTrust connects thousands of independent databases into a single command center for trust.
          </p>
        </div>

        {/* Network Canvas Card */}
        <div className="relative glass-panel rounded-2xl border border-slate-800 p-6 sm:p-10 min-h-[460px] flex items-center justify-center overflow-hidden">
          
          {/* SVG Connecting Beams */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Lines connecting outer nodes to central candidate node (50, 50) */}
            <line x1="18" y1="25" x2="50" y2="50" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="0.5" strokeDasharray="1,1" />
            <line x1="20" y1="75" x2="50" y2="50" stroke="rgba(167, 139, 250, 0.4)" strokeWidth="0.5" strokeDasharray="1,1" />
            <line x1="82" y1="25" x2="50" y2="50" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="0.5" strokeDasharray="1,1" />
            <line x1="80" y1="75" x2="50" y2="50" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="0.5" strokeDasharray="1,1" />
            <line x1="50" y1="88" x2="50" y2="50" stroke="rgba(34, 211, 238, 0.4)" strokeWidth="0.5" strokeDasharray="1,1" />
            
            {/* Pulsing signal dots traveling along lines */}
            <circle cx="34" cy="37.5" r="1" fill="#38BDF8" className="animate-ping" />
            <circle cx="66" cy="37.5" r="1" fill="#10B981" className="animate-ping" />
            <circle cx="35" cy="62.5" r="1" fill="#A78BFA" className="animate-ping" />
            <circle cx="65" cy="62.5" r="1" fill="#F59E0B" className="animate-ping" />
          </svg>

          {/* Render Nodes */}
          <div className="relative w-full h-[380px] max-w-4xl">
            {nodes.map((node) => {
              const isCentral = node.id === 'candidate';
              const isActive = activeNode?.id === node.id;

              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setActiveNode(node)}
                  onMouseLeave={() => setActiveNode(null)}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                    isActive ? 'scale-110 z-30' : 'z-20'
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-md transition-all shadow-xl ${
                      isCentral
                        ? 'bg-gradient-to-r from-sky-600/90 to-blue-700/90 border-sky-400 shadow-sky-500/30 glow-blue'
                        : isActive
                        ? 'bg-slate-900/90 border-sky-400 shadow-sky-500/20'
                        : 'bg-slate-950/80 border-slate-800 hover:border-slate-600'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${isCentral ? 'bg-white/20' : 'bg-slate-900 border border-slate-800'}`}>
                      {node.icon}
                    </div>
                    <div className="text-left font-mono">
                      <div className="text-xs text-slate-400">{node.category}</div>
                      <div className="font-bold text-white text-sm font-sans flex items-center gap-1.5">
                        {node.label}
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div className="text-[10px] text-emerald-400 font-bold tracking-wider">{node.status}</div>
                    </div>
                  </div>

                  {/* Active Node Tooltip */}
                  {isActive && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 p-3 rounded-xl bg-slate-900/95 border border-sky-500/40 text-xs shadow-2xl text-left font-mono z-40 animate-in fade-in zoom-in-95 duration-150">
                      <div className="text-sky-300 font-bold border-b border-slate-800 pb-1 mb-1.5 flex justify-between">
                        <span>SIGNAL VERIFIED</span>
                        <span className="text-emerald-400">{node.latency}</span>
                      </div>
                      <div className="text-slate-300 space-y-1">
                        <div><span className="text-slate-500">Source:</span> {node.source}</div>
                        <div><span className="text-slate-500">Protocol:</span> Zero-Knowledge Cryptographic Hash</div>
                        <div><span className="text-slate-500">Compliance:</span> Consent Verified ✓</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer note inside card */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-800/60 pt-3">
            <span>NETWORK STATE: OPTIMAL (3,400+ INTEGRATED SOURCES)</span>
            <span className="hidden sm:inline">HOVER TO EXAMINE SIGNAL NODES</span>
          </div>
        </div>
      </div>
    </section>
  );
};
