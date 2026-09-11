'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { RotatingCTA } from '../ui/RotatingCTA';
import { ShieldCheck, Zap, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  useEffect(() => {
    // Ensure autoplay triggers once video is ready and if motion is allowed
    if (isVideoReady && !prefersReducedMotion && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback (handled silently)
      });
    }
  }, [isVideoReady, prefersReducedMotion]);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-white">
      {/* Background Subtle Red Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF2A38]/[0.04] blur-[120px] rounded-full pointer-events-none" />

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-6 md:space-y-8">
          {/* Fluid Editorial Headline Block - Spans wide to allow full 2-line wrap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 sm:space-y-5 max-w-5xl"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs font-semibold text-neutral-800">
              <span className="w-2 h-2 rounded-full bg-[#FF2A38] animate-pulse" />
              <span>Web Development + Digital Marketing Agency</span>
            </div>

            {/* Headline with 2-Line Flow: "We build brands & digital" / "experiences that drive growth." */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#0D0D0E] leading-[1.06] font-sans">
              <span className="block">We build brands &amp; digital</span>
              <span className="block">
                experiences that{' '}
                <span className="relative inline-block text-[#FF2A38]">
                  drive growth.
                  <svg
                    className="absolute left-0 -bottom-1 w-full h-2 text-[#FF2A38]/30"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Asymmetric Content & Video Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-1">
            {/* Left Content Column (Description, CTAs, Trust Signals) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-7"
            >
              {/* Supporting Copy */}
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed font-sans">
                Pixel Conversions engineers custom Next.js websites, Shopify e-commerce platforms, and performance marketing campaigns for businesses in India, UAE, and worldwide.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <RotatingCTA variant="primary" size="lg" />
                <Button href="/work" variant="outline" size="lg">
                  View Selected Work
                </Button>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-6 border-t border-neutral-100 grid grid-cols-3 gap-4 text-xs sm:text-sm text-neutral-600 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FF2A38]" />
                  <span>Premium Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#FF2A38]" />
                  <span>7-14 Day Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#FF2A38]" />
                  <span>Results Driven</span>
                </div>
              </div>
            </motion.div>

            {/* Right Video Column (Elevated & Offset Top for Desktop Viewports) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 relative w-full lg:-mt-10 xl:-mt-14"
            >
              {/* Direct 16:9 Portfolio Video Presentation */}
              <div className="relative w-full aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-200/80 shadow-2xl shadow-black/10">
                {/* Poster Image */}
                <Image
                  src="/all-respo/video-thumb.png"
                  alt="ZTOIQ Responsive Website Showcase"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className={`object-cover transition-opacity duration-700 ease-out z-10 ${
                    isVideoReady && !prefersReducedMotion ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                />

                {/* Native HTML5 Video Element */}
                {!prefersReducedMotion && (
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/all-respo/video-thumb.png"
                    onCanPlay={() => setIsVideoReady(true)}
                    onLoadedData={() => setIsVideoReady(true)}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out z-0 ${
                      isVideoReady ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <source src="/all-respo/Website_responsive.mp4" type="video/mp4" />
                  </video>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
