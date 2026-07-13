import React from 'react';
import Image from 'next/image';
import styles from './BorderlessInnovationSection.module.css';

export default function BorderlessInnovationSection() {
  return (
    <section className={"mt_80"}>
      <div className={`container-1600 ${styles.container}`}>
        <h2 className="title_60">A Borderless Innovation Network</h2>
        <p className={styles.description}>
          Strategic scale requires global reach. Our partnership ecosystem spans across North America, the Middle East, and Asia. By aligning our deep-tech infrastructure with your domain expertise, we create a synchronized, borderless network capable of deploying enterprise-grade solutions anywhere in the world.
        </p>
        
        <div className={styles.imageContainer}>
          <Image 
            src="/images/global-presence.png" 
            alt="Global Network Map" 
            width={1200} 
            height={600} 
            className={styles.mapImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
