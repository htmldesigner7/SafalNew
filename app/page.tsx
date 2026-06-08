import HeroSection from '@/components/HeroSection';
import DivisionsSection from '@/components/DivisionsSection';
import SolutionsSection from '@/components/SolutionsSection';
import SectorsSection from '@/components/SectorsSection';
import GlobalPresenceSection from '@/components/GlobalPresenceSection';
import EcosystemSection from '@/components/EcosystemSection';
import InvestorsSection from '@/components/InvestorsSection';
import SustainabilitySection from '@/components/SustainabilitySection';
import CTASection from '@/components/CTASection';

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
