import React from 'react';
import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import IndustryMarqueeSection from './components/IndustryMarqueeSection';
import IndustryDetailSection from '@/components/sections/IndustryDetailSection/IndustryDetailSection';
import { allIndustriesData } from '@/data/industriesData';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Safal Infosoft",
  description:
    "Explore Safal Infosoft's expertise in delivering scalable software development, product engineering, and digital solutions for various industries.",
};

export default function IndustriesWeServePage() {
  return (
    <main>
      <InnerPageHero
        title="Industry-Aligned Digital Systems"
        description="Designed to align operations, data, and workflows with industry-specific requirements, enabling greater control, visibility, and scalable execution across complex business environments."
        imageSrc="/safal/images/INDUSTRIES/INDUSTIRES.webp"
        imageAlt="Industry-Aligned Digital Systems"
      />
      
        <IndustryMarqueeSection />

        {allIndustriesData.map((data, index) => (
          <IndustryDetailSection key={index} data={data} />
        ))}
    </main>
  );
}
