'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { ExternalLink, ArrowUpRight, BookOpen } from 'lucide-react';
import { createWhatsAppLink } from '@/utils/whatsapp';
import { trackWhatsAppClick } from '@/utils/analytics';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, priority = false }) => {
  return (
    <div className="group bg-white rounded-3xl border border-neutral-200/90 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#0D0D0E] hover:shadow-2xl hover:shadow-black/[0.06]">
      {/* Browser Presentation Mockup Frame */}
      <div className="bg-[#121214] p-3 sm:p-4 border-b border-neutral-800 space-y-3 relative overflow-hidden">
        {/* Browser Top Window Controls & Domain Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
          </div>
          <div className="px-3 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400 truncate max-w-[200px] sm:max-w-[260px]">
            {project.websiteUrl.replace('https://', '').replace('www.', '')}
          </div>
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            title={`Visit ${project.title} live website`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Real Project Image Container */}
        <Link href={`/work/${project.id}`} className="block relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-neutral-900">
          <Image
            src={project.image}
            alt={`${project.title} - ${project.category} web development project`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </Link>
      </div>

      {/* Card Details & Content */}
      <div className="p-6 sm:p-8 space-y-4 flex-grow flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 font-mono">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl font-extrabold text-[#0D0D0E] tracking-tight group-hover:text-[#FF2A38] transition-colors">
            <Link href={`/work/${project.id}`}>
              {project.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
            {project.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Link
              href={`/work/${project.id}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0D0D0E] text-white hover:bg-[#FF2A38] text-xs font-bold transition-all duration-200 shadow-sm"
            >
              <span>Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200 text-xs font-bold transition-colors"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <a
            href={createWhatsAppLink(`Hi Pixel Conversions, I saw your work on ${project.title} (${project.websiteUrl}) and would like to discuss a similar project.`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('project_card', project.title)}
            className="text-xs font-medium text-neutral-500 hover:text-[#0D0D0E] transition-colors"
          >
            Discuss Project
          </a>
        </div>
      </div>
    </div>
  );
};
