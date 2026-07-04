/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import styles from './DivisionsSection.module.css';

export default function DivisionsSection() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <header className="header_sec">
          <h2 className="title_60">A Diversified Technology Group.</h2>
          <p className={styles.subtitle}>
            We are a global holding company operating at the intersection of agentic AI, industrial automation, and strategic advisory. Across eight specialized divisions, we don&apos;t just build software—we engineer the unified ecosystems that power the world&apos;s most complex organizations.
          </p>
        </header>

        <div className={styles.chartContainer}>
          {/* Column 1 */}
          <div className={styles.column}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Safal Infosoft Ltd.</h3>
            </div>
          </div>

          {/* Column 2 (Split Left) */}
          <div className={styles.columnSplitLeft}>
            <div className={`${styles.card} ${styles.cardLeftTree}`}>
              <h3 className={styles.cardTitle}>Intelliworkz<br/>Business<br/>Solutions Pvt. Ltd.</h3>
              <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className={styles.flag} />
            </div>
            <div className={`${styles.card} ${styles.cardLeftTree}`}>
              <h3 className={styles.cardTitle}>Ideoz Ventures</h3>
              <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className={styles.flag} />
            </div>
          </div>

          {/* Column 3 (Center) */}
          <div className={styles.columnCenter}>
            <div className={styles.cardCenter}>
              {/* Note: Placeholder image, user should replace with puzzle vector from Figma */}
              <Image 
                src="/images/globe-img.png" 
                alt="Team assembling puzzle" 
                width={120} 
                height={120} 
                className={styles.centerImage}
              />
            </div>
          </div>

          {/* Column 4 (Split Right) */}
          <div className={styles.columnSplitRight}>
            <div className={`${styles.card} ${styles.cardRightTree}`}>
              <h3 className={styles.cardTitle}>Intelliworkz<br/>Infosoft<br/>Technology LLC</h3>
              <img src="https://flagcdn.com/w40/ae.png" alt="UAE Flag" className={styles.flag} />
            </div>
            <div className={`${styles.card} ${styles.cardRightTree}`}>
              <h3 className={styles.cardTitle}>Safal Automation<br/>Inc.</h3>
              <img src="https://flagcdn.com/w40/us.png" alt="USA Flag" className={styles.flag} />
            </div>
          </div>

          {/* Column 5 */}
          <div className={styles.column}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Safal Infosoft Inc.</h3>
              <img src="https://flagcdn.com/w40/us.png" alt="USA Flag" className={styles.flag} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
