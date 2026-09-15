import React from 'react';
import { Metadata } from 'next';
import { RotatingCTA } from '@/components/ui/RotatingCTA';
import { Sparkles, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Pixel Conversions | Web Development & Digital Marketing Agency',
  description: 'Learn about Pixel Conversions, our web engineering philosophy, performance marketing approach, and office locations in Kozhikode, Kerala and Bengaluru, India.',
  alternates: {
    canonical: 'https://pixelconversions.com/about',
  },
  openGraph: {
    title: 'About Pixel Conversions | Web Development & Digital Marketing Agency',
    description: 'Learn about Pixel Conversions, our web engineering philosophy, performance marketing approach, and office locations in Kozhikode and Bengaluru.',
    url: 'https://pixelconversions.com/about',
    type: 'website',
    images: [
      {
        url: 'https://pixelconversions.com/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'About Pixel Conversions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Pixel Conversions | Web Development & Digital Marketing Agency',
    description: 'Learn about Pixel Conversions, our team philosophy, and office locations in Kozhikode and Bengaluru.',
    images: ['https://pixelconversions.com/logo.jpeg'],
  },
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* About Hero */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#FF2A38]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Pixel Conversions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D0D0E] tracking-tight font-sans leading-tight">
            We build brands and digital experiences that drive growth.
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-sans">
            Pixel Conversions is a web development and digital marketing agency dedicated to helping startups, small businesses, e-commerce brands, and international enterprises scale predictably.
          </p>

          <div className="pt-2">
            <RotatingCTA variant="primary" size="lg" />
          </div>
        </div>

        {/* Core Beliefs / Philosophy */}
        <div className="bg-neutral-50 rounded-3xl p-8 sm:p-12 border border-neutral-200 space-y-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-extrabold text-[#0D0D0E]">Our Core Philosophy</h2>
            <p className="text-neutral-600 text-sm">
              We believe a modern business website should be a dynamic growth asset, not an inactive digital brochure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF2A38]/10 text-[#FF2A38] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-bold text-lg text-[#0D0D0E]">Speed & Clean Code</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We engineer lightweight Next.js and React frontend code to ensure sub-second page loads and zero mobile bottlenecks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF2A38]/10 text-[#FF2A38] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-bold text-lg text-[#0D0D0E]">Web + Marketing Fusion</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                A great website needs qualified traffic, and ad campaigns need high-converting landing destinations. We bridge both seamlessly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF2A38]/10 text-[#FF2A38] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-bold text-lg text-[#0D0D0E]">Business-First Thinking</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We focus on strategic client acquisition, transparent project pricing (₹20,000 – ₹50,000), and rapid execution without corporate bloat.
              </p>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="space-y-8">
          <h2 className="text-3xl font-extrabold text-[#0D0D0E]">Regional Footprint & Office Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#0D0D0E] text-white border border-neutral-800 space-y-4">
              <div className="flex items-center gap-2 text-[#FF2A38] font-bold text-lg">
                <MapPin className="w-5 h-5" />
                <span>Kozhikode Office</span>
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed font-sans">
                4th Floor, HiLITE Business Park, Phase 2, Poovangal, Kozhikode, Pantheeramkavu, Kerala 673014, India.
              </p>
              <p className="text-xs text-neutral-500 font-mono">Kerala / Regional Hub</p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0D0E] text-white border border-neutral-800 space-y-4">
              <div className="flex items-center gap-2 text-[#FF2A38] font-bold text-lg">
                <MapPin className="w-5 h-5" />
                <span>Bengaluru Office</span>
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed font-sans">
                BHIVE Platinum – Old Airport Road Campus, Old Airport Road, HAL 2nd Stage, Kodihalli, Indiranagar, Bengaluru, Karnataka – 560008, India.
              </p>
              <p className="text-xs text-neutral-500 font-mono">Bengaluru Tech Hub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
