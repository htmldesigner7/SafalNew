import React from 'react';
import Image from 'next/image';
import styles from './TechnologyDrivenExecutionSection.module.css';

export default function TechnologyDrivenExecutionSection() {
  return (
    <section className="mt_80 mb_80">
      <div className="container-1600">
        <h2 className="title_60 text-center mb_60">Technology-Driven Execution</h2>
        
        <div className={styles.diagramContainer}>
          {/* The central graphic as one image (lines and center logo) */}
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/Technology-Driven-Execution.png" 
              alt="Technology Driven Execution Center" 
              fill
              className={styles.diagramImage} 
            />
          </div>

          {/* Top Text Block */}
          <div className={`${styles.textBlock} ${styles.topBlock}`}>
            <div className={styles.iconWrapper}>
              <Image src="/images/Technology-Driven-Execution-singale1.png" alt="Web Development" width={120} height={100} className={styles.iconImage} />
            </div>
            <div className={styles.textContent}>
              <h3 className="title_24 mb_10">Web Development</h3>
              <p className="font_16">Structured website development focused on performance, scalability, and seamless user experience.</p>
            </div>
          </div>

          {/* Left Text Block */}
          <div className={`${styles.textBlock} ${styles.leftBlock}`}>
            <div className={styles.iconWrapper}>
              <Image src="/images/Technology-Driven-Execution-singale3.png" alt="Web Development" width={120} height={120} className={styles.iconImage} />
            </div>
            <div className={styles.textContent}>
              <h3 className="title_24 mb_10">Web Development</h3>
              <p className="font_16">Structured website development focused on performance, scalability, and seamless user experience.</p>
            </div>
          </div>

          {/* Right Text Block */}
          <div className={`${styles.textBlock} ${styles.rightBlock}`}>
            <div className={styles.iconWrapper}>
              <Image src="/images/Technology-Driven-Execution-singale2.png" alt="Web Development" width={120} height={120} className={styles.iconImage} />
            </div>
            <div className={styles.textContent}>
              <h3 className="title_24 mb_10">Web Development</h3>
              <p className="font_16">Structured website development focused on performance, scalability, and seamless user experience.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
