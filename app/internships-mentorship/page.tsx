import InnerPageHero from '@/components/InnerPageHero/InnerPageHero';
import { pagesData } from '@/data/pagesData';
import { blueprintData } from '@/data/engineeringData';
import GlobalClassroomSection from '@/components/GlobalClassroomSection/GlobalClassroomSection';
import EngineeringSection from '@/components/EngineeringSection/EngineeringSection';
import { SustainableSection } from '@/components/AboutPage';
import { internshipsMentorshipData } from '@/data/sustainableData';

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
    </main>
  );
}
