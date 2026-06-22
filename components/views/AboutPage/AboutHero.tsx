import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import { pagesData } from '@/data/pagesData';

export default function AboutHero() {
  const { title, description, imageSrc, imageAlt } = pagesData.about.hero;

  return (
    <InnerPageHero
      title={title}
      description={description}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
    />
  );
}
