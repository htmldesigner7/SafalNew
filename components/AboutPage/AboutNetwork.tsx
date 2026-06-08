import Image from 'next/image';
import styles from './AboutNetwork.module.css';

export default function AboutNetwork() {
  return (
    <section className={`${styles.networkSection} mt_80`}>
      <div className={styles.bgWrapper}>
        <Image 
          src="/about/network_bg.png" 
          alt="Network Background" 
          fill
          className={styles.bgImage}
        />
      </div>
      <div className={`${styles.container} container-1600`}>
        <h2 className="title_60">Forged in India. Scaled for the World.</h2>
        <p className={styles.description}>
          India is the undisputed digital engine of the 21st century. Safal Infosoft was forged in this exact crucible—built on a foundation of rapid innovation, unmatched engineering talent, and the necessity for massive scale. What is engineered to succeed here is built to conquer the globe. From the heavy manufacturing hubs of Gujarat to the financial epicenters of Dubai and New York, our mandate is singular: we architect intelligent, frictionless digital ecosystems that empower visionary leaders to operate with unprecedented velocity and absolute market dominance.
        </p>
      </div>
    </section>
  );
}
