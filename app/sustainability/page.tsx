import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import ResponsibleScaleSection from '@/app/corporate-governance/components/ResponsibleScaleSection';
import TimeResourceSection from './components/TimeResourceSection';
import LeafClockSection from './components/LeafClockSection';
import { pagesData } from '@/data/pagesData';
import { coExistScale } from '@/data/responsibleScaleData';
import EverylineSection from './components/EverylineSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Sustainability Commitment | Safal Infosoft",
  description:
    "Learn about Safal Infosoft's sustainability vision, environmental responsibility, and commitment to building a better future through innovation.",
};

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
