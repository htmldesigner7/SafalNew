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
                Inefficient systems don’t just waste energy; they waste time, the most critical resource in modern enterprise. Legacy architectures slow innovation cycles, increase operational overhead, and create long-term sustainability challenges.
              </p>
              <p>
                Safal is engineering a transition toward circular digital systems. By extending infrastructure lifecycles through intelligent automation, optimizing compute loads, and designing self-improving architectures, we enable enterprises to operate more efficiently and with reduced environmental impact.
              </p>
            </div>
            <div className={styles.pill}>
              Our target: a 100% net-zero operational matrix across global hubs.
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
