import React from 'react';
import Image from 'next/image';
import styles from './MultiplierSection.module.css';

export interface MultiplierSectionProps {
  title?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean; // If true, image is on the left
}

export default function MultiplierSection({
  title = "Capitalizing on the Future",
  description1 = "At Safal, growth is not incidental, it is architected.",
  description2 = "Our diversified operating model integrates enterprise software, industrial automation, and venture incubation to create multiple, reinforcing revenue streams. This structure reduces exposure to isolated market cycles while amplifying long-term value creation.",
  description3 = "We don’t follow market trends, we build the infrastructure that shapes them, ensuring resilience, scalability, and sustained shareholder returns.",
  imageSrc = "/images/Investor-Relations/invest-relations.webp", 
  imageAlt = "Capitalizing on the future hourglass",
  reverse = false
}: MultiplierSectionProps) {
  return (
    <section className={`${styles.multiplierSection} mt_80`}>
      <div className="container-1600">
        <div className={`${styles.gridContainer} ${reverse ? styles.reverse : ''}`}>
          <div className={styles.contentCol}>
            <h2 className="title_40">{title}</h2>
            <div className={styles.descriptions}>
              <p>{description1}</p>
              <p>{description2}</p>
              {description3 && <p>{description3}</p>}
            </div>
          </div>
          <div className={styles.imageCol}>
            <Image 
              src={imageSrc} 
              alt={imageAlt} 
              width={400} 
              height={400} 
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
