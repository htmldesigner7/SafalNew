import React from 'react';
import Image from 'next/image';
import styles from './IndustryApplicationsSection.module.css';
import { SectorsContent } from '@/data/sectorsData';

interface IndustryApplicationsSectionProps {
  data: SectorsContent;
}

export default function IndustryApplicationsSection({ data }: IndustryApplicationsSectionProps) {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <div className="header_sec">
          <h2 className="title_60">{data.title}</h2>
          {data.subtitle && <p className="mt_20 mb_40">{data.subtitle}</p>}
        </div>

        <div className={styles.cardsGrid}>
          {data.cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className="title_24">{card.title}</h3>
                <div className={styles.descriptionWrapper}>
                  {card.description && <p>{card.description}</p>}
                </div>
                <span className={styles.watermarkNumber}>{card.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
