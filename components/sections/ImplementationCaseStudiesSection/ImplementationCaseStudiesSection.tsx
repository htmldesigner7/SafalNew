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
      "Patients struggled with fragmented care journeys due to Centralized order processing, inventory control, and financial workflows within a unified ERP system.",
      "Established visibility and structured coordination across distribution operations.",
      "The implementation enabled seamless synchronization between operational and financial functions, improving data accuracy and reducing process dependencies. By standardizing workflows and integrating reporting structures, the system strengthened decision-making capabilities across distribution channels.",
      "This structured approach improved coordination between inventory, order processing, and financial tracking, ensuring consistency across operations. As a result, the organization achieved better control over workflows while maintaining scalability for future growth."
    ],
    image: "/images/manufacturing.jpg"
  },
  {
    id: 2,
    title: "HealthCare Plus — Unified Patient Management System",
    paragraphs: [
      "Hospitals faced challenges with decentralized patient data, leading to delays in care and administrative inefficiencies.",
      "We deployed a unified patient management system integrating electronic health records (EHR) and billing.",
      "The new platform streamlined patient onboarding, reduced wait times by 30%, and improved cross-department communication.",
      "As a result, healthcare providers can now focus more on patient care rather than administrative overhead, ensuring a seamless experience."
    ],
    image: "/images/healthcare.jpg"
  },
  {
    id: 3,
    title: "FinServe Global — Secure Banking & Transaction Automation",
    paragraphs: [
      "The client needed to modernize their legacy banking systems to support high-frequency transactions securely.",
      "We implemented an automated transaction processing engine with real-time fraud detection capabilities.",
      "This upgrade significantly reduced transaction processing time and minimized manual reconciliation efforts.",
      "The modernized architecture ensures compliance with global financial regulations while providing a scalable foundation for future digital banking services."
    ],
    image: "/images/finance.jpg"
  },
  {
    id: 4,
    title: "Capital Investments — Portfolio Analytics Dashboard",
    paragraphs: [
      "Investors required real-time visibility into portfolio performance across multiple asset classes.",
      "We built a comprehensive analytics dashboard integrating data from various market feeds and internal systems.",
      "The solution provides interactive data visualization, risk assessment models, and customizable reporting tools.",
      "By centralizing portfolio data, investment managers can make faster, data-driven decisions to maximize returns."
    ],
    image: "/images/investor-section.jpg"
  },
  {
    id: 5,
    title: "EcoEnergy Tech — Sustainable Resource Tracking",
    paragraphs: [
      "The organization needed a reliable way to track and report their carbon footprint and resource utilization.",
      "We developed a sustainability tracking platform that integrates with their existing supply chain and energy grid.",
      "The system automates data collection and generates compliance-ready sustainability reports.",
      "This initiative not only helped them meet regulatory requirements but also optimized energy consumption across their facilities."
    ],
    image: "/images/sustainability-section.jpg"
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
