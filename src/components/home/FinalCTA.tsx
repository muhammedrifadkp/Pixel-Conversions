'use client';

import React from 'react';
import { RotatingCTA } from '../ui/RotatingCTA';
import { MessageSquare, Phone } from 'lucide-react';
import { createWhatsAppLink, DISPLAY_PHONE_FULL } from '@/utils/whatsapp';
import { trackWhatsAppClick } from '@/utils/analytics';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-[#0D0D0E] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF2A38]/[0.08] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono uppercase tracking-widest text-[#FF2A38]">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WE BUILD + WE MARKET + WE GROW</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-sans">
          Ready to elevate your digital presence & scale your revenue?
        </h2>

        <p className="text-neutral-400 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-sans">
          Connect with Pixel Conversions on WhatsApp today. Let&apos;s discuss your goals, project scope, and growth strategy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <RotatingCTA variant="primary" size="lg" location="final_cta" />
          <a
            href={createWhatsAppLink("Hi Pixel Conversions, I'd like to schedule a project consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('final_cta_direct', DISPLAY_PHONE_FULL)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neutral-900 text-white font-semibold text-base border border-neutral-700 hover:border-white transition-colors"
          >
            <Phone className="w-4 h-4 text-[#FF2A38]" />
            <span>Direct Call / WhatsApp: {DISPLAY_PHONE_FULL}</span>
          </a>
        </div>

        <p className="text-xs text-neutral-500 font-mono pt-4">
          Offices in Kozhikode (HiLITE Business Park) & Bengaluru (BHIVE Old Airport Rd)
        </p>
      </div>
    </section>
  );
};
