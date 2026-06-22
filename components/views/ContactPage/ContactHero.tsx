import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import { pagesData } from '@/data/pagesData';

export default function ContactHero() {
  const { title, description, imageSrc, imageAlt } = pagesData.contact.hero;

  return (
    <InnerPageHero
      title={title}
      description={description}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
    />
  );
}
