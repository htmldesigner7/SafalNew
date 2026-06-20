import React from 'react';
import Image from 'next/image';
import { IntelligenceData, aboutIntelligenceData } from '@/data/intelligenceData';
import styles from './IntelligenceSection.module.css';

interface IntelligenceSectionProps {
  data?: IntelligenceData;
}

export default function IntelligenceSection({ data = aboutIntelligenceData }: IntelligenceSectionProps) {
  return (
    <section className={`${styles.intelligenceSection} mt_80`}>
      <div className="container-1600">
        <div className={styles.circularWrapper}>
          <div className={styles.outerRing}></div>
          <div className={styles.innerRing}></div>

          {/* Center Content */}
          <div className={styles.centerContent}>
            <h2 className="title_60">{data.title}</h2>
            <p>{data.description}</p>
            <button className="btn-primary mt_40">{data.buttonText}</button>
          </div>

          {/* Floating Icons */}
          <div className={`${styles.icon} ${styles.iconCube}`}>
            <Image src="/images/DI_StarCube.png" alt="Cube" width={150} height={150} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className={`${styles.icon} ${styles.iconCompass}`}>
            <Image src="/images/DI_Compaas.png" alt="Compass" width={180} height={180} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className={`${styles.icon} ${styles.iconNetwork}`}>
            <Image src="/images/DI_Orbit.png" alt="Network" width={160} height={160} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className={`${styles.icon} ${styles.iconRocket}`}>
            <Image src="/images/DI_Rocket.png" alt="Rocket" width={120} height={120} style={{ width: '100%', height: 'auto' }} />
          </div>

        </div>
      </div>
    </section>
  );
}
