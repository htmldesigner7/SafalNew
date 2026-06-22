import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import EngineerFutureSection from '@/app/life-at-safal/components/EngineerFutureSection/EngineerFutureSection';
import BrainTrustSection from '@/app/life-at-safal/components/BrainTrustSection/BrainTrustSection';
import EngineeringSection from '@/components/sections/EngineeringSection/EngineeringSection';
import IntelligenceSection from '@/components/sections/IntelligenceSection/IntelligenceSection';
import CultureSection from '@/components/sections/CultureSection/CultureSection';
import { pagesData } from '@/data/pagesData';
import { joinTeamData } from '@/data/engineeringData';
import { sandboxData } from '@/data/intelligenceData';
import { TalentData } from '@/data/cultureData';

export default function LifeAtSafalPage() {
  const heroData = pagesData.lifeAtSafal.hero;

  return (
    <main>
      <InnerPageHero 
        title={heroData.title}
        description={heroData.description}
        imageSrc={heroData.imageSrc}
        imageAlt={heroData.imageAlt}
      />
      <EngineerFutureSection />
      
      <BrainTrustSection />
      <EngineeringSection data={joinTeamData} />
      <IntelligenceSection data={sandboxData} />
      <CultureSection data={TalentData} />
    </main>
  );
}
