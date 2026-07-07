import React from 'react';
import Image from 'next/image';
import styles from './SynergyCompanies.module.css';

export interface SynergyCompany {
  id: string;
  name: string;
  descriptions: string[];
  logoSrc: string;
  logoAlt: string;
}

const placeholderDesc = "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const synergyCompaniesData = {
  title: "Independent Focus. Infinite Synergy.",
  subtitle: "While each entity within our group operates with laser-focused specialization — from hardware automation in the U.S to venture incubation in India — they are entirely interconnected. This matrix allows us to cross-pollinate world-class engineering, design, and strategy, giving our partners access to an unmatched global brain trust.",
  companies: [
    {
      id: "intelliworkz-business",
      name: "Intelliworkz Business Solutions Pvt. Ltd.",
      descriptions: [placeholderDesc, placeholderDesc, placeholderDesc],
      logoSrc: "/images/our-entities-Intelliworkz.png",
      logoAlt: "Intelliworkz Logo"
    },
    {
      id: "safal-infosoft-ltd",
      name: "Safal Infosoft Ltd.",
      descriptions: [placeholderDesc, placeholderDesc, placeholderDesc],
      logoSrc: "/images/our-entities-Intelliworkz.png",
      logoAlt: "Safal Infosoft Logo"
    },
    {
      id: "ideaz-ventures",
      name: "Ideaz Ventures",
      descriptions: [placeholderDesc, placeholderDesc, placeholderDesc],
      logoSrc: "/images/our-entities-Intelliworkz.png",
      logoAlt: "Ideaz Ventures Logo"
    },
    {
      id: "intelliworkz-infosoft",
      name: "Intelliworkz Infosoft Technology LLC",
      descriptions: [placeholderDesc, placeholderDesc, placeholderDesc],
      logoSrc: "/images/our-entities-Intelliworkz.png",
      logoAlt: "Intelliworkz Infosoft Logo"
    },
    {
      id: "safal-infosoft-inc",
      name: "Safal Infosoft Inc.",
      descriptions: [placeholderDesc, placeholderDesc, placeholderDesc],
      logoSrc: "/images/our-entities-Intelliworkz.png",
      logoAlt: "Safal Infosoft Inc Logo"
    },
    {
      id: "safal-automation",
      name: "Safal Automation Inc.",
      descriptions: [placeholderDesc, placeholderDesc, placeholderDesc],
      logoSrc: "/images/our-entities-Intelliworkz.png",
      logoAlt: "Safal Automation Logo"
    }
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
              src="/images/independent-header.png"
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
                  {company.descriptions.map((desc, idx) => (
                    <p key={idx}>{desc}</p>
                  ))}
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
