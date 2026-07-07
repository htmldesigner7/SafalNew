import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import LegacyAccountability from './components/LegacyAccountability';
import CultureSection from '@/components/sections/CultureSection/CultureSection';
import ResponsibleScaleSection from './components/ResponsibleScaleSection';
import { pagesData, HeroContent } from '@/data/pagesData';
import { architectureOversightData } from '@/data/cultureData';
import { legacyScaleData } from '@/data/responsibleScaleData';
import { GoverningDigitalFrontierData } from '@/data/sustainableData';
import SustainableSection from '@/components/sections/SustainableSection/SustainableSection';

export default function CorporateGovernancePage() {
  const heroData = pagesData.corporateGovernance?.hero;
  
  return (
    <main>
      <InnerPageHero 
        title={heroData.title}
        description={heroData.description}
        imageSrc={heroData.imageSrc}
        imageAlt={heroData.imageAlt}
      />
      <LegacyAccountability />
      <CultureSection data={architectureOversightData} />
      <SustainableSection data={GoverningDigitalFrontierData} />
      <ResponsibleScaleSection data={legacyScaleData} />
    </main>
  );
}
