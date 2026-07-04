'use client';
import { useState } from 'react';
import styles from './CaseStudyResults.module.css';

export default function CaseStudyResults() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className={"mt_80"}>
      <div className={`container-1600 ${styles.container}`}>
        
        <div className={styles.leftCol}>
          <h2 className={`title_60 ${styles.title}`}>Result We Deliver</h2>
          
          <div className={styles.grid}>
            <div className={styles.gridItem}>
              <h3 className="title_24">Lorem ipsum .</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
            
            <div className={styles.gridItem}>
              <h3 className="title_24">Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className={styles.gridItem}>
              <h3 className="title_24">Lorem ipsum dolor .</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className={styles.gridItem}>
              <h3 className="title_24">Lorem ipsum dolor sit .</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.rightCol}>
          {!isPlaying ? (
            <div className={styles.videoThumbnail} onClick={() => setIsPlaying(true)}>
              <div className={styles.playButton}>
                <svg width="24" height="24" viewBox="0 0 24 24" className={styles.playIcon} xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" />
                </svg>
              </div>
            </div>
          ) : (
            <div className={styles.videoPlayer}>
              <video 
                controls 
                autoPlay 
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
