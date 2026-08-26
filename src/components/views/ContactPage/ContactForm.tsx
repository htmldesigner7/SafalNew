"use client";


import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import styles from './ContactForm.module.css';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/validation/contactSchema";
import { withBasePath } from "@/utils/withBasePath";
import { z } from "zod";

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const loadingToast = toast.loading('Submitting your message...');
    try {
      const res = await fetch(withBasePath('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const responseData = await res.json();

      if (res.ok) {
        toast.success(responseData.message || 'Thank you! Your message has been sent successfully.', { id: loadingToast });
        reset();
      } else {
        toast.error(responseData.error || responseData.message || 'Failed to submit form. Please try again.', { id: loadingToast });
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('An unexpected error occurred. Please try again later.', { id: loadingToast });
    }
  };

  return (
    <section className={`${styles.formSection} mt_80`}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container-1600">
        <div className={`${styles.contact}`}>
          <div className={styles.leftColumn}>
            <h2 className="title_60">Reach Out To Our Global Team.</h2>
            <div className={styles.imageWrapper}>
              <Image
                src={`/images/Systemic-Ownership.webp`}
                alt="Handshake"
                width={400}
                height={300}
                className={styles.handshakeImage}
              />
            </div>
          </div>

          <div className={styles.rightColumn}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="e.g., John Doe" 
                    {...register("fullName")}
                    style={{ borderColor: errors.fullName ? 'red' : undefined }}
                  />
                  {errors.fullName && <span style={{color: 'red', fontSize: '12px', marginTop: '4px', display: 'block'}}>{errors.fullName.message}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label>Service Interested In</label>
                  <div className={styles.selectWrapper}>
                    <select {...register("service")}>
                      <option value="">Select a division</option>
                      <option value="Enterprise Products & Platforms">Enterprise Products & Platforms</option>
                      <option value="Brand, Digital & Creative Services">Brand, Digital & Creative Services</option>
                      <option value="Startup Product Development & Consulting">Startup Product Development & Consulting</option>
                      <option value="Industrial Automation & IoT">Industrial Automation & IoT</option>
                      <option value="AI & Emerging Technology">AI & Emerging Technology</option>
                      <option value="Business & Financial Advisory">Business & Financial Advisory</option>
                      <option value="Financial Accounting">Financial Accounting</option>
                      <option value="Technology Staffing">Technology Staffing</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="e.g., +1 (555) 000-0000" 
                    {...register("phone")}
                    style={{ borderColor: errors.phone ? 'red' : undefined }}
                  />
                  {errors.phone && <span style={{color: 'red', fontSize: '12px', marginTop: '4px', display: 'block'}}>{errors.phone.message}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label>Email ID *</label>
                  <input 
                    type="email" 
                    placeholder="e.g., name@yourcompany.com" 
                    {...register("email")}
                    style={{ borderColor: errors.email ? 'red' : undefined }}
                  />
                  {errors.email && <span style={{color: 'red', fontSize: '12px', marginTop: '4px', display: 'block'}}>{errors.email.message}</span>}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Message *</label>
                <textarea 
                  placeholder="Briefly describe your project or requirements..." 
                  rows={4}
                  {...register("message")}
                  style={{ borderColor: errors.message ? 'red' : undefined }}
                ></textarea>
                {errors.message && <span style={{color: 'red', fontSize: '12px', marginTop: '4px', display: 'block'}}>{errors.message.message}</span>}
              </div>

              <div>
                <button type="submit" className="btn-outline btn-outline-red" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
