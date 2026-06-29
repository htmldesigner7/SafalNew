import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import UnifiedFrameworkSection from '@/components/sections/UnifiedFrameworkSection/UnifiedFrameworkSection';
import EnterprisePlatformsSection from '@/components/sections/EnterprisePlatformsSection/EnterprisePlatformsSection';
import ProcessSection from '@/components/views/AboutPage/ProcessSection/ProcessSection';
import PlatformCapabilitiesSection from '@/components/sections/PlatformCapabilitiesSection/PlatformCapabilitiesSection';
import { pagesData } from '@/data/pagesData';
import { specializedSystemsData } from '@/data/processData';

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

      <PlatformCapabilitiesSection />

      <ProcessSection
        title="Specialized Business Systems"
        data={specializedSystemsData}
      />
    </main>
  );
}
