import React from 'react';
import Image from 'next/image';
import styles from './MultiplierSection.module.css';

export interface MultiplierSectionProps {
  title?: string;
  description1?: string;
  description2?: string;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean; // If true, image is on the left
}

export default function MultiplierSection({
  title = "The Multiplier Effect",
  description1 = "In our matrix, the sum is always greater than the parts. Safal is built on the philosophy that collective alignment will consistently outmaneuver individual talent. A single entity can only impact so much, but when our global teams synchronize their efforts, the resulting footprint is massive. We incentivize cross-collaboration over lone-wolf mentalities, ensuring that every project is backed by the full, undivided weight of the Safal Group.",
  description2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  imageSrc = "/images/blogs-inner.webp", // Placeholder
  imageAlt = "The Multiplier Effect Chess Graphic",
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
