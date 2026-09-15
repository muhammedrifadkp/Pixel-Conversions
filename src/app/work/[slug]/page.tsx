import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/data/projects';
import { RotatingCTA } from '@/components/ui/RotatingCTA';
import { WhatsAppLink } from '@/components/ui/WhatsAppLink';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import { createWhatsAppLink } from '@/utils/whatsapp';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: project.seoTitle,
    description: project.seoDescription,
    alternates: {
      canonical: `https://pixelconversions.com/work/${project.id}`,
    },
    openGraph: {
      title: project.seoTitle,
      description: project.seoDescription,
      url: `https://pixelconversions.com/work/${project.id}`,
      type: 'article',
      images: [
        {
          url: `https://pixelconversions.com${project.image}`,
          width: 1200,
          height: 630,
          alt: `${project.title} - ${project.category} built by Pixel Conversions`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.seoTitle,
      description: project.seoDescription,
      images: [`https://pixelconversions.com${project.image}`],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  const creativeWorkSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    headline: project.seoTitle,
    description: project.description,
    url: `https://pixelconversions.com/work/${project.id}`,
    image: `https://pixelconversions.com${project.image}`,
    creator: {
      '@type': 'Organization',
      name: 'Pixel Conversions',
      url: 'https://pixelconversions.com',
    },
    sameAs: [project.websiteUrl],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://pixelconversions.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Work',
        item: 'https://pixelconversions.com/work',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `https://pixelconversions.com/work/${project.id}`,
      },
    ],
  };

  const otherProjects = PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="pt-32 pb-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-bold text-neutral-500 hover:text-[#FF2A38] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Selected Work</span>
        </Link>

        {/* Case Study Header */}
        <div className="max-w-4xl space-y-6 mb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-neutral-100 text-[#FF2A38]">
              {project.category}
            </span>
            <span className="text-xs font-mono text-neutral-400">
              Live Domain: {project.websiteUrl.replace('https://', '').replace('www.', '')}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D0D0E] tracking-tight font-sans">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed font-sans">
            {project.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D0D0E] text-white hover:bg-[#FF2A38] text-xs font-bold transition-all duration-200 shadow-md"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <WhatsAppLink
              href={createWhatsAppLink(`Hi Pixel Conversions, I saw your work on ${project.title} (${project.websiteUrl}) and would like to discuss a similar project.`)}
              location="case_study_header"
              label={project.title}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-[#0D0D0E] text-xs font-bold transition-colors"
            >
              <span>Discuss Similar Project</span>
            </WhatsAppLink>
          </div>
        </div>

        {/* Browser Mockup Container */}
        <div className="mb-16 bg-[#121214] p-4 sm:p-6 rounded-3xl border border-neutral-800 shadow-2xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            </div>
            <div className="px-4 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 truncate max-w-xs sm:max-w-md">
              {project.websiteUrl}
            </div>
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              title="Open live website"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-900">
            <Image
              src={project.image}
              alt={`${project.title} - ${project.category} case study showcase`}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Overview & Technical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-extrabold text-[#0D0D0E] tracking-tight">
              Project Overview
            </h2>
            <p className="text-neutral-700 text-base leading-relaxed font-sans">
              {project.fullOverview}
            </p>

            <div className="pt-4 border-t border-neutral-200 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Key Scope &amp; Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#0D0D0E]">
                    <CheckCircle2 className="w-4 h-4 text-[#FF2A38] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-neutral-50 p-8 rounded-3xl border border-neutral-200 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-neutral-400">
              TECHNOLOGY &amp; ARCHITECTURE
            </h3>

            <div className="space-y-4">
              <div>
                <span className="text-xs text-neutral-500 font-mono block mb-2">Tech Stack</span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-[#0D0D0E] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200/80 space-y-2">
                <span className="text-xs text-neutral-500 font-mono block">Related Agency Services</span>
                <div className="space-y-2 text-xs font-bold">
                  <Link
                    href="/services/website-development"
                    className="block text-[#0D0D0E] hover:text-[#FF2A38] transition-colors"
                  >
                    → Custom Website Development
                  </Link>
                  <Link
                    href="/services/performance-marketing"
                    className="block text-[#0D0D0E] hover:text-[#FF2A38] transition-colors"
                  >
                    → Performance Marketing &amp; Ad Campaigns
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="pt-16 border-t border-neutral-200 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-[#0D0D0E]">
              Explore Other Recent Projects
            </h2>
            <Link
              href="/work"
              className="text-xs font-bold text-[#FF2A38] hover:underline"
            >
              View All Work
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((p) => (
              <div key={p.id} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-4 hover:border-[#0D0D0E] transition-colors flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                    {p.category}
                  </span>
                  <h3 className="font-extrabold text-xl text-[#0D0D0E]">{p.title}</h3>
                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">{p.description}</p>
                </div>
                <div className="pt-4 border-t border-neutral-200/80 flex items-center justify-between">
                  <Link
                    href={`/work/${p.id}`}
                    className="text-xs font-bold text-[#FF2A38] hover:underline"
                  >
                    View Case Study
                  </Link>
                  <a
                    href={p.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-[#0D0D0E] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 p-10 sm:p-12 rounded-3xl bg-[#0D0D0E] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              Ready for a custom web project like {project.title}?
            </h2>
            <p className="text-neutral-400 text-sm max-w-md">
              Let&apos;s build a digital experience tailored to your business goals.
            </p>
          </div>
          <RotatingCTA variant="primary" size="lg" location="case_study_footer" customMessage={`Hi Pixel Conversions, I saw your work on ${project.title} and want to discuss a project.`} />
        </div>
      </div>
    </div>
  );
}
