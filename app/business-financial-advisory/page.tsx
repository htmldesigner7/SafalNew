import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import StructuredAdvisory from './components/StructuredAdvisory/StructuredAdvisory';
import CultureSection from '@/components/sections/CultureSection/CultureSection';
import AdvancedAdvisory from './components/AdvancedAdvisory/AdvancedAdvisory';
import SectorsSection from '@/app/components/SectorsSection/SectorsSection';

import { advisoryCapabilitiesData } from '@/data/cultureData';
import { advisoryEcosystemsData } from '@/data/advisoryEcosystemsData';
import { EngineeringSection, SustainableSection } from '@/components/views/AboutPage';
import { AdvisoryAcrossDiverse } from '@/data/engineeringData';
import { StructuredIndependent } from '@/data/sustainableData';

export default function BusinessFinancialAdvisoryPage() {

  return (
    <main>
      <InnerPageHero 
        title={<>Strategic Advisory for<br />Sustainable Growth</>}
        description="Structured business and financial advisory services designed to support decision-making, regulatory compliance, and long-term value creation."
        imageSrc="/images/hero_3d_book.png"
        imageAlt="3D Strategic Advisory"
      />

      <StructuredAdvisory />

      <CultureSection data={advisoryCapabilitiesData} />

      <AdvancedAdvisory />

      <SectorsSection data={advisoryEcosystemsData} />

      <EngineeringSection data={AdvisoryAcrossDiverse}/>

      <SustainableSection data={StructuredIndependent}/>

    </main>
  );
}
