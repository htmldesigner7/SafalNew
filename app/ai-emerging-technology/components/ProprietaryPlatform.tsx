import React from 'react';
import Image from 'next/image';
import styles from './ProprietaryPlatform.module.css';

export default function ProprietaryPlatform() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <div className={styles.layout}>
          <div className={styles.contentCol}>
            <h2 className="title_60">Proprietary AI Execution Platform</h2>
            <p>
              ADAPT is Safal&apos;s proprietary platform designed to operationalize AI across enterprise systems. It enables deployment of models, automation of workflows, and integration across business processes.
            </p>
            <p>
              As part of Safal&apos;s AI business solutions, the platform ensures scalable, controlled, and consistent AI execution aligned with enterprise requirements.
            </p>
          </div>
          <div className={styles.imageCol}>
            <Image 
              src="/images/process-diagram.png" 
              alt="Proprietary AI Execution Platform Diagram" 
              width={700} 
              height={400} 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
