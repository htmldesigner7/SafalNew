import HeroSection from '@/app/components/HeroSection';
import DivisionsSection from '@/app/components/DivisionsSection';
import SolutionsSection from '@/app/components/SolutionsSection';
import SectorsSection from '@/app/components/SectorsSection';
import GlobalPresenceSection from '@/app/components/GlobalPresenceSection';
import EcosystemSection from '@/app/components/EcosystemSection';
import InvestorsSection from '@/app/components/InvestorsSection';
import SustainabilitySection from '@/app/components/SustainabilitySection';
import CTASection from '@/app/components/CTASection';

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
