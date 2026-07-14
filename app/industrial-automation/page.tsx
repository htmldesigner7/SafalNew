import React from 'react';

import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import { pagesData } from '@/data/pagesData';
import ProcessSection from '@/components/sections/ProcessSection/ProcessSection';
import IndustryApplicationsSection from '@/components/sections/IndustryApplicationsSection/IndustryApplicationsSection';
import EngineeringSection from '@/components/sections/EngineeringSection/EngineeringSection';
import PlatformAdvantagesSection from '@/components/sections/PlatformAdvantagesSection/PlatformAdvantagesSection';
import { engineeringCapabilitiesData } from '@/data/processData';
import { industrialEnvironmentsData } from '@/data/industryApplicationsData';
import { appliedImplementationsData } from '@/data/engineeringData';
import { structuredIndustrialExecutionData } from '@/data/platformAdvantagesData';

import StructuredDeliverySection from '@/components/sections/StructuredDeliverySection/StructuredDeliverySection';
import IndustrialSystemsSection from './components/IndustrialSystemsSection';
import TechnologyAlignedSection from './components/TechnologyAlignedSection';
import IndustrialCtaSection from './components/IndustrialCtaSection';

export default function IndustrialAutomationPage() {
  const heroData = pagesData.industrialAutomation.hero;

  return (
    <main>
      <InnerPageHero title={heroData.title} description={heroData.description} imageSrc={heroData.imageSrc} imageAlt={heroData.imageAlt} />

      <IndustrialSystemsSection />

      <ProcessSection
        title="Engineering-Led Automation Capabilities"
        data={engineeringCapabilitiesData}
        mainColor="#82A669"
        accentColor="#9DC183"
        activeBg="linear-gradient(90deg, #EBF3E6 0%, transparent 100%)"
        activeColor="#5C7A45"
      />

      <StructuredDeliverySection />

      <IndustryApplicationsSection data={industrialEnvironmentsData} />

      <TechnologyAlignedSection />

      <EngineeringSection data={appliedImplementationsData} />

      <IndustrialCtaSection />

      <PlatformAdvantagesSection {...structuredIndustrialExecutionData} />
    </main>
  );
}
