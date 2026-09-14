export const WHATSAPP_NUMBER = '916282336330';
export const DISPLAY_PHONE = '6282 336 330';
export const DISPLAY_PHONE_FULL = '+91 6282 336 330';

export const createWhatsAppLink = (customMessage?: string): string => {
  const defaultMessage = `Hi Pixel Conversions,\n\nI'd like to discuss a project.`;
  const messageToUse = customMessage || defaultMessage;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageToUse)}`;
};

export const formatContactFormWhatsAppMessage = (data: {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}): string => {
  return `Hi Pixel Conversions,

I'd like to discuss a project.

Name: ${data.name}
Email: ${data.email}
Phone / WhatsApp: ${data.phone}
Primary Interest: ${data.service || 'General Inquiry'}

Project Details:
${data.message}`;
};
