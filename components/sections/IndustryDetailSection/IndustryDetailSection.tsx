import React from 'react';
import Image from 'next/image';
import styles from './IndustryDetailSection.module.css';

export interface IndustryDetailData {
  title: string;
  paragraphs: (string | React.ReactNode)[];
  subIndustriesTitle?: string;
  subIndustries?: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean; // If true, image is on the left
}

export default function IndustryDetailSection({ data }: { data: IndustryDetailData }) {
  return (
    <section className="mt_40">
      <div className="container-1600">
        <div className={`${styles.grid} ${data.reverse ? styles.reverse : ''}`}>
          
          {/* Content Column */}
          <div className={styles.contentCol}>
            <h2 className={styles.title}>{data.title}</h2>
            
            <div className={styles.paragraphs}>
              {data.paragraphs.map((p, index) => (
                <p key={index} className={styles.paragraph}>{p}</p>
              ))}
            </div>

            {data.subIndustriesTitle && data.subIndustries && data.subIndustries.length > 0 && (
              <div className={styles.subIndustriesWrapper}>
                <h3 className={styles.subIndustriesTitle}>{data.subIndustriesTitle}</h3>
                <div className={styles.pillsContainer}>
                  {data.subIndustries.map((sub, idx) => (
                    <div key={idx} className={styles.pill}>
                      <span className={styles.dot}></span>
                      {sub}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Image Column */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image 
                src={data.imageSrc}
                alt={data.imageAlt}
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
