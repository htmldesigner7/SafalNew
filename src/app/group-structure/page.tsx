import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import SynergyCompanies from './components/SynergyCompanies';
import { pagesData } from '@/data/pagesData';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Group Structure | Safal Infosoft",
  description:
    "Explore Safal Infosoft's group structure and discover how our business divisions collaborate to deliver innovative technology and digital solutions.",
};

export default function OurEntitiesPage() {
  const heroData = pagesData.ourEntities.hero;

  return (
    <main>
      <InnerPageHero
        title={heroData.title}
        description={heroData.description}
        imageSrc={heroData.imageSrc}
        imageAlt={heroData.imageAlt}
      />
      <SynergyCompanies />
    </main>
  );
}
