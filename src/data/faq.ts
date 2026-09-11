export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const GENERAL_FAQS: FAQItem[] = [
  {
    question: 'How much does a custom website cost?',
    answer: 'Our typical website development and digital strategy projects range from ₹20,000 to ₹50,000 depending on scope, custom functionality, number of pages, and integrations. We provide clear upfront proposals with no hidden fees.',
  },
  {
    question: 'How long does a website project take to complete?',
    answer: 'Most standard business websites and landing pages are completed within 7 to 14 days. Custom web applications or extensive e-commerce stores typically take 2 to 3 weeks. Fast delivery with uncompromised quality is one of our primary commitments.',
  },
  {
    question: 'Do you work with clients outside India?',
    answer: 'Yes! We serve clients across India, UAE / Gulf countries, and internationally. All communication, reviews, and project milestones are seamlessly handled via WhatsApp, Google Meet, and direct email.',
  },
  {
    question: 'Do you provide ongoing website maintenance & support?',
    answer: 'Absolutely. We offer post-launch maintenance, security updates, speed monitoring, and content updates to ensure your digital assets continue performing at their peak.',
  },
  {
    question: 'Do you build e-commerce & Shopify websites?',
    answer: 'Yes. We specialize in high-converting Shopify themes and custom Next.js e-commerce storefronts integrated with payment gateways, inventory tracking, and mobile-optimized checkouts.',
  },
  {
    question: 'Do you manage Google Ads and Meta (Facebook/Instagram) Ads?',
    answer: 'Yes. Our performance marketing service includes complete campaign planning, ad creative design, copywriting, pixel/conversion setup, continuous A/B testing, and lead optimization.',
  },
  {
    question: 'Do you provide SEO services for local businesses?',
    answer: 'Yes! We implement technical SEO, Google Business Profile optimization, schema markup, and content strategy tailored to help businesses rank in regional markets like Kozhikode, Bengaluru, UAE, and beyond.',
  },
  {
    question: 'How do we start a project with Pixel Conversions?',
    answer: 'Getting started is fast and simple. Click any "Start a Project" or WhatsApp CTA on our site to connect with us directly on WhatsApp (+91 88912 77113). We will discuss your goals and provide a tailored plan within 24 hours.',
  },
];
