import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustNetwork } from './components/TrustNetwork';
import { TrustStrip } from './components/TrustStrip';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorks } from './components/HowItWorks';
import { VerificationAnimation } from './components/VerificationAnimation';
import { AIWorkflow } from './components/AIWorkflow';
import { SecuritySection } from './components/SecuritySection';
import { TransparencyTimeline } from './components/TransparencyTimeline';
import { CandidateExperience } from './components/CandidateExperience';
import { Integrations } from './components/Integrations';
import { UseCases } from './components/UseCases';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'verify' | 'demo'>('verify');

  const handleOpenDemo = (type: 'verify' | 'demo') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 font-sans selection:bg-sky-500/30 selection:text-sky-200">
      {/* Sticky Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenDemo={handleOpenDemo} />

        {/* 2. Signature Architecture — The Trust Network */}
        <TrustNetwork />

        {/* 3. Trust Strip & Metrics */}
        <TrustStrip />

        {/* 4. Problem Section — Traditional Friction */}
        <ProblemSection />

        {/* 5. Solution Bento Grid — 10 Verification Categories */}
        <SolutionSection />

        {/* 6. How It Works — 3-Step Timeline */}
        <HowItWorks />

        {/* 7. Interactive Engine Simulator */}
        <VerificationAnimation />

        {/* 8. AI-Native Workflow */}
        <AIWorkflow />

        {/* 9. Security by Design */}
        <SecuritySection onOpenDemo={handleOpenDemo} />

        {/* 10. Transparency & Real-time Audit Timeline */}
        <TransparencyTimeline />

        {/* 11. Candidate Mobile Experience */}
        <CandidateExperience onOpenDemo={handleOpenDemo} />

        {/* 12. Integrations & API Stack */}
        <Integrations onOpenDemo={handleOpenDemo} />

        {/* 13. Industry Use Cases */}
        <UseCases onOpenDemo={handleOpenDemo} />

        {/* 14. Social Proof & Testimonials */}
        <Testimonials />

        {/* 15. Final Conversion CTA */}
        <FinalCTA onOpenDemo={handleOpenDemo} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lead Capture & Interactive Demo Modal */}
      <DemoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
      />
    </div>
  );
}

export default App;
