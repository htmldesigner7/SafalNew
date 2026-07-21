'use client';
import React, { useRef, useState } from 'react';
import styles from './ApplyNowSection.module.css';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { internshipSchema } from "@/validation/internshipSchema";
import toast, { Toaster } from 'react-hot-toast';
import { z } from "zod";

type InternshipFormData = z.infer<typeof internshipSchema>;

export default function ApplyNowSection() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
    clearErrors,
  } = useForm<InternshipFormData>({
    resolver: zodResolver(internshipSchema),
  });

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFileName(file.name);
      setValue("resume", file);
      clearErrors("resume");
    }
  };

  const onSubmit = async (data: InternshipFormData) => {
    const loadingToast = toast.loading('Submitting your application...');
    try {
      const formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("location", data.location);
      formData.append("coverLetter", data.coverLetter);
      formData.append("resume", data.resume as File);

      const response = await fetch("/api/internship", {
        method: "POST",
        body: formData,
      });

      const responseText = await response.text();
      const isJsonResponse = response.headers.get("content-type")?.includes("application/json");
      const result = isJsonResponse && responseText
        ? JSON.parse(responseText)
        : { error: responseText || "The server returned an empty response." };
      
      if (response.ok) {
        toast.success(result.message || 'Thank you! Your application has been submitted.', { id: loadingToast });
        reset();
        setSelectedFileName(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        toast.error(result.errors ? 'Please check the form fields.' : (result.error || result.message || 'Failed to submit application.'), { id: loadingToast });
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('An unexpected error occurred. Please try again later.', { id: loadingToast });
    }
  };

  return (
    <section className="mt_80 mb_80">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container-1600">
        <div className={styles.container}>
          <h2 className={`${styles.title} title_40`}>Apply Now</h2>
          
          {/* eslint-disable-next-line react-hooks/refs */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGrid}>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Full Name</label>
                <input type="text" className={styles.input} placeholder="e.g. Jane Doe" {...register("fullName")} />
                {errors.fullName && <p className="validationError">{errors.fullName.message}</p>}
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Email ID</label>
                <input type="email" className={styles.input} placeholder="e.g. name@yourcompany.com" {...register("email")} />
                {errors.email && <p className="validationError">{errors.email.message}</p>}
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Phone Number</label>
                <input type="tel" className={styles.input} placeholder="e.g. 9876543210" {...register("phoneNumber")} />
                {errors.phoneNumber && <p className="validationError">{errors.phoneNumber.message}</p>}
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Current Location :</label>
                <input type="text" className={styles.input} placeholder="e.g. Ahmedabad" {...register("location")} />
                {errors.location && <p className="validationError">{errors.location.message}</p>}
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>Upload Resume :</label>
                <div className={styles.uploadBox} onClick={handleUploadClick}>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    style={{ display: 'none' }} 
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                  />
                  <span className={styles.uploadText}>
                    {selectedFileName ? `Selected: ${selectedFileName}` : "Attach Your Resume in PDF, Word Format"}
                  </span>
                  <span className={styles.uploadSubText}>Max Size: 5 Mb</span>
                </div>
                {errors.resume && <p className="validationError">{errors.resume.message as string}</p>}
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>Cover Letter</label>
                <textarea className={styles.textarea} placeholder="Briefly describe About you (Max 500 characters)" rows={5} {...register("coverLetter")}></textarea>
                {errors.coverLetter && <p className="validationError">{errors.coverLetter.message}</p>}
              </div>

            </div>
            
            <button type="submit" className="btn-outline btn-outline-red mt_40" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
