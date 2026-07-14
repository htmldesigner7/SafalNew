import React from 'react';

import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import { pagesData } from '@/data/pagesData';
import CreativeDigitalEngineSection from './components/CreativeDigitalEngineSection';
import IntegratedBrandServicesSection from './components/IntegratedBrandServicesSection';
import ProcessSection from '@/components/sections/ProcessSection/ProcessSection';
import IndustryApplicationsSection from '@/components/sections/IndustryApplicationsSection/IndustryApplicationsSection';
import PlatformAdvantagesSection from '@/components/sections/PlatformAdvantagesSection/PlatformAdvantagesSection';
import BuildScaleSection from './components/BuildScaleSection';
import TechnologyDrivenExecutionSection from './components/TechnologyDrivenExecutionSection';
import { structuredExecutionData } from '@/data/processData';
import { brandIndustryApplicationsData } from '@/data/sectorsData';
import { StructuredCreativityScalableExecution } from '@/data/platformAdvantagesData';

export default function BrandDigitalCreativeServicesPage() {
  const hero = pagesData.brandDigitalCreativeServices.hero;

  return (
    <main>
      <InnerPageHero
        title={hero.title}
        description={hero.description}
        imageSrc={hero.imageSrc}
        imageAlt={hero.imageAlt}
      />
      <CreativeDigitalEngineSection />
      <IntegratedBrandServicesSection />

       <TechnologyDrivenExecutionSection />

      <ProcessSection
        title="Structured Execution Framework"
        data={structuredExecutionData}
        mainColor="#789B55"
        accentColor="#A5C780"
        activeBg="linear-gradient(90deg, #789B55 0%, rgba(120, 155, 85, 0.05) 100%)"
        activeColor="#FFFFFF"
      />
      <IndustryApplicationsSection data={brandIndustryApplicationsData} />
      <CreativeDigitalEngineSection
        title="Selected Work & Brand Transformations"
        paragraphs={[
          "A portfolio of brand identities, digital platforms, and marketing campaigns developed across industries, reflecting structured execution, creative consistency, and measurable impact.",
          "Each engagement demonstrates the integration of creative design services with performance-driven digital strategies."
        ]}
        imageSrc="/images/Brand,-Digital-&-Creative-Services/brand-transformation-1.webp"
        imageAlt="Selected Work Illustration"
      />

      <PlatformAdvantagesSection {...StructuredCreativityScalableExecution} />

      <BuildScaleSection />

     
    </main>
  );
}
