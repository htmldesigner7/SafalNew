import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './EcosystemCTASection.module.css';
import { AlignCenter } from 'lucide-react';

const data = {
  title: "Across Digital and Enterprise Ecosystems",
  subtitle: <>
  <p>Safal partners with organizations across dynamic digital and enterprise ecosystems, from fast-scaling SaaS companies to digitally transforming enterprises. Every engagement is built on structured delivery, technical precision, and long-term value creation.</p>
 
  </>,
  leftText: ["Ready to", "Scale?"],
  rightText: ["Start Team", "Deployment !"],
  cardTitle: "Scale Your Team Across Any Industry",
  cardDescription: "Wherever your business operates, Safal helps you build the right technology team, fast. Connect with us to start deploying qualified talent aligned with your project and industry needs.",
  buttonText: "Book a Consultation",
  buttonLink: "/contact",
  imageSrc: `/images/Technology-Staffing/cta.webp`,
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
    
         <ul className={styles.disc}>
    <li>SaaS companies</li>
    <li>Startups</li>
    <li>Product-led ventures</li>
    <li>Digitally Transforming Enterprises</li>
    <li>Solution-based businesses</li>
    <li>Tech ventures</li>
  </ul>

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
