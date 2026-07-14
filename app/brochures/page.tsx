import React from 'react';
import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import BrochuresSection from '@/components/sections/BrochuresSection/BrochuresSection';

export default function BrochuresPage() {
  return (
    <main>
      <InnerPageHero 
        title={<>Insights & Strategic Foresight</>}
        description="Business perspectives, industry trends, and technical insights from the minds orchestrating the future of enterprise technology at Safal Infosoft."
        imageSrc="/images/blogs/blogs.webp"
        imageAlt="3D Glass Book"
      />
      <BrochuresSection />
    </main>
  );
}
