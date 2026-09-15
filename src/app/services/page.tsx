import React from 'react';
import { Metadata } from 'next';
import { SERVICES } from '@/data/services';
import { Button } from '@/components/ui/Button';
import { RotatingCTA } from '@/components/ui/RotatingCTA';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Capabilities & Core Services | Web Development & Digital Marketing Agency',
  description: 'Explore Pixel Conversions core growth services: Website Development, Performance Marketing, SEO, and Brand Strategy for businesses in India, UAE, and worldwide.',
  alternates: {
    canonical: 'https://pixelconversions.com/services',
  },
  openGraph: {
    title: 'Capabilities & Core Services | Pixel Conversions',
    description: 'Explore Pixel Conversions core growth services: Website Development, Performance Marketing, SEO, and Brand Strategy.',
    url: 'https://pixelconversions.com/services',
    type: 'website',
    images: [
      {
        url: 'https://pixelconversions.com/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Pixel Conversions Capabilities & Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capabilities & Core Services | Pixel Conversions',
    description: 'Explore Pixel Conversions core growth services: Website Development, Performance Marketing, SEO, and Brand Strategy.',
    images: ['https://pixelconversions.com/logo.jpeg'],
  },
};

export default function ServicesPage() {
  const serviceList = Object.values(SERVICES);

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF2A38]">
            Capabilities
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D0D0E] tracking-tight font-sans">
            Our Core Services & Digital Solutions
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed font-sans">
            We focus on core growth pillars engineered to help startups, SMBs, e-commerce stores, and international clients acquire customers and build lasting brand authority.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12">
          {serviceList.map((service, idx) => (
            <div
              key={service.slug}
              className={`rounded-3xl p-8 sm:p-12 border transition-all duration-300 ${
                service.isPrimary
                  ? 'bg-[#0D0D0E] text-white border-neutral-800 shadow-2xl'
                  : 'bg-neutral-50 text-[#0D0D0E] border-neutral-200 hover:border-neutral-400'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#FF2A38]">
                      0{idx + 1} {'//'} {service.isPrimary ? 'PRIMARY SERVICE' : 'CAPABILITY'}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    {service.title}
                  </h2>

                  <p
                    className={`text-sm sm:text-base leading-relaxed ${
                      service.isPrimary ? 'text-neutral-300' : 'text-neutral-600'
                    }`}
                  >
                    {service.fullDescription}
                  </p>

                  <div className="pt-2 flex items-center gap-4">
                    <Button
                      href={`/services/${service.slug}`}
                      variant={service.isPrimary ? 'primary' : 'dark'}
                      size="md"
                    >
                      View Dedicated Service Page
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    What We Deliver:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.subServices.map((sub) => (
                      <div
                        key={sub.title}
                        className={`p-4 rounded-2xl border ${
                          service.isPrimary
                            ? 'bg-neutral-900/90 border-neutral-800 text-white'
                            : 'bg-white border-neutral-200 text-[#0D0D0E]'
                        }`}
                      >
                        <h4 className="font-bold text-sm mb-1 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#FF2A38]" />
                          <span>{sub.title}</span>
                        </h4>
                        <p
                          className={`text-xs leading-relaxed ${
                            service.isPrimary ? 'text-neutral-400' : 'text-neutral-500'
                          }`}
                        >
                          {sub.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#0D0D0E]">
            Unsure which service is right for your stage?
          </h2>
          <p className="text-neutral-600 text-sm">
            Chat directly with our team on WhatsApp. We will help you identify the highest-ROI entry point for your budget.
          </p>
          <div className="flex justify-center">
            <RotatingCTA variant="primary" size="lg" location="services_page" />
          </div>
        </div>
      </div>
    </div>
  );
}
