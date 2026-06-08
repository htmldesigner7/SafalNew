import Image from 'next/image';
import Link from 'next/link';
import styles from './GlobalPresenceSection.module.css';

export default function GlobalPresenceSection() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className={`container-1600 ${styles.container}`}>
        
        {/* Left Content */}
        <div className={styles.textContent}>
          <h2 className="title_60">A Diversified Technology<br/>Group.</h2>
          
          <div className={styles.descriptionGroup}>
            <p className={styles.description}>
              We are a global holding company operating at the intersection of agentic AI, industrial automation, and strategic advisory. Across eight specialized divisions, we don't just build software—we engineer the unified ecosystems that power the world's most complex organizations.
            </p>
            <p className={styles.description}>
              We are a global holding company operating at the intersection of agentic AI, industrial automation, and strategic advisory. Across eight specialized divisions, we don't just build software—we engineer the unified ecosystems that power the world's most complex organizations.
            </p>
            <p className={styles.description}>
              We are a global holding company operating at the intersection of agentic AI, industrial automation, and strategic advisory. Across eight specialized divisions, we don't just build software—we engineer the unified ecosystems that power the world's most complex organizations.
            </p>
          </div>
          
          <Link href="#product" className="btn-outline">
            Visit our Product
          </Link>
        </div>

        {/* Right Graphic */}
        <div className={styles.graphicContent}>
          <div className={styles.globeWrapper}>
            {/* Placeholder for the wireframe globe image */}
            <Image 
              src="/globe-wireframe.png" 
              alt="Global Presence Globe" 
              fill 
              className={styles.globeImage} 
            />
            
            {/* Floating Location Badges */}
            <div className={`${styles.badge} ${styles.badgeUsa}`}>
              <span className={styles.dot}></span> USA
            </div>
            <div className={`${styles.badge} ${styles.badgeUae}`}>
              <span className={styles.dot}></span> UAE
            </div>
            <div className={`${styles.badge} ${styles.badgeIndia}`}>
              <span className={styles.dot}></span> India
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
