import HeroSection from '@/app/components/HeroSection';
import DivisionsSection from '@/app/components/DivisionsSection';
import SolutionsSection from '@/app/components/SolutionsSection';
import SectorsSection from '@/app/components/SectorsSection';
import GlobalPresenceSection from '@/app/components/GlobalPresenceSection';
import EcosystemSection from '@/app/components/EcosystemSection';
import InvestorsSection from '@/app/components/InvestorsSection';
import SustainabilitySection from '@/app/components/SustainabilitySection';
import CTASection from '@/app/components/CTASection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Consulting Services Company | Digital Transformation Partner | Safal",
  description:
    "Safal is an IT consulting services company and digital transformation partner delivering technology consulting and enterprise solutions for modern businesses.",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SolutionsSection />
      <DivisionsSection />
      <EcosystemSection />
      <SustainabilitySection />
      <SectorsSection />  
      <GlobalPresenceSection />
      <InvestorsSection />
      <CTASection />
    </main>
  );
}
