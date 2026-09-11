import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Pixel Conversions',
  description: 'Terms and Conditions for Pixel Conversions services.',
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans text-neutral-700">
        <h1 className="text-4xl font-extrabold text-[#0D0D0E]">Terms & Conditions</h1>
        <p className="text-xs font-mono text-neutral-400">Last updated: September 2026</p>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#0D0D0E]">1. Scope of Agreement</h2>
          <p className="text-sm leading-relaxed">
            By accessing or using the services provided by Pixel Conversions (&ldquo;Agency&rdquo;), you agree to be bound by these Terms & Conditions. Specific project timelines, deliverables, and payment structures are defined in written proposals or WhatsApp agreements provided prior to project initiation.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#0D0D0E]">2. Intellectual Property</h2>
          <p className="text-sm leading-relaxed">
            Upon final payment receipt, clients receive full ownership rights to bespoke website design, custom code assets, and graphic collaterals created for their project, excluding third-party open-source libraries or licensed software.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#0D0D0E]">3. Project Scope & Revisions</h2>
          <p className="text-sm leading-relaxed">
            Projects include agreed design and code revision rounds as outlined in the initial proposal. Additional feature requests or major scope alterations outside the original agreement will be estimated separately.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#0D0D0E]">4. Inquiries & Communication</h2>
          <p className="text-sm leading-relaxed">
            For questions regarding these terms, contact info@pixelconversions.com or WhatsApp +91 88912 77113.
          </p>
        </section>
      </div>
    </div>
  );
}
