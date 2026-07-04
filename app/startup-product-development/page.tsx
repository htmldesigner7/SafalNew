import React from 'react';

import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import ImageCardsSection from '@/components/sections/ImageCardsSection/ImageCardsSection';
import FeatureCards from '@/components/sections/FeatureCards/FeatureCards';
import IntelligenceSection from '@/components/sections/IntelligenceSection/IntelligenceSection';
import BannerCTASection from '@/components/sections/BannerCTASection/BannerCTASection';
import SustainableSection from '@/components/sections/SustainableSection/SustainableSection';
import ProcessSection from '@/components/sections/ProcessSection/ProcessSection';
import { pagesData } from '@/data/pagesData';
import { endToEndProductData } from '@/data/endToEndProductData';
import { startupSupportData } from '@/data/processData';
import { flexibleEngagementData } from '@/data/featureCardsData';
import { whoWeWorkWithData } from '@/data/intelligenceData';
import { productsBuiltForScaleData } from '@/data/sustainableData';

import { startupProductDevBannerData } from '@/data/BannerCTASection';

import ProductDevelopmentSection from './components/ProductDevelopmentSection';
import DesignToDeploymentSection from './components/DesignToDeploymentSection';

export default function StartupProductDevelopmentPage() {
  const { hero } = pagesData.startupProductDevelopment;

  return (
    <main>
      <InnerPageHero
        title={hero.title}
        description={hero.description}
        imageSrc={hero.imageSrc}
        imageAlt={hero.imageAlt}
      />

      <ProductDevelopmentSection />

      <ImageCardsSection data={endToEndProductData} />

      <ProcessSection
        title="Startup Support Services"
        data={startupSupportData}
        mainColor="#60853A"
        accentColor="#D2DF70"
        activeBg="linear-gradient(90deg, #DBE9CB 0%, #FFFBEE 100%)"
        activeColor="#60853A"
      />

      <DesignToDeploymentSection />

      <FeatureCards data={flexibleEngagementData} />

      <IntelligenceSection data={whoWeWorkWithData} />

      <BannerCTASection data={startupProductDevBannerData} />
       <SustainableSection data={productsBuiltForScaleData} />
    </main>
  );
}
