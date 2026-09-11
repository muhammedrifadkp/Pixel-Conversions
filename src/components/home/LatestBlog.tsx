'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BLOG_POSTS, BlogPost } from '@/data/blog';
import { Button } from '../ui/Button';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';

export const LatestBlog: React.FC = () => {
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-24 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#FF2A38] mb-3">
              <BookOpen className="w-4 h-4" />
              <span>Agency Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0D0E] tracking-tight font-sans">
              Latest Thinking & Articles
            </h2>
          </div>
          <Button href="/blog" variant="outline" size="md">
            View All Insights
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post: BlogPost, idx: number) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white rounded-3xl p-8 border border-neutral-200 flex flex-col justify-between hover:border-[#0D0D0E] transition-all duration-300 group shadow-sm hover:shadow-xl hover:shadow-black/[0.03]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span className="font-bold uppercase tracking-wider text-[#FF2A38]">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <Link href={`/blog/${post.slug}`} className="block">
                  <h3 className="text-xl font-bold text-[#0D0D0E] tracking-tight group-hover:text-[#FF2A38] transition-colors leading-snug">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed font-sans">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-400 font-mono">{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-[#FF2A38] group-hover:text-white text-[#0D0D0E] flex items-center justify-center transition-colors"
                  aria-label={`Read article: ${post.title}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
