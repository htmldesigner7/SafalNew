import React from 'react';
import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import BrochuresSection from '@/components/sections/BrochuresSection/BrochuresSection';

export default function BrochuresPage() {
  return (
    <main>
      <InnerPageHero 
        title={<>Capabilities, Designed for Action</>}
        description="Access curated brochures that bring together our capabilities, solutions, and strategic thinking, crafted to help you understand, evaluate, and move forward with clarity."
        imageSrc="/images/banner-images/blogs.webp"
        imageAlt="3D Glass Book"
      />
      <BrochuresSection />
    </main>
  );
}
