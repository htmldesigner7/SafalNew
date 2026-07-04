import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import SustainableSection from '@/components/sections/SustainableSection/SustainableSection';
import ResponsibleScaleSection from '@/app/corporate-governance/components/ResponsibleScaleSection';
import TimeResourceSection from './components/TimeResourceSection';
import LeafClockSection from './components/LeafClockSection';
import { pagesData, HeroContent } from '@/data/pagesData';
import { sustainableData, governingDigitalFrontierData } from '@/data/sustainableData';
import { coExistScale } from '@/data/responsibleScaleData';

export default function SustainabilityPage() {
  const heroData = (pagesData.sustainability as any)?.hero as HeroContent;
  
  return (
    <main>
      {heroData && (
        <InnerPageHero 
          title={heroData.title}
          description={heroData.description}
          imageSrc={heroData.imageSrc}
          imageAlt={heroData.imageAlt}
        />
      )}
      <LeafClockSection />
      <TimeResourceSection />
      <ResponsibleScaleSection data={coExistScale} />
    </main>
  );
}
