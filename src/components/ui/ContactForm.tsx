'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import { formatContactFormWhatsAppMessage, createWhatsAppLink } from '@/utils/whatsapp';
import { trackWhatsAppClick } from '@/utils/analytics';
import { MessageSquare, CheckCircle2 } from 'lucide-react';

interface ContactFormProps {
  defaultService?: string;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultService = '',
  className = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService,
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'Please share a brief message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Track GA4 event
    trackWhatsAppClick('contact_form', formData.service || 'General Inquiry');

    // Generate formatted WhatsApp message
    const formattedMessage = formatContactFormWhatsAppMessage(formData);
    const whatsappUrl = createWhatsAppLink(formattedMessage);

    setSubmitted(true);

    // Redirect to WhatsApp after brief feedback delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <div className={`bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl shadow-black/[0.03] ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-[#FF2A38]/10 text-[#FF2A38] flex items-center justify-center font-bold">
          <MessageSquare className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-xl text-[#0D0D0E]">Start a Project Conversation</h3>
          <p className="text-xs text-neutral-500">Redirects directly to WhatsApp (+91 6282 336 330)</p>
        </div>
      </div>

      {submitted ? (
        <div className="py-12 text-center space-y-4">
          <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto animate-bounce" />
          <h4 className="font-bold text-2xl text-[#0D0D0E]">Opening WhatsApp...</h4>
          <p className="text-neutral-600 max-w-sm mx-auto text-sm">
            We are transferring your pre-filled inquiry to our WhatsApp team. If WhatsApp didn&apos;t open automatically, click below:
          </p>
          <div className="pt-2">
            <Button
              href={createWhatsAppLink(formatContactFormWhatsAppMessage(formData))}
              external
              variant="primary"
              size="lg"
              location="contact_form_fallback"
            >
              Open WhatsApp Now
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                Your Name <span className="text-[#FF2A38]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-colors duration-200 text-[#0D0D0E] focus:outline-none ${
                  errors.name
                    ? 'border-[#FF2A38] bg-red-50/20'
                    : 'border-neutral-200 focus:border-[#0D0D0E] bg-neutral-50/50'
                }`}
              />
              {errors.name && <p className="text-xs text-[#FF2A38] mt-1.5">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                Email Address <span className="text-[#FF2A38]">*</span>
              </label>
              <input
                type="email"
                placeholder="rahul@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-colors duration-200 text-[#0D0D0E] focus:outline-none ${
                  errors.email
                    ? 'border-[#FF2A38] bg-red-50/20'
                    : 'border-neutral-200 focus:border-[#0D0D0E] bg-neutral-50/50'
                }`}
              />
              {errors.email && <p className="text-xs text-[#FF2A38] mt-1.5">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Phone */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                Phone / WhatsApp <span className="text-[#FF2A38]">*</span>
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-colors duration-200 text-[#0D0D0E] focus:outline-none ${
                  errors.phone
                    ? 'border-[#FF2A38] bg-red-50/20'
                    : 'border-neutral-200 focus:border-[#0D0D0E] bg-neutral-50/50'
                }`}
              />
              {errors.phone && <p className="text-xs text-[#FF2A38] mt-1.5">{errors.phone}</p>}
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                Primary Interest
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-[#0D0D0E] bg-neutral-50/50 text-sm text-[#0D0D0E] focus:outline-none"
              >
                <option value="">Select a service</option>
                <option value="Website Development">Website Development</option>
                <option value="Performance Marketing">Performance Marketing</option>
                <option value="Branding">Branding</option>
                <option value="SEO">SEO</option>
                <option value="Complete Agency Partnership">Complete Web + Growth Package</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
              Project Brief / Details <span className="text-[#FF2A38]">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your business goals, target timeline, or project requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-colors duration-200 text-[#0D0D0E] focus:outline-none ${
                errors.message
                  ? 'border-[#FF2A38] bg-red-50/20'
                  : 'border-neutral-200 focus:border-[#0D0D0E] bg-neutral-50/50'
              }`}
            ></textarea>
            {errors.message && <p className="text-xs text-[#FF2A38] mt-1.5">{errors.message}</p>}
          </div>

          <div className="pt-2">
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Send & Open in WhatsApp
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
