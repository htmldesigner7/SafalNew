import { baseUrl } from '@/utils/baseUrl';
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
            India is the engine of modern digital growth, and Safal was built within this momentum.
           Rooted in engineering depth and shaped by scale, we operate across industries and geographies with a single mandate:
          </p>
          <p className="title_24_para">
            To architect systems that perform globally, not locally.
          </p>
          <p className="title_24_para">
            From manufacturing hubs to financial ecosystems, we design digital infrastructures that enable speed, precision, and sustained advantage.
          </p>
          <div className={styles.imageWrapper}>
            <Image
              src={`${baseUrl}/images/our-story/ourstory-banner.webp`}
              alt="Global Network"
              width={1200}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
