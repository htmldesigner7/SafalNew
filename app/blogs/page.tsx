import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import { pagesData } from '@/data/pagesData';
import BlogsSection from '@/components/sections/BlogsSection/BlogsSection';

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
