'use client';
import { useState } from 'react';
import Image from 'next/image';
import { SectorsContent, defaultSectorsData } from '@/data/sectorsData';
import styles from './SectorsSection.module.css';

interface SectorsSectionProps {
  data?: SectorsContent;
}

export default function SectorsSection({ data = defaultSectorsData }: SectorsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <h2 className="title_60 text-center">{data.title}</h2>
        {data.subtitle && (
          <p className="text-center mt_20 mb_40" style={{ maxWidth: '800px', margin: '20px auto 40px auto', color: '#666' }}>
            {data.subtitle}
          </p>
        )}

        <div className={styles.cardsContainer}>
          {data.cards.map((sector, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={sector.id}
                className={`${styles.card} ${isActive ? styles.active : styles.inactive}`}
                onClick={() => setActiveIndex(index)}
              >
                {/* Active Content */}
                <div className={`${styles.activeContent} ${isActive ? styles.show : styles.hide}`}>
                  <div className={styles.activeHeader}>
                    <span className={styles.activeNumber}>{sector.id}.</span>
                    <h3 className={`${styles.activeTitle} title_40`}>{sector.title}</h3>
                  </div>
                  <div className={styles.activeImageWrapper}>
                    {/* Placeholder for actual image */}
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      className={styles.activeImage}
                    />
                  </div>
                  <p>{sector.description}</p>
                </div>

                {/* Inactive Content */}
                <div className={`${styles.inactiveContent} ${!isActive ? styles.show : styles.hide}`}>
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className={styles.inactiveBgImage}
                  />
                  <div className={styles.overlay}></div>
                  <div className={styles.inactiveTextWrapper}>
                    <span className={styles.inactiveNumber}>{sector.id}.</span>
                    <h3 className={styles.inactiveTitle}>{sector.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
