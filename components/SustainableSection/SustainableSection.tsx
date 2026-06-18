import React from 'react';
import Image from 'next/image';
import { sustainableData } from '@/data/sustainableData';
import styles from './SustainableSection.module.css';

export default function SustainableSection() {
  return (
    <section className={`${styles.sustainableSection} mt_80`}>
      <div className="container-1600">
        <div className={styles.gridContainer}>
          {/* Left Content */}
          <div className={styles.leftCol}>
            <h2 className="title_60">{sustainableData.title}</h2>
            <p className={styles.description}>
              {sustainableData.description}
            </p>
            <ul className={styles.featureList}>
              {sustainableData.listItems.map((item, index) => (
                <li key={index}>
                  <strong>{item.boldText}</strong> {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className={styles.rightCol}>
            <Image
              src={sustainableData.imageSrc}
              alt={sustainableData.imageAlt}
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
