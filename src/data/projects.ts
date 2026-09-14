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
    id: 'rahath',
    title: 'Rahath',
    category: 'E-commerce / Modest Fashion',
    websiteUrl: 'https://rahathofficial.com/',
    description: 'A high-converting modest fashion e-commerce storefront featuring curated abayas, dresses, and a mobile-first digital ordering flow.',
    image: '/projects-images/rahath.jpg',
    featured: true,
  },
  {
    id: 'pretty-homes-india',
    title: 'Pretty Homes India',
    category: 'E-commerce / Home & Decor',
    websiteUrl: 'https://prettyhomesindia.com/',
    description: 'An artisanal e-commerce storefront for handcrafted Indian home decor, Tanjore & Pichwai paintings, brass artwork, and wooden carvings.',
    image: '/projects-images/pretty-homes.jpg',
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
    id: 'business-setup',
    title: 'Business Setup',
    category: 'Business / Website Development',
    websiteUrl: 'https://businesssetup.ad-firms.com/',
    description: 'Corporate digital portal built for business setup and advisory services in UAE.',
    image: '/projects-images/adfirms.png',
    featured: false,
  },
  {
    id: 'one-pack',
    title: 'One Pack',
    category: 'E-commerce / Website Development',
    websiteUrl: 'https://www.onepackonline.com/',
    description: 'Modern e-commerce platform built for online product packaging and supply solutions.',
    image: '/projects-images/one-pack.png',
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
    id: 'inchberry',
    title: 'Inchberry',
    category: 'E-commerce / Fashion & Apparel',
    websiteUrl: 'https://inchberry.in/',
    description: "Contemporary women's homewear and loungewear storefront crafted for effortless browsing and modern shopping.",
    image: '/projects-images/inchberry.jpg',
    featured: false,
  },
];
