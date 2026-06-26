import React from 'react';
import styles from './ArchitectureSection.module.css';
import { architectureData, ArchitectureContent } from '@/data/architectureData';

interface ArchitectureSectionProps {
  data?: ArchitectureContent;
}

export default function ArchitectureSection({ data = architectureData }: ArchitectureSectionProps) {
  return (
    <section className={`${styles.architectureSection} mt_80`}>
      <div className="container-1600">
        <div className={styles.header}>
          <h2 className="title_60 text-center">{data.title}</h2>
          <p className={styles.subtitle}>{data.subtitle}</p>
        </div>

        <div className={styles.cardsGrid}>
          {data.cards.map((card) => (
            <div key={card.id} className={`${styles.card} ${card.isActive ? styles.activeCard : ''}`}>
              <div className={styles.cardContent}>
                <div className={styles.phaseLabel}>
                  <span className={styles.phaseNumber}>{card.number}.</span> {card.phase}
                </div>
                <h3 className="title_24">{card.title}</h3>
                <p className={styles.description}>{card.description}</p>
              </div>
              
              {/* Arc Graphic at bottom */}
              <div className={styles.arcContainer}>
                <div className={styles.arcLine}></div>
                <div className={styles.arcCircle}>{card.number}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
