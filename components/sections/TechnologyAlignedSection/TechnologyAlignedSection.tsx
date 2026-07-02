import React from 'react';
import Image from 'next/image';
import styles from '../IndustrialSystemsSection/IndustrialSystemsSection.module.css';

export default function TechnologyAlignedSection() {
  return (
    <section className="mt_80">
      <div className="container-1600">
        <div className={styles.contentWrapper}>
          
          {/* Left Text Content */}
          <div className={styles.textContent}>
            <h2 className={`title_60 ${styles.title}`}>
              Technology-Aligned<br />Implementation
            </h2>
            
            <p>
              Safal's solutions are built on industry-standard technologies, protocols, and scalable architectures. As part of its Industry 4.0 consulting approach, the focus remains on interoperability, reliability, and long-term maintainability.
            </p>
            <p>
              Our implementation approach focuses on integrating standardized technologies with existing systems to ensure seamless interoperability and long-term reliability. By aligning architecture, protocols, and deployment frameworks, we enable stable system performance, minimize disruptions, and support scalable operations that adapt to evolving industrial and enterprise requirements.
            </p>
          </div>

          {/* Right Image */}
          <div className={styles.imageContent}>
            <Image 
              src="/images/Installation_Shape__The_202603281531 (1) 1.webp"
              alt="Technology-Aligned Implementation"
              fill
              className={styles.image}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
