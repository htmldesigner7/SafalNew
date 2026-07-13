import React from 'react';
import styles from './IndustryMarqueeSection.module.css';

const industries = [
  "Retail",
  "Hospitality",
  "Real Estate",
  "Finance",
  "Logistics",
  "Startups",
  "Healthcare"
];

export default function IndustryMarqueeSection() {
  return (
    <section className={styles.marqueeSection}>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeContent}>
          {/* We duplicate the content a few times to ensure seamless infinite scrolling */}
          {[...Array(4)].map((_, groupIndex) => (
            <div key={groupIndex} className={styles.marqueeGroup}>
              <span className={styles.mainTitle}>Industry we serves</span>
              {industries.map((industry, index) => (
                <div key={`${groupIndex}-${index}`} className={styles.industryItem}>
                  <span className={styles.dot}></span>
                  <span className={styles.industryText}>{industry}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
