import AboutHero from './components/AboutHero';
import AboutSection from './components/AboutSection';
import AboutCulture from './components/AboutCulture';
import ProcessSection from '@/components/sections/ProcessSection/ProcessSection';
import AboutIntelligence from '@/components/sections/IntelligenceSection/IntelligenceSection';
import EngineeringSection from '@/components/sections/EngineeringSection/EngineeringSection';
import SustainableSection from '@/components/sections/SustainableSection/SustainableSection';
import ArchitectureSection from '@/components/sections/ArchitectureSection/ArchitectureSection';
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
