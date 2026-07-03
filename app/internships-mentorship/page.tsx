import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import { pagesData } from '@/data/pagesData';
import { blueprintData } from '@/data/engineeringData';
import GlobalClassroomSection from './components/GlobalClassroomSection';
import EngineeringSection from '@/components/sections/EngineeringSection/EngineeringSection';
import SustainableSection from '@/components/sections/SustainableSection/SustainableSection';
import { internshipsMentorshipData } from '@/data/sustainableData';
import CultureSection from '@/components/sections/CultureSection/CultureSection';
import { MaterialtData } from '@/data/cultureData';
import CodeRealImpact from './components/CodeRealImpact';
import ApplyNowSection from './components/ApplyNowSection';

export default function InternshipsMentorshipPage() {
  const heroData = pagesData.internshipsMentorship.hero;

  return (
    <main>
      <InnerPageHero
        title={heroData.title}
        description={heroData.description}
        imageSrc={heroData.imageSrc}
        imageAlt={heroData.imageAlt}
      />
      <GlobalClassroomSection />
      <EngineeringSection data={blueprintData} />
      <SustainableSection data={internshipsMentorshipData} />
      <CodeRealImpact/>
      <CultureSection data={MaterialtData}/>
      <ApplyNowSection />
    </main>
  );
}
