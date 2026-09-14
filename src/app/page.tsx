import React from 'react';
import { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { SelectedWork } from '@/components/home/SelectedWork';
import { CoreServices } from '@/components/home/CoreServices';
import { WhyUs } from '@/components/home/WhyUs';
import { Process } from '@/components/home/Process';
import { Industries } from '@/components/home/Industries';
import { Credibility } from '@/components/home/Credibility';
import { FAQSection } from '@/components/home/FAQSection';
import { LatestBlog } from '@/components/home/LatestBlog';
import { FinalCTA } from '@/components/home/FinalCTA';

export const metadata: Metadata = {
  title: 'Pixel Conversions | Web Development & Digital Marketing Agency',
  description: 'Pixel Conversions is a premier web development and digital marketing agency. We build high-converting Next.js websites, Shopify stores, performance ad campaigns, and SEO solutions in Kozhikode, Bengaluru, UAE, and globally.',
  alternates: {
    canonical: 'https://pixelconversions.com/',
  },
  openGraph: {
    title: 'Pixel Conversions | Web Development & Digital Marketing Agency',
    description: 'We build brands and high-converting digital experiences that drive growth. Custom Next.js websites, Shopify stores, Google/Meta ads, and local SEO.',
    url: 'https://pixelconversions.com/',
    type: 'website',
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
    description: 'We build brands and high-converting digital experiences that drive growth.',
    images: ['https://pixelconversions.com/logo.jpeg'],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <CoreServices />
      <WhyUs />
      <Process />
      <Industries />
      <Credibility />
      <FAQSection />
      <LatestBlog />
      <FinalCTA />
    </>
  );
}
