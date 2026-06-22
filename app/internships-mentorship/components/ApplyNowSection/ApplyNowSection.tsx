'use client';
import React, { useRef } from 'react';
import styles from './ApplyNowSection.module.css';

export default function ApplyNowSection() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <section className="mt_80 mb_80">
      <div className="container-1600">
        <div className={styles.container}>
          <h2 className={`${styles.title} title_40`}>Apply Now</h2>
          
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGrid}>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Full Name</label>
                <input type="text" className={styles.input} placeholder="e.g. Jane Doe" />
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Email ID</label>
                <input type="email" className={styles.input} placeholder="e.g. name@yourcompany.com" />
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Phone Number</label>
                <input type="tel" className={styles.input} placeholder="e.g. +1 (555) 000-0000" />
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Current Location :</label>
                <input type="text" className={styles.input} placeholder="e.g. Ahmedabad" />
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>Upload Resume :</label>
                <div className={styles.uploadBox} onClick={handleUploadClick}>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    style={{ display: 'none' }} 
                    accept=".pdf,.doc,.docx"
                  />
                  <span className={styles.uploadText}>Attach Your Resume in PDF, Word Format</span>
                  <span className={styles.uploadSubText}>Max Size: 5 Mb</span>
                </div>
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>Cover Letter</label>
                <textarea className={styles.textarea} placeholder="Briefly describe About you"></textarea>
              </div>

            </div>
            
            <button type="submit" className="btn-outline btn-outline-red mt_40">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
