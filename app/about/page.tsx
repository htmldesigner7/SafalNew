import {
  AboutHero,
  AboutSection,
  AboutCulture,
  ProcessSection,
  AboutIntelligence,
  EngineeringSection,
  SustainableSection,
  ArchitectureSection
} from '@/components/views/AboutPage';
import { aboutProcessData } from '@/data/processData';

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutSection />
      <AboutCulture />
      <ProcessSection title="The Value-Creation Architecture." data={aboutProcessData} />
      <AboutIntelligence />
      <EngineeringSection />
      <SustainableSection />
      <ArchitectureSection />
    </main>
  );
}
