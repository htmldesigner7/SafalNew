"use client";
 
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import styles from './DivisionsSection.module.css';
 
export default function DivisionsSection() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <header className="header_sec">
          <h2 className="title_60">A Global Technology Ecosystem.</h2>
          <p className={styles.subtitle}>
            Safal operates as a global technology holding group with specialized entities across regions. Each entity delivers focused capabilities within a unified and integrated ecosystem.
          </p>
        </header>
 
        <div className={styles.chartWrapper}>
          <div className={styles.chartContainer}>
            {/* Animated Main Horizontal Red Lines (From Col 1 and Col 5 to Center) */}
            <div className={styles.mobileTrunkWrapperLeft}>
              <div className={styles.animatedLineLeft} />
            </div>
            <div className={styles.mobileTrunkWrapperRight}>
              <div className={styles.animatedLineRight} />
            </div>
 
            {/* Column 1 */}
            <div className={styles.column}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Safal Infosoft Ltd.</h3>
              </div>
            </div>
 
            {/* Column 2 (Split Left) */}
            <div className={styles.columnSplitLeft}>
              {/* Animated Left Vertical Lines (Top and Bottom) */}
              <div className={styles.animatedVerticalLeftTop} />
              <div className={styles.animatedVerticalLeftBottom} />
 
              <div className={`${styles.card} ${styles.cardLeftTree}`}>
                <div className={styles.animatedCardLineLeft} />
                <h3 className={styles.cardTitle}>Intelliworkz<br />Business<br />Solutions Pvt. Ltd.</h3>
                <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className={styles.flag} />
              </div>
              <div className={`${styles.card} ${styles.cardLeftTree}`}>
                <div className={styles.animatedCardLineLeft} />
                <h3 className={styles.cardTitle}>Ideoz Ventures</h3>
                <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className={styles.flag} />
              </div>
            </div>
 
            {/* Column 3 (Center) */}
            <div className={styles.columnCenter}>
              <div className={styles.cardCenter}>
                {/* Center Image (Static) */}
                <div className={styles.centerImageWrapper}>
                  <Image
                    src="/images/HomePage/Diversified-Technology.png"
                    alt="Team assembling puzzle"
                    width={120}
                    height={120}
                    className={styles.centerImage}
                  />
                </div>
              </div>
            </div>
 
            {/* Column 4 (Split Right) */}
            <div className={styles.columnSplitRight}>
              {/* Animated Right Vertical Lines (Top and Bottom) */}
              <div className={styles.animatedVerticalRightTop} />
              <div className={styles.animatedVerticalRightBottom} />
 
              <div className={`${styles.card} ${styles.cardRightTree}`}>
                <div className={styles.animatedCardLineRight} />
                <h3 className={styles.cardTitle}>Intelliworkz<br />Infosoft<br />Technology LLC</h3>
                <img src="https://flagcdn.com/w40/ae.png" alt="UAE Flag" className={styles.flag} />
              </div>
              <div className={`${styles.card} ${styles.cardRightTree}`}>
                <div className={styles.animatedCardLineRight} />
                <h3 className={styles.cardTitle}>Safal Automation<br />Inc.</h3>
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
      </div>
    </section>
  );
}
 