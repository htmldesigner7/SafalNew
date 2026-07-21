import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import UnifiedFrameworkSection from '@/components/sections/UnifiedFrameworkSection/UnifiedFrameworkSection';
import ImplementationCaseStudiesSection from '@/components/sections/ImplementationCaseStudiesSection/ImplementationCaseStudiesSection';
import EnterprisePlatformsSection from '@/components/sections/EnterprisePlatformsSection/EnterprisePlatformsSection';
import ProcessSection from '@/components/sections/ProcessSection/ProcessSection';
import PlatformCapabilitiesSection from '@/components/sections/PlatformCapabilitiesSection/PlatformCapabilitiesSection';
import IndustryApplicationsSection from '@/components/sections/IndustryApplicationsSection/IndustryApplicationsSection';
import PlatformAdvantagesSection from '@/components/sections/PlatformAdvantagesSection/PlatformAdvantagesSection';
import { pagesData } from '@/data/pagesData';
import { specializedSystemsData } from '@/data/processData';
import { industryApplicationsData } from '@/data/industryApplicationsData';
import { enterprisePlatformAdvantagesData } from '@/data/platformAdvantagesData';
import RequestDemoSection from '@/components/sections/RequestDemoSection/RequestDemoSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Software Development Company | Safal",
  description:
    "Build scalable enterprise platforms with Safal Infosoft. We provide enterprise product development services, ERP software, and custom software solutions.",
};

export default function EnterpriseProductsPage() {
  const { hero } = pagesData.enterpriseProducts;

  return (
    <main>
      <InnerPageHero
        title={hero.title}
        description={hero.description}
        imageSrc={hero.imageSrc}
        imageAlt={hero.imageAlt}
      />

      <UnifiedFrameworkSection />

      <EnterprisePlatformsSection />





      <ProcessSection
        title="Specialized Business Systems"
        data={specializedSystemsData}
      />





      <PlatformCapabilitiesSection />

      <IndustryApplicationsSection data={industryApplicationsData} />

      <PlatformAdvantagesSection
        title={enterprisePlatformAdvantagesData.title}
        centerText={enterprisePlatformAdvantagesData.centerText}
        advantages={enterprisePlatformAdvantagesData.advantages}
        description={enterprisePlatformAdvantagesData.description}
      />

      <RequestDemoSection />
      <ImplementationCaseStudiesSection />
    </main>
  );
}
