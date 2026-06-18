import InnerPageHero from '@/components/InnerPageHero/InnerPageHero';
import SynergyCompanies from '@/components/SynergyCompanies/SynergyCompanies';
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
