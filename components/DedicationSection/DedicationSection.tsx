import React from 'react';
import Image from 'next/image';
import styles from './DedicationSection.module.css';

export interface DedicationSectionProps {
  title1?: string;
  title2?: string;
  thankYouText?: string;
  subText?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function DedicationSection({
  title1 = "Behind Every Global Innovation Stands the Unmatched Dedication of",
  title2 = "Our People.",
  thankYouText = "Thank You.",
  subText = "Lorem ipsum dolor sit amet consectetur.",
  description = "We architect world-class software and engineer enterprise ecosystems, but our true intellectual property is human. To the developers, strategists, designers, and visionaries across India, the UAE, and the USA—thank you. Your relentless drive, cross-border collaboration, and commitment to excellence are the bedrock of the Safal Group. You don't just work here; you are the very fabric of our success. Meet the brilliant minds building the future of digital business.",
  imageSrc = "/images/blogs-inner.webp", // Placeholder
  imageAlt = "Dedication Graphic Collage"
}: DedicationSectionProps) {
  return (
    <section className={`${styles.dedicationSection} mt_80`}>
      <div className="container-1600">
        <div className={styles.gridContainer}>
          
          {/* Left Column */}
          <div className={styles.leftCol}>
            <h2 className={styles.mainTitle}>
              {title1} <br />
              <span className={styles.highlightText}>{title2}</span>
            </h2>
            <div className={styles.thankYouWrapper}>
              <span className={styles.thankYouScript}>{thankYouText}</span>
              <div className={styles.subTextWrapper}>
                <span className={styles.arrow}>⟶</span>
                <span className={styles.subText}>{subText}</span>
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className={styles.centerCol}>
            <Image 
              src={imageSrc} 
              alt={imageAlt} 
              width={600} 
              height={600} 
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>

          {/* Right Column */}
          <div className={styles.rightCol}>
            <p className={styles.descriptionText}>{description}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
