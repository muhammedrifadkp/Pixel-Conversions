'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { Button } from '../ui/Button';
import { Sparkles } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  // Show 4 featured real projects on homepage
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <section className="py-24 bg-neutral-50/70 border-y border-neutral-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#FF2A38] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Client Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0D0E] tracking-tight font-sans">
              Selected Work
            </h2>
          </div>
          <p className="text-neutral-600 max-w-md text-sm sm:text-base leading-relaxed">
            Websites, digital experiences and growth-focused work we&apos;ve built for real businesses across India, UAE, and global markets.
          </p>
        </div>

        {/* Real Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <ProjectCard project={project} priority={idx < 2} />
            </motion.div>
          ))}
        </div>

        {/* View All Work CTA */}
        <div className="text-center mt-16">
          <Button href="/work" variant="dark" size="lg">
            View All Work ({PROJECTS.length} Projects)
          </Button>
        </div>
      </div>
    </section>
  );
};
