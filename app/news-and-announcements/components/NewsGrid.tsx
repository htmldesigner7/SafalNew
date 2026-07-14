import React from 'react';
import Image from 'next/image';
import styles from './NewsGrid.module.css';

const dummyNewsData = [
  {
    id: 1,
    title: 'Safal Infosoft announces "Future Leaders" Global Internship program across three continents.',
    description: 'Safal Infosoft announces "Future Leaders" Global Internship program across three continents.',
    date: '12/02/2026',
    category: 'Careers News',
    imageSrc: "/images/Group-Structure/Safal-Infosoft-Inc..webp"
  },
  {
    id: 2,
    title: 'Safal Infosoft announces "Future Leaders" Global Internship program across three continents.',
    description: 'Safal Infosoft announces "Future Leaders" Global Internship program across three continents.',
    date: '12/02/2026',
    category: 'Careers News',
    imageSrc: "/images/Group-Structure/Safal-Infosoft-Inc..webp"
  },
  {
    id: 3,
    title: 'Safal Infosoft announces "Future Leaders" Global Internship program across three continents.',
    description: 'Safal Infosoft announces "Future Leaders" Global Internship program across three continents.',
    date: '12/02/2026',
    category: 'Careers News',
    imageSrc: "/images/Group-Structure/Safal-Infosoft-Inc..webp"
  },
  {
    id: 4,
    title: 'Safal Infosoft announces "Future Leaders" Global Internship program across three continents.',
    description: 'Safal Infosoft announces "Future Leaders" Global Internship program across three continents.',
    date: '12/02/2026',
    category: 'Careers News',
    imageSrc: "/images/Group-Structure/Safal-Infosoft-Inc..webp"
  },
  {
    id: 5,
    title: 'Safal Infosoft announces "Future Leaders" Global Internship program across three continents.',
    description: 'Safal Infosoft announces "Future Leaders" Global Internship program across three continents.',
    date: '12/02/2026',
    category: 'Careers News',
    imageSrc: "/images/Group-Structure/Safal-Infosoft-Inc..webp"
  },
  {
    id: 6,
    title: 'Safal Infosoft announces "Future Leaders" Global Internship program across three continents.',
    description: 'Safal Infosoft announces "Future Leaders" Global Internship program across three continents.',
    date: '12/02/2026',
    category: 'Careers News',
    imageSrc: "/images/blogs/blogs.webp"
  }
];

export default function NewsGrid() {
  return (
    <section className="mt_80">
      <div className={`container-1600 ${styles.gridContainer}`}>
        {dummyNewsData.map(news => (
          <div key={news.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <Image 
                src={news.imageSrc}
                alt={news.title}
                fill
                className={styles.image}
              />
            </div>
            
            <div className={styles.contentContainer}>
              <h3 className={`${styles.title} title_24`}>{news.title}</h3>
              <p className={styles.description}>{news.description}</p>
              
              <div className={styles.metaData}>
                <div className={styles.dateWrapper}>
                  <span className={styles.calendarIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </span>
                  <span className={styles.dateText}>{news.date}</span>
                </div>
                
                <div className={styles.categoryWrapper}>
                  <span className={styles.categoryText}>{news.category}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
