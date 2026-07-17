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
        title={<>Force Multipliers for Global Scale</>}
        description=<>
        <p>At Safal, partnerships are engineered, not transactional.<br/>We collaborate with technology leaders, domain experts, and execution specialists to co-create enterprise solutions, unlock new markets, and drive sustained, compounding growth.</p>
        </>
        imageSrc="/safal/images/Become-a-Partner/Become-a-Partner.webp"
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
