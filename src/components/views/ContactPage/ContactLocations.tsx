import styles from './ContactLocations.module.css';
import Image from 'next/image';

export default function ContactLocations() {
  return (
    <section className={`mt_80 `}>
      <div className='container-1600'>
        <div className={styles.locationSection}>
          <div className={styles.globeBg}>
            <Image
              src={`/images/contact-locatin.png`}
              alt="Globe Background"
              fill
              className={styles.globeImage}
            />
          </div>
          <div className={styles.container}>
            <div className={`${styles.textContent}`}>
              <h2 className="title_60">A Global Footprint. A Local Partnership.</h2>
              <p className={styles.description}>
                With strategic hubs across India, the UAE, and the USA, Safal delivers global execution with localized understanding.
              </p>
              <p>Engage with the team closest to you, and scale with a partner that operates without boundaries.</p>
            </div>

            <div className={styles.locationsContainer}>
              {/* India Office */}
              <div className={styles.indiaOfficeBlock}>
                <h3 className="title_24">India Office</h3>
                <div className={styles.indiaOfficeContent}>
                  <div className={styles.addressItem}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <p>Shivalik Corporate Park, B Wing, Second Floor, 202-202A, 205-205A, Opp. Ashwamedh Bunglows Part, Behind Sainik Petrol Pump, Nr Shymal Cross Roads, Satellite, Ahmedabad 380015</p>
                  </div>

                  <div className={styles.contactItems}>
                    <div className={styles.contactItem}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <p><a href="tel:919737045566"> +91 97370 45566 </a> &nbsp; / &nbsp; 
                      <a href="tel:919737045561">+91 97370 45561</a></p>
                    </div>
                    <div className={styles.contactItem}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <p><a href="mailto:hello@safalinfosoft.com">hello@safalinfosoft.com</a></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.divider}></div>

              {/* UAE & USA Offices */}
              <div className={styles.bottomOfficesRow}>
                {/* UAE Office */}
                <div className={styles.officeBlock}>
                  <h3 className="title_24">UAE Office</h3>
                  <div className={styles.addressItem}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <p>1141, 11th Floor, Tamani Arts Building, Business Bay, Dubai - United Arab Emirates</p>
                  </div>
                  <div className={styles.contactItemsStacked}>
                    <div className={styles.contactItem}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <p><a href="tel:919737045567"> +91 97370 45567</a> &nbsp; / &nbsp;
                      <a href="tel:919879636303"> +91 98796 36303</a> </p>
                    </div>
                    <div className={styles.contactItem}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <p><a href="mailto:uae@safalinfosoft.com">uae@safalinfosoft.com</a></p>
                    </div>
                  </div>
                </div>

                {/* USA Office */}
                <div className={styles.officeBlock}>
                  <h3 className="title_24">USA Office</h3>
                  <div className={styles.addressItem}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <p>5511 Mercier Street, Lewis Center, Ohio 43035 United States</p>
                  </div>
                  <div className={styles.contactItemsStacked}>
                    {/* <div className={styles.contactItem}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <p><a href="tel:+919737045561">+91 97370 45561</a></p>
                    </div> */}
                    <div className={styles.contactItem}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <p><a href="mailto:usa@safalinfosoft.com">usa@safalinfosoft.com</a></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
