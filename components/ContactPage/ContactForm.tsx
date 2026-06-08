import Image from 'next/image';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <section className={`${styles.formSection} mt_80`}>
      <div className={`${styles.container} container-1600`}>
        <div className={styles.leftColumn}>
          <h2 className="title_60">Connect with Our<br/>Global Team.</h2>
          <div className={styles.imageWrapper}>
             <Image 
                src="/handshake.png" 
                alt="Handshake" 
                width={400} 
                height={300}
                className={styles.handshakeImage}
              />
          </div>
        </div>
        
        <div className={styles.rightColumn}>
          <form className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Full Name</label>
                <input type="text" placeholder="e.g., John Doe" />
              </div>
              <div className={styles.formGroup}>
                <label>Service Interested In</label>
                <div className={styles.selectWrapper}>
                  <select>
                    <option>Select a division</option>
                    <option>Enterprise Products & Platforms</option>
                    <option>Brand, Digital & Creative</option>
                    <option>Financial Advisory</option>
                  </select>
                </div>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Phone Number</label>
                <input type="tel" placeholder="e.g., +1 (555) 000-0000" />
              </div>
              <div className={styles.formGroup}>
                <label>Email ID</label>
                <input type="email" placeholder="e.g., name@yourcompany.com" />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea placeholder="Briefly describe your project or requirements..." rows={4}></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
