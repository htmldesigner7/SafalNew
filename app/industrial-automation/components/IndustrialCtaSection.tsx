import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './IndustrialCtaSection.module.css';

export default function IndustrialCtaSection() {
  return (
    <section className={`mt_80 mb_80 ${styles.section}`}>
      <div className="container-1600">
        <div className={styles.ctaContainer}>
          <h2 className={`title_60 ${styles.title}`}>
            Build Intelligent, Connected Industrial Systems
          </h2>

          <div className={styles.imageWrapper}>
            <Image
              src="/safal/images/Industrial-Automation-&-IoT/cta.png"
              alt="Connected Industrial Systems"
              width={1000}
              height={200}
              className={styles.image}
              priority
            />
          </div>

          <p className={styles.description}>
            Work with an experienced IoT solutions provider delivering smart manufacturing solutions aligned with your operational environment. <br /> Drive Industry 4.0 transformation through structured automation, real-time visibility, and scalable system integration.
          </p>

          <Link href="/contact" className="btn-primary">
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
