import React, { useState } from 'react';
import { DemoProvider, useDemo } from './context/DemoContext';
import { DemoLogin } from './components/auth/DemoLogin';
import { AppLayout } from './components/app/AppLayout';

// Landing Page Components
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemOpportunity } from './components/ProblemOpportunity';
import { LiveGameDemo } from './components/LiveGameDemo';
import { GameModes } from './components/GameModes';
import { CrowdHeatmap } from './components/CrowdHeatmap';
import { PredictionIQ } from './components/PredictionIQ';
import { SocialBattle } from './components/SocialBattle';
import { SeasonSystem } from './components/SeasonSystem';
import { BlockchainFlow } from './components/BlockchainFlow';
import { ProofExplorer } from './components/ProofExplorer';
import { BusinessModel } from './components/BusinessModel';
import { SponsoredCampaign } from './components/SponsoredCampaign';
import { OracleUniverse } from './components/OracleUniverse';
import { GrowthFlywheel } from './components/GrowthFlywheel';
import { Roadmap } from './components/Roadmap';
import { CompliancePhilosophy } from './components/CompliancePhilosophy';
import { InvestorVision } from './components/InvestorVision';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { InvestorDeckModal } from './components/InvestorDeckModal';

const AppContent: React.FC = () => {
  const { currentPath } = useDemo();
  const [isDeckModalOpen, setIsDeckModalOpen] = useState(false);

  // If on login route
  if (currentPath === '/login') {
    return <DemoLogin />;
  }

  // If on app platform route
  if (currentPath.startsWith('/app')) {
    return <AppLayout />;
  }

  // Otherwise render Public Landing Page
  return (
    <div className="min-h-screen bg-[#06080B] text-[#E6EDF3] relative selection:bg-[#00FF66] selection:text-[#06080B]">
      {/* Global subtle scanline overlay */}
      <div className="fixed inset-0 scanline-overlay pointer-events-none z-30 opacity-40" />

      {/* Sticky Glass Navbar */}
      <Navbar onOpenDeckModal={() => setIsDeckModalOpen(true)} />

      {/* Main Sections */}
      <main className="relative z-10">
        {/* 03 Hero Section */}
        <HeroSection />

        {/* 04 Problem -> Opportunity Paradigm Shift */}
        <ProblemOpportunity />

        {/* 05 & 06 Master Section: Live Game Demo (Number Hunt + On-Chain Lock) */}
        <LiveGameDemo />

        {/* 07 Core 7 Game Modes Sandbox */}
        <GameModes />

        {/* 08 Crowd Intelligence & Heatmap */}
        <CrowdHeatmap />

        {/* 09 Prediction IQ Reputation Profile */}
        <PredictionIQ />

        {/* 10 Social 1v1 Battle Arena */}
        <SocialBattle />

        {/* 11 Season System & Leaderboard */}
        <SeasonSystem />

        {/* 12 Blockchain Cryptographic Flow */}
        <BlockchainFlow />

        {/* 13 Public Verification Explorer */}
        <ProofExplorer />

        {/* 14 Business Model & 3-Tier Monetization */}
        <BusinessModel />

        {/* 15 Sponsored F1 Motorsport Campaign Showcase */}
        <SponsoredCampaign />

        {/* 16 Market Expansion (Oracle Universe) */}
        <OracleUniverse />

        {/* 17 Self-Reinforcing Growth Flywheel */}
        <GrowthFlywheel />

        {/* 18 Strategic Development Roadmap */}
        <Roadmap />

        {/* 19 Compliance & Risk Architecture */}
        <CompliancePhilosophy />

        {/* 20 Investor Vision (49 Morphing) */}
        <InvestorVision />

        {/* 21 Final CTA Branding */}
        <FinalCTA onOpenDeckModal={() => setIsDeckModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Investor Deck Request Modal */}
      <InvestorDeckModal
        isOpen={isDeckModalOpen}
        onClose={() => setIsDeckModalOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <DemoProvider>
      <AppContent />
    </DemoProvider>
  );
};

export default App;
