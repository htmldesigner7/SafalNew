import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import { pagesData } from '@/data/pagesData';
import OneVision from './components/OneVision';

export default function ContactPage() {

  const heroData = pagesData.LeaderShipTeam.hero

  return (
    <main>
      <InnerPageHero
        title={heroData.title}
        description={heroData.description}
        imageSrc={heroData.imageSrc}
        imageAlt={heroData.imageAlt}
      />

      <OneVision/>
    </main>
  );
}
