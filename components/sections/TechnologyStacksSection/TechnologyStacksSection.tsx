import React from 'react';
import Image from 'next/image';
import styles from './TechnologyStacksSection.module.css';
const row1 = ["React.js", "Node.js", "Figma", "Angular", "After Effects", "MongoDB", "Next.js"];
const row2 = ["Vue.js", "Java (Spring Boot)", "Python", "PostgreSQL", "TypeScript", ".NET", "Blender"];

export default function TechnologyStacksSection() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className="">
        <h2 className={`title_40 ${styles.heading}`}>
          Across Modern Technology Stacks
        </h2>

        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeRow}>
            <div className={styles.marqueeContent}>
              {row1.map((tech, index) => (
                <span key={`r1-1-${index}`} className={styles.badge}>{tech}</span>
              ))}
            </div>
            <div className={styles.marqueeContent} aria-hidden="true">
              {row1.map((tech, index) => (
                <span key={`r1-2-${index}`} className={styles.badge}>{tech}</span>
              ))}
            </div>
            <div className={styles.marqueeContent} aria-hidden="true">
              {row1.map((tech, index) => (
                <span key={`r1-3-${index}`} className={styles.badge}>{tech}</span>
              ))}
            </div>
          </div>

          <div className={styles.marqueeRow}>
            <div className={styles.marqueeContentReverse}>
              {row2.map((tech, index) => (
                <span key={`r2-1-${index}`} className={styles.badge}>{tech}</span>
              ))}
            </div>
            <div className={styles.marqueeContentReverse} aria-hidden="true">
              {row2.map((tech, index) => (
                <span key={`r2-2-${index}`} className={styles.badge}>{tech}</span>
              ))}
            </div>
            <div className={styles.marqueeContentReverse} aria-hidden="true">
              {row2.map((tech, index) => (
                <span key={`r2-3-${index}`} className={styles.badge}>{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          {/* Main network graph image as per the screenshot. Placeholder used. */}
          <Image 
            src="/images/blogs/blogs.webp" 
            alt="Technology Network Node" 
            width={1200} 
            height={600} 
            style={{ width: '100%', height: 'auto', maxWidth: '900px', objectFit: 'contain' }}
          />
        </div>
      </div>
    </section>
  );
}
