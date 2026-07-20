'use client';
import { useState } from 'react';
import styles from './CaseStudyResults.module.css';

export default function CaseStudyResults() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className={"mt_80"}>
      <div className={`container-1600 ${styles.container}`}>
        
        <div className={styles.leftCol}>
          <h2 className={`title_60 ${styles.title}`}>Result We Deliver</h2>
          
          <div className={styles.grid}>
            <div className={styles.gridItem}>
              <h3 className="title_24">Operational Efficiency at Scale</h3>
              <p>
                Production, distribution, and retail operations were fully synchronized, enabling seamless coordination across all business units.
              </p>
            </div>
            
            <div className={styles.gridItem}>
              <h3 className="title_24">Wastage Reduction & Cost Optimization</h3>
              <p>
                Expiry tracking and demand-driven planning significantly reduced product wastage while improving overall inventory efficiency.
              </p>
            </div>

            <div className={styles.gridItem}>
              <h3 className="title_24">Enhanced Traceability & Compliance</h3>
              <p>
                Batch-level tracking ensured higher quality standards, improved food safety compliance, and stronger audit readiness.
              </p>
            </div>

            <div className={styles.gridItem}>
              <h3 className="title_24">Real-Time Business Visibility</h3>
              <p>
                Centralized dashboards empowered leadership with instant insights into sales, inventory, and operational performance across all locations.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.rightCol}>
          {!isPlaying ? (
            <div className={styles.videoThumbnail} onClick={() => setIsPlaying(true)}>
              <div className={styles.playButton}>
               <svg width="24" height="24" viewBox="0 0 24 24" className={styles.playIcon} xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" />
                </svg>
              </div>
            </div>
          ) : (
            <div className={styles.videoPlayer}>
              <video 
                controls 
                autoPlay 
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
