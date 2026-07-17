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

export default function MultiplierSection(
  {
  title = "The Multiplier Effect",
  description1 = "In our ecosystem, collective strength always exceeds individual capability. Safal is built on the belief that aligned teams outperform isolated brilliance.",
  description2 = "When expertise across functions, geographies, and disciplines converges, the outcome is not incremental; it is exponential. We prioritize collaboration over silos, ensuring every initiative benefits from the shared intelligence of the entire organization.",
  description3 = "This approach allows us to scale not just faster, but smarter, delivering outcomes backed by depth, not dependency.",
  imageSrc = "/images/Values-&-Culture/Multipiler effect.webp", 
  imageAlt = "Capitalizing on the future hourglass",
  reverse = false
}: MultiplierSectionProps

) {
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
