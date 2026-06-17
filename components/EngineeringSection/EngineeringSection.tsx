import React from 'react';
import Image from 'next/image';
import { engineeringData } from '@/data/engineeringData';
import styles from './EngineeringSection.module.css';

export default function EngineeringSection() {
  return (
    <section className={`${styles.engineeringSection} mt_80`}>
      <div className="container-1600">
        <h2 className="title_60 text-center">{engineeringData.title}</h2>
        <div className={styles.cardsGrid}>
          {engineeringData.cards.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardSubtitle}>
                <span className={styles.cardNumber}>{item.number}</span> {item.subtitle}
              </div>
              <div className={styles.imageContainer}>
                <Image src={item.imageSrc} alt={item.title} width={180} height={180} style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '180px' }} />
              </div>
              <div className={styles.cardBottom}>
                <h3 className="title_24">{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
