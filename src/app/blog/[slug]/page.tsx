import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS, BlogPost } from '@/data/blog';
import { RotatingCTA } from '@/components/ui/RotatingCTA';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Article Not Found' };

  return {
    title: `${post.title} | Pixel Conversions Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://pixelconversions.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://pixelconversions.com/blog/${post.slug}`,
      type: 'article',
      images: [
        {
          url: 'https://pixelconversions.com/logo.jpeg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['https://pixelconversions.com/logo.jpeg'],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    url: `https://pixelconversions.com/blog/${post.slug}`,
    datePublished: '2026-08-01',
    dateModified: '2026-09-10',
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://pixelconversions.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pixel Conversions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pixelconversions.com/logo.jpeg',
      },
    },
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
        name: 'Blog',
        item: 'https://pixelconversions.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://pixelconversions.com/blog/${post.slug}`,
      },
    ],
  };

  const relatedServiceHref =
    post.category === 'Website Development'
      ? '/services/website-development'
      : post.category === 'Performance Marketing'
      ? '/services/performance-marketing'
      : post.category === 'SEO'
      ? '/services/seo'
      : '/services/branding';

  return (
    <div className="pt-32 pb-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-neutral-500 hover:text-[#FF2A38] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-6 pb-8 border-b border-neutral-200">
          <div className="flex items-center gap-3 text-xs">
            <span className="font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-neutral-100 text-[#FF2A38]">
              {post.category}
            </span>
            <span className="text-neutral-400 font-mono flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0D0E] tracking-tight font-sans leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#FF2A38]" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#FF2A38]" />
                {post.date}
              </span>
            </div>
          </div>
        </div>

        {/* Excerpt Banner */}
        <div className="my-8 p-6 rounded-2xl bg-neutral-50 border border-neutral-200 italic text-neutral-700 text-sm leading-relaxed">
          &ldquo;{post.excerpt}&rdquo;
        </div>

        {/* Main Content Body */}
        <div className="prose prose-neutral max-w-none font-sans text-neutral-700 text-base leading-relaxed space-y-6 whitespace-pre-line py-4">
          {post.content}
        </div>

        {/* Internal Service & Work Linking */}
        <div className="my-12 p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-4">
          <h2 className="text-lg font-bold text-[#0D0D0E]">Related Agency Services &amp; Projects</h2>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Interested in scaling your business through expert {post.category.toLowerCase()} strategies? Discover how Pixel Conversions helps brands across India, UAE, and worldwide.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold">
            <Link
              href={relatedServiceHref}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-[#0D0D0E] text-white hover:bg-[#FF2A38] transition-colors"
            >
              <span>Explore {post.category} Services</span>
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-white border border-neutral-300 text-[#0D0D0E] hover:border-[#0D0D0E] transition-colors"
            >
              <span>View Case Studies</span>
            </Link>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#0D0D0E] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Want to implement these strategies?</h3>
            <p className="text-xs text-neutral-400">
              Let&apos;s build a high-converting website and growth campaign for your business.
            </p>
          </div>
          <RotatingCTA variant="primary" size="md" />
        </div>
      </div>
    </div>
  );
}
