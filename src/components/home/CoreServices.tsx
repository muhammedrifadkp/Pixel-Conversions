'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SERVICES } from '@/data/services';
import { Button } from '../ui/Button';
import { ArrowUpRight, Globe, TrendingUp, Palette, Search, CheckCircle2 } from 'lucide-react';
import { createWhatsAppLink } from '@/utils/whatsapp';

export const CoreServices: React.FC = () => {
  const webDev = SERVICES['website-development'];
  const marketing = SERVICES['performance-marketing'];
  const branding = SERVICES['branding'];
  const seo = SERVICES['seo'];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF2A38]">
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0D0E] tracking-tight font-sans">
            Engineered to Build Your Digital Presence & Grow Your Revenue
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            We focus heavily on our two primary growth drivers — Custom Web Development and Performance Marketing — backed by strategic branding and local/technical SEO.
          </p>
        </div>

        {/* Primary Services (Prominent Hero Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Service 01: Website Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0D0D0E] text-white rounded-3xl p-8 sm:p-10 border border-neutral-800 flex flex-col justify-between space-y-8 relative overflow-hidden group shadow-2xl"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  01 // PRIMARY FOCUS
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#FF2A38]/20 text-[#FF2A38] flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                  {webDev.title}
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                  {webDev.shortDescription}
                </p>
              </div>

              {/* Sub-services pills */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                  Includes:
                </span>
                <div className="flex flex-wrap gap-2">
                  {webDev.subServices.slice(0, 4).map((sub) => (
                    <span
                      key={sub.title}
                      className="text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200"
                    >
                      {sub.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/services/website-development"
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#FF2A38] transition-colors"
              >
                <span>Detailed Web Dev Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={createWhatsAppLink("Hi Pixel Conversions, I'd like to build a custom website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#FF2A38] hover:bg-[#E50914] text-white text-xs font-bold transition-colors shadow-md shadow-[#FF2A38]/20"
              >
                Discuss Web Project
              </a>
            </div>
          </motion.div>

          {/* Service 02: Performance Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#0D0D0E] text-white rounded-3xl p-8 sm:p-10 border border-neutral-800 flex flex-col justify-between space-y-8 relative overflow-hidden group shadow-2xl"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  02 // PRIMARY FOCUS
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#FF2A38]/20 text-[#FF2A38] flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                  {marketing.title}
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                  {marketing.shortDescription}
                </p>
              </div>

              {/* Sub-services pills */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                  Channels & Campaigns:
                </span>
                <div className="flex flex-wrap gap-2">
                  {marketing.subServices.slice(0, 4).map((sub) => (
                    <span
                      key={sub.title}
                      className="text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200"
                    >
                      {sub.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/services/performance-marketing"
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#FF2A38] transition-colors"
              >
                <span>Detailed Marketing Strategy</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={createWhatsAppLink("Hi Pixel Conversions, I'd like to discuss Performance Marketing & Ads.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#FF2A38] hover:bg-[#E50914] text-white text-xs font-bold transition-colors shadow-md shadow-[#FF2A38]/20"
              >
                Discuss Ad Campaigns
              </a>
            </div>
          </motion.div>
        </div>

        {/* Secondary Services (Compact Side-by-Side Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 03: Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200 flex flex-col justify-between space-y-6 hover:border-neutral-400 transition-colors"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                  03 // SECONDARY SERVICE
                </span>
                <Palette className="w-5 h-5 text-[#FF2A38]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D0D0E] tracking-tight">{branding.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{branding.shortDescription}</p>
            </div>
            <div className="pt-4 border-t border-neutral-200/80">
              <Link
                href="/services/branding"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0D0D0E] hover:text-[#FF2A38] transition-colors"
              >
                <span>Explore Brand Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Service 04: SEO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200 flex flex-col justify-between space-y-6 hover:border-neutral-400 transition-colors"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                  04 // SECONDARY SERVICE
                </span>
                <Search className="w-5 h-5 text-[#FF2A38]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D0D0E] tracking-tight">{seo.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{seo.shortDescription}</p>
            </div>
            <div className="pt-4 border-t border-neutral-200/80">
              <Link
                href="/services/seo"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0D0D0E] hover:text-[#FF2A38] transition-colors"
              >
                <span>Explore SEO Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
