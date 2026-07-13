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
      <div className="container-1600">
        <div className={styles.layoutWrapper}>
          <div className={styles.fixedTitleContainer}>
            <span className={styles.mainTitle}>Industry we serves</span>
          </div>
          
          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeContent}>
              {/* We duplicate the content a few times to ensure seamless infinite scrolling */}
              {[...Array(4)].map((_, groupIndex) => (
                <div key={groupIndex} className={styles.marqueeGroup}>
                  {industries.map((industry, index) => {
                    const sectionId = industry.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <a 
                        href={`#${sectionId}`} 
                        key={`${groupIndex}-${index}`} 
                        className={styles.industryItem}
                      >
                        <span className={styles.dot}></span>
                        <span className={styles.industryText}>{industry}</span>
                      </a>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
