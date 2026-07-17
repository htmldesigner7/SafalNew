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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Partnerships | Safal Infosoft",
  description:
    "Safal Infosoft builds strategic partnerships to deliver enterprise software, digital transformation, and advanced technology solutions.",
};

export default function StrategicPartnershipsPage() {
  return (
    <main>
      <InnerPageHero
        title={
          <>
            Force Multipliers for Global Scale
          </>
        }
        description=<>At the Safal Group, partnerships are not transactional, they are strategic accelerators. <br />We collaborate with elite engineers, operators, and visionaries to co-create enterprise solutions, unlock new markets, and drive sustained, compounding growth.
        </>
        imageSrc="/safal/images/Strategic-Partnerships/Strategic-Partnerships.webp"
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
