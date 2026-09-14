import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS, BlogPost } from '@/data/blog';
import { BookOpen, Clock, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insights, Web Development & Growth Marketing Blog | Pixel Conversions',
  description: 'Practical, actionable articles on web development, performance marketing campaigns, local SEO, and brand identity design by Pixel Conversions.',
  alternates: {
    canonical: 'https://pixelconversions.com/blog',
  },
  openGraph: {
    title: 'Insights & Strategy Blog | Pixel Conversions',
    description: 'Practical articles on web development, performance marketing, local SEO, and brand identity strategy.',
    url: 'https://pixelconversions.com/blog',
    type: 'website',
    images: [
      {
        url: 'https://pixelconversions.com/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Pixel Conversions Blog & Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights & Strategy Blog | Pixel Conversions',
    description: 'Practical articles on web development, performance marketing, local SEO, and brand strategy.',
    images: ['https://pixelconversions.com/logo.jpeg'],
  },
};

export default function BlogListPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#FF2A38]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Agency Insights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D0D0E] tracking-tight font-sans">
            Web & Growth Strategy Articles
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed font-sans">
            Actionable insights, tech teardowns, and digital marketing strategies written for business owners and growth leaders.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post: BlogPost) => (
            <article
              key={post.slug}
              className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200 flex flex-col justify-between hover:border-[#0D0D0E] transition-all duration-300 group shadow-sm hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold uppercase tracking-wider text-[#FF2A38]">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-neutral-400">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-bold text-[#0D0D0E] tracking-tight group-hover:text-[#FF2A38] transition-colors leading-snug">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-xs text-neutral-600 leading-relaxed font-sans line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-200 flex items-center justify-between">
                <span className="text-xs text-neutral-400 font-mono">{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="w-9 h-9 rounded-full bg-white border border-neutral-200 group-hover:bg-[#FF2A38] group-hover:text-white text-[#0D0D0E] flex items-center justify-center transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
