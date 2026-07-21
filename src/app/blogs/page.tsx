import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import { pagesData } from '@/data/pagesData';
import BlogsSection from '@/components/sections/BlogsSection/BlogsSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safal Infosoft Blogs | Tech & Digital Insights",
  description:
    "Read expert blogs on software development, digital marketing, enterprise solutions, product development, and emerging technologies.",
};

export default function BlogsPage() {
  const heroData = pagesData.blogs.hero;

  return (
    <main>
      <InnerPageHero
        title={heroData.title}
        description={heroData.description}
        imageSrc={heroData.imageSrc}
        imageAlt={heroData.imageAlt}
      />
      <BlogsSection />
    </main>
  );
}
