import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import ResponsibleScaleSection from '@/app/corporate-governance/components/ResponsibleScaleSection';
import TimeResourceSection from './components/TimeResourceSection';
import LeafClockSection from './components/LeafClockSection';
import { pagesData } from '@/data/pagesData';
import { coExistScale } from '@/data/responsibleScaleData';
import EverylineSection from './components/EverylineSection';

export default function SustainabilityPage() {
  const heroData = pagesData.sustainability?.hero;
  
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

      <EverylineSection/>
       <TimeResourceSection />
      <LeafClockSection />
     
      <ResponsibleScaleSection data={coExistScale} />
    </main>
  );
}
