import Image from 'next/image';
import styles from './CaseStudyHero.module.css';

export default function CaseStudyHero() {
  return (
    <section className={styles.section}>
      <div className="container-1600">
        <div className={styles.metaRow}>
          <div className={styles.dateInfo}>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M21 18.75V11.25C21 10.6533 20.7629 10.081 20.341 9.65901C19.919 9.23705 19.3467 9 18.75 9H5.25C4.65326 9 4.08097 9.23705 3.65901 9.65901C3.23705 10.081 3 10.6533 3 11.25V18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75Z" stroke="#D54B26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
            <span>12/02/2026</span>
          </div>
          <div className={styles.tags}>
            <span className={styles.tagCaseStudy}>Case Study</span>
            <span className={styles.tagErp}>ERP Solution</span>
          </div>
        </div>

        <h1 className={`title_60 ${styles.title}`}>
          Transforming Food Manufacturing & Retail: Scaling 100+ Outlets with Real-Time ERP Intelligence
        </h1>

        <p className={styles.description}>
          In a high-velocity FMCG environment where shelf-life, demand fluctuations, and distribution precision define success, fragmented systems become a critical bottleneck. Kanhai Foods Ltd. (Kabhi B) faced increasing complexity across production, inventory, and retail operations spread across 100+ outlets.
        </p>
        <p>With disconnected data flows and limited real-time visibility, operational inefficiencies began impacting stock availability, wastage control, and decision-making. Safal Infosoft implemented a fully integrated ERP and Distribution Management System, turning a complex retail-manufacturing network into a unified, data-driven ecosystem.</p>

        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/.webp" 
            alt="Manufacturing Case Study Hero"
            fill
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
}
