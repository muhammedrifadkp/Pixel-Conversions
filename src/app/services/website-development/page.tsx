import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '@/data/services';
import { PROJECTS } from '@/data/projects';
import { Accordion } from '@/components/ui/Accordion';
import { ContactForm } from '@/components/ui/ContactForm';
import { RotatingCTA } from '@/components/ui/RotatingCTA';
import { CheckCircle2, Zap, ShieldCheck, Globe, Code2, Smartphone, Cpu, ArrowUpRight } from 'lucide-react';
import { GENERAL_FAQS } from '@/data/faq';

export const metadata: Metadata = {
  title: 'Website Development Agency & Custom Next.js Solutions | Pixel Conversions',
  description: 'Custom, fast, high-converting website development agency using Next.js, TypeScript, and Shopify. Serving Kozhikode, Bengaluru, UAE, and global clients.',
  alternates: {
    canonical: 'https://pixelconversions.com/services/website-development',
  },
  openGraph: {
    title: 'Website Development Agency | Pixel Conversions',
    description: 'Custom Next.js websites, e-commerce platforms, and web applications built for performance and growth.',
    url: 'https://pixelconversions.com/services/website-development',
    type: 'website',
    images: [
      {
        url: 'https://pixelconversions.com/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Pixel Conversions Website Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Agency | Pixel Conversions',
    description: 'Custom Next.js websites, e-commerce storefronts, and web applications built for speed and conversions.',
    images: ['https://pixelconversions.com/logo.jpeg'],
  },
};

export default function WebsiteDevelopmentPage() {
  const service = SERVICES['website-development'];
  const relatedProjects = PROJECTS.filter((p) =>
    ['ztoiq', 'rahath', 'pretty-homes-india', 'zhm-real-estate'].includes(p.id)
  );

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Website Development',
    name: 'Custom Website Development Services',
    provider: {
      '@type': 'Organization',
      name: 'Pixel Conversions',
      url: 'https://pixelconversions.com',
    },
    areaServed: ['Kozhikode', 'Bengaluru', 'Kerala', 'India', 'United Arab Emirates', 'Global'],
    description: 'High-performing Next.js web development, Shopify storefronts, landing page engineering, and web application development.',
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
              <Code2 className="w-3.5 h-3.5" />
              <span>PRIMARY SERVICE // WEB ENGINEERING</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D0D0E] tracking-tight font-sans leading-tight">
              Website Development &amp; Modern Web Apps
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-sans">
              {service.tagline}
            </p>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              {service.fullDescription}
            </p>

            <div className="pt-2">
              <RotatingCTA variant="primary" size="lg" customMessage="Hi Pixel Conversions, I'd like to discuss a Website Development project." />
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0D0D0E] text-white p-8 rounded-3xl border border-neutral-800 space-y-6 shadow-2xl">
            <h3 className="text-xs uppercase tracking-[0.2em] font-mono text-neutral-400">
              TECHNICAL HIGHLIGHTS
            </h3>
            <div className="space-y-4 text-sm font-sans">
              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center gap-3">
                <Zap className="w-5 h-5 text-[#FF2A38]" />
                <div>
                  <p className="font-bold text-white">Sub-Second Load Speed</p>
                  <p className="text-xs text-neutral-400">90+ Google Core Web Vitals score</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-[#FF2A38]" />
                <div>
                  <p className="font-bold text-white">Mobile-First Optimization</p>
                  <p className="text-xs text-neutral-400">Tested across 320px–1440px viewports</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center gap-3">
                <Cpu className="w-5 h-5 text-[#FF2A38]" />
                <div>
                  <p className="font-bold text-white">Modern Tech Stack</p>
                  <p className="text-xs text-neutral-400">Next.js, TypeScript, Tailwind CSS, Shopify</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub Services Breakdown */}
        <div className="mb-20 space-y-10">
          <h2 className="text-3xl font-extrabold text-[#0D0D0E] tracking-tight">
            What We Build
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

        {/* Related Case Studies Internal Linking */}
        <div className="mb-20 space-y-8 bg-neutral-50 p-8 sm:p-12 rounded-3xl border border-neutral-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF2A38] block mb-1">
                Proven Track Record
              </span>
              <h2 className="text-3xl font-extrabold text-[#0D0D0E] tracking-tight">
                Featured Web Development Projects
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D0D0E] hover:text-[#FF2A38] transition-colors"
            >
              <span>Explore All Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProjects.map((project) => (
              <div key={project.id} className="p-6 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                  {project.category}
                </span>
                <h3 className="font-bold text-lg text-[#0D0D0E]">{project.title}</h3>
                <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">{project.description}</p>
                <Link
                  href={`/work/${project.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#FF2A38] hover:underline pt-1"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-20 space-y-8 bg-neutral-900 text-white p-8 sm:p-12 rounded-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight">Our Web Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.processSteps.map((step) => (
              <div key={step.title} className="space-y-2">
                <p className="text-sm font-bold text-[#FF2A38] font-mono">{step.title}</p>
                <p className="text-xs text-neutral-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-extrabold text-[#0D0D0E]">
              Ready to build your next website?
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Fill in your project details below to generate a pre-formatted inquiry and connect with our web development team on WhatsApp.
            </p>
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs space-y-2 text-neutral-600">
              <p className="font-bold text-[#0D0D0E]">Standard Web Range: ₹20,000 – ₹50,000</p>
              <p>Turnaround Time: 7 to 14 Business Days.</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm defaultService="Website Development" />
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-extrabold text-[#0D0D0E] text-center">
            Website Development FAQ
          </h2>
          <Accordion items={GENERAL_FAQS.slice(0, 5)} />
        </div>
      </div>
    </div>
  );
}
