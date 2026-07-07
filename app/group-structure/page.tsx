import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import SynergyCompanies from './components/SynergyCompanies';
import { pagesData } from '@/data/pagesData';

export default function OurEntitiesPage() {
  const heroData = pagesData.ourEntities.hero;

  return (
    <main>
      <InnerPageHero
        title={heroData.title}
        description={heroData.description}
        imageSrc={heroData.imageSrc}
        imageAlt={heroData.imageAlt}
      />
      <SynergyCompanies />
    </main>
  );
}
