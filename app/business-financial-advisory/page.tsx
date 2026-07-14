import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import StructuredAdvisory from '@/components/sections/StructuredAdvisory/StructuredAdvisory';
import CultureSection from '@/components/sections/CultureSection/CultureSection';
import AdvancedAdvisory from '@/components/sections/AdvancedAdvisory/AdvancedAdvisory';
import SectorsSection from '@/app/components/SectorsSection/SectorsSection';
import EngineeringSection from '@/components/sections/EngineeringSection/EngineeringSection';
import SustainableSection from '@/components/sections/SustainableSection/SustainableSection';

import { advisoryCapabilitiesData } from '@/data/cultureData';
import { advisoryEcosystemsData } from '@/data/advisoryEcosystemsData';
import { AdvisoryAcrossDiverse } from '@/data/engineeringData';
import { StructuredIndependent } from '@/data/sustainableData';

import DataDrivenSection from './components/DataDrivenSection';
import ConsultExpertsCTA from './components/ConsultExpertsCTA';

export default function BusinessFinancialAdvisoryPage() {
  return (
    <main>
      <InnerPageHero 
        title={<>Strategic Advisory for<br />Sustainable Growth</>}
        description="Structured business and financial advisory services designed to support decision-making, regulatory compliance, and long-term value creation."
        imageSrc="/images/Business-&-Financial-Advisory/Business-&-Financial-Advisory.webp"
        imageAlt="3D Strategic Advisory"
      />

      <StructuredAdvisory />

      <CultureSection data={advisoryCapabilitiesData} />

      <AdvancedAdvisory />

      <SectorsSection data={advisoryEcosystemsData} />
      
      <DataDrivenSection />

      <EngineeringSection data={AdvisoryAcrossDiverse}/>

      <SustainableSection data={StructuredIndependent}/>

      <ConsultExpertsCTA />

    </main>
  );
}
