"use client";


import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from './ImplementationCaseStudiesSection.module.css';

const caseStudies = [
  {
    id: 1,
    title: "Elite Electronics — ERP Implementation for Distribution & Financial Operations",
    paragraphs: [
      "Centralized order processing, inventory control, and financial workflows within a unified ERP system.",
      "Established visibility and structured coordination across distribution operations.",
      "The implementation enabled seamless synchronization between operational and financial functions, improving data accuracy and reducing process dependencies. By standardizing workflows and integrating reporting structures, the system strengthened decision-making capabilities across distribution channels.",
      "This structured approach improved coordination between inventory, order processing, and financial tracking, ensuring consistency across operations. As a result, the organization achieved better control over workflows while maintaining scalability for future growth.",
    ],
    image: `/images/Enterprise-Grade-Products-Built-for-Scale/EE.webp`
  },
  {
    id: 2,
    title: "Topsun — Manufacturing Workflow & Inventory System Integration",
    paragraphs: [
      "Structured production workflows, inventory tracking, and reporting within an integrated system environment.",
      "Improved operational control and alignment across manufacturing processes.",
      "The integrated system streamlined production planning and inventory coordination, reducing inefficiencies across workflows. With improved data visibility and process standardization, the organization gained better control over manufacturing cycles and operational execution.",
      "By aligning production, inventory, and reporting within a unified framework, the system enabled consistent tracking and improved responsiveness to changing demands. This resulted in enhanced efficiency and more reliable process outcomes across manufacturing operations."
    ],
    image: `/images/Enterprise-Grade-Products-Built-for-Scale/Topsun.webp`
  },
  {
    id: 3,
    title: "Kabhi B — Multi-Location Retail Operations Management System",
    paragraphs: [
      "Unified inventory, billing, and reporting across multiple retail locations within a centralized platform.",
      "Established consistency in operations and simplified centralized management.",
      "The centralized system enabled real-time coordination across locations, improving inventory accuracy and operational consistency. Standardized workflows ensured uniform execution across all outlets, reducing manual intervention and process gaps.",
      "With integrated reporting and centralized control, management gained better visibility into performance across locations. This allowed for faster decision-making, improved operational alignment, and the ability to scale retail operations efficiently."
    ],
    image: `/images/Enterprise-Grade-Products-Built-for-Scale/KabhiB.webp`
  },
  {
    id: 4,
    title: "POA Tanks — Inventory, Order & Process Management System Implementation",
    paragraphs: [
      "Structured inventory, order workflows, and operational processes within a controlled system environment.",
      "Improved process tracking and coordination across business functions.",
      "The system enhanced visibility across inventory and order lifecycles, enabling better coordination between operational teams. Structured workflows reduced inconsistencies and improved execution across critical processes.",
      "By integrating operational functions within a unified framework, the organization achieved improved tracking, reduced delays, and better process reliability. This ensured smoother coordination and more efficient handling of business operations."
    ],
    image: `/images/Enterprise-Grade-Products-Built-for-Scale/POA-TANK.webp`
  },
  {
    id: 5,
    title: "Air Control & Chemical Engineering Ltd. — Enterprise Workflow & System Integration",
    paragraphs: [
      "Integrated operational workflows and reporting into a unified enterprise system.",
      "Established visibility, control, and structured execution across operations.",
      "The unified system brought together multiple operational functions into a single framework, improving coordination and data flow. Enhanced reporting capabilities enabled better tracking and more informed decision-making across departments.",
      "With structured execution and integrated workflows, the organization achieved greater control over operations while reducing inefficiencies. This strengthened overall process reliability and supported long-term operational scalability."
    ],
    image: `/images/Enterprise-Grade-Products-Built-for-Scale/Air-Control-Chemical-Engineering-Ltd..webp`
  }
];

export default function ImplementationCaseStudiesSection() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    swiperInstance?.slideNext();
  };

  const prevSlide = () => {
    swiperInstance?.slidePrev();
  };

  const goToSlide = (index: number) => {
    swiperInstance?.slideTo(index);
  };

  return (
    <section className="mt_80">
      <div className="container-1600">
        <h2 className={`title_60 ${styles.sectionTitle}`}>Implementation Case Studies</h2>
        
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          speed={800}
          className={styles.swiperContainer}
        >
          {caseStudies.map((activeCase) => (
            <SwiperSlide key={activeCase.id}>
              <div className={styles.caseStudyBox}>
                {/* Left Text Content */}
                <div className={styles.textContent}>
                  <h3 className={`title_24 ${styles.caseTitle}`}>
                    {activeCase.title}
                  </h3>
                  
                  {activeCase.paragraphs.map((para, index) => (
                    <p key={index} className={styles.caseParagraph}>
                      {para}
                    </p>
                  ))}
                </div>
                
                {/* Right Image */}
                <div className={styles.imageContent}>
                  <Image 
                    src={activeCase.image}
                    alt={activeCase.title}
                    fill
                    className={styles.image}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Slider Controls */}
        <div className={styles.sliderControls}>
          <button 
            className={`${styles.arrowBtn} ${activeIndex === 0 ? styles.disabledArrow : ''}`} 
            onClick={prevSlide} 
            aria-label="Previous"
            disabled={activeIndex === 0}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className={styles.indicators}>
            {caseStudies.map((_, index) => (
              <span 
                key={index}
                className={`${styles.indicator} ${index === activeIndex ? styles.activeIndicator : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
          
          <button 
            className={`${styles.arrowBtn} ${activeIndex === caseStudies.length - 1 ? styles.disabledArrow : ''}`} 
            onClick={nextSlide} 
            aria-label="Next"
            disabled={activeIndex === caseStudies.length - 1}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
