import React from 'react';
import Image from 'next/image';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={`${styles.aboutSection} mt_80`}>
      <div className="container-1600">
        <div className={styles.contentWrapper}>
          <h2 className="title_60">Forged in India. Scaled for the World.</h2>
          <p className="title_24_para">
            India is the undisputed digital engine of the 21st century. Safal Infosoft was forged in this exact crucible—built on a foundation of rapid innovation, unmatched engineering talent, and the necessity for massive scale. What is engineered to succeed here is built to conquer the globe. From the heavy manufacturing hubs of Gujarat to the financial epicenters of Dubai and New York, our mandate is singular: we architect intelligent, frictionless digital ecosystems that empower visionary leaders to operate with unprecedented velocity and absolute market dominance.
          </p>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/ourstory.webp"
              alt="Global Network"
              width={1440}
              height={280}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
