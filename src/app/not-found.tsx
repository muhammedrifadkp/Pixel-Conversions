import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Home, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page Not Found | Pixel Conversions',
  description: 'The page you are looking for does not exist. Explore Pixel Conversions web development and digital marketing services.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="pt-36 pb-24 bg-white min-h-[70vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-xs font-mono font-bold text-[#FF2A38]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>404 ERROR // PAGE NOT FOUND</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D0D0E] tracking-tight font-sans">
          Lost in Digital Space?
        </h1>

        <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-sans">
          The page you requested could not be found. It may have been moved, renamed, or no longer exists.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary" size="lg" leftIcon={<Home className="w-4 h-4" />}>
            Back to Homepage
          </Button>
          <Button href="/services" variant="dark" size="lg">
            Explore Services
          </Button>
        </div>

        <div className="pt-12 border-t border-neutral-200 text-xs text-neutral-500 space-x-6">
          <Link href="/work" className="hover:text-[#FF2A38] transition-colors">
            Selected Work
          </Link>
          <Link href="/about" className="hover:text-[#FF2A38] transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-[#FF2A38] transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
