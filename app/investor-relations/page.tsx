import InnerPageHero from '@/components/InnerPageHero/InnerPageHero';
import MultiplierSection from '@/components/MultiplierSection';
import CultureSection from '@/components/CultureSection/CultureSection';
import DedicationSection from '@/components/DedicationSection';
import VisionMissionSection from '@/components/VisionMissionSection';
import { pagesData } from '@/data/pagesData';
import { investorCultureData } from '@/data/cultureData';
import { SustainableSection } from '@/components/AboutPage';
import { SingularData } from '@/data/sustainableData';

export default function InvestorRelationsPage() {
  const heroData = pagesData.investorRelations.hero;

  return (
    <main>
      <InnerPageHero
        title={heroData.title}
        description={heroData.description}
        imageSrc={heroData.imageSrc}
        imageAlt={heroData.imageAlt}
      />
      <MultiplierSection />
      <CultureSection data={investorCultureData} />
      <DedicationSection />
      <SustainableSection data={SingularData} />
      <VisionMissionSection />
    </main>
  );
}
