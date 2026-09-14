import React from 'react';
import { Metadata } from 'next';
import { ContactForm } from '@/components/ui/ContactForm';
import { Mail, Phone, MapPin, Sparkles, MessageSquare } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';
import { createWhatsAppLink, DISPLAY_PHONE_FULL } from '@/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Contact Pixel Conversions | Kozhikode & Bengaluru Offices',
  description: 'Connect with Pixel Conversions directly via WhatsApp (+91 6282 336 330), email, or visit our Kozhikode and Bengaluru offices.',
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#FF2A38]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Contact Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D0D0E] tracking-tight font-sans">
            Let&apos;s Start a Project Together
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed font-sans">
            Whether you need a new website, a performance ad campaign, or a complete brand transformation, we are ready to help your business grow.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form (Cols 1 to 7) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Info (Cols 8 to 12) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct WhatsApp Box */}
            <div className="p-8 rounded-3xl bg-[#0D0D0E] text-white border border-neutral-800 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF2A38]/20 text-[#FF2A38] flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Fastest Response: WhatsApp</h3>
                  <p className="text-xs text-neutral-400">Direct team connection within minutes</p>
                </div>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                Skip form filling and message us directly on WhatsApp to share your project brief or ask quick questions.
              </p>
              <a
                href={createWhatsAppLink("Hi Pixel Conversions, I'd like to discuss a new project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-[#FF2A38] hover:bg-[#E50914] text-white font-bold text-sm text-center block transition-colors shadow-lg shadow-[#FF2A38]/30"
              >
                Message +91 6282 336 330 on WhatsApp
              </a>
            </div>

            {/* Direct Contact Details */}
            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-6">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-400">
                Direct Touchpoints
              </h3>

              <div className="space-y-4 text-sm text-[#0D0D0E]">
                <a
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#FF2A38] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FF2A38]" />
                  <span className="font-semibold">{DISPLAY_PHONE_FULL}</span>
                </a>

                <a
                  href="mailto:info@pixelconversions.com"
                  className="flex items-center gap-3 hover:text-[#FF2A38] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#FF2A38]" />
                  <span className="font-semibold">info@pixelconversions.com</span>
                </a>

                <a
                  href="https://www.instagram.com/pixelconversion.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#FF2A38] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#FF2A38]" />
                  <span className="font-semibold">@pixelconversion.ae</span>
                </a>
              </div>
            </div>

            {/* Office Locations */}
            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-6">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-400">
                Our Offices
              </h3>

              <div className="space-y-6 text-xs text-neutral-700 font-sans">
                {/* Kozhikode */}
                <div className="space-y-1.5 border-b border-neutral-200/80 pb-4">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#0D0D0E]">
                    <MapPin className="w-4 h-4 text-[#FF2A38]" />
                    <span>Kozhikode Office</span>
                  </div>
                  <p className="leading-relaxed">
                    4th Floor, HiLITE Business Park, Phase 2, Poovangal, Kozhikode, Pantheeramkavu, Kerala 673014, India.
                  </p>
                </div>

                {/* Bengaluru */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#0D0D0E]">
                    <MapPin className="w-4 h-4 text-[#FF2A38]" />
                    <span>Bengaluru Office</span>
                  </div>
                  <p className="leading-relaxed">
                    BHIVE Platinum – Old Airport Road Campus, Old Airport Road, HAL 2nd Stage, Kodihalli, Indiranagar, Bengaluru, Karnataka – 560008, India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
