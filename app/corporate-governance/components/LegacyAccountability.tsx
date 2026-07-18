import Image from 'next/image';
import styles from './LegacyAccountability.module.css';

export default function LegacyAccountability() {
  return (
    <section className={"mt_80"}>
      <div className={`container-1600 ${styles.container}`}>
        <div className={styles.leftCol}>
          <h2 className={`title_60 ${styles.title}`}>A Legacy of Accountability</h2>
          <div className={styles.content}>
            <p>
              We view corporate governance not as a regulatory obligation, but as the structural foundation that protects and compounds long-term value. In a rapidly evolving digital economy, disciplined oversight becomes the anchor that sustains scale.
            </p>
            <p>
              Through independent audits, zero-trust compliance frameworks, and transparent governance practices, we ensure that every initiative, across technology, ventures, and global operations—is executed with institutional integrity.
            </p>
          </div>
        </div>
        <div className={styles.rightCol}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/safal/images/Corporate-Governance/Corporate-Governance-2.webp" 
              alt="Legacy of Accountability Hourglass" 
              fill 
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
