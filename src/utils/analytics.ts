'use client';

import { sendGAEvent } from '@next/third-parties/google';

/**
 * Tracks WhatsApp click events in GA4 using recommended gtag / sendGAEvent pattern.
 * Event Name: 'whatsapp_click'
 */
type GtagWindow = Window & {
  gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
};

export const trackWhatsAppClick = (location: string, label?: string) => {
  try {
    if (typeof window !== 'undefined') {
      const win = window as GtagWindow;
      if (typeof win.gtag === 'function') {
        win.gtag('event', 'whatsapp_click', {
          event_category: 'engagement',
          event_label: label || location,
          location: location,
          cta_location: location,
        });
      } else {
        sendGAEvent('event', 'whatsapp_click', {
          event_category: 'engagement',
          event_label: label || location,
          location: location,
          cta_location: location,
        });
      }
    }
  } catch (error) {
    console.error('Failed to send GA4 whatsapp_click event:', error);
  }
};
