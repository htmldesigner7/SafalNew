import React from 'react';
import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import { pagesData } from '@/data/pagesData';
import AiLedTransformation from './components/AiLedTransformation';
import ProprietaryPlatform from './components/ProprietaryPlatform';
import CoreAiCapabilities from './components/CoreAiCapabilities';
import ProcessSection from '@/components/sections/ProcessSection/ProcessSection';
import ImageCardsSection from '@/components/sections/ImageCardsSection/ImageCardsSection';
import CultureSection from '@/components/sections/CultureSection/CultureSection';
import BannerCTASection from '@/components/sections/BannerCTASection/BannerCTASection';
import { enterpriseAiCapabilitiesData } from '@/data/processData';
import { appliedAiData } from '@/data/appliedAiData';
import { measuredOperationalOutcomesData } from '@/data/cultureData';
import { aiEmergingTechBannerData } from '@/data/BannerCTASection';
import PlatformAdvantagesSection from '@/components/sections/PlatformAdvantagesSection/PlatformAdvantagesSection';
import { StructuredAIImplementation } from '@/data/platformAdvantagesData';

export default function AiEmergingTechnologyPage() {
  const { hero } = pagesData.aiEmergingTechnology;

  return (
    <main>
      <InnerPageHero
        title={hero.title}
        description={hero.description}
        imageSrc={hero.imageSrc}
        imageAlt={hero.imageAlt}
      />
      
      <AiLedTransformation />
     
      
      <ProcessSection 
        title="Enterprise AI Capabilities" 
        data={enterpriseAiCapabilitiesData} 
        mainColor="#8BB174" 
        accentColor="#5A8A44"
        activeBg="linear-gradient(90deg, rgba(139, 177, 116, 0.2) 0%, rgba(139, 177, 116, 0.05) 100%)"
        activeColor="#5A8A44"
      />

       <ProprietaryPlatform />

       
       
       <ImageCardsSection data={appliedAiData} />

       <CoreAiCapabilities />

        <CultureSection data={measuredOperationalOutcomesData} />

        <BannerCTASection data={aiEmergingTechBannerData} />

        <PlatformAdvantagesSection {...StructuredAIImplementation}/>
      
    </main>
  );
}
