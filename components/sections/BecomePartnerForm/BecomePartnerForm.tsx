"use client";

import styles from './BecomePartnerForm.module.css';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { partnerSchema } from "@/validation/partnerSchema";
import toast, { Toaster } from 'react-hot-toast';
import { z } from "zod";

type PartnerFormData = z.infer<typeof partnerSchema>;

export default function BecomePartnerForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PartnerFormData>({
    resolver: zodResolver(partnerSchema),
  });

  const onSubmit = async (data: PartnerFormData) => {
    const loadingToast = toast.loading('Submitting your details...');
    try {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const responseText = await response.text();
      const isJsonResponse = response.headers.get("content-type")?.includes("application/json");
      const result = isJsonResponse && responseText
        ? JSON.parse(responseText)
        : { error: responseText || "The server returned an empty response." };
      
      if (response.ok) {
        toast.success(result.message || 'Thank you! Your details have been submitted successfully.', { id: loadingToast });
        reset();
      } else {
        toast.error(result.errors ? 'Please check the form fields.' : (result.error || result.message || 'Failed to submit form.'), { id: loadingToast });
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('An unexpected error occurred. Please try again later.', { id: loadingToast });
    }
  };

  return (
    <section className="mt_80">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container-1600">
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h3 className='title_40'>Submit your corporate details to our Alliance Directors</h3>
          </div>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Full Name</label>
                <input type="text" placeholder="e.g., Jane Doe" {...register("fullName")} />
                {errors.fullName && <p className="validationError">{errors.fullName.message}</p>}
              </div>
              <div className={styles.formGroup}>
                <label>Corporate Email</label>
                <input type="email" placeholder="e.g., name@yourcompany.com" {...register("corporateEmail")} />
                {errors.corporateEmail && <p className="validationError">{errors.corporateEmail.message}</p>}
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Phone Number</label>
                <input type="tel" placeholder="e.g., +1 (555) 000-0000" {...register("phoneNumber")} />
                {errors.phoneNumber && <p className="validationError">{errors.phoneNumber.message}</p>}
              </div>
              <div className={styles.formGroup}>
                <label>Company Name</label>
                <input type="text" placeholder="e.g., Safal Group" {...register("companyName")} />
                {errors.companyName && <p className="validationError">{errors.companyName.message}</p>}
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Website URL (Optional)</label>
                <input type="url" placeholder="https://www.yourcompany.com" {...register("websiteUrl")} />
                {errors.websiteUrl && <p className="validationError">{errors.websiteUrl.message}</p>}
              </div>
              <div className={styles.formGroup}>
                <label>Partnership Type</label>
                <div className={styles.selectWrapper}>
                  <select defaultValue="" {...register("partnershipType")}>
                    <option value="" disabled>Select</option>
                    <option value="Channel Partner">Channel Partner</option>
                    <option value="Implement Consultants">Implement Consultants </option>
                    <option value="Functional Consultants">Functional Consultants</option>
                    {/* <option value="referral">Referral Partner</option>
                    <option value="other">Other</option> */}
                  </select>
                </div>
                {errors.partnershipType && <p className="validationError">{errors.partnershipType.message}</p>}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Executive Summary</label>
              <textarea placeholder="Briefly detail your core capabilities and the strategic synergy you envision with the Safal Group..." rows={3} {...register("executiveSummary")}></textarea>
              {errors.executiveSummary && <p className="validationError">{errors.executiveSummary.message}</p>}
            </div>

            <div>
              <button type="submit" className={`btn-outline btn-outline-red ${styles.submitBtn}`} disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
