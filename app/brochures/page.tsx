import { baseUrl } from '@/utils/baseUrl';
import React from 'react';
import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import BrochuresSection from '@/components/sections/BrochuresSection/BrochuresSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software & IT Services Brochures | Safal Infosoft",
  description:
    "Browse and download brochures covering Safal Infosoft's software development, technology consulting, staffing, and digital solutions.",
};

export default function BrochuresPage() {
  return (
    <main>
      <InnerPageHero 
        title={<>Capabilities, Designed for Action</>}
        description="Access curated brochures that bring together our capabilities, solutions, and strategic thinking, crafted to help you understand, evaluate, and move forward with clarity."
        imageSrc={`${baseUrl}/images/banner-images/blogs.webp`}
        imageAlt="3D Glass Book"
      />
      <BrochuresSection />
    </main>
  );
}
