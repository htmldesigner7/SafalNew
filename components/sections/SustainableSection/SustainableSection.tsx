import React from 'react';
import Image from 'next/image';
import { sustainableData, SustainableContent } from '@/data/sustainableData';
import styles from './SustainableSection.module.css';

export default function SustainableSection({ data = sustainableData }: { data?: SustainableContent }) {
  return (
    <section className={`${styles.sustainableSection} mt_80`}>
      <div className="container-1600">
        <div className={styles.gridContainer}>
          {/* Left Content */}
          <div className={styles.leftCol}>
            <h2 className="title_60">{data.title}</h2>
            <div className={styles.description}>
              {data.description}
            </div>
            {data.listItems && data.listItems.length > 0 && (
              <ul className={styles.featureList}>
                {data.listItems.map((item, index) => (
                  <li key={index}>
                    <strong>{item.boldText}</strong> {item.text}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Image */}
          <div className={styles.rightCol}>
            <Image
              src={data.imageSrc}
              alt={data.imageAlt}
              width={700}
              height={500}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
