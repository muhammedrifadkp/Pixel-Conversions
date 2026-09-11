'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '@/data/faq';

interface AccordionProps {
  items: FAQItem[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className={`border rounded-2xl transition-colors duration-300 overflow-hidden ${
              isOpen
                ? 'border-[#0D0D0E] bg-[#0D0D0E]/[0.02]'
                : 'border-neutral-200 hover:border-neutral-400 bg-white'
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-lg md:text-xl text-[#0D0D0E] tracking-tight">
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                  isOpen ? 'bg-[#FF2A38] text-white' : 'bg-neutral-100 text-neutral-700'
                }`}
              >
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="px-6 pb-6 md:px-8 md:pb-8 text-neutral-600 leading-relaxed font-sans text-base border-t border-neutral-100 pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
