'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from '../brand/Logo';
import { RotatingCTA } from '../ui/RotatingCTA';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '../ui/Icons';
import { createWhatsAppLink, DISPLAY_PHONE_FULL } from '@/utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D0D0E] text-white pt-20 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-neutral-800/80">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="light" size={40} />
            <p className="text-neutral-400 text-sm md:text-base max-w-md leading-relaxed font-sans">
              We build brands and high-converting digital experiences that drive measurable growth. Web development, performance marketing, SEO, and brand strategy for ambitious businesses.
            </p>
            <div className="pt-2">
              <RotatingCTA variant="primary" size="md" />
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-400">Company</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link href="/work" className="text-neutral-300 hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-300 hover:text-white transition-colors">
                  Capabilities & Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-300 hover:text-white transition-colors">
                  About Pixel Conversions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-300 hover:text-white transition-colors">
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-400">Core Services</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link href="/services/website-development" className="text-neutral-300 hover:text-[#FF2A38] transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/performance-marketing" className="text-neutral-300 hover:text-[#FF2A38] transition-colors">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/branding" className="text-neutral-300 hover:text-[#FF2A38] transition-colors">
                  Brand Identity
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-neutral-300 hover:text-[#FF2A38] transition-colors">
                  SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-400">Get in Touch</h4>
            <div className="space-y-4 pt-1">
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-base sm:text-lg font-bold text-white hover:text-[#FF2A38] transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:border-[#FF2A38]/40 transition-colors">
                  <Phone className="w-5 h-5 text-[#FF2A38]" />
                </div>
                <span className="tracking-tight">{DISPLAY_PHONE_FULL}</span>
              </a>
              <a
                href="mailto:info@pixelconversions.com"
                className="flex items-center gap-3 text-base sm:text-lg font-bold text-white hover:text-[#FF2A38] transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:border-[#FF2A38]/40 transition-colors">
                  <Mail className="w-5 h-5 text-[#FF2A38]" />
                </div>
                <span className="tracking-tight">info@pixelconversions.com</span>
              </a>
              <a
                href="https://www.instagram.com/pixelconversion.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-base sm:text-lg font-bold text-white hover:text-[#FF2A38] transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:border-[#FF2A38]/40 transition-colors">
                  <InstagramIcon className="w-5 h-5 text-[#FF2A38]" />
                </div>
                <span className="flex items-center gap-1 tracking-tight">
                  @pixelconversion.ae
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#FF2A38] transition-colors" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="py-12 border-b border-neutral-800/80 space-y-6">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-400">Our Office Locations</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Kozhikode */}
            <div className="p-6 sm:p-7 rounded-2xl bg-neutral-900/80 border border-neutral-800/90 hover:border-neutral-700 transition-all space-y-3 shadow-md group">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FF2A38]/10 border border-[#FF2A38]/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#FF2A38]" />
                </div>
                <div>
                  <h5 className="font-bold text-white text-base sm:text-lg group-hover:text-[#FF2A38] transition-colors">Kozhikode Office</h5>
                  <span className="text-xs text-neutral-400 font-medium">Kerala, India</span>
                </div>
              </div>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans">
                4th Floor, HiLITE Business Park, Phase 2, Poovangal, Kozhikode, Pantheeramkavu, Kerala – 673014, India.
              </p>
            </div>

            {/* Bengaluru */}
            <div className="p-6 sm:p-7 rounded-2xl bg-neutral-900/80 border border-neutral-800/90 hover:border-neutral-700 transition-all space-y-3 shadow-md group">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FF2A38]/10 border border-[#FF2A38]/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#FF2A38]" />
                </div>
                <div>
                  <h5 className="font-bold text-white text-base sm:text-lg group-hover:text-[#FF2A38] transition-colors">Bengaluru Office</h5>
                  <span className="text-xs text-neutral-400 font-medium">Karnataka, India</span>
                </div>
              </div>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans">
                BHIVE Platinum – Old Airport Road Campus, Old Airport Road, HAL 2nd Stage, Kodihalli, Indiranagar, Bengaluru, Karnataka – 560008, India.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Pixel Conversions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-neutral-300 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
