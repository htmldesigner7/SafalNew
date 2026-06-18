import {
  AboutHero,
  AboutSection,
  AboutCulture,
  ProcessSection,
  AboutIntelligence,
  EngineeringSection,
  SustainableSection,
  ArchitectureSection
} from '@/components/AboutPage';

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutSection />
      <AboutCulture />
      <ProcessSection />
      <AboutIntelligence />
      <EngineeringSection />
      <SustainableSection />
      <ArchitectureSection />
    </main>
  );
}
