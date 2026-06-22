import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import MultiplierSection from './components/MultiplierSection/MultiplierSection';
import CultureSection from '@/components/sections/CultureSection/CultureSection';
import { pagesData } from '@/data/pagesData';
import { architectureValueData } from '@/data/cultureData';
import IntelligenceSection from '@/components/sections/IntelligenceSection/IntelligenceSection';
import { EconomicData } from '@/data/intelligenceData';
import EngineeringSection from '@/components/sections/EngineeringSection/EngineeringSection';
import { financialReportData } from '@/data/engineeringData';

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
        title="Expanding Global Market Share."
        description1="Our operational matrix is strategically positioned to capture market share across three of the highest-growth sectors in the global economy. This interconnected ecosystem drives cross-sell opportunities, exceptional client retention, and robust recurring revenue models."
        description2="Lorem ipsum dolor sit amet consectetur. Tellus euismod cursus sodales dignissim tortor nullam. Enim dui vel lorem risus pellentesque egestas faucibus sed. Dictum proin urna imperdiet faucibus at euismod eu magna. Mi tellus hac orci sed etiam phasellus. Tortor vivamus in enim donec"
        description3="Lorem ipsum dolor sit amet consectetur. Tellus euismod cursus sodales dignissim tortor nullam. Enim dui vel lorem risus pellentesque egestas faucibus sed. Dictum proin urna imperdiet faucibus at euismod eu magna. Mi tellus hac orci sed etiam phasellus. Tortor vivamus in enim donec. Lorem ipsum dolor sit amet consectetur. Tellus euismod cursus sodales dignissim tortor nullam. Enim dui vel lorem risus pellentesque egestas faucibus sed. Dictum proin urna imperdiet faucibus at euismod eu magna. Mi tellus hac orci sed etiam phasellus. Tortor vivamus in enim donec"
        imageAlt="Expanding Global Market Share Graphic"
      />

      <IntelligenceSection data={EconomicData}/>
      <EngineeringSection data={financialReportData} />
    </main>
  );
}
