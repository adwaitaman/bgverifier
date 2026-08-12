import React from 'react';
import { ShieldCheck, Globe, Share2, MessageCircle, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050810] text-slate-400 border-t border-slate-800/80 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Section: Brand + Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#070B14] rounded-[7px] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                </div>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Vera<span className="text-sky-400">Trust</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Next-generation AI background verification platform. We help companies verify people faster, reduce hiring risk, and build a workforce they can trust.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white transition-colors flex items-center gap-1 text-xs font-mono" aria-label="Social Link X">
                <Share2 className="w-3.5 h-3.5" /> X/Twitter
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white transition-colors flex items-center gap-1 text-xs font-mono" aria-label="Social Link LinkedIn">
                <Globe className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white transition-colors flex items-center gap-1 text-xs font-mono" aria-label="Social Link Community">
                <MessageCircle className="w-3.5 h-3.5" /> Community
              </a>
            </div>
          </div>

          {/* Column 1: Product */}
          <div className="space-y-3 text-xs">
            <div className="font-bold text-white font-mono uppercase tracking-wider">Product</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#verifications" className="hover:text-white transition-colors">Verification Checks</a></li>
              <li><a href="#integrations" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Developer API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing & Tiers</a></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-3 text-xs">
            <div className="font-bold text-white font-mono uppercase tracking-wider">Solutions</div>
            <ul className="space-y-2">
              <li><a href="#solutions" className="hover:text-white transition-colors">Startups</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Enterprises</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Staffing Agencies</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Gig Platforms</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Regulated Hiring</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-3 text-xs">
            <div className="font-bold text-white font-mono uppercase tracking-wider">Resources</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Verification Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Whitepaper</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-3 text-xs">
            <div className="font-bold text-white font-mono uppercase tracking-wider">Legal & Trust</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Candidate Consent</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Security Controls</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Processing</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <div>© 2026 VeraTrust Inc. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> ALL SYSTEMS OPERATIONAL
            </span>
            <span className="flex items-center gap-1">
              BUILD v4.8.2 <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
