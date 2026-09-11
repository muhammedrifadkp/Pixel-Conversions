'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'dark' | 'white' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  icon?: boolean;
  disabled?: boolean;
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
  disabled = false,
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
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    disabled ? 'opacity-50 pointer-events-none' : ''
  } ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          className={`shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
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
          onClick={onClick}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`group ${combinedClasses}`} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`group ${combinedClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};
