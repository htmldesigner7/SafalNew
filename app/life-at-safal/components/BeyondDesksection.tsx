import { baseUrl } from '@/utils/baseUrl';
import Image from 'next/image';
import styles from './BeyondDesksection.module.css';

export default function BeyondDesksection() {
  return (
    <section className={`${styles.BeyondDesksection} mt_80`}>
      <div className="container-1600">
        <div className={styles.header}>
          <h2 className="title_60" style={{ textAlign: "center" }}>Beyond the Desk</h2>
          <p style={{ textAlign: "center" }}>
            Performance is sustained by balance. At Safal, culture extends beyond work, through curated experiences that foster creativity, collaboration, and well-being.
          </p>
          <p style={{ textAlign: "center" }}>
            We don’t just build systems.<br/>We build environments where people thrive.
          </p>
        </div>

        <div className={styles.galleryGrid}>
          
          <div className={styles.col}>
            <Image src={`${baseUrl}/images/life-at-safal/2.webp`} alt="Team working" width={300} height={200} className={styles.img} />
            <Image src={`${baseUrl}/images/life-at-safal/3.webp`} alt="Office space" width={300} height={200} className={styles.img} />
          </div>
          
          <div className={styles.col}>
            <Image src={`${baseUrl}/images/life-at-safal/1.webp`} alt="Discussion" width={500} height={500} className={styles.img} />
          </div>
          
          <div className={styles.col}>
            <Image src={`${baseUrl}/images/life-at-safal/4.webp`} alt="Collaboration" width={300} height={200} className={styles.img} />
            <Image src={`${baseUrl}/images/life-at-safal/5.webp`} alt="Walking" width={300} height={200} className={styles.img} />
          </div>
        
        </div>
      </div>
    </section>
  );
}
