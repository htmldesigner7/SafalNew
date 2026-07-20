'use client';
import React, { useState } from 'react';
import { jobsData } from '@/data/jobsData';
import styles from './OpenPositionsSection.module.css';
import Link from 'next/link';

export default function OpenPositionsSection() {
  const [selectedDept, setSelectedDept] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Extract unique departments for the dropdown
  const departments = Array.from(new Set(jobsData.map(job => job.department)));

  const filteredJobs = selectedDept
    ? jobsData.filter(job => job.department === selectedDept)
    : jobsData;

  return (
    <section className={`${styles.openPositionsSection} mt_80`}>
      <div className="container-1600">
        <div className={`${styles.header} text-center`}>
          <h2 className="title_60">A Borderless Brain-Trust.</h2>
          <p>
            Talent is not bound by geography, and neither are we.
          </p>
          <p>Our global infrastructure enables seamless collaboration across continents. Work alongside architects in New York, strategists in Dubai, and engineering leads in Ahmedabad, all within a unified, real-time ecosystem.</p>
          <p>You are not joining a team in one location, you are joining a synchronized global network of high-performance operators.</p>

          <div className={styles.filterWrapper}>
            <div className={styles.customDropdownContainer}>
              <button 
                className={styles.dropdownButton} 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedDept || 'Select the department'}
                <svg className={`${styles.dropdownArrow} ${isDropdownOpen ? styles.open : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D54B26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              
              <div className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.show : ''}`}>
                <div className={styles.dropdownItem} onClick={() => { setSelectedDept(''); setIsDropdownOpen(false); }}>
                  All Departments
                </div>
                {departments.map(dept => (
                  <div key={dept} className={styles.dropdownItem} onClick={() => { setSelectedDept(dept); setIsDropdownOpen(false); }}>
                    {dept}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.jobsList}>
          {filteredJobs.map(job => (
            <div key={job.id} className={styles.jobCard}>
              <div className={styles.jobContent}>
                <h3 className="title_24" style={{ marginBottom: '0' }}>{job.title}</h3>
                <p className={styles.jobDesc}>{job.description}</p>
                <div className={styles.jobMeta}>
                  <div className={styles.metaItem}>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.332 9.91732H5.66536C4.10056 9.91732 2.83203 11.1858 2.83203 12.7507V28.334C2.83203 29.8988 4.10056 31.1673 5.66536 31.1673H28.332C29.8969 31.1673 31.1654 29.8988 31.1654 28.334V12.7507C31.1654 11.1858 29.8969 9.91732 28.332 9.91732H22.6654M11.332 9.91732H22.6654M11.332 9.91732V5.66732C11.332 4.10251 12.6006 2.83398 14.1654 2.83398H19.832C21.3969 2.83398 22.6654 4.10251 22.6654 5.66732V9.91732M31.1654 17.0007H24.082M24.082 17.0007H9.91536M24.082 17.0007V19.834M9.91536 17.0007H2.83203M9.91536 17.0007V19.834" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span>{job.department}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.5472 21.6577L17.0013 31.1673L25.4554 21.6577C31.9395 14.364 26.7611 2.83398 17.0013 2.83398C7.24143 2.83398 2.06309 14.364 8.5472 21.6577Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M21.25 14.166C21.25 16.5133 19.3473 18.416 17 18.416C14.6529 18.416 12.75 16.5133 12.75 14.166C12.75 11.8188 14.6529 9.91602 17 9.91602C19.3473 9.91602 21.25 11.8188 21.25 14.166Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span>{job.location}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.9987 8.50065V17.0007L22.6654 22.6673M31.1654 17.0007C31.1654 24.8246 24.8227 31.1673 16.9987 31.1673C9.17466 31.1673 2.83203 24.8246 2.83203 17.0007C2.83203 9.17661 9.17466 2.83398 16.9987 2.83398C24.8227 2.83398 31.1654 9.17661 31.1654 17.0007Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span>{job.type}</span>
                  </div>
                </div>
              </div>
              <div className={styles.jobAction}>
                <Link href={`/open-positions/${job.id}`}>
                  <button className="btn-primary">Apply Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
