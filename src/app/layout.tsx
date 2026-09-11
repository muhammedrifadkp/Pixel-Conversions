import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StructuredData } from '@/components/ui/StructuredData';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pixelconversions.com'),
  title: {
    default: 'Pixel Conversions | Web Development & Digital Marketing Agency',
    template: '%s | Pixel Conversions',
  },
  description:
    'Pixel Conversions builds brands and high-converting digital experiences that drive growth. Custom Next.js websites, Shopify stores, Google/Meta ads, and local SEO for businesses in Kozhikode, Bengaluru, UAE, and globally.',
  keywords: [
    'Web Development Agency',
    'Digital Marketing Agency',
    'Next.js Website Development',
    'Performance Marketing Kozhikode',
    'Web Development Bengaluru',
    'Shopify E-commerce Agency',
    'Google Ads Specialist India',
    'Meta Ads Agency',
    'Local SEO Kerala',
    'Pixel Conversions',
  ],
  authors: [{ name: 'Pixel Conversions' }],
  creator: 'Pixel Conversions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pixelconversions.com',
    title: 'Pixel Conversions | Web Development & Digital Marketing Agency',
    description: 'We build brands and digital experiences that drive growth.',
    siteName: 'Pixel Conversions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixel Conversions | Web Development & Digital Marketing Agency',
    description: 'We build brands and digital experiences that drive growth.',
  },
  icons: {
    icon: '/fav-icon.jpeg',
    shortcut: '/fav-icon.jpeg',
    apple: '/fav-icon.jpeg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable} scroll-smooth`}>
      <head>
        <StructuredData />
      </head>
      <body className="font-sans bg-white text-[#0D0D0E] antialiased selection:bg-[#FF2A38] selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
};
