import React from 'react';
import Image from 'next/image';
import styles from './IntelligenceSection.module.css';

export default function IntelligenceSection() {
  return (
    <section className={`${styles.intelligenceSection} mt_80`}>
      <div className="container-1600">
        <div className={styles.circularWrapper}>
          <div className={styles.outerRing}></div>
          <div className={styles.innerRing}></div>

          {/* Center Content */}
          <div className={styles.centerContent}>
            <h2 className="title_60">Driven by<br/>Intelligence.</h2>
            <p>
              Safal Infosoft is more than a software provider; we are an interconnected holding matrix. Every line of code, every brand strategy, and every data model we build is designed to autonomously propel your enterprise forward.
            </p>
            <button className="btn-primary mt_40">Explore Our Divisions</button>
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
