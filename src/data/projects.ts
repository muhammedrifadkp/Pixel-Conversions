export interface Project {
  id: string;
  title: string;
  category: string;
  websiteUrl: string;
  description: string;
  image: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'ztoiq',
    title: 'ZTOIQ',
    category: 'E-commerce / Website Development',
    websiteUrl: 'https://ztoiq.com/',
    description: 'A premium fashion and lifestyle e-commerce experience focused on refined visual presentation, product discovery, and a luxury digital shopping experience.',
    image: '/projects-images/ztoiq.png',
    featured: true,
  },
  {
    id: 'zhm-real-estate',
    title: 'ZHM Real Estate LLC',
    category: 'Real Estate / Website Development',
    websiteUrl: 'https://www.zhmrealestatellc.ae/',
    description: 'A premium real estate digital platform designed to present properties, services, market information, and investor-focused content for the Dubai real estate market.',
    image: '/projects-images/zhm.png',
    featured: true,
  },
  {
    id: 'one-pack',
    title: 'One Pack',
    category: 'E-commerce / Website Development',
    websiteUrl: 'https://www.onepackonline.com/',
    description: 'Modern e-commerce platform built for online product packaging and supply solutions.',
    image: '/projects-images/one-pack.png',
    featured: true,
  },
  {
    id: 'business-setup',
    title: 'Business Setup',
    category: 'Business / Website Development',
    websiteUrl: 'https://businesssetup.ad-firms.com/',
    description: 'Corporate digital portal built for business setup and advisory services.',
    image: '/projects-images/adfirms.png',
    featured: true,
  },
  {
    id: 'chillera',
    title: 'Chillera',
    category: 'Website Development',
    websiteUrl: 'https://www.chillera.co.in/',
    description: 'Clean, responsive business website designed for modern brand presentation.',
    image: '/projects-images/chillera.png',
    featured: false,
  },
  {
    id: 'b4-baking',
    title: 'B4 Baking',
    category: 'Website / E-commerce',
    websiteUrl: 'https://www.b4baking.com/',
    description: 'Bespoke bakery and confectionery storefront crafted for digital ordering.',
    image: '/projects-images/b4-baking.png',
    featured: false,
  },
];
