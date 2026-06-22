'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogsSection.module.css';

import { mockPosts, type BlogPost } from '../../data/mockPosts';

interface FilterItem {
  id: string;
  label: string;
  count: number;
}

const contentTypes: FilterItem[] = [
  { id: 'blog-posts', label: 'Blog Posts', count: 42 },
  { id: 'case-studies', label: 'Case Studies', count: 15 },
  { id: 'white-papers', label: 'White Papers', count: 8 },
];

const topics: FilterItem[] = [
  { id: 'erp-solutions', label: 'ERP Solutions', count: 24 },
  { id: 'cloud-migration', label: 'Cloud Migration', count: 18 },
  { id: 'aviation-tech', label: 'Aviation Tech', count: 12 },
  { id: 'ai-automation', label: 'AI & Automation', count: 31 },
];

const CalendarIcon = () => (
  <svg className={styles.dateIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M21 18.75V11.25C21 10.6533 20.7629 10.081 20.341 9.65901C19.919 9.23705 19.3467 9 18.75 9H5.25C4.65326 9 4.08097 9.23705 3.65901 9.65901C3.23705 10.081 3 10.6533 3 11.25V18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75Z" stroke="#D54B26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function BlogsSection() {
  const [activeType, setActiveType] = useState<string>('blog-posts');
  const [activeTopic, setActiveTopic] = useState<string>('erp-solutions');

  const [typeOpen, setTypeOpen] = useState(true);
  const [topicOpen, setTopicOpen] = useState(true);

  let filteredPosts = mockPosts;

  if (activeType) {
    const typeLabel = contentTypes.find(t => t.id === activeType)?.label || '';
    filteredPosts = filteredPosts.filter(post =>
      post.tags.some(tag => 
        typeLabel.toLowerCase().includes(tag.toLowerCase()) || 
        tag.toLowerCase().includes(typeLabel.toLowerCase())
      )
    );
  }

  if (activeTopic) {
    const topicLabel = topics.find(t => t.id === activeTopic)?.label || '';
    filteredPosts = filteredPosts.filter(post =>
      post.tags.some(tag => 
        topicLabel.toLowerCase().includes(tag.toLowerCase()) || 
        tag.toLowerCase().includes(topicLabel.toLowerCase())
      )
    );
  }

  const featuredPost = filteredPosts.find(p => p.isFeatured);
  const gridPosts = filteredPosts.filter(p => !p.isFeatured);

  const handleClearAll = () => {
    setActiveType('');
    setActiveTopic('');
  };

  const activeFilters = [];
  if (activeType) activeFilters.push(contentTypes.find(t => t.id === activeType)?.label || activeType);
  if (activeTopic) activeFilters.push(topics.find(t => t.id === activeTopic)?.label || activeTopic);

  const removeFilter = (label: string) => {
    if (contentTypes.some(t => t.label === label)) setActiveType('');
    if (topics.some(t => t.label === label)) setActiveTopic('');
  };

  return (
    <section className={`${styles.blogsSection} mt_80 mb_80`}>
      <div className="container-1600">
        <div className={styles.layoutWrapper}>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.filterHeader}>
              <h3 className="title_24">Filters</h3>
              <button className={styles.clearAllBtn} onClick={handleClearAll}>Clear All</button>
            </div>

            {/* Content Type Accordion */}
            <div className={styles.accordionSection}>
              <button className={styles.accordionHeader} onClick={() => setTypeOpen(!typeOpen)}>
                Content Type
                <svg className={`${styles.accordionIcon} ${typeOpen ? styles.open : ''}`} viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 1.5L6 6.5L11 1.5" />
                </svg>
              </button>
              {typeOpen && (
                <div className={styles.filterList}>
                  {contentTypes.map((item) => (
                    <div
                      key={item.id}
                      className={`${styles.filterItem} ${activeType === item.id ? styles.active : ''}`}
                      onClick={() => setActiveType(item.id)}
                    >
                      <span>{item.label}</span>
                      <span className={styles.filterCount}>{item.count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Topic Accordion */}
            <div className={styles.accordionSection}>
              <button className={styles.accordionHeader} onClick={() => setTopicOpen(!topicOpen)}>
                Topic
                <svg className={`${styles.accordionIcon} ${topicOpen ? styles.open : ''}`} viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 1.5L6 6.5L11 1.5" />
                </svg>
              </button>
              {topicOpen && (
                <div className={styles.filterList}>
                  {topics.map((item) => (
                    <div
                      key={item.id}
                      className={`${styles.filterItem} ${activeTopic === item.id ? styles.active : ''}`}
                      onClick={() => setActiveTopic(item.id)}
                    >
                      <span>{item.label}</span>
                      <span className={styles.filterCount}>{item.count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <div className={styles.mainContent}>

            {/* Active Filters Bar */}
            <div className={styles.activeFiltersBar}>
              <span className="title_24">Active Filters:</span>
              <div className={styles.activeTags}>
                {activeFilters.map((filter, idx) => (
                  <div key={idx} className={styles.tag}>
                    {filter}
                    <button onClick={() => removeFilter(filter)}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 1L9 9M9 1L1 9" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Post */}
            {featuredPost && (
              <div className={styles.featuredPost}>
                <div className={styles.featuredImageWrapper}>
                  <Image
                    src={featuredPost.imageSrc}
                    alt={featuredPost.title}
                    fill
                    className={styles.featuredImage}
                  />
                </div>
                <div className={styles.featuredContent}>
                  <div className={styles.metaData}>
                    <div className={styles.date}>
                      <CalendarIcon />
                      {featuredPost.date}
                    </div>
                    <div className={styles.categoryTags}>
                      <span className={`${styles.categoryTag} ${styles.red}`}>{featuredPost.tags[0]}</span>
                      {featuredPost.tags[1] && <span className={`${styles.categoryTag} ${styles.green}`}>{featuredPost.tags[1]}</span>}
                    </div>
                  </div>
                  <h2 className="title_40">{featuredPost.title}</h2>
                  <p className={styles.featuredDesc}>{featuredPost.description}</p>
                  <Link href={`/blogs/${featuredPost.id}`} className="btn-outline btn-outline-red" style={{ display: 'inline-block', textAlign: 'center' }}>Read more</Link>
                </div>
              </div>
            )}

            {/* Grid Posts */}
            <div className={styles.postsGrid}>
              {gridPosts.map((post) => (
                <div key={post.id} className={styles.postCard}>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={post.imageSrc}
                      alt={post.title}
                      fill
                      className={styles.featuredImage}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.metaData}>
                      <div className={styles.date}>
                        <CalendarIcon />
                        {post.date}
                      </div>
                      <div className={styles.categoryTags}>
                        <span className={`${styles.categoryTag} ${styles.green}`}>{post.tags[0]}</span>
                        {post.tags[1] && <span className={`${styles.categoryTag} ${styles.red}`}>{post.tags[1]}</span>}
                      </div>
                    </div>
                    <h3 className="title_24">{post.title}</h3>
                    <p className={styles.cardDesc}>{post.description}</p>
                    <Link href={`/blogs/${post.id}`} className={styles.cardReadMore}>
                      Read More
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
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
