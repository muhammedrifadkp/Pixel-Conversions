import React from 'react';
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
