'use client';

import React from 'react';
import { trackWhatsAppClick } from '@/utils/analytics';

interface WhatsAppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  location: string;
  label?: string;
  children: React.ReactNode;
}

export const WhatsAppLink: React.FC<WhatsAppLinkProps> = ({
  location,
  label,
  children,
  onClick,
  ...props
}) => {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        trackWhatsAppClick(location, label || (typeof children === 'string' ? children : location));
        if (onClick) onClick(e);
      }}
    >
      {children}
    </a>
  );
};
