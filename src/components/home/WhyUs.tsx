'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { RotatingCTA } from '../ui/RotatingCTA';

const PILLARS = [
  {
    step: '01',
    word: 'BUILD.',
    headline: 'Build strong digital experiences.',
    description: 'We craft bespoke Next.js websites, Shopify stores, and modern web applications engineered for speed, mobile precision, and instant credibility.',
  },
  {
    step: '02',
    word: 'MARKET.',
    headline: 'Market them intelligently.',
    description: 'We deploy targeted Google Ads, Meta ad campaigns, and local SEO strategies to acquire high-intent leads and drive qualified customer traffic.',
  },
  {
    step: '03',
    word: 'GROW.',
    headline: 'Grow the business behind them.',
    description: 'We align web engineering with conversion routing (direct WhatsApp leads) so your digital presence translates into predictable, sustainable revenue.',
  },
];

export const WhyUs: React.FC = () => {
  return (
    <section className="py-28 bg-[#0D0D0E] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF2A38]/[0.05] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#FF2A38]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
            We don&apos;t just build websites. <br />
            <span className="text-[#FF2A38]">We build digital growth engines.</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Pixel Conversions combines technical frontend mastery with performance marketing psychology to create a complete client acquisition pipeline.
          </p>
        </div>

        {/* Typographic Statement Pillars (BUILD. MARKET. GROW.) */}
        <div className="space-y-16">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.word}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline border-b border-neutral-800/80 pb-16 last:border-b-0"
            >
              {/* Large Typographic Keyword */}
              <div className="lg:col-span-5 flex items-baseline gap-4">
                <span className="text-sm font-mono text-[#FF2A38] font-bold">{pillar.step}</span>
                <h3 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white font-sans hover:text-[#FF2A38] transition-colors duration-300">
                  {pillar.word}
                </h3>
              </div>

              {/* Editorial Explanatory Copy */}
              <div className="lg:col-span-7 space-y-3 pl-0 lg:pl-6">
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {pillar.headline}
                </h4>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing & Value Proposition Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 bg-neutral-900/60 p-8 rounded-3xl border border-neutral-800">
          <div>
            <p className="text-xs uppercase tracking-widest font-mono text-[#FF2A38]">ACCESSIBLE AGENCY QUALITY</p>
            <p className="text-xl font-bold text-white mt-1">Typical Project Range: ₹20,000 – ₹50,000</p>
            <p className="text-xs text-neutral-400 mt-1">Full agency craftsmanship delivered fast (7 to 14 days) without corporate overhead.</p>
          </div>
          <RotatingCTA variant="primary" size="md" />
        </div>
      </div>
    </section>
  );
};
