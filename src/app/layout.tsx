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
    'Pixel Conversions is a premier web development and digital marketing agency engineering custom Next.js websites, Shopify stores, Google/Meta ads, and local SEO for businesses in Kozhikode, Bengaluru, UAE, and globally.',
  keywords: [
    'web development agency',
    'web development company',
    'digital marketing agency',
    'website development agency',
    'website design agency',
    'performance marketing agency',
    'SEO agency',
    'e-commerce website development',
    'business website development',
    'web development agency in Kozhikode',
    'web development company in Kozhikode',
    'digital marketing agency in Kozhikode',
    'web development agency in Kerala',
    'web development agency in Bengaluru',
    'Pixel Conversions',
  ],
  authors: [{ name: 'Pixel Conversions', url: 'https://pixelconversions.com' }],
  creator: 'Pixel Conversions',
  publisher: 'Pixel Conversions',
  alternates: {
    canonical: 'https://pixelconversions.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pixelconversions.com',
    title: 'Pixel Conversions | Web Development & Digital Marketing Agency',
    description: 'We build brands and high-converting digital experiences that drive growth. Custom Next.js websites, performance ads, and local SEO.',
    siteName: 'Pixel Conversions',
    images: [
      {
        url: 'https://pixelconversions.com/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Pixel Conversions - Web Development & Digital Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixel Conversions | Web Development & Digital Marketing Agency',
    description: 'We build brands and high-converting digital experiences that drive growth. Custom Next.js websites, performance ads, and local SEO.',
    images: ['https://pixelconversions.com/logo.jpeg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/fav-icon.jpeg', type: 'image/jpeg' },
    ],
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/fav-icon.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/fav-icon.jpeg" type="image/jpeg" />
        <StructuredData />
      </head>
      <body className="font-sans bg-white text-[#0D0D0E] antialiased selection:bg-[#FF2A38] selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow" id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
