import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Pixel Conversions',
  description: 'Privacy Policy for Pixel Conversions web development and performance marketing agency.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans text-neutral-700">
        <h1 className="text-4xl font-extrabold text-[#0D0D0E]">Privacy Policy</h1>
        <p className="text-xs font-mono text-neutral-400">Last updated: September 2026</p>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#0D0D0E]">1. Overview</h2>
          <p className="text-sm leading-relaxed">
            Pixel Conversions (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) respects your privacy and is committed to protecting any personal information you share with us. This Privacy Policy outlines how we handle information collected through our website (pixelconversions.com) and direct inquiry channels including WhatsApp.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#0D0D0E]">2. Information We Collect</h2>
          <p className="text-sm leading-relaxed">
            When you submit an inquiry form or contact us via WhatsApp, we collect the details you provide, such as your name, email address, phone number, and project brief. This information is strictly used to evaluate your project requirements and communicate regarding our services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#0D0D0E]">3. Data Usage & Sharing</h2>
          <p className="text-sm leading-relaxed">
            We do not sell, rent, or trade your personal data to third parties. Information is used exclusively for project discussion, campaign management, and customer support.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#0D0D0E]">4. Contact Information</h2>
          <p className="text-sm leading-relaxed">
            For any questions regarding our Privacy Policy, please email us at info@pixelconversions.com or write to our Kozhikode / Bengaluru offices.
          </p>
        </section>
      </div>
    </div>
  );
}
