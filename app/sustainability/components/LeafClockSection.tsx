import React from 'react';
import Image from 'next/image';
import styles from './LeafClockSection.module.css';

export default function LeafClockSection() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <div className={styles.gridContainer}>
          {/* Left Content */}
          <div className={styles.leftCol}>
            <h2 className={`title_60 ${styles.title}`}>Time is our Ultimate Non-Renewable Resource.</h2>
            <div className={styles.description}>
              <p>
                Traditional enterprise systems are heavy, fragmented, and computationally exhaustive. Every inefficient data query, legacy monolith, and redundant API call forces global server farms to burn excess energy. This creates a massive, invisible carbon footprint that quietly drains both your profit margins and the planet&apos;s resources.
              </p>
              <p>
                We are engineering a shift toward a true circular digital economy. By extending hardware lifecycles through predictive AI, optimizing cloud computing loads, and designing autonomous systems that mimic nature&apos;s zero-waste loops, Safal is coding the countdown to a regenerative enterprise.
              </p>
            </div>
            <div className={styles.pill}>
              Our target for a 100% Net-Zero operational matrix across all global hubs.
            </div>
          </div>

          {/* Right Image */}
          <div className={styles.rightCol}>
            <Image
              src="/images/leaf_clock.png"
              alt="Leaf Clock showing transition from dry to green"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
