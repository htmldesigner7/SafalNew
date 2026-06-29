import React from 'react';
import Image from 'next/image';
import styles from './ImageCardsSection.module.css';

export interface ImageCardItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

export interface ImageCardsData {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  cards: ImageCardItem[];
}

interface ImageCardsSectionProps {
  data: ImageCardsData;
}

export default function ImageCardsSection({ data }: ImageCardsSectionProps) {
  const gridClass = data.cards.length % 4 === 0 && data.cards.length !== 0 
    ? styles.cardsGrid4 
    : styles.cardsGrid3;

  return (
    <section className="mt_80">
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
                  fill
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className="title_24">{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
