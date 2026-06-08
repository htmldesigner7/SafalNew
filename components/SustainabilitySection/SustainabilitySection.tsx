import Image from 'next/image';
import Link from 'next/link';
import styles from './SustainabilitySection.module.css';

export default function SustainabilitySection() {
  return (
    <section className={`${styles.section} mt_80`}>
      {/* Background Leaves Graphic Placeholder */}
      <div className={styles.bgLeaves}></div>

      <div className={`container-1600 ${styles.container}`}>
        
        {/* Top Left Text */}
        <div className={styles.topLeft}>
          <h2 className="title_60">Our imprint on the world</h2>
          <div className={styles.textContent}>
            <p className={styles.description}>
              We believe a technology company's most lasting impact isn't measured in revenue — it's measured in people developed, industries transformed, and responsibility exercised at every level of operation.
            </p>
            <p className={styles.description}>
              Across eight specialized divisions, Safal Infosoft Group operates with one constant: doing business in a way that creates value for our clients, our people, and the communities we work in — today and for the long term.
            </p>
          </div>
        </div>

        {/* Center Graphic */}
        <div className={styles.centerGraphic}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/sustainability-thumbprint.png" 
              alt="Green Thumbprint" 
              fill
              className={styles.thumbprintImage} 
            />
          </div>
        </div>

        {/* Bottom Right Text */}
        <div className={styles.bottomRight}>
          <h2 className="title_60">goes beyond software.</h2>
          <Link href="#sustainability" className="btn-outline">
            Read our Sustainability Commitments
          </Link>
        </div>

      </div>
    </section>
  );
}
