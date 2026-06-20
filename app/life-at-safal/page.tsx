import InnerPageHero from '@/components/InnerPageHero/InnerPageHero';
import EngineerFutureSection from '@/components/EngineerFutureSection/EngineerFutureSection';
import BrainTrustSection from '@/components/BrainTrustSection/BrainTrustSection';
import EngineeringSection from '@/components/EngineeringSection/EngineeringSection';
import IntelligenceSection from '@/components/IntelligenceSection/IntelligenceSection';
import CultureSection from '@/components/CultureSection/CultureSection';
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
