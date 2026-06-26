import React from 'react';
import Image from 'next/image';
import styles from './SpeedQualitySection.module.css';

const speedQualityData = {
  title: "Speed, Quality, and Scalability",
  items: [
    {
      title: "Speed",
      paragraphs: [
        "Fast access to pre-qualified talent through technology staffing solutions",
        "We enable rapid team deployment without compromising on technical precision. Through structured screening, role-specific validation, and a continuously evolving talent pipeline, organizations can onboard the right professionals faster while maintaining consistency in quality and long-term scalability across projects."
      ],
      isActive: true
    },
    {
      title: "Quality",
      paragraphs: [],
      isActive: false
    },
    {
      title: "Scalability",
      paragraphs: [],
      isActive: false
    }
  ],
  imageSrc: "/images/hero_3d_book.png", // Replace with correct image
  imageAlt: "Speed, Quality, Scalability"
};

export default function SpeedQualitySection() {
  const data = speedQualityData;

  return (
    <section className={`${styles.section} mt_80`}>
      <div className={`container-1600`}>
        <div className={styles.innerBox}>
          <div className={styles.contentBox}>
            <h2 className={`title_60 ${styles.sectionTitle}`}>{data.title}</h2>
            
            <div className={styles.accordionList}>
              {data.items.map((item, index) => (
                <div key={index} className={`${styles.accordionItem} ${item.isActive ? styles.active : ''}`}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  {item.isActive && item.paragraphs && (
                    <div className={styles.itemContent}>
                      {item.paragraphs.map((p, i) => (
                        <p key={i} className={styles.paragraph}>{p}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.imageBox}>
            <div className={styles.imageWrapper}>
              <Image
                src={data.imageSrc}
                alt={data.imageAlt}
                fill
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
