import React from 'react';
import Image from 'next/image';
import styles from './RequestDemoSection.module.css';
import Link from 'next/link';

export default function RequestDemoSection() {
  return (
    <section className="mt_80">
      <div className="container-1600">
        <div className={styles.demoBox}>
          
          {/* Left Side: Image */}
          <div className={styles.imageColumn}>
            <Image 
              src="/images/enterprise-products-demo.png"
              alt="Demo Graphic"
              width={800}
              height={500}
              className={styles.image}
              priority
            />
          </div>

          {/* Right Side: Text Content */}
          <div className={styles.textColumn}>
            <h2 className={`${styles.title} title_60`}>Request A Demo</h2>
            
            <p className={styles.paragraph}>
              As an enterprise solutions company and enterprise solutions provider, Safal enables organizations to evaluate and implement systems aligned with their operational requirements.
            </p>
            
            <p className={styles.paragraph}>
              Assess how Safal&apos;s platforms support system integration, scalability, and long-term operational structure as a trusted digital transformation partner.
            </p>

            <Link href="/contact-us" className="btn-primary btn-primary-white">
              Book a Consultation
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
