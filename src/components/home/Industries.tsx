'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { createWhatsAppLink } from '@/utils/whatsapp';
import { trackWhatsAppClick } from '@/utils/analytics';

const INDUSTRIES_DATA = [
  {
    num: '01',
    name: 'Startups',
    subtitle: 'High-velocity MVP websites, landing pages & brand launch systems.',
    tag: 'Web & Brand Launch',
  },
  {
    num: '02',
    subtitle: 'Local SEO dominance, responsive web portals & lead generation.',
    name: 'Small & Medium Businesses',
    tag: 'Local Growth',
  },
  {
    num: '03',
    name: 'E-commerce Brands',
    subtitle: 'Custom Shopify stores & Meta/Google ad funnels built to scale sales.',
    tag: 'D2C & Retail',
  },
  {
    num: '04',
    name: 'Real Estate Businesses',
    subtitle: 'Property showcases, investor platforms & instant WhatsApp lead routing.',
    tag: 'Dubai & Regional',
  },
  {
    num: '05',
    name: 'Professional Services',
    subtitle: 'Authoritative corporate websites for clinics, legal, and consultancy firms.',
    tag: 'Corporate & B2B',
  },
  {
    num: '06',
    name: 'International Businesses',
    subtitle: 'Global standard digital experiences serving India, UAE & Gulf markets.',
    tag: 'Global Scale',
  },
];

export const Industries: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white text-[#0D0D0E] relative border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF2A38] mb-3">
              Client Focus
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0D0E] tracking-tight font-sans">
              Businesses We Build For
            </h2>
          </div>
          <p className="text-neutral-600 max-w-md text-sm leading-relaxed">
            We adapt our web architecture and performance marketing frameworks to match your specific industry dynamics.
          </p>
        </div>

        {/* Editorial Typographic List with Hover Indicators */}
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {INDUSTRIES_DATA.map((ind, idx) => {
            const isHovered = activeIdx === idx;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveIdx(idx)}
                className="py-8 sm:py-10 transition-colors duration-300 group cursor-pointer"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Number & Name */}
                  <div className="md:col-span-6 flex items-center gap-6">
                    <span className="text-sm font-mono text-[#FF2A38] font-bold">{ind.num}</span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D0D0E] tracking-tight group-hover:text-[#FF2A38] transition-colors duration-200">
                      {ind.name}
                    </h3>
                  </div>

                  {/* Subtitle & Tag */}
                  <div className="md:col-span-5 text-sm text-neutral-600 font-sans leading-relaxed">
                    <p>{ind.subtitle}</p>
                  </div>

                  {/* Arrow Action */}
                  <div className="md:col-span-1 flex justify-end">
                    <a
                      href={createWhatsAppLink(`Hi Pixel Conversions, I operate in the ${ind.name} sector and would like to discuss a project.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick('industries', ind.name)}
                      className="w-10 h-10 rounded-full bg-neutral-100 group-hover:bg-[#FF2A38] group-hover:text-white text-[#0D0D0E] flex items-center justify-center transition-colors"
                      aria-label={`Inquire about ${ind.name} services`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
