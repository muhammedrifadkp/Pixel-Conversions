import React from 'react';

const STEPS = [
  {
    number: '01',
    title: 'Discover',
    description: 'We analyze your business model, target audience in India, UAE, or global markets, and primary conversion objectives.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We define the technical architecture, visual wireframes, content hierarchy, and WhatsApp lead funnels.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'We design pixel-perfect UI and engineer high-speed Next.js frontend code or custom Shopify themes.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We conduct speed audits, mobile testing across 320px–1440px devices, and deploy with zero downtime.',
  },
  {
    number: '05',
    title: 'Grow',
    description: 'We run targeted performance marketing campaigns, Google Ads, and local SEO to continuously scale revenue.',
  },
];

export const Process: React.FC = () => {
  return (
    <section className="py-24 bg-white relative border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF2A38]">
            Strategic Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0D0E] tracking-tight font-sans">
            How We Execute Projects
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed">
            A streamlined 5-step strategic framework designed to get your brand to market fast with maximum impact.
          </p>
        </div>

        {/* Process Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 flex flex-col justify-between hover:border-[#0D0D0E] transition-all duration-300 group"
            >
              <div>
                <span className="text-4xl font-extrabold font-mono text-neutral-300 group-hover:text-[#FF2A38] transition-colors block mb-4">
                  {step.number}
                </span>
                <h3 className="font-bold text-xl text-[#0D0D0E] mb-2">{step.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">{step.description}</p>
              </div>
              <div className="w-full h-1 bg-neutral-200 rounded-full mt-6 overflow-hidden">
                <div className="w-1/3 h-full bg-[#FF2A38] rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
