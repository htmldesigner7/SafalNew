import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import { pagesData } from '@/data/pagesData';

export default function ContactHero() {
  const { title, description, imageSrc, imageAlt } = pagesData.contact.hero;

  console.log("text" + pagesData.contact.hero.imageSrc)

  return (
    <InnerPageHero
      title={title}
      description={description}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
    />
  );
}
