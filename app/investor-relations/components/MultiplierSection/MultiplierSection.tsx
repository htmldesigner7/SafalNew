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
  title = "Capitalizing on the Future.",
  description1 = "At the Safal Group, our diversified matrix of divisions is designed to create an exponential multiplier effect. By integrating deep-tech software infrastructure, industrial automation, and high-yield venture innovation, we build resilient revenue streams that outmaneuver market volatility. We do not just participate in the digital economy; we architect its next evolution, delivering consistent, compounding value to our institutional and retail shareholders.",
  description2 = "Lorem ipsum dolor sit amet consectetur. Ut velit leo amet suscipit elementum dolor. Non cursus ac molestie lacus eget. Habitant pretium orci mattis id a gravida. Faucibus vitae lectus nibh scelerisque sed viverra vitae aliquam et. A lobortis diam luctus scelerisque. Malesuada nunc ac mattis quis dui condimentum turpis. Id gravida adipiscing mauris donec eu ultrices elit pellentesque massa.",
  description3,
  imageSrc = "/images/blogs-inner.webp", // Placeholder
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
              width={600} 
              height={500} 
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
