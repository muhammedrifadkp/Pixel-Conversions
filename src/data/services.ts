export interface SubService {
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  isPrimary: boolean;
  order: number;
  subServices: SubService[];
  keyCapabilities: string[];
  businessBenefits: string[];
  processSteps: { title: string; description: string }[];
  technologies: string[];
  targetAudience: string[];
}

export const SERVICES: Record<string, ServiceDetail> = {
  'website-development': {
    slug: 'website-development',
    title: 'Website Development',
    tagline: 'High-converting digital experiences engineered for performance and growth.',
    shortDescription: 'We build custom, fast, and conversion-focused websites using modern web technology like Next.js, TypeScript, and Shopify.',
    fullDescription: 'Your website is the single most important digital asset for your business. We design and build bespoke web experiences that look visually striking, load instantly, and turn casual visitors into paying customers. From high-converting landing pages to complex e-commerce platforms and web applications, we focus on responsive UI/UX, bulletproof architecture, and search engine optimization.',
    isPrimary: true,
    order: 1,
    subServices: [
      { title: 'Business Websites', description: 'Clean, authoritative corporate websites designed to build trust and generate inquiries.' },
      { title: 'High-Converting Landing Pages', description: 'Laser-focused sales pages tailored for ad campaigns and maximum ROI.' },
      { title: 'E-commerce & Shopify', description: 'Seamless online storefronts with fast checkout, product showcases, and payment gateways.' },
      { title: 'Next.js Web Applications', description: 'Scalable, modern web apps with custom logic, dynamic content, and blazing speed.' },
      { title: 'Website Maintenance & Optimization', description: 'Ongoing security, speed optimization, and content updates to keep your site performing at its peak.' },
    ],
    keyCapabilities: [
      'Responsive UI/UX design across all devices (mobile, tablet, desktop)',
      'Sub-second page load speeds & 90+ Google Lighthouse performance',
      'SEO-friendly semantic HTML structure & schema markup',
      'Direct WhatsApp conversion routing & lead capture',
      'Scalable Next.js & React architecture',
      'Custom Shopify theme development & app integrations',
    ],
    businessBenefits: [
      'Higher visitor-to-lead conversion rates',
      'Professional brand credibility that wins premium clients',
      'Zero lag or performance bottlenecks on mobile networks',
      'Full ownership and easy content management',
    ],
    processSteps: [
      { title: '01. Discovery & Sitemap', description: 'We analyze your business goals, target audience, and competitive landscape.' },
      { title: '02. Wireframing & UX Design', description: 'We map out visual hierarchies and conversion pathways before touching code.' },
      { title: '03. Frontend Engineering', description: 'We build clean, reusable TypeScript & Next.js code with responsive styling.' },
      { title: '04. Optimization & Testing', description: 'Rigorous mobile testing across 320px–1440px viewports, speed audits, and SEO checks.' },
      { title: '05. Launch & WhatsApp Setup', description: 'Seamless deployment with direct WhatsApp lead routing configured.' },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shopify', 'Node.js', 'Framer Motion'],
    targetAudience: ['Startups', 'Small Businesses', 'E-commerce Brands', 'Real Estate Agencies', 'Service Providers'],
  },
  'performance-marketing': {
    slug: 'performance-marketing',
    title: 'Performance Marketing',
    tagline: 'Data-driven ad campaigns designed to generate leads and scale revenue.',
    shortDescription: 'We plan, run, and optimize high-ROI advertising campaigns across Google, Meta (Facebook & Instagram), and YouTube.',
    fullDescription: 'Traffic without conversions is a vanity metric. Our performance marketing service focuses on acquiring high-intent customers for your business at a predictable cost. We handle ad strategy, copywriting, high-converting ad creative design, target audience segmentation, and continuous campaign optimization to maximize your return on ad spend.',
    isPrimary: true,
    order: 2,
    subServices: [
      { title: 'Google Search & Display Ads', description: 'Capture high-intent buyers actively searching for your products or services.' },
      { title: 'Meta (Facebook & Instagram) Ads', description: 'Engaging visual ad creative and precise demographic targeting to generate qualified leads.' },
      { title: 'YouTube Video Ads', description: 'High-impact video campaigns that build brand authority and drive immediate action.' },
      { title: 'E-commerce Sales Campaigns', description: 'Retargeting, catalog ads, and funnel optimization to scale online store sales.' },
      { title: 'B2B Lead Generation', description: 'Strategic paid advertising pipelines designed to book calls and qualified meetings.' },
    ],
    keyCapabilities: [
      'High-converting ad copywriting & graphic creative design',
      'Conversion tracking setup (Meta Pixel, Google Tag Manager, GA4)',
      'A/B testing of headlines, hooks, and call-to-actions',
      'Negative keyword management & audience exclusion filters',
      'Custom landing page optimization for ad campaigns',
      'Weekly transparent performance reporting',
    ],
    businessBenefits: [
      'Immediate visibility and predictable inbound customer inquiries',
      'Cost-per-lead reduction through constant testing',
      'Direct integration with WhatsApp for fast lead response',
      'Transparent tracking where every rupee spent is accounted for',
    ],
    processSteps: [
      { title: '01. Funnel & Audience Audit', description: 'We map out your customer journey and define target buyer personas.' },
      { title: '02. Ad Creative & Copy', description: 'We write persuasive ad copy and design scroll-stopping visual assets.' },
      { title: '03. Campaign Setup & Pixel Setup', description: 'Clean technical configuration of conversion pixels, audiences, and bids.' },
      { title: '04. Launch & A/B Testing', description: 'We launch campaigns with small test budgets to find winning combinations.' },
      { title: '05. Scale & Optimize', description: 'We reallocate budget into high-performing ads to scale profitable leads.' },
    ],
    technologies: ['Google Ads', 'Meta Ads Manager', 'Instagram Ads', 'YouTube Ads', 'Google Tag Manager', 'GA4'],
    targetAudience: ['E-commerce Stores', 'Real Estate Developers', 'Local Services', 'B2B Companies', 'Growth Startups'],
  },
  'branding': {
    slug: 'branding',
    title: 'Brand Identity',
    tagline: 'Distinctive visual branding that builds authority and long-term customer loyalty.',
    shortDescription: 'We craft comprehensive brand systems including logo design, color palettes, typography, and visual guidelines.',
    fullDescription: 'A strong brand is more than just a logo — it is the emotion and expectation your business conveys at every touchpoint. We craft clean, memorable visual identities that set you apart from competitors, resonate with your target clients, and command premium pricing in your market.',
    isPrimary: false,
    order: 3,
    subServices: [
      { title: 'Logo & Visual Identity', description: 'Bespoke vector logo design crafted for versatility across print and digital media.' },
      { title: 'Brand Guidelines & Systems', description: 'Comprehensive brand rulebooks covering typography, color palettes, spacing, and usage.' },
      { title: 'Packaging & Print Design', description: 'Tactile packaging, business cards, brochures, and physical brand touchpoints.' },
      { title: 'Social Media Visual Templates', description: 'Consistent, premium social media post and story templates for Instagram and LinkedIn.' },
    ],
    keyCapabilities: [
      'Strategic brand positioning & visual storytelling',
      'Modern, scalable vector logo assets (SVG, AI, PNG, PDF)',
      'Curated color science & accessible typography pairings',
      'Digital-first visual guidelines for web & mobile',
    ],
    businessBenefits: [
      'Instant brand recognition and elevated professional prestige',
      'Ability to charge higher prices due to premium perception',
      'Cohesive visual presentation across web, social, and print',
    ],
    processSteps: [
      { title: '01. Strategic Discovery', description: 'We examine your brand values, market positioning, and competitors.' },
      { title: '02. Moodboards & Concepts', description: 'We present distinct visual directions before refining the chosen concept.' },
      { title: '03. Identity Refinement', description: 'Precision crafting of logo marks, color tokens, and typography.' },
      { title: '04. Guideline Delivery', description: 'Delivery of complete asset packages and brand rulebook for team use.' },
    ],
    technologies: ['Vector Crafting', 'Typography Systems', 'Design Tokens', 'Brand Strategy'],
    targetAudience: ['New Startups', 'Rebranding Businesses', 'E-commerce Brands', 'Corporate Entities'],
  },
  'seo': {
    slug: 'seo',
    title: 'Search Engine Optimization (SEO)',
    tagline: 'Sustainable search visibility that drives organic traffic and qualified inquiries.',
    shortDescription: 'We optimize your website’s technical foundation, content, and local presence to rank higher on Google search.',
    fullDescription: 'Organic search is the most cost-effective long-term growth channel for any business. Our SEO approach avoids short-term hacks and focuses on building technical excellence, high-speed page performance, semantic content relevance, and strong local search presence in markets like Kozhikode, Bengaluru, UAE, and beyond.',
    isPrimary: false,
    order: 4,
    subServices: [
      { title: 'Local SEO & Google Profile', description: 'Dominate local map packs and regional search results for Kozhikode, Bengaluru, and target cities.' },
      { title: 'Technical SEO Audit & Fixes', description: 'Optimize crawlability, sitemaps, canonical tags, Core Web Vitals, and mobile indexing.' },
      { title: 'On-Page Content Optimization', description: 'Keyword strategy, header structure, meta tags, and high-converting content alignment.' },
      { title: 'Structured Data & Schema Markup', description: 'Implement Organization, LocalBusiness, and Service schemas for rich Google search snippets.' },
    ],
    keyCapabilities: [
      'In-depth technical SEO performance auditing',
      'Google Business Profile setup and local citation building',
      'Semantic schema markup implementation (JSON-LD)',
      'Keyword research tailored for buyer intent',
    ],
    businessBenefits: [
      'Predictable flow of free, organic customer leads',
      'Long-term search equity that builds month after month',
      'Dominance over local competitors in key service regions',
    ],
    processSteps: [
      { title: '01. SEO Audit & Keyword Research', description: 'We identify technical flaws and uncover high-intent search terms.' },
      { title: '02. Technical Architecture Optimization', description: 'We fix Core Web Vitals, mobile responsiveness, and indexing barriers.' },
      { title: '03. Content & On-Page Enhancement', description: 'We refine headers, metadata, internal links, and content quality.' },
      { title: '04. Local Search Setup', description: 'Google Business Profile optimization and local schema deployment.' },
    ],
    technologies: ['Google Search Console', 'Schema Markup', 'Core Web Vitals', 'Local SEO'],
    targetAudience: ['Local Businesses', 'Service Providers', 'Real Estate Agencies', 'Regional Enterprises'],
  },
};
