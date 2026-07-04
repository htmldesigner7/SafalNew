import React from 'react';
import Image from 'next/image';
import styles from './EnterprisePlatformsSection.module.css';

export default function EnterprisePlatformsSection() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">

        {/* Main Header */}
        <div className={styles.header}>
          <h2 className="title_60">Enterprise Platforms</h2>
        </div>

        {/* DataNote ERP Block */}
        <div className={styles.platformBlock}>
          <div className={styles.imageCol}>
            <Image
              src="/images/blogs-inner.webp" // Placeholder for DataNote Dashboard screenshot
              alt="DataNote ERP Dashboard"
              width={800}
              height={500}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>
          <div className={styles.textCol}>
            <div className={styles.logoWrapper}>
              <Image
                src="/images/datanote-logo.png"
                alt="DataNote Logo"
                width={150}
                height={40}
                style={{ objectFit: 'contain', objectPosition: 'left' }}
              />
            </div>
            <h3 className={`title_24 ${styles.title}`}>DataNote ERP</h3>
            <p>
              DataNote ERP is a comprehensive enterprise system for managing finance, inventory, and operational workflows. As part of Safal&apos;s approach as an enterprise solutions provider, it delivers centralized control, system visibility, and a scalable foundation for enterprise operations.
            </p>
            <p>
              Our ERP platform enables integrated management of financial, operational, and inventory workflows through a unified system architecture. By ensuring data consistency, process alignment, and real-time visibility, it supports efficient execution, improves control, and enables informed decision-making across enterprise operations.
            </p>
          </div>
        </div>

        {/* Formezy EAP Block */}
        <div className={styles.platformBlock}>
          <div className={styles.imageCol}>
            <Image
              src="/images/blogs-inner.webp" // Placeholder for Formezy Dashboard screenshot
              alt="Formezy EAP Dashboard"
              width={800}
              height={500}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>
          <div className={styles.textCol}>
            <div className={styles.logoWrapper}>
              {/* If Formezy logo isn&apos;t available, fallback to Safal logo for now */}
              <Image
                src="/images/logo.svg"
                alt="Formezy Logo"
                width={120}
                height={40}
                style={{ objectFit: 'contain', objectPosition: 'left' }}
              />
            </div>
            <h3 className={`title_24 ${styles.title}`}>Formezy (EAP)</h3>
            <p>
              Formezy is an enterprise application platform for structured data capture, workflow standardization, and process control. It establishes consistency across distributed operations while maintaining clarity in execution.
            </p>
            <p>
              Formezy provides a structured platform for data capture, workflow standardization, and process automation across enterprise functions. Aligning inputs, processes, and outputs within a unified framework, it ensures operational consistency, improves data accuracy, and supports scalable execution across business environments.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
