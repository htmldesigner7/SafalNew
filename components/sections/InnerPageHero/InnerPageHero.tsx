import Image from 'next/image';
import styles from './InnerPageHero.module.css';
import { ReactNode } from 'react';

interface InnerPageHeroProps {
  title: ReactNode;
  description: ReactNode;
  imageSrc: string;
  imageAlt: string;
}

export default function InnerPageHero({ title, description, imageSrc, imageAlt }: InnerPageHeroProps) {
  return (
    <section className={`${styles.heroSection} mt_80`}>
      <div className={`${styles.contentContainer} container-1600`}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.description}>{description}</div>
        </div>

        <div className={styles.visualContent}>
          <div className={styles.graphicWrapper}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={600}
              className={styles.fullImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
