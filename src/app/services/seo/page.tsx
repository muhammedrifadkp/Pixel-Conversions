import React from 'react';
import { Metadata } from 'next';
import { SERVICES } from '@/data/services';
import { ContactForm } from '@/components/ui/ContactForm';
import { RotatingCTA } from '@/components/ui/RotatingCTA';
import { Search, MapPin, Code2, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SEO Agency & Local Search Optimization | Kozhikode & Bengaluru',
  description: 'Sustainable organic search optimization, local SEO, Google Business Profile scaling, and technical JSON-LD schema for businesses in Kozhikode, Bengaluru, Kerala, UAE, and globally.',
  alternates: {
    canonical: 'https://pixelconversions.com/services/seo',
  },
  openGraph: {
    title: 'SEO Agency & Local Search Optimization | Pixel Conversions',
    description: 'Sustainable organic search optimization, local SEO, Google Business Profile scaling, and technical SEO.',
    url: 'https://pixelconversions.com/services/seo',
    type: 'website',
    images: [
      {
        url: 'https://pixelconversions.com/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'SEO Agency - Pixel Conversions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency & Local Search Optimization | Pixel Conversions',
    description: 'Technical & local search engine optimization for modern businesses.',
    images: ['https://pixelconversions.com/logo.jpeg'],
  },
};

export default function SEOPage() {
  const service = SERVICES['seo'];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Search Engine Optimization',
    name: 'SEO & Organic Search Services',
    provider: {
      '@type': 'Organization',
      name: 'Pixel Conversions',
      url: 'https://pixelconversions.com',
    },
    areaServed: ['Kozhikode', 'Bengaluru', 'Kerala', 'India', 'United Arab Emirates', 'Global'],
    description: 'Technical SEO audits, local Google Business Profile optimization, keyword strategy, and schema markup.',
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
              <Search className="w-3.5 h-3.5" />
              <span>CAPABILITY // ORGANIC SEARCH</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D0D0E] tracking-tight font-sans leading-tight">
              Search Engine Optimization (SEO)
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-sans">
              {service.tagline}
            </p>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              {service.fullDescription}
            </p>

            <div className="pt-2">
              <RotatingCTA variant="primary" size="lg" customMessage="Hi Pixel Conversions, I'd like to discuss SEO services for my business." />
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0D0D0E] text-white p-8 rounded-3xl border border-neutral-800 space-y-6 shadow-2xl">
            <h3 className="text-xs uppercase tracking-[0.2em] font-mono text-neutral-400">
              SEO ARCHITECTURE
            </h3>
            <div className="space-y-4 text-sm font-sans">
              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#FF2A38]" />
                <div>
                  <p className="font-bold text-white">Local Map Pack SEO</p>
                  <p className="text-xs text-neutral-400">Google Business Profile optimization</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center gap-3">
                <Code2 className="w-5 h-5 text-[#FF2A38]" />
                <div>
                  <p className="font-bold text-white">Technical & Schema</p>
                  <p className="text-xs text-neutral-400">JSON-LD Organization & LocalBusiness</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#FF2A38]" />
                <div>
                  <p className="font-bold text-white">Content Alignment</p>
                  <p className="text-xs text-neutral-400">High-intent keyword integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub Services */}
        <div className="mb-20 space-y-10">
          <h2 className="text-3xl font-extrabold text-[#0D0D0E] tracking-tight">
            SEO Solutions We Provide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-extrabold text-[#0D0D0E]">
              Improve your search visibility.
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Connect with our SEO strategists on WhatsApp for a technical website audit and keyword opportunity map.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ContactForm defaultService="SEO" />
          </div>
        </div>
      </div>
    </div>
  );
}
