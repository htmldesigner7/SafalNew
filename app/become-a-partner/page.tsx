import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import BorderlessNetworkSection from '@/components/sections/BorderlessNetworkSection/BorderlessNetworkSection';
import BecomePartnerForm from '@/components/sections/BecomePartnerForm/BecomePartnerForm';
import EngineeringSection from '@/components/sections/EngineeringSection/EngineeringSection';
import { collaborativeEcosystemsData } from '@/data/engineeringData';
import IntelligenceSection from '@/components/sections/IntelligenceSection/IntelligenceSection';
import { partnershipMatrixData } from '@/data/intelligenceData';
import ArchitectureSection from '@/components/sections/ArchitectureSection/ArchitectureSection';
import { alignmentBlueprintData } from '@/data/architectureData';

export default function BecomeAPartnerPage() {
  return (
    <main>
      <InnerPageHero
        title={<>Become A <br /> <span>Partner</span></>}
        description="Join our ecosystem of strategic, technology, and channel partners to deliver exceptional value to clients worldwide."
        imageSrc="/images/partner.webp"
        imageAlt="Become a Partner"
      />
      <BorderlessNetworkSection />

      <EngineeringSection data={collaborativeEcosystemsData} />

      <IntelligenceSection data={partnershipMatrixData} />

      <ArchitectureSection data={alignmentBlueprintData} />

      <BecomePartnerForm />

    </main>
  );
}
