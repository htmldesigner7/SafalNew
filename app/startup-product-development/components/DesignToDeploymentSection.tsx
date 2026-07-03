import React from 'react';
import styles from './DesignToDeploymentSection.module.css';

export default function DesignToDeploymentSection() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <h2 className="title_60 text-center">
          From Design to Deployment
        </h2>

        <div className={styles.diagramContainer}>
          <div className={`${styles.circle} ${styles.sideCircle} ${styles.leftCircle}`}>
            <h3 className={styles.circleTitle}>UI/UX</h3>
            <p>
              Designs intuitive product interfaces and user journeys aligned with usability and functional clarity.
            </p>
            <div className={`${styles.horizontalLine} ${styles.horizontalLineGray} ${styles.lineLeftCircle}`}></div>
          </div>

          <div className={`${styles.circle} ${styles.sideCircle} ${styles.rightCircle}`}>
            <h3 className={styles.circleTitle}>DevOps</h3>
            <p>
              Implements infrastructure, deployment pipelines, and monitoring systems to ensure stability and scalability.
            </p>
            <div className={`${styles.horizontalLine} ${styles.horizontalLineGray} ${styles.lineRightCircle}`}></div>
          </div>

          <div className={`${styles.circle} ${styles.centerCircle}`}>
            <div 
              className={styles.imageOverlay}
              style={{ backgroundImage: "url('/images/hero-section.jpg')" }}
            >
              <div className={styles.darkOverlay}></div>
            </div>
            
            <div className={styles.centerContent}>
              <h3 className={styles.centerTitle}>Engineering</h3>
              <p className={styles.centerText}>
                Delivers scalable product development through structured coding practices and modern frameworks.
              </p>
            </div>

            <div className={`${styles.verticalLineWhite} ${styles.lineMidVert1}`}></div>
            <div className={`${styles.verticalLineWhite} ${styles.lineMidVert2}`}></div>
            
            <div className={`${styles.horizontalLine} ${styles.horizontalLineWhite} ${styles.lineMidHoriz1}`}></div>
            <div className={`${styles.horizontalLine} ${styles.horizontalLineWhite} ${styles.lineMidHoriz2}`}></div>
          </div>

          <div className={`${styles.nodePill} ${styles.node1}`}>01 / Immersion</div>
          <div className={`${styles.nodePill} ${styles.node2}`}>02 / Research</div>
          <div className={`${styles.nodePill} ${styles.node3}`}>03 / Prototype</div>
          <div className={`${styles.nodePill} ${styles.node4}`}>04 / Design</div>
          <div className={`${styles.nodePill} ${styles.node5}`}>05 / Refinement</div>
          <div className={`${styles.nodePill} ${styles.node6}`}>06 / Development</div>
          <div className={`${styles.nodePill} ${styles.node7}`}>07 / Launch</div>
        </div>
      </div>
    </section>
  );
}
