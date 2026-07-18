import React from 'react';
import Image from 'next/image';
import styles from './LeafClockSection.module.css';

export default function EverylineSection() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <div className={styles.gridContainer}>
          {/* Left Content */}
          <div className={styles.leftCol}>
            <h2 className={`title_60 ${styles.title}`}>Every Line of Code Leaves a Footprint.</h2>
            <div className={styles.description}>
              <p>
                In today’s digital landscape, inefficient systems don’t just slow operations; they consume energy at scale. Legacy-heavy architectures, redundant processing, and fragmented systems contribute to rising global energy demand.
              </p>
              <p>
                At Safal, we believe the most effective path to sustainability is engineering efficiency at the source. By building lean architectures, enabling low-code ecosystems, and embedding predictive intelligence, we significantly reduce the energy load of modern enterprise systems, transforming performance optimization into environmental responsibility.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className={styles.rightCol}>
            <Image
              src="/safal/images/Sustainability/Every-Line-of-Code.webp"
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
