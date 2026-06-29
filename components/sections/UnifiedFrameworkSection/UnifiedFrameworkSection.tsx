import React from 'react';
import Image from 'next/image';
import styles from './UnifiedFrameworkSection.module.css';

export default function UnifiedFrameworkSection() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <div className={styles.gridContainer}>
          
          {/* Left Text Content */}
          <div className={styles.textContent}>
            <h2 className="title_60">A Unified Enterprise<br />Product Framework</h2>
            <p>Safal is an enterprise solutions company structured to deliver integrated platforms and specialized systems for end-to-end enterprise operations. As a technology consulting company, Safal aligns system architecture with business requirements across industries.</p>
            <p>This framework establishes consistency across processes, data, and workflows, ensuring control, scalability, and structured execution across enterprise functions expected from a modern enterprise solutions provider.</p>
            <p>Our framework integrates enterprise systems, data flows, and operational processes into a unified architecture that ensures consistency and scalability. By aligning technology with business functions, we enable seamless coordination across platforms, improve data visibility, and support structured execution across complex enterprise environments.</p>
          </div>

          {/* Right Visual Content (Venn Diagram) */}
          <div className={styles.visualContent}>
            <div className={styles.vennContainer}>
              <div className={`${styles.circle} ${styles.circleLeft}`}>
                <div className={styles.circleText}>
                  <strong className='title_24'>Clarity</strong>
                  <span>Clarity</span>
                </div>
              </div>
              <div className={`${styles.circle} ${styles.circleRight}`}>
                <div className={styles.circleText}>
                  <strong className='title_24'>Clarity</strong>
                  <span>Clarity</span>
                </div>
              </div>
              <div className={styles.centerIcon}>
                <Image 
                  src="/images/logo.svg" 
                  alt="Safal Icon" 
                  width={60} 
                  height={60} 
                  className={styles.logoIcon}
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
