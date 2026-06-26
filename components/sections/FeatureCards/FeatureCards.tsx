import React from 'react';
import Image from 'next/image';
import styles from './FeatureCards.module.css';

export interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

export interface FeatureCardsData {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  cards: FeatureCardItem[];
}

interface FeatureCardsProps {
  data: FeatureCardsData;
}

export default function FeatureCards({ data }: FeatureCardsProps) {
  // Use a 4-column grid if the number of cards is a multiple of 4, otherwise default to a 3-column grid
  const gridClass = data.cards.length % 4 === 0 && data.cards.length !== 0 
    ? styles.cardsGrid4 
    : styles.cardsGrid3;

  return (
    <section className={`${styles.featureCardsSection} mt_80`}>
      <div className="container-1600">
        <div className={styles.header}>
          <h2 className="title_60">{data.title}</h2>
          {data.subtitle && <p>{data.subtitle}</p>}
        </div>

        <div className={`${styles.cardsGrid} ${gridClass}`}>
          {data.cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt || card.title}
                  width={120}
                  height={120}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className="title_24">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
