'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { createWhatsAppLink } from '@/utils/whatsapp';

interface RotatingCTAProps {
  variant?: 'primary' | 'dark' | 'white' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  customMessage?: string;
}

const CTA_PHRASES = [
  'Start a Project',
  "Let's Talk",
  'Start Growing',
  'Talk to Us',
];

export const RotatingCTA: React.FC<RotatingCTAProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  customMessage,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % CTA_PHRASES.length);
    }, 3500); // 3.5s cycle for smooth pacing

    return () => clearInterval(timer);
  }, []);

  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full select-none cursor-pointer tracking-tight active:scale-[0.98] group';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5 h-9 min-w-[140px]',
    md: 'text-sm px-6 py-3 gap-2 h-11 min-w-[160px]',
    lg: 'text-base px-8 py-4 gap-2.5 h-14 min-w-[190px]',
  };

  const variantStyles = {
    primary:
      'bg-[#FF2A38] text-white hover:bg-[#E50914] shadow-md shadow-[#FF2A38]/20 hover:shadow-lg hover:shadow-[#FF2A38]/30',
    dark: 'bg-[#0D0D0E] text-white hover:bg-[#1A1A1E] border border-[#27272A]/50 hover:border-neutral-700',
    white:
      'bg-white text-[#0D0D0E] border border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50 shadow-sm',
    outline:
      'bg-transparent text-[#0D0D0E] border border-[#0D0D0E]/20 hover:border-[#0D0D0E] hover:bg-[#0D0D0E]/5',
  };

  const linkUrl = createWhatsAppLink(customMessage);

  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      aria-label="Contact Pixel Conversions on WhatsApp"
    >
      <div className="relative overflow-hidden flex items-center justify-center w-full">
        <AnimatePresence mode="wait">
          <motion.span
            key={CTA_PHRASES[index]}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="whitespace-nowrap font-medium"
          >
            {CTA_PHRASES[index]}
          </motion.span>
        </AnimatePresence>
      </div>

      <ArrowUpRight
        className={`shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
          size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'
        }`}
      />
    </a>
  );
};
