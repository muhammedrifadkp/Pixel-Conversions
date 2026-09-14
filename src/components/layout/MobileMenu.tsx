'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from '../brand/Logo';
import { createWhatsAppLink, DISPLAY_PHONE_FULL } from '@/utils/whatsapp';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="absolute top-0 right-0 bottom-0 w-full max-w-xs sm:max-w-sm bg-[#0D0D0E] text-white p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl border-l border-neutral-800/80"
          >
            {/* Header / Top Row */}
            <div className="flex items-center justify-between border-b border-neutral-800/80 pb-5 shrink-0">
              <Logo variant="light" size={30} hideTaglineOnMobile={true} />
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF2A38]/50"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="py-8 flex flex-col space-y-2.5 my-auto">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx + 0.08, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`group relative flex items-center justify-between text-2xl sm:text-3xl font-extrabold tracking-tight py-2.5 px-3 rounded-xl transition-colors duration-200 ${
                        isActive
                          ? 'text-[#FF2A38]'
                          : 'text-neutral-200 hover:text-white hover:bg-white/[0.03]'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeMobileNavPill"
                          className="absolute inset-0 bg-[#FF2A38]/[0.08] border-l-2 border-[#FF2A38] rounded-xl -z-0"
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
                        />
                      )}
                      <span className="flex items-center gap-3 relative z-10">
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#FF2A38] shadow-[0_0_8px_#FF2A38]" />
                        )}
                        {item.label}
                      </span>
                      <ArrowUpRight
                        className={`w-5 h-5 relative z-10 transition-all duration-200 ${
                          isActive
                            ? 'text-[#FF2A38] opacity-100 translate-x-0'
                            : 'text-neutral-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0'
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom CTA & Agency Contact Info */}
            <div className="space-y-5 pt-5 border-t border-neutral-800/80 shrink-0">
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full py-3.5 bg-[#FF2A38] hover:bg-[#E50914] text-white rounded-full font-bold text-base tracking-tight text-center flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#FF2A38]/30 active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <div className="space-y-2.5 text-xs text-neutral-400 pt-1">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#FF2A38]" />
                  <span>{DISPLAY_PHONE_FULL}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#FF2A38]" />
                  <span>info@pixelconversions.com</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF2A38] shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-tight text-neutral-400">
                    Kozhikode & Bengaluru
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
