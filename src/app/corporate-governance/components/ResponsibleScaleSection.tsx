import Image from 'next/image';
import styles from './ResponsibleScaleSection.module.css';
import { ReactNode } from 'react';

export interface ResponsibleScaleData {
  title: ReactNode;
  description: ReactNode;
  imageSrc: string;
  imageAlt: string;
}

export default function ResponsibleScaleSection({ data }: { data?: ResponsibleScaleData }) {
  if (!data) return null;
  
  return (
    <section className={`${styles.section} mt_80`}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image 
            src={data.imageSrc} 
            alt={data.imageAlt} 
            fill
            className={styles.image}
            priority
          />
        </div>
      </div>
      <div className={`container-1600 ${styles.textContainer}`}>
        <h2 className={`title_60 ${styles.title}`}>{data.title}</h2>
        <p className={styles.description}>
          {data.description}
        </p>
      </div>
    </section>
  );
}
