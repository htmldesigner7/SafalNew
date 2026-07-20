import AboutHero from './components/AboutHero';
import AboutSection from './components/AboutSection';
import AboutCulture from './components/AboutCulture';
import ProcessSection from '@/components/sections/ProcessSection/ProcessSection';
import AboutIntelligence from '@/components/sections/IntelligenceSection/IntelligenceSection';
import EngineeringSection from '@/components/sections/EngineeringSection/EngineeringSection';
import SustainableSection from '@/components/sections/SustainableSection/SustainableSection';
import ArchitectureSection from '@/components/sections/ArchitectureSection/ArchitectureSection';
import { aboutProcessData } from '@/data/processData';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Safal Infosoft | Our Story, Mission & Vision",
  description:
    "Explore Safal Infosoft's journey, mission, and vision. We empower startups and enterprises through innovative software development and digital solutions.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutSection />
      <AboutCulture />
      <ProcessSection 
      title="The Value-Creation Architecture." 
      description= "Growth is engineered through structured execution, not chance."
      data={aboutProcessData} />
      <AboutIntelligence />
      <EngineeringSection />
      <SustainableSection />
      <ArchitectureSection />
    </main>
  );
}
