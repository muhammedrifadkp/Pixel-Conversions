import React from 'react';
import { Metadata } from 'next';
import { PROJECTS } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { RotatingCTA } from '@/components/ui/RotatingCTA';
import { Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Selected Work | Real Projects Built by Pixel Conversions',
  description: 'Explore completed websites and digital platforms built by Pixel Conversions for real businesses in India, UAE, and globally.',
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#FF2A38]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Experience</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D0D0E] tracking-tight font-sans">
            Selected Work
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed font-sans">
            Websites, digital experiences and growth-focused work we&apos;ve built for real businesses.
          </p>
        </div>

        {/* Portfolio Grid showcasing all 9 real projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} priority={idx < 3} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 p-10 sm:p-12 rounded-3xl bg-[#0D0D0E] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              Have a website or digital project in mind?
            </h2>
            <p className="text-neutral-400 text-sm max-w-md">
              Let&apos;s build a digital experience tailored to your business goals.
            </p>
          </div>
          <RotatingCTA variant="primary" size="lg" />
        </div>
      </div>
    </div>
  );
}
