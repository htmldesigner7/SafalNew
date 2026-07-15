import React from 'react';
import Image from 'next/image';
import styles from './SynergyCompanies.module.css';
import { image } from 'framer-motion/client';

export interface SynergyCompany {
  id: string;
  name: string;
  descriptions: React.ReactNode;
  logoSrc: string;
  logoAlt: string;
}


const synergyCompaniesData = {
  title: "Independent Focus. Infinite Synergy.",
  subtitle: <>
  <p>Each vertical operates with clarity of purpose and operational independence.</p>
  <p>Safal Infosoft engineers the technology.<br/>Ideaz Ventures drives innovation.<br/>Intelliworkz enables execution.</p>
  <p>Individually, they deliver depth.<br/>Collectively, they deliver scale.</p>
  <p>This interconnected structure allows us to solve holistically, move with speed, and build systems aligned for long-term growth.</p></>,
  companies: [
    {
      id: "safal-infosoft-ltd",
      name: "Safal Infosoft Ltd.",
      descriptions: <>
      <p>The technology backbone of the Safal ecosystem.</p> 
      <p>Safal Infosoft architects scalable digital infrastructure from enterprise platforms to low-code ecosystems, designed for performance, adaptability, and long-term evolution.</p>
      <p>Every system is engineered to deliver clarity, control, and sustained operational efficiency.</p>
      </>,
      logoSrc: "/images/Group-Structure/Safal-Infosoft-Ltd..webp",
      logoAlt: "Safal Infosoft Logo"
    },
    {
      id: "ideaz-ventures",
      name: "Ideaz Ventures",
      descriptions: <>
      <p>The innovation and incubation engine.</p>
      <p>Ideaz Ventures transforms ideas into scalable, market-ready ventures. Operating at the intersection of strategy, design, and technology, it builds products that are structured for growth from day one.</p>
      <p>Innovation here is not conceptual, it is executable.</p>
      </>,
      logoSrc: "/images/Group-Structure/Ideaz-Ventures.webp",
      logoAlt: "Ideaz Ventures Logo"
    },
    {
      id: "intelliworkz",
      name: "Intelliworkz",
      descriptions: <>
      <p>The execution and business solutions layer.</p>
      <p>Intelliworkz enables operational efficiency, talent scalability, and process optimization, bridging strategy with execution.</p>
      <p>It ensures that systems are not only built, but effectively deployed, managed, and scaled across environments.</p>
      </>,
      logoSrc: "/images/Group-Structure/Intelliworkz-Infosoft-Technology-LLC.webp",
      logoAlt: "Intelliworkz Logo"
    },
    
  ] as SynergyCompany[]
};

export default function SynergyCompanies() {
  return (
    <section className={`${styles.synergyCompanies} mt_80`}>
      <div className="container-1600">
        <div className={styles.header}>
          <h2 className="title_40 text-center">{synergyCompaniesData.title}</h2>
          <p className={styles.subtitle}>{synergyCompaniesData.subtitle}</p>
          <div className="my_40 flex justify-center">
            <Image
              src="/images/Group-Structure/group-structuer.webp"
              alt="Global Network"
              width={1440}
              height={280}
            />
          </div>
        </div>

        <div className={styles.companiesList}>
          {synergyCompaniesData.companies.map((company) => (
            <div key={company.id} className={styles.companyRow}>
              <div className={styles.contentCol}>
                <h3 className="title_24">{company.name}</h3>
                <div className={styles.descriptions}>
                    <div>{company.descriptions}</div>
                </div>
              </div>
              <div className={styles.imageCol}>
                <Image
                  src={company.logoSrc}
                  alt={company.logoAlt}
                  width={250}
                  height={250}
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
