import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './EcosystemCTASection.module.css';

const data = {
  title: "Across Digital and Enterprise Ecosystems",
  subtitle: "Safal Infosoft Group invites two kinds of partners — those who invest in our growth, and those who grow alongside us. Both relationships are built on transparency, shared ambition, and long-term value creation.",
  leftText: ["Ready to", "Scale?"],
  rightText: ["Start Team", "Deployment !"],
  cardTitle: "Access the Right Talent, When You Need It",
  cardDescription: "Partner with Safal for technology staffing solutions, including IT staff augmentation services, and specialized hiring for developers, designers, and QA professionals.",
  buttonText: "Book a Consultation",
  buttonLink: "/contact",
  imageSrc: "/images/Technology-Staffing/Technology-Talent.webp",
  imageAlt: "Team working together"
};

export default function EcosystemCTASection() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        
        <div className="header_sec mb_40" >
          <h2 className="title_60">{data.title}</h2>
          <p>{data.subtitle}</p>
        </div>

        <div className={styles.layoutWrapper}>
          
          {/* Left Side Text */}
          <div className={styles.sideText}>
            {data.leftText.map((line, index) => (
              <span key={index} className={styles.greyTextBlock}>{line}</span>
            ))}
          </div>

          {/* Center Card */}
          <div className={styles.centerCard}>
            <div className={styles.cardImageWrapper}>
              <Image 
                src={data.imageSrc}
                alt={data.imageAlt}
                fill
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className="title_40">{data.cardTitle}</h3>
              <p>{data.cardDescription}</p>
              <div className="mt_40">
                <Link href={data.buttonLink} className="btn-primary">
                  {data.buttonText}
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side Text */}
          <div className={styles.sideText}>
            {data.rightText.map((line, index) => (
              <span key={index} className={styles.greyTextBlock}>{line}</span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
