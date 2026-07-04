import styles from './BecomePartnerForm.module.css';

export default function BecomePartnerForm() {
  return (
    <section className="mt_80">
      <div className="container-1600">
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h3 className='title_40'>Submit your corporate details to our Alliance Directors</h3>
          </div>
          <form className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Full Name</label>
                <input type="text" placeholder="e.g., Jane Doe" required />
              </div>
              <div className={styles.formGroup}>
                <label>Corporate Email</label>
                <input type="email" placeholder="e.g., name@yourcompany.com" required />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Phone Number</label>
                <input type="tel" placeholder="e.g., +1 (555) 000-0000" required />
              </div>
              <div className={styles.formGroup}>
                <label>Company Name</label>
                <input type="text" placeholder="e.g Ahmedabad" required />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Website URL</label>
                <input type="url" placeholder="e.g., +1 (555) 000-0000" />
              </div>
              <div className={styles.formGroup}>
                <label>Partnership Type</label>
                <div className={styles.selectWrapper}>
                  <select required defaultValue="">
                    <option value="" disabled>e.g Ahmedabad</option>
                    <option value="strategic">Strategic Partner</option>
                    <option value="technology">Technology Partner</option>
                    <option value="channel">Channel Partner</option>
                    <option value="referral">Referral Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Executive Summary</label>
              <textarea placeholder="Briefly detail your core capabilities and the strategic synergy you envision with the Safal Group..." rows={3} required></textarea>
            </div>

            <div>
              <button type="submit" className={`btn-outline btn-outline-red ${styles.submitBtn}`}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
