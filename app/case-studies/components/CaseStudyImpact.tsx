import Image from 'next/image';
import styles from './CaseStudyImpact.module.css';

export default function CaseStudyImpact() {
  return (
    <section className={"mt_80"}>
      <div className="container-1600">
        <div className={styles.impactCard}>
          <div className={styles.bgWrapper}>
            <Image 
              src="/images/Internships-&-Mentorship/Internship/The-Fast-Track.webp" 
              alt="Impact Background" 
              fill 
              className={styles.bgImage} 
            />
            <div className={styles.overlay}></div>
          </div>
          
          <div className={styles.content}>
            <div className={styles.badge}>Our Impact</div>
            <h2 className={`${styles.title} title_60`}>300% increase in operational velocity</h2>
            <p className={styles.subtitle}>A complete transformation that redefined manufacturing and retail execution</p>
            
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={`${styles.statValue} title_60`}>300%</div>
                <div className={styles.statLabel}>Operational Velocity</div>
                <div className={styles.statDesc}>3x faster production-to-retail cycles</div>
              </div>
              <div className={styles.statCard}>
                <div className={`${styles.statValue} title_60`}>40%+</div>
                <div className={styles.statLabel}>Inventory Optimization</div>
                <div className={styles.statDesc}>Reduced wastage and improved stock turnover</div>
              </div>
              <div className={styles.statCard}>
                <div className={`${styles.statValue} title_60`}>100%</div>
                <div className={styles.statLabel}>Batch Traceability</div>
                <div className={styles.statDesc}> Complete visibility from production to shelf</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
