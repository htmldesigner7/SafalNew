import React from 'react';
import Image from 'next/image';
import styles from './BorderlessInnovationSection.module.css';

export default function BorderlessInnovationSection() {
  return (
    <section className={"mt_80"}>
      <div className={`container-1600 ${styles.container}`}>
        <h2 className="title_60">A Borderless Innovation Network</h2>
        <p className={styles.description}>
          Scale today demands global alignment. <br /><br />Our partnership ecosystem spans North America, the Middle East, and Asia, enabling seamless collaboration across markets, technologies, and industries. By integrating our deep-tech infrastructure with your domain expertise, we create a unified execution layer capable of delivering enterprise-grade solutions anywhere in the world.
        </p>
         
        <div className={styles.imageContainer}>
          <Image 
            src="/images/Strategic-Partnerships/Strategic-Partnerships/A-Borderless-Innovation-Network.webp" 
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
