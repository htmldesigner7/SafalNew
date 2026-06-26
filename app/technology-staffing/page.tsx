import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import TechnologyTalent from './components/TechnologyTalent';
import { pagesData } from '@/data/pagesData';
import CultureSection from '@/components/sections/CultureSection/CultureSection';
import { ValueCreationArchitecture } from '@/data/cultureData';
import FeatureCards from '@/components/sections/FeatureCards/FeatureCards';
import { techTalentFeatures } from '@/data/featureCardsData';
import TechnologyStacksSection from '@/components/sections/TechnologyStacksSection/TechnologyStacksSection';

import ArchitectureSection from '@/components/views/AboutPage/ArchitectureSection/ArchitectureSection';
import { talentAcquisitionData } from '@/data/architectureData';
import IndustryApplicationsSection from '@/components/sections/IndustryApplicationsSection/IndustryApplicationsSection';
import { industryApplicationsData } from '@/data/industryApplicationsData';
import SpeedQualitySection from '@/components/sections/SpeedQualitySection/SpeedQualitySection';

export default function TechnologyStaffingPage() {
  const { hero } = pagesData.technologyStaffing;

  return (
    <main>
      <InnerPageHero
        title={hero.title}
        description={hero.description}
        imageSrc={hero.imageSrc}
        imageAlt={hero.imageAlt}
      />

      <TechnologyTalent />
      <CultureSection data={ValueCreationArchitecture} />

      <FeatureCards data={techTalentFeatures} />
      <TechnologyStacksSection />
      <ArchitectureSection data={talentAcquisitionData} />
      <IndustryApplicationsSection data={industryApplicationsData} />
      <SpeedQualitySection />
    </main>
  );
}
