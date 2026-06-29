"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './SpeedQualitySection.module.css';
import { SpeedQualityData } from '@/data/speedQualityData';

interface SpeedQualitySectionProps {
  data: SpeedQualityData;
}

export default function SpeedQualitySection({ data }: SpeedQualitySectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <div className={styles.innerBox}>
          <div className={styles.contentBox}>
            <h2 className="title_60 mb_40">{data.title}</h2>
            
            <div className={styles.accordionList}>
              {data.items.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <div key={index} className={`${styles.accordionItem} ${isActive ? styles.active : ''}`}>
                    <h3 
                      className={styles.itemTitle} 
                      onClick={() => setActiveIndex(index)}
                    >
                      {item.title}
                    </h3>
                    {isActive && item.paragraphs && (
                      <div className={styles.itemContent}>
                        {item.paragraphs.map((p, i) => (
                          <p key={i} className={styles.paragraph}>{p}</p>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
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
