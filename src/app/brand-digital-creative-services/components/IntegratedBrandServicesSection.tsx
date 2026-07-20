'use client';


import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import styles from './IntegratedBrandServicesSection.module.css';

const servicesData = [
  {
    id: 1,
    title: 'Branding & Identity',
    text: 'Structured brand development, including identity systems, positioning, and visual frameworks aligned with long-term business strategy. Delivered as part of comprehensive digital branding services.Ensures consistent brand perception across all channels, strengthening recognition and long-term market positioning.',
    iconSrc: <Image src={`/images/Brand,-Digital-&-Creative-Services/Branding-Identity.svg`} alt="Branding & Identity" width={120} height={120} />
  },
  {
    id: 2,
    title: 'Creative Design',
    text: 'Design systems across digital and print, including communication assets, campaigns, and brand visuals—ensuring consistency across all touchpoints through high-quality creative design services.',
    iconSrc: <Image src={`/images/Brand,-Digital-&-Creative-Services/Creative-Design.svg`} alt="Creative Design" width={120} height={120} />
  },
  {
    id: 3,
    title: 'Digital Marketing',
    text: 'Performance-driven digital marketing services focused on visibility, engagement, and measurable outcomes across platforms and channels.',
    iconSrc: <Image src={`/images/Brand,-Digital-&-Creative-Services/Digital-Marketing.svg`} alt="Digital Marketing" width={120} height={120} />
  },
  {
    id: 4,
    title: 'Advertising',
    text: 'Strategic campaign planning and execution across digital and offline channels, aligned with brand positioning and audience targeting.',
    iconSrc: <Image src={`/images/Brand,-Digital-&-Creative-Services/Advertising.svg`} alt="images" width={120} height={120} />
  },
  {
    id: 5,
    title: 'IT / ITES',
    text: 'Support services, including digital asset management, backend operations, and execution support for ongoing marketing and brand activities.',
    iconSrc: <Image src={`/images/Brand,-Digital-&-Creative-Services/ITES.svg`} alt="images" width={120} height={120} />
  },
  {
    id: 6,
    title: 'Content & Communication Strategy',
    text: 'Development of structured content frameworks, messaging systems, and communication strategies that ensure consistent brand voice across platforms, campaigns, and customer touchpoints.',
    iconSrc: <Image src={`/images/Brand,-Digital-&-Creative-Services/Content-Communication-Strategy.svg`} alt="images" width={120} height={120} />
  }
];

export default function IntegratedBrandServicesSection() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = servicesData.length;

  return (
    <section className={"mt_80"}>
      <div className="container-1600">
        <h2 className={'title_60 text-center mb_40'}>Integrated Brand & Digital Services</h2>
        
        <div className={styles.sliderContainer}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
          >
            {[...servicesData, ...servicesData].map((service, index) => (
              <SwiperSlide key={`${service.id}-${index}`} style={{ height: 'auto' }}>
                <div className={styles.card}>
                  <div className={styles.iconWrapper}>
                    {service.iconSrc}
                  </div>
                  <h3 className={`${styles.cardTitle} title_24`}>{service.title}</h3>
                  <p className={styles.cardText}>{service.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.controls}>
          <button 
            className={styles.navButton} 
            onClick={() => swiperInstance?.slidePrev()}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className={styles.pagination}>
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <div 
                key={idx}
                className={`${styles.dot} ${idx === activeIndex ? styles.dotActive : ''}`}
                onClick={() => swiperInstance?.slideToLoop(idx)}
              />
            ))}
          </div>

          <button 
            className={styles.navButton} 
            onClick={() => swiperInstance?.slideNext()}
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
