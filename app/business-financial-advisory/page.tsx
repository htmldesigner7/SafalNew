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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business and Financial Advisory Services | Safal Infosoft",
  description:
    "Safal Infosoft delivers business and financial advisory services covering valuation, tax planning, financial modelling, and transactions.",
};

export default function BusinessFinancialAdvisoryPage() {
  return (
    <main>
      <InnerPageHero 
        title={<>Strategic Advisory for<br />Sustainable Growth</>}
        description="Structured business and financial advisory services designed to support decision-making, regulatory compliance, and long-term value creation."
        imageSrc="/safal/images/Business-&-Financial-Advisory/Business-&-Financial-Advisory.webp"
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
