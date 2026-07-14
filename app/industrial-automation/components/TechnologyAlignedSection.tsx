import React from 'react';
import Image from 'next/image';
import sysStyles from './IndustrialSystems.module.css';

export default function TechnologyAlignedSection() {
  return (
    <section className="mt_80">
      <div className="container-1600">
        <div className={sysStyles.contentWrapper}>
          <div className={sysStyles.textContent}>
            <h2 className={`title_60 ${sysStyles.title}`}>Technology-Aligned Implementation</h2>
            <p>Safal’s solutions are built on industry-standard technologies, protocols, and scalable architectures. As part of its <b>Industry 4.0 consulting</b> approach, the focus remains on interoperability, reliability, and long-term maintainability.</p>
            <p>Our implementation approach focuses on integrating standardized technologies with existing systems to ensure seamless interoperability and long-term reliability. By aligning architecture, protocols, and deployment frameworks, we enable stable system performance, minimize disruptions, and support scalable operations that adapt to evolving industrial and enterprise requirements.</p>
          </div>
          <div className={sysStyles.imageContent}>
            <Image src="/images/Installation_Shape__The_202603281531-(1) 1.webp" alt="Technology-Aligned Implementation" fill className={sysStyles.image} />
          </div>
        </div>
      </div>
    </section>
  );
}
