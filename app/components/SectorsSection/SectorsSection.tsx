'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './SectorsSection.module.css';

const sectors = [
  {
    id: '01',
    title: 'Manufacturing',
    image: '/images/container-port.png',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque id eu cras quam. Tincidunt iaculis pulvinar tellus neque vitae viverra augue nec. Massa odio dignissim sit in dis ac. Id adipiscing faucibus urna senectus e aliquam magna nulla faucibus. Arcu arcu auctor imperdiet nisl amet. In non platea morbi facilisis consectetur nunc maecenas. Sit porta nulla sed non in nibh tellus nisl. Quam eget odio vestibulum bibendum eget vel massa. In nibh imperdiet proin felis senectus viverra vulputate. Sem mattis malesuada blandit sapien sagittis mi.',
  },
  {
    id: '02',
    title: 'Logistics',
    image: '/images/container-port.png',
    description: 'Optimize your supply chain and distribution networks with intelligent logistics platforms designed for global scale and real-time visibility.',
  },
  {
    id: '03',
    title: 'Retail',
    image: '/images/container-port.png',
    description: 'Transform customer experiences and streamline operations with data-driven retail ecosystems and omni-channel commerce solutions.',
  },
  {
    id: '04',
    title: 'Healthcare',
    image: '/images/container-port.png',
    description: 'Empower medical professionals and improve patient outcomes through secure, interoperable healthcare technology frameworks.',
  },
  {
    id: '05',
    title: 'Finance',
    image: '/images/container-port.png',
    description: 'Navigate complex regulatory landscapes and accelerate innovation with robust, secure financial infrastructure and analytics.',
  }
];

export default function SectorsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <h2 className="title_60 text-center">Transforming Sectors. Architecting the Future.</h2>

        <div className={styles.cardsContainer}>
          {sectors.map((sector, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={sector.id}
                className={`${styles.card} ${isActive ? styles.active : styles.inactive}`}
                onClick={() => setActiveIndex(index)}
              >
                {/* Active Content */}
                <div className={`${styles.activeContent} ${isActive ? styles.show : styles.hide}`}>
                  <div className={styles.activeHeader}>
                    <span className={styles.activeNumber}>{sector.id}.</span>
                    <h3 className={`${styles.activeTitle} title_40`}>{sector.title}</h3>
                  </div>
                  <div className={styles.activeImageWrapper}>
                    {/* Placeholder for actual image */}
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      className={styles.activeImage}
                    />
                  </div>
                  <p className={styles.activeDescription}>{sector.description}</p>
                </div>

                {/* Inactive Content */}
                <div className={`${styles.inactiveContent} ${!isActive ? styles.show : styles.hide}`}>
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className={styles.inactiveBgImage}
                  />
                  <div className={styles.overlay}></div>
                  <div className={styles.inactiveTextWrapper}>
                    <span className={styles.inactiveNumber}>{sector.id}.</span>
                    <h3 className={styles.inactiveTitle}>{sector.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
