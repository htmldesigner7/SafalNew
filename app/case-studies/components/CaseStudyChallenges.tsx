import Image from 'next/image';
import styles from './CaseStudyChallenges.module.css';

export default function CaseStudyChallenges() {
  return (
    <section className="mt_80">
      <div className={`container-1600 ${styles.container}`}>
        
        <div className={styles.imageWrapper}>
          <Image 
            src="/safal/images/.png" 
            alt="The Challenges Sketch"
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.contentWrapper}>
          <h2 className={`title_60 ${styles.title}`}>The Challenges</h2>
          
          <div className={styles.grid}>
            <div>
              <h3 className="title_24">Retail & Distribution Complexity</h3>
              <p className={styles.cardDesc}>
                Managing inventory, replenishment, and sales across 100+ outlets created coordination gaps, leading to stock inconsistencies and inefficient outlet servicing.
              </p>
            </div>
            
            <div>
              <h3 className="title_24">Production & Shelf-Life Constraints</h3>
              <p className={styles.cardDesc}>
                Batch-wise production with expiry sensitivity required precise planning. Lack of system-driven control resulted in overproduction, wastage, and demand mismatch.
              </p>
            </div>

            <div>
              <h3 className="title_24">Disconnected Operational Systems</h3>
              <p className={styles.cardDesc}>
               Retail POS, production, finance, and distribution operated in silos, making reporting slow, inaccurate, and difficult to reconcile.
              </p>
            </div>

            <div>
              <h3 className="title_24">Limited Real-Time Visibility</h3>
              <p className={styles.cardDesc}>
                Absence of centralized dashboards restricted decision-making speed across production, logistics, and retail performance.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
