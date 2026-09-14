import React from 'react';
import { Metadata } from 'next';
import { SERVICES } from '@/data/services';
import { Accordion } from '@/components/ui/Accordion';
import { ContactForm } from '@/components/ui/ContactForm';
import { RotatingCTA } from '@/components/ui/RotatingCTA';
import { TrendingUp, Target, BarChart3, Users, DollarSign } from 'lucide-react';
import { GENERAL_FAQS } from '@/data/faq';

export const metadata: Metadata = {
  title: 'Performance Marketing Agency | Google & Meta Ads Campaigns',
  description: 'Data-driven performance marketing agency executing Google Ads, Meta (Facebook & Instagram), and YouTube campaigns designed for predictable lead generation across Kozhikode, Bengaluru, UAE, and globally.',
  alternates: {
    canonical: 'https://pixelconversions.com/services/performance-marketing',
  },
  openGraph: {
    title: 'Performance Marketing Agency | Pixel Conversions',
    description: 'Data-driven paid ads campaigns on Google Search, Display, Meta Ads, and conversion tracking.',
    url: 'https://pixelconversions.com/services/performance-marketing',
    type: 'website',
    images: [
      {
        url: 'https://pixelconversions.com/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Performance Marketing Agency - Pixel Conversions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance Marketing Agency | Pixel Conversions',
    description: 'Data-driven paid ad campaigns designed for predictable lead generation.',
    images: ['https://pixelconversions.com/logo.jpeg'],
  },
};

export default function PerformanceMarketingPage() {
  const service = SERVICES['performance-marketing'];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Performance Marketing',
    name: 'Performance Marketing & Paid Ad Services',
    provider: {
      '@type': 'Organization',
      name: 'Pixel Conversions',
      url: 'https://pixelconversions.com',
    },
    areaServed: ['Kozhikode', 'Bengaluru', 'Kerala', 'India', 'United Arab Emirates', 'Global'],
    description: 'Google Ads management, Meta Ads (Facebook & Instagram), conversion rate optimization, and paid ad funnel setup.',
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-xs font-mono font-bold text-[#FF2A38]">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>PRIMARY SERVICE // GROWTH MARKETING</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D0D0E] tracking-tight font-sans leading-tight">
              Performance Marketing & Paid Ad Campaigns
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-sans">
              {service.tagline}
            </p>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              {service.fullDescription}
            </p>

            <div className="pt-2">
              <RotatingCTA variant="primary" size="lg" customMessage="Hi Pixel Conversions, I'd like to discuss Performance Marketing campaigns." />
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0D0D0E] text-white p-8 rounded-3xl border border-neutral-800 space-y-6 shadow-2xl">
            <h3 className="text-xs uppercase tracking-[0.2em] font-mono text-neutral-400">
              CAMPAIGN CAPABILITIES
            </h3>
            <div className="space-y-4 text-sm font-sans">
              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center gap-3">
                <Target className="w-5 h-5 text-[#FF2A38]" />
                <div>
                  <p className="font-bold text-white">Google Search & Display Ads</p>
                  <p className="text-xs text-neutral-400">High-intent keyword targeting</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center gap-3">
                <Users className="w-5 h-5 text-[#FF2A38]" />
                <div>
                  <p className="font-bold text-white">Meta (FB & IG) Lead Gen</p>
                  <p className="text-xs text-neutral-400">Visual creative & retargeting</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-[#FF2A38]" />
                <div>
                  <p className="font-bold text-white">Conversion Tracking</p>
                  <p className="text-xs text-neutral-400">Meta Pixel, GTM & GA4 integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Channels & Sub Services */}
        <div className="mb-20 space-y-10">
          <h2 className="text-3xl font-extrabold text-[#0D0D0E] tracking-tight">
            Ad Channels We Manage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subServices.map((sub, idx) => (
              <div
                key={sub.title}
                className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-4 hover:border-[#0D0D0E] transition-colors"
              >
                <span className="text-xs font-mono text-[#FF2A38] font-bold">0{idx + 1}</span>
                <h3 className="text-xl font-bold text-[#0D0D0E]">{sub.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">{sub.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-20 space-y-8 bg-neutral-900 text-white p-8 sm:p-12 rounded-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight">Ad Campaign Execution Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.processSteps.map((step) => (
              <div key={step.title} className="space-y-2">
                <p className="text-sm font-bold text-[#FF2A38] font-mono">{step.title}</p>
                <p className="text-xs text-neutral-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-extrabold text-[#0D0D0E]">
              Ready to scale your ad inquiries?
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Connect with our performance marketing strategists on WhatsApp to review your current campaigns or launch a new ad funnel.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ContactForm defaultService="Performance Marketing" />
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-extrabold text-[#0D0D0E] text-center">
            Performance Marketing FAQ
          </h2>
          <Accordion items={GENERAL_FAQS.slice(5, 8)} />
        </div>
      </div>
    </div>
  );
}
