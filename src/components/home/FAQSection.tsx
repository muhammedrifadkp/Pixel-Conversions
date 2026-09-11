'use client';

import React from 'react';
import { Accordion } from '../ui/Accordion';
import { GENERAL_FAQS } from '@/data/faq';
import { HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#FF2A38] justify-center">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0D0E] tracking-tight font-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-600 text-base max-w-xl mx-auto">
            Everything you need to know about working with Pixel Conversions, project costs, timelines, and WhatsApp lead flow.
          </p>
        </div>

        <Accordion items={GENERAL_FAQS} />
      </div>
    </section>
  );
};
