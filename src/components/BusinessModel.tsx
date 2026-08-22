import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Sparkles, Building2, Crown, Shield, ArrowRight } from 'lucide-react';

export const BusinessModel: React.FC = () => {
  const tiers = [
    {
      name: 'FREE',
      tagline: 'Casual Prediction Player',
      price: '$0',
      period: 'forever',
      highlight: false,
      features: [
        '3 Daily Draw Predictions',
        'Global Leaderboard Access',
        'Basic Prediction IQ Profile',
        'Standard Season Badges',
        'Community Heatmap View',
      ],
      cta: 'Start Predicting',
      buttonStyle: 'bg-surface-200 hover:bg-surface-300 text-white border border-white/10',
    },
    {
      name: 'PRO',
      tagline: 'Serious Competitive Predictor',
      price: 'RM 19.90',
      period: '/ month',
      highlight: true,
      badge: 'MOST POPULAR',
      features: [
        'Unlimited Daily Predictions',
        'Full Analytical Probability Engine',
        'Prediction AI Assistant & Trend Signals',
        'Create & Host Private Leagues',
        'Complete Historical Draw Archive',
        'Gold Verified Profile & IQ Flare',
      ],
      cta: 'Upgrade to Pro',
      buttonStyle: 'bg-lime-400 hover:bg-lime-300 text-black font-black shadow-glow-lime',
    },
    {
      name: 'BRAND & ENTERPRISE',
      tagline: 'Custom Sponsored Campaigns',
      price: 'CUSTOM',
      period: '/ campaign',
      highlight: false,
      features: [
        'Branded Prediction Tournaments',
        'Custom Real-World Prize Pools',
        'High-Engagement Social Activations',
        'Sports & F1 Co-Branded Seasons',
        'B2B Consumer Sentiment Telemetry',
        'Dedicated Enterprise Smart Contract',
      ],
      cta: 'Partner With Us',
      buttonStyle: 'bg-cyber-blue hover:bg-cyber-blue/90 text-black font-bold shadow-glow-blue',
    },
  ];

  const revenueStreams = [
    { title: 'B2C Subscriptions', desc: 'Recurring monthly PRO memberships for analytical tools & private leagues' },
    { title: 'Brand Sponsorships', desc: 'Enterprise brands funding tournament prize pools for viral engagement' },
    { title: 'Campaign Platform Fees', desc: 'Setup & infrastructure licensing fees for custom corporate prediction events' },
    { title: 'Market Sentiment Data', desc: 'Aggregated, anonymized probability distribution data for commercial intelligence' },
    { title: 'Ecosystem Integrations', desc: 'API access for third-party gaming, sports media, and Web3 apps' },
  ];

  return (
    <section id="business-model" className="relative py-24 bg-[#06080B] border-t border-white/10 overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-lime-400/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-lime-400">
            <Zap className="w-3.5 h-3.5" />
            <span>SUSTAINABLE MONETIZATION ARCHITECTURE</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            A PLATFORM BUILT TO SCALE, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyber-blue">
              NOT TO WIN AGAINST ITS USERS.
            </span>
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            Unlike casinos that rely on player losses, ORACLE 49 monetizes through premium analytical subscriptions 
            and high-value corporate brand sponsorship campaigns.
          </p>
        </div>

        {/* 3 Tier Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                tier.highlight
                  ? 'bg-surface-100/95 border-2 border-lime-400 shadow-glow-lime/30 scale-105 z-10'
                  : 'bg-surface-50/60 border border-white/10 hover:border-white/20'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-lime-400 text-black font-mono font-black text-[10px] tracking-wider shadow-lg">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex justify-between items-start pb-4 border-b border-white/10">
                  <div>
                    <h3 className="font-display font-black text-2xl text-white">{tier.name}</h3>
                    <p className="text-xs font-mono text-metal-300 mt-0.5">{tier.tagline}</p>
                  </div>
                </div>

                <div className="py-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-mono font-black text-4xl text-white">{tier.price}</span>
                    <span className="font-mono text-xs text-metal-400">{tier.period}</span>
                  </div>
                </div>

                <div className="space-y-3 pb-8">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-xs font-mono text-metal-200">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.highlight ? 'text-lime-400' : 'text-cyber-blue'}`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`w-full py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all ${tier.buttonStyle}`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* 5 Core B2B Revenue Streams */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="w-5 h-5 text-lime-400" />
            <h3 className="font-display font-black text-xl text-white uppercase">
              DIVERSIFIED PLATFORM REVENUE ENGINE
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {revenueStreams.map((stream, idx) => (
              <div key={stream.title} className="p-4 rounded-xl bg-surface-200/80 border border-white/5 space-y-2">
                <span className="font-mono font-bold text-xs text-lime-400 block">
                  0{idx + 1} // {stream.title}
                </span>
                <p className="text-xs text-metal-300 leading-snug">
                  {stream.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
