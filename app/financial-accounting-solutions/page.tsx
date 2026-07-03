import React from 'react';
import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import { pagesData } from '@/data/pagesData';
import FinancialProcessSection from './components/FinancialProcessSection';
import ImageCardsSection from '@/components/sections/ImageCardsSection/ImageCardsSection';
import { StandardizedControlledExecution, StructuredFinancialWorkflows } from '@/data/appliedAiData';
import ProcessSection from '@/components/sections/ProcessSection/ProcessSection';
import { startupSupportServices } from '@/data/processData';
import MapsSection from './components/MapsSection';
import { FlexibleServiceStructures } from '@/data/cultureData';
import CultureSection from '@/components/sections/CultureSection/CultureSection';
import PlatformAdvantagesSection from '@/components/sections/PlatformAdvantagesSection/PlatformAdvantagesSection';
import { WhysafalAccounting } from '@/data/platformAdvantagesData';
import StructuredOperationsSection from './components/StructuredOperationsSection';

export default function FinancialAccountingSolutionsPage() {
  const hero = pagesData.financialAccountingSolutions.hero;
  return (
    <main>
      <InnerPageHero
        title={hero.title}
        description={hero.description}
        imageSrc={hero.imageSrc}
        imageAlt={hero.imageAlt}
      />

      <FinancialProcessSection />
      <ImageCardsSection data={StructuredFinancialWorkflows} />

      <ProcessSection
        title="Startup Support Services" 
        data={startupSupportServices} 
        mainColor="#8BB174" 
        accentColor="#5A8A44"
        activeBg="linear-gradient(90deg, rgba(139, 177, 116, 0.2) 0%, rgba(139, 177, 116, 0.05) 100%)"
        activeColor="#5A8A44"
      />

      <ImageCardsSection data={StandardizedControlledExecution} />

      <MapsSection />

      <CultureSection data={FlexibleServiceStructures} />

      <StructuredOperationsSection />

      <PlatformAdvantagesSection {...WhysafalAccounting} />
    </main>
  );
}

