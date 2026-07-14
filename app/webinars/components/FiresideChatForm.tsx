"use client";

import styles from './FiresideChatForm.module.css';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { webinarSchema } from "@/validation/webinarSchema";
import toast, { Toaster } from 'react-hot-toast';
import { z } from "zod";

type WebinarFormData = z.infer<typeof webinarSchema>;

export default function FiresideChatForm() {
  const {
    register, // Register function to register input fields
    handleSubmit, // validate and handle form submission
    reset, // Reset form fields after submission
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<WebinarFormData>({
    resolver: zodResolver(webinarSchema),
  });

  const onSubmit = async (data: WebinarFormData) => {
      const loadingToast = toast.loading('Submitting your message...');
        try {
            const response = await fetch("/api/webinar", {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(data),
            });
            const responseText = await response.text();
            const isJsonResponse = response.headers.get("content-type")?.includes("application/json");
            const result = isJsonResponse && responseText
              ? JSON.parse(responseText)
              : { error: responseText || "The server returned an empty response." };
            
            if (response.ok) {
                // alert("Form Submitted");
                // reset();
                toast.success(result.message || 'Thank you! Your message has been sent successfully.', { id: loadingToast });
                reset();
                //setFormData({ fullName: '', service: '', phone: '', email: '', message: '' }); // Reset form
            } else {
                // alert(result.message);
                toast.error(result.error || 'Failed to submit form. Please try again.', { id: loadingToast });
            }
        } catch (error) {
            console.error('Submission error:', error);
            toast.error('An unexpected error occurred. Please try again later.', { id: loadingToast });
        } finally {
            //setStatus('idle');
        }
  };

  return (
    <section className="mt_80">
      <Toaster position="top-center" reverseOrder={false} />
      <div className={styles.wrapper}>
        <div className={styles.layout}>
          
          <div className={styles.leftCol}>
            <h2 className="title_40 mb_40">Watch the On-Demand<br/>Fireside Chat</h2>
            <p>
              Global payroll is at a breaking point. Discover why leading enterprises are shifting toward a hybrid Global-Regional payroll model — and what that means for 2026 and beyond.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tellus euismod cursus sodales dignissim tortor nullam. Enim dui vel lorem risus pellentesque egestas faucibus sed. Dictum proin urna imperdiet faucibus at euismod eu magna. Mi tellus hac orci sed etiam phasellus. Tortor vivamus in enim donec
            </p>
          </div>

          <div className={styles.rightCol}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Email ID</label>
                  <input type="email" placeholder="e.g., name@yourcompany.com" {...register("email")}/>
                  <p className="validationError">{errors.email?.message}</p>
                </div>
                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <input type="text" placeholder="e.g., Jane Doe" {...register("fullName")} />
                  <p className="validationError">{errors.fullName?.message}</p>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Are you interested in Safal product demo?</label>
                <div className={styles.selectWrapper}>
                  <select {...register("interested")}>
                    <option value="">Please Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <p className="validationError">{errors.interested?.message}</p>
              </div>

              <div className={styles.privacyText}>
                Please read our <a href="#" className={styles.privacyLink}>Privacy Notice</a>
              </div>

              <div className={styles.checkboxRow}>
                <input type="checkbox" id="consent" className={styles.checkbox} {...register("consent")}/>
                <label htmlFor="consent" className={styles.checkboxLabel}>
                  Yes, I will be happy to receive communication on Safal products, services and events
                </label>
                <p className="validationError">{errors.consent?.message}</p>
              </div>
              

              <button type="submit" className="btn-outline btn-outline-red" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
