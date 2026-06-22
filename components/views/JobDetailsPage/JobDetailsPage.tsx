'use client';
import React from 'react';
import { jobsData } from '@/data/jobsData';
import styles from './JobDetailsPage.module.css';
import Link from 'next/link';

export default function JobDetailsPage({ jobId }: { jobId: string }) {
  const job = jobsData.find(j => j.id === jobId);

  if (!job) {
    return (
      <div className={`${styles.jobDetailsSection} mt_80`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h2>Job not found</h2>
        <Link href="/open-positions" style={{ marginTop: '20px', color: '#D54B26' }}>Back to Open Positions</Link>
      </div>
    );
  }

  return (
    <section className={`${styles.jobDetailsSection} mt_80`}>
      <div className="container-1600">
        {/* Left Column: Job Details */}
      <div className={styles.main}>
          <div className={styles.leftColumn}>
          <h1 className="title_60">{job.title}</h1>
          
          <div className={styles.jobMetaGrid}>
            <div className={styles.metaItem}>
              <div className={styles.bulletPoint}></div>
              <strong>Location:</strong> {job.location}
            </div>
            <div className={styles.metaItem}>
              <div className={styles.bulletPoint}></div>
              <strong>Experience Required:</strong> {job.experience}
            </div>
            <div className={styles.metaItem}>
              <div className={styles.bulletPoint}></div>
              <strong>Job Type:</strong> {job.type}
            </div>
            <div className={styles.metaItem}>
              <div className={styles.bulletPoint}></div>
              <strong>Department:</strong> {job.department}
            </div>
          </div>

          {job.overview && (
            <div className={styles.contentBlock}>
              <h3 className='title_24'>Job Overview</h3>
              <p>{job.overview}</p>
            </div>
          )}

          {job.keyResponsibilities && job.keyResponsibilities.length > 0 && (
            <div className={styles.contentBlock}>
              <h3 className='title_24'>Key Responsibilities</h3>
              <ul>
                {job.keyResponsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {job.tasksAndResponsibilities && job.tasksAndResponsibilities.length > 0 && (
            <div className={styles.contentBlock}>
              <h3 className='title_24'>Tasks & Responsibilities</h3>
              <ul>
                {job.tasksAndResponsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {job.skillsAndExperience && job.skillsAndExperience.length > 0 && (
            <div className={styles.contentBlock}>
              <h3 className='title_24'>Skills & Experience</h3>
              <ul>
                {job.skillsAndExperience.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column: Application Form */}
        <div className={styles.rightColumn}>
          <h2 className={styles.formTitle}>Apply Now</h2>
          
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label>Full Name</label>
                <input type="text" placeholder="e.g., Jane Doe" />
              </div>
              <div className={styles.formGroup}>
                <label>Email ID</label>
                <input type="email" placeholder="e.g., name@yourcompany.com" />
              </div>
              <div className={styles.formGroup}>
                <label>Phone Number</label>
                <input type="tel" placeholder="e.g., +1 (555) 000-0000" />
              </div>
              <div className={styles.formGroup}>
                <label>Current Location :</label>
                <input type="text" placeholder="e.g. Ahmedabad" />
              </div>
            </div>

            <div className={styles.formGroup} style={{ marginBottom: '24px' }}>
              <label>Upload Resume :</label>
              <div className={styles.uploadArea}>
                <div className={styles.uploadText}>Attach Your Resume In PDF, Word Format</div>
                <div className={styles.uploadSubtext}>Max Size: 5 Mb</div>
              </div>
            </div>

            <div className={styles.formGroup} style={{ marginBottom: '24px' }}>
              <label>Cover Letter</label>
              <textarea placeholder="Briefly describe About you" rows={4}></textarea>
            </div>

            <button type="submit" className="btn-outline btn-outline-red ">Submit</button>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
}
