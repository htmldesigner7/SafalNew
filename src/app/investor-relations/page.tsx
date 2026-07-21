import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import MultiplierSection from './components/MultiplierSection';
import CultureSection from '@/components/sections/CultureSection/CultureSection';
import { pagesData } from '@/data/pagesData';
import { architectureValueData } from '@/data/cultureData';
import IntelligenceSection from '@/components/sections/IntelligenceSection/IntelligenceSection';
import { EconomicData } from '@/data/intelligenceData';
import EngineeringSection from '@/components/sections/EngineeringSection/EngineeringSection';
import { financialReportData } from '@/data/engineeringData';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Relations | Safal Infosoft",
  description:
    "Explore Safal Infosoft's investor relations, corporate governance, financial updates, business performance, and strategic growth initiatives.",
};

export default function InvestorRelationsPage() {
  const heroData = pagesData.investorRelations.hero;

  return (
    <main>
      <InnerPageHero
        title={heroData.title}
        description={heroData.description}
        imageSrc={heroData.imageSrc}
        imageAlt={heroData.imageAlt}
      />
      <MultiplierSection />
      <CultureSection data={architectureValueData} />
      <MultiplierSection
        title="Expanding Global Market Share"
        description1="Our operational ecosystem is positioned across high-growth global markets, enabling us to capture demand across multiple sectors simultaneously."
        description2="By leveraging cross-functional synergies between our divisions, we unlock scalable revenue channels, strengthen client retention, and build long-term enterprise relationships.c"
        description3="This integrated approach allows us to expand efficiently while maintaining operational control and financial discipline."
         imageSrc={`/images/Investor-Relations/code-3.webp`}
        imageAlt="Expanding Global Market Share Graphic"
      />

      <IntelligenceSection data={EconomicData} />
      <EngineeringSection data={financialReportData} />
    </main>
  );
}
