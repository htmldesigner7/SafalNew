"use client";

import styles from './FiresideChatForm.module.css';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { webinarSchema } from "@/validation/webinarSchema";

export default function FiresideChatForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
    resolver: zodResolver(webinarSchema),
  });

  const onSubmit = async (data) => {
    const response = await fetch("/api/webinar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      alert("Form Submitted");
      reset();
    } else {
      alert(result.message);
    }
  };

  return (
    <section className="mt_80">
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
                  <p className={styles.error}>{errors.email?.message}</p>
                </div>
                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <input type="text" placeholder="e.g., Jane Doe" {...register("fullName")} />
                  <p className={styles.error}>{errors.fullName?.message}</p>
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
                  <p className={styles.error}>{errors.interested?.message}</p>
                </div>
              </div>

              <div className={styles.privacyText}>
                Please read our <a href="#" className={styles.privacyLink}>Privacy Notice</a>
              </div>

              <div className={styles.checkboxRow}>
                <input type="checkbox" id="consent" className={styles.checkbox} {...register("consent")}/>
                <label htmlFor="consent" className={styles.checkboxLabel}>
                  Yes, I will be happy to receive communication on Safal products, services and events
                </label>
              </div>
              <p className={styles.error}>{errors.consent?.message}</p>

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
