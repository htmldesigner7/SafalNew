"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { mockBrochures } from '@/data/mockBrochures';
import styles from './BrochuresSection.module.css';

interface FilterItem {
  id: string;
  label: string;
  count: number;
}

const contentTypes: FilterItem[] = [
  { id: 'whitepapers', label: 'Whitepapers', count: 45 },
  { id: 'blog-posts', label: 'Blog Posts', count: 89 },
  { id: 'webinars', label: 'Webinars', count: 23 },
  { id: 'case-studies', label: 'Case Studies', count: 34 },
  { id: 'brochures', label: 'Brochures', count: 12 },
  { id: 'news', label: 'News', count: 23 },
];

const topics: FilterItem[] = [
  { id: 'erp-solutions', label: 'ERP Solutions', count: 24 },
  { id: 'cloud-migration', label: 'Cloud Migration', count: 18 },
  { id: 'aviation-tech', label: 'Aviation Tech', count: 12 },
  { id: 'ai-automation', label: 'AI & Automation', count: 31 },
];

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

export default function BrochuresSection() {
  const [activeType, setActiveType] = useState<string>('');
  const [activeTopic, setActiveTopic] = useState<string>('');

  const [typeOpen, setTypeOpen] = useState(true);
  const [topicOpen, setTopicOpen] = useState(true);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 1025) {
      setTypeOpen(false);
      setTopicOpen(false);
    }
  }, []);

  // Filter Logic
  let filteredBrochures = mockBrochures;

  if (activeType) {
    const typeLabel = contentTypes.find(t => t.id === activeType)?.label || '';
    filteredBrochures = filteredBrochures.filter(brochure =>
      brochure.tags.some(tag => 
        typeLabel.toLowerCase().includes(tag.toLowerCase()) || 
        tag.toLowerCase().includes(typeLabel.toLowerCase())
      )
    );
  }

  if (activeTopic) {
    const topicLabel = topics.find(t => t.id === activeTopic)?.label || '';
    filteredBrochures = filteredBrochures.filter(brochure =>
      brochure.tags.some(tag => 
        topicLabel.toLowerCase().includes(tag.toLowerCase()) || 
        tag.toLowerCase().includes(topicLabel.toLowerCase())
      )
    );
  }

  // If filtering resulted in empty featured, maybe we still want to show one, but for now strict filter
  const featuredBrochure = filteredBrochures.find(b => b.isFeatured) || filteredBrochures[0];
  const gridBrochures = filteredBrochures.filter(b => b.id !== featuredBrochure?.id);

  const handleClearAll = () => {
    setActiveType('');
    setActiveTopic('');
  };

  const activeFilters = [];
  if (activeType) activeFilters.push(contentTypes.find(t => t.id === activeType)?.label || activeType);
  if (activeTopic) activeFilters.push(topics.find(t => t.id === activeTopic)?.label || activeTopic);

  return (

    <section className='mt_80'>
      <div className="container-1600">
        <div className={styles.layoutWrapper}>
          
          {/* Sidebar */}
          <aside className={`${styles.sidebar} ${mobileFilterOpen ? styles.mobileOpen : ''}`}>
            <div className={styles.filterHeader}>
              <span className='title_24'>Filters</span>
              <button onClick={handleClearAll} className={styles.clearAllBtn}>Clear All</button>
            </div>

            <div className={styles.accordionSection}>
              <button className={styles.accordionHeader} onClick={() => setTopicOpen(!topicOpen)}>
                Topic
                <svg className={`${styles.accordionIcon} ${topicOpen ? styles.open : ''}`} viewBox="0 0 12 8" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              {topicOpen && (
                <div className={styles.filterList}>
                  {topics.map((t) => (
                    <div 
                      key={t.id} 
                      className={`${styles.filterItem} ${activeTopic === t.id ? styles.active : ''}`}
                      onClick={() => setActiveTopic(t.id)}
                    >
                      <span>{t.label}</span>
                      <span>{t.count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.accordionSection}>
              <button className={styles.accordionHeader} onClick={() => setTypeOpen(!typeOpen)}>
                Content Type
                <svg className={`${styles.accordionIcon} ${typeOpen ? styles.open : ''}`} viewBox="0 0 12 8" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              {typeOpen && (
                <div className={styles.filterList}>
                  {contentTypes.map((t) => (
                    <div 
                      key={t.id} 
                      className={`${styles.filterItem} ${activeType === t.id ? styles.active : ''}`}
                      onClick={() => setActiveType(t.id)}
                    >
                      <span>{t.label}</span>
                      <span>{t.count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <button 
            className={styles.mobileFilterToggle} 
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          >
            Filters
            <svg className={`${styles.accordionIcon} ${mobileFilterOpen ? styles.open : ''}`} viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 1.5L6 6.5L11 1.5" />
            </svg>
          </button>

          {/* Main Content */}
          <div className={styles.mainContent}>
            
            {/* Active Filters Bar */}
            <div className={styles.activeFiltersBar}>
              <span className='title_24'>Active Filters:</span>
              <div className={styles.activeTags}>
                {activeFilters.map((filter, index) => (
                  <div key={index} className={styles.tag}>
                    {filter}
                    <button onClick={() => {
                      if (contentTypes.some(t => t.label === filter)) setActiveType('');
                      if (topics.some(t => t.label === filter)) setActiveTopic('');
                    }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Post */}
            {featuredBrochure && (
              <div className={styles.featuredPost}>
                <div className={styles.featuredImageWrapper}>
                  <Image 
                    src={featuredBrochure.imageSrc} 
                    alt={featuredBrochure.title} 
                    fill 
                    className={styles.featuredImage}
                  />
                </div>
                <div className={styles.featuredContent}>
                  <div className={styles.categoryTags}>
                    {featuredBrochure.tags.map((tag, idx) => (
                      <span key={idx} className={`${styles.categoryTag} ${idx === 0 ? styles.red : styles.green}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className='title_40'>
                    {featuredBrochure.title}
                  </h2>
                  <p className={styles.pdfInfo}>
                    PDF | {featuredBrochure.pdfPages} Pages | {featuredBrochure.pdfSize}
                  </p>
                  <a href="/brochures" className="btn-outline btn-outline-red">
                    <DownloadIcon />
                    Download Brochure
                  </a>
                </div>
              </div>
            )}

            {/* Grid Posts */}
            <div className={styles.postsGrid}>
              {gridBrochures.map(brochure => (
                <div key={brochure.id} className={styles.postCard}>
                  <div className={styles.cardImageWrapper}>
                    <Image 
                      src={brochure.imageSrc} 
                      alt={brochure.title} 
                      fill 
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                      {brochure.tags.map((tag, idx) => (
                        <span key={idx} className={`${styles.categoryTag} ${idx === 0 ? styles.red : styles.green}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className='title_24'>
                      {brochure.title}
                    </h3>
                    <p className={styles.pdfInfo}>
                      PDF | {brochure.pdfPages} Pages | {brochure.pdfSize}
                    </p>
                    <div>
                      <a href="/brochures" className={styles.downloadBtnTextOnly}>
                        <DownloadIcon />
                        Download Brochure
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
