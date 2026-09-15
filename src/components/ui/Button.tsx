'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { trackWhatsAppClick } from '@/utils/analytics';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'dark' | 'white' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: (e?: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  icon?: boolean;
  leftIcon?: React.ReactNode;
  disabled?: boolean;
  location?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  className = '',
  onClick,
  type = 'button',
  icon = true,
  leftIcon,
  disabled = false,
  location,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full select-none cursor-pointer tracking-tight active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF2A38]';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#FF2A38] text-white hover:bg-[#E50914] shadow-md shadow-[#FF2A38]/20 hover:shadow-lg hover:shadow-[#FF2A38]/30',
    dark: 'bg-[#0D0D0E] text-white hover:bg-[#1A1A1E] border border-[#27272A]/50 hover:border-neutral-700',
    white:
      'bg-white text-[#0D0D0E] border border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50 shadow-sm',
    outline:
      'bg-transparent text-[#0D0D0E] border border-[#0D0D0E]/20 hover:border-[#0D0D0E] hover:bg-[#0D0D0E]/5',
    ghost:
      'bg-transparent text-[#0D0D0E] hover:bg-neutral-100 hover:text-[#FF2A38]',
    whatsapp:
      'relative overflow-hidden bg-white text-[#0D0D0E] border border-neutral-300 hover:border-[#25D366] hover:text-white shadow-sm hover:shadow-xl hover:shadow-[#25D366]/35 hover:-translate-y-0.5 transition-all duration-500 ease-out z-10',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    disabled ? 'opacity-50 pointer-events-none' : ''
  } ${className}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (variant === 'whatsapp' || (href && (href.startsWith('https://wa.me') || href.includes('wa.me')))) {
      const labelText = typeof children === 'string' ? children : 'WhatsApp Button';
      trackWhatsAppClick(location || 'whatsapp_button', labelText);
    }
    if (onClick) {
      onClick(e);
    }
  };

  const content = (
    <>
      {variant === 'whatsapp' && (
        <span className="absolute inset-0 pointer-events-none overflow-hidden rounded-full z-0">
          {/* Deep Water Layer (Back Wave) */}
          <span className="absolute inset-y-0 -left-[140%] w-[150%] group-hover:left-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] flex items-center">
            <span className="w-full h-full bg-[#128C7E]/70" />
            <svg
              className="w-10 h-[140%] -ml-1 text-[#128C7E]/70 shrink-0 animate-liquid-undulate"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="currentColor"
            >
              <path d="M 0,0 C 40,25 15,50 35,75 C 20,90 45,95 0,100 L 0,0 Z" />
            </svg>
          </span>

          {/* Main WhatsApp Green Liquid Wave Layer */}
          <span className="absolute inset-y-0 -left-[140%] w-[145%] group-hover:left-0 transition-all duration-850 ease-[cubic-bezier(0.25,1,0.5,1)] flex items-center">
            <span className="w-full h-full bg-[#25D366]" />
            <svg
              className="w-12 h-[150%] -ml-1 text-[#25D366] shrink-0 animate-liquid-undulate"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="currentColor"
            >
              <path d="M 0,0 C 45,20 10,40 35,60 C 50,80 15,90 0,100 L 0,0 Z" />
            </svg>
          </span>

          {/* Liquid Water Bubbles */}
          <span className="absolute bottom-1 left-1/4 w-2 h-2 rounded-full bg-white/40 opacity-0 group-hover:animate-bubble-1" />
          <span className="absolute bottom-1 left-2/3 w-1.5 h-1.5 rounded-full bg-white/40 opacity-0 group-hover:animate-bubble-2" />
        </span>
      )}

      {leftIcon && <span className="shrink-0 flex items-center relative z-10 transition-colors duration-500">{leftIcon}</span>}
      <span className="relative z-10 transition-colors duration-500">{children}</span>
      {icon && (
        <ArrowUpRight
          className={`shrink-0 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10 ${
            size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'
          }`}
        />
      )}
    </>
  );

  if (href) {
    if (external || href.startsWith('http') || href.startsWith('https://wa.me')) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group ${combinedClasses}`}
          onClick={handleClick}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`group ${combinedClasses}`} onClick={handleClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`group ${combinedClasses}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};
