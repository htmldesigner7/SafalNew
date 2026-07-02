import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import { pagesData } from '@/data/pagesData';
import IndustrialSystemsSection from '@/components/sections/IndustrialSystemsSection/IndustrialSystemsSection';
import ProcessSection from '@/components/views/AboutPage/ProcessSection/ProcessSection';
import StructuredDeliverySection from '@/components/sections/StructuredDeliverySection/StructuredDeliverySection';
import IndustryApplicationsSection from '@/components/sections/IndustryApplicationsSection/IndustryApplicationsSection';
import TechnologyAlignedSection from '@/components/sections/TechnologyAlignedSection/TechnologyAlignedSection';
import EngineeringSection from '@/components/sections/EngineeringSection/EngineeringSection';
import PlatformAdvantagesSection from '@/components/sections/PlatformAdvantagesSection/PlatformAdvantagesSection';
import { engineeringCapabilitiesData } from '@/data/processData';
import { industrialEnvironmentsData } from '@/data/industryApplicationsData';
import { appliedImplementationsData } from '@/data/engineeringData';
import { structuredIndustrialExecutionData } from '@/data/platformAdvantagesData';

export default function IndustrialAutomationPage() {
  const heroData = pagesData.industrialAutomation.hero;

  return (
    <main>
      <InnerPageHero
        title={heroData.title}
        description={heroData.description}
        imageSrc={heroData.imageSrc}
        imageAlt={heroData.imageAlt}
      />
      <IndustrialSystemsSection />

      <ProcessSection
        title="Engineering-Led Automation Capabilities"
        data={engineeringCapabilitiesData}
        mainColor="#82A669"
        accentColor="#9DC183"
        activeBg="linear-gradient(90deg, #EBF3E6 0%, transparent 100%)"
        activeColor="#5C7A45"
      />

      <StructuredDeliverySection />

      <IndustryApplicationsSection data={industrialEnvironmentsData} />

      <TechnologyAlignedSection />

      <EngineeringSection data={appliedImplementationsData} />

      <section className="mt_80 mb_80">
        <div className="container-1600">
          <img
            src="/images/manufacturing.jpg"
            alt="Process Placeholder"
            style={{ width: '100%', height: 'auto', borderRadius: '16px', objectFit: 'cover', maxHeight: '600px' }}
          />
        </div>
      </section>
      <PlatformAdvantagesSection {...structuredIndustrialExecutionData} />

    </main>
  );
}
