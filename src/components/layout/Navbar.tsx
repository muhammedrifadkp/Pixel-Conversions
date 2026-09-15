'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Logo } from '../brand/Logo';
import { RotatingCTA } from '../ui/RotatingCTA';
import { MobileMenu } from './MobileMenu';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200/80 py-3 md:py-3.5 shadow-sm'
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group focus:outline-none shrink-0">
            <Logo size={32} />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-100/80 backdrop-blur-sm p-1.5 rounded-full border border-neutral-200/60">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold tracking-tight rounded-full transition-colors duration-300 select-none ${
                    isActive ? 'text-[#FF2A38]' : 'text-neutral-700 hover:text-[#0D0D0E]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavGlider"
                      className="absolute inset-0 rounded-full bg-[#FF2A38]/[0.08] border border-[#FF2A38]/20 shadow-[0_2px_8px_-2px_rgba(255,42,56,0.12)] flex items-end justify-center pb-[3px]"
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : {
                              type: 'spring',
                              stiffness: 220,
                              damping: 25,
                              mass: 0.85,
                            }
                      }
                    >
                      <span className="w-3.5 h-[2px] bg-[#FF2A38] rounded-full" />
                    </motion.div>
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <RotatingCTA variant="primary" size="md" location="header" />
          </div>

          {/* Mobile Menu Button - Single Row with Logo */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2.5 rounded-full bg-neutral-100/90 hover:bg-neutral-200 text-[#0D0D0E] transition-colors focus:outline-none border border-neutral-200/60 flex items-center justify-center shrink-0"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
