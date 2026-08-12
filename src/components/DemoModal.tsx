import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowRight, Building, Mail, User, Sparkles } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'verify' | 'demo';
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, initialType = 'verify' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'HR Leader',
    hiringVolume: '10-50 / month',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg glass-panel p-6 sm:p-8 rounded-3xl border border-slate-700 shadow-2xl glow-blue">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white">Verification Sandbox Activated</h3>
              <p className="text-sm text-slate-300">
                Thank you, <strong className="text-white">{formData.name || 'Hiring Leader'}</strong>. We've sent instant sandbox API credentials to <strong className="text-sky-300">{formData.email || 'your email'}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 text-left space-y-1">
              <div>API_KEY: <span className="text-emerald-400">vt_test_9042_live_demo</span></div>
              <div>TENANT_ID: <span className="text-sky-400">{formData.company || 'Enterprise'}</span></div>
              <div>STATUS: <span className="text-emerald-400 font-bold">READY TO VERIFY</span></div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 transition-all"
            >
              Return to Landing Page
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 p-[1px]">
                <div className="w-full h-full bg-[#070B14] rounded-[11px] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-sky-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {initialType === 'verify' ? 'Start Free Verification Trial' : 'Book a Live Enterprise Demo'}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  {initialType === 'verify' ? 'Instant Access • Zero Setup Fee' : 'Custom Compliance Blueprint'}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-sky-400" /> Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-sky-400" /> Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-sky-400" /> Company Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Inc"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" /> Monthly Checks
                  </label>
                  <select
                    value={formData.hiringVolume}
                    onChange={(e) => setFormData({ ...formData, hiringVolume: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  >
                    <option value="1-10">1-10 / month</option>
                    <option value="10-50">10-50 / month</option>
                    <option value="50-250">50-250 / month</option>
                    <option value="250+">250+ / month (Enterprise)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm shadow-xl shadow-sky-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>{initialType === 'verify' ? 'Get Instant Trial Access' : 'Schedule Enterprise Demo'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center text-[11px] font-mono text-slate-500">
                🔒 Protected by 256-bit encryption. Zero credit card required.
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
