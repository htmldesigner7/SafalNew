import React from 'react';
import Image from 'next/image';
import styles from './BlogDetail.module.css';
import { mockPosts } from '@/data/mockPosts';

const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M21 18.75V11.25C21 10.6533 20.7629 10.081 20.341 9.65901C19.919 9.23705 19.3467 9 18.75 9H5.25C4.65326 9 4.08097 9.23705 3.65901 9.65901C3.23705 10.081 3 10.6533 3 11.25V18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75Z" stroke="#D54B26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function BlogDetail({ id }: { id?: string }) {
  const post = mockPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className={styles.pageWrapper}>
        <div className={`container-1600 ${styles.contentContainer}`}>
          <h1 className={styles.title} style={{ marginTop: '50px' }}>Blog Post Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={`container-1600 ${styles.contentContainer}`}>
        <div className={styles.headerMeta}>
          <div className={styles.date}>
            <CalendarIcon />
            <span>{post.date}</span>
          </div>
        </div>
        
        <h1 className={styles.title}>
          {post.title}
        </h1>
        
        <p className={styles.subtitle}>
          {post.description}
        </p>

        <div className={styles.imageWrapper}>
          <Image 
            src={post.imageSrc} 
            alt={post.title} 
            fill 
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.textContent}>
          {post.content ? (
            post.content.map((section, idx) => (
              <React.Fragment key={idx}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs && section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
                {section.imageSrc && (
                  <div className={styles.imageWrapper} style={{ margin: '40px 0' }}>
                    <Image 
                      src={section.imageSrc} 
                      alt={section.imageAlt || 'Blog Image'} 
                      fill 
                      className={styles.image}
                    />
                  </div>
                )}
              </React.Fragment>
            ))
          ) : (
            <p>Full content for this blog post is coming soon.</p>
          )}
        </div>
      </div>
    </div>
  );
}
