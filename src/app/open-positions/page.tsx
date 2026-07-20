import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import OpenPositionsSection from '@/components/sections/OpenPositionsSection/OpenPositionsSection';
import { pagesData } from '@/data/pagesData';

export default function OpenPositionsPage() {
  const heroData = pagesData.openpositions?.hero;
  return (
    <main>
      <InnerPageHero  title={heroData.title}
          description={heroData.description}
          imageSrc={heroData.imageSrc}
          imageAlt={heroData.imageAlt}/>
      <OpenPositionsSection />
    </main>
  );
}
