import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import { pagesData } from '@/data/pagesData';
import React from 'react';

import OneVision from './components/OneVision';
import ExecutiveCommittee from './components/ExecutiveCommittee';
import DivisionHeads from './components/DivisionHeads';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership Team | Safal Infosoft",
  description:
    "Meet the experts leading Safal Infosoft in software engineering, product development, digital innovation, and customer-focused technology solutions.",
};

export default function ContactPage() {
  const heroData = pagesData.LeaderShipTeam.hero

  return (
    <main>
      <InnerPageHero
        title={heroData.title}
        description={heroData.description}
        imageSrc={heroData.imageSrc}
        imageAlt={heroData.imageAlt}
      />

      <OneVision/>
      <ExecutiveCommittee/>
      <DivisionHeads/>
    </main>
  );
}
