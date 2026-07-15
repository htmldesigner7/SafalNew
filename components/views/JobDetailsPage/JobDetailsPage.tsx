'use client';
import React from 'react';
import { jobsData } from '@/data/jobsData';
import styles from './JobDetailsPage.module.css';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobApplicationSchema } from "@/validation/jobApplicationSchema";
import toast, { Toaster } from 'react-hot-toast';
import { z } from "zod";

type JobFormData = z.infer<typeof jobApplicationSchema>;

export default function JobDetailsPage({ jobId }: { jobId: string }) {
  const job = jobsData.find(j => j.id === jobId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<JobFormData>({
    resolver: zodResolver(jobApplicationSchema),
    defaultValues: { jobId }
  });

  const onSubmit = async (data: JobFormData) => {
    const loadingToast = toast.loading('Submitting application...');
    try {
      const formData = new FormData();
      formData.append("jobId", data.jobId);
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("location", data.location);
      formData.append("coverLetter", data.coverLetter);
      formData.append("resume", data.resume);

      const response = await fetch("/api/job-application", {
        method: "POST",
        body: formData,
      });
      const responseText = await response.text();
      const isJsonResponse = response.headers.get("content-type")?.includes("application/json");
      const result = isJsonResponse && responseText
        ? JSON.parse(responseText)
        : { error: responseText || "The server returned an empty response." };
      
      if (response.ok) {
        toast.success(result.message || 'Application submitted successfully.', { id: loadingToast });
        reset();
      } else {
        toast.error(result.message || 'Failed to submit application.', { id: loadingToast });
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('An unexpected error occurred. Please try again later.', { id: loadingToast });
    }
  };

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
      <Toaster position="top-center" reverseOrder={false} />
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
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label>Full Name</label>
                <input type="text" placeholder="e.g., Jane Doe" {...register("fullName")} />
                {errors.fullName && <p style={{color: 'red', fontSize: '12px', marginTop: '4px'}}>{errors.fullName.message}</p>}
              </div>
              <div className={styles.formGroup}>
                <label>Email ID</label>
                <input type="email" placeholder="e.g., name@yourcompany.com" {...register("email")} />
                {errors.email && <p style={{color: 'red', fontSize: '12px', marginTop: '4px'}}>{errors.email.message}</p>}
              </div>
              <div className={styles.formGroup}>
                <label>Phone Number</label>
                <input type="tel" placeholder="e.g., +1 (555) 000-0000" {...register("phoneNumber")} />
                {errors.phoneNumber && <p style={{color: 'red', fontSize: '12px', marginTop: '4px'}}>{errors.phoneNumber.message}</p>}
              </div>
              <div className={styles.formGroup}>
                <label>Current Location :</label>
                <input type="text" placeholder="e.g. Ahmedabad" {...register("location")} />
                {errors.location && <p style={{color: 'red', fontSize: '12px', marginTop: '4px'}}>{errors.location.message}</p>}
              </div>
            </div>

            <div className={styles.formGroup} style={{ marginBottom: '24px' }}>
              <label>Upload Resume :</label>
              <div className={styles.uploadArea}>
                <input 
                  type="file" 
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      setValue("resume", e.target.files[0], { shouldValidate: true });
                    }
                  }}
                  style={{ width: '100%', marginBottom: '10px' }}
                />
                <div className={styles.uploadText}>Attach Your Resume In PDF, Word Format</div>
                <div className={styles.uploadSubtext}>Max Size: 5 Mb</div>
              </div>
              {errors.resume && <p style={{color: 'red', fontSize: '12px', marginTop: '4px'}}>{errors.resume.message as string}</p>}
            </div>

            <div className={styles.formGroup} style={{ marginBottom: '24px' }}>
              <label>Cover Letter</label>
              <textarea placeholder="Briefly describe About you" rows={4} {...register("coverLetter")}></textarea>
              {errors.coverLetter && <p style={{color: 'red', fontSize: '12px', marginTop: '4px'}}>{errors.coverLetter.message}</p>}
            </div>

            <button type="submit" className="btn-outline btn-outline-red " disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
}
