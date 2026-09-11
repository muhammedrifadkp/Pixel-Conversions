import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  variant?: 'light' | 'dark';
  hideTaglineOnMobile?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 36,
  showText = true,
  variant = 'dark',
  hideTaglineOnMobile = true,
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Official Pixel Conversions Logo Image */}
      <div 
        className="relative shrink-0 overflow-hidden rounded-lg shadow-sm transition-transform duration-300 hover:scale-105"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo.jpeg"
          alt="Pixel Conversions Logo"
          width={size}
          height={size}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-none shrink-0">
          <span
            className={`font-extrabold tracking-tight text-base sm:text-lg md:text-xl font-sans whitespace-nowrap ${
              variant === 'light' ? 'text-white' : 'text-[#0D0D0E]'
            }`}
          >
            PIXEL <span className="text-[#FF2A38]">CONVERSIONS</span>
          </span>
          <span
            className={`text-[9px] uppercase tracking-[0.25em] font-semibold mt-0.5 whitespace-nowrap ${
              hideTaglineOnMobile ? 'hidden sm:block' : 'block'
            } ${
              variant === 'light' ? 'text-neutral-400' : 'text-neutral-500'
            }`}
          >
            Web + Growth Agency
          </span>
        </div>
      )}
    </div>
  );
};
