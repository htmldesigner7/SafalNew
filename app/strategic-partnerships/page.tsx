import React from 'react';
import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import BorderlessInnovationSection from './components/BorderlessInnovationSection';
import EngineeringSection from '@/components/sections/EngineeringSection/EngineeringSection';
import { CollaborativeEcosystemsData2 } from '@/data/engineeringData';
import { TheSafalPartnershipMatrixData } from '@/data/intelligenceData';
import IntelligenceSection from '@/components/sections/IntelligenceSection/IntelligenceSection';
import CultureSection from '@/components/sections/CultureSection/CultureSection';
import { strategicAllyData } from '@/data/cultureData';
import ResponsibleScaleSection from '../corporate-governance/components/ResponsibleScaleSection';
import { ArchitectFutureTogether } from '@/data/responsibleScaleData';

export const metadata = {
  title: 'Strategic Partnerships - Safal Infosoft Limited',
  description: 'At the Safal Group, we don\'t just sign vendor agreements: we forge strategic alliances.',
};

export default function StrategicPartnershipsPage() {
  return (
    <main>
      <InnerPageHero
        title={
          <>
            Force Multipliers for Global<br />
            Scale
          </>
        }
        description="At the Safal Group, we don't just sign vendor agreements: we forge strategic alliances. Partner with a tier-one matrix of engineers, designers, and venture architects to co-create enterprise solutions, unlock new international markets, and drive compounding mutual growth."
        imageSrc="/images/Strategic-Partnerships/Strategic-Partnerships.webp"
        imageAlt="Strategic Partnerships Interlocking Rings"
      />

      <BorderlessInnovationSection />

      <EngineeringSection data={CollaborativeEcosystemsData2} />

      <IntelligenceSection data={TheSafalPartnershipMatrixData} />

      <CultureSection data={strategicAllyData} hideImages={false} />
    
     <ResponsibleScaleSection data={ArchitectFutureTogether} />
    </main>
  );
}
