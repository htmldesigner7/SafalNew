import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import EngineerFutureSection from './components/EngineerFutureSection';
import BrainTrustSection from './components/BrainTrustSection';
import EngineeringSection from '@/components/sections/EngineeringSection/EngineeringSection';
import IntelligenceSection from '@/components/sections/IntelligenceSection/IntelligenceSection';
import CultureSection from '@/components/sections/CultureSection/CultureSection';
import { pagesData } from '@/data/pagesData';
import { joinTeamData } from '@/data/engineeringData';
import { sandboxData } from '@/data/intelligenceData';
import { TalentData } from '@/data/cultureData';
import BeyondDesksection from './components/BeyondDesksection';

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
      
      <BrainTrustSection />
      <EngineeringSection data={joinTeamData} />
      <EngineerFutureSection />
      <IntelligenceSection data={sandboxData} />
      <BeyondDesksection/>
      <CultureSection data={TalentData} />
    </main>
  );
}
