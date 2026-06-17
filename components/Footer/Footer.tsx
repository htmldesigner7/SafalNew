import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container-1600">
        <div className={styles.topSection}>
          
          {/* Column 1: Brand & Contact */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              {/* Replace with actual logo if needed, or text */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'white', fontWeight: 'bold', fontSize: '20px' }}>
                <div style={{ width: '40px', height: '40px', border: '2px solid white', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px' }}>Logo</span>
                </div>
                <div>
                  SAFAL<br/>
                  <span style={{ fontSize: '10px', fontWeight: 'normal', letterSpacing: '1px' }}>INFOSOFT LIMITED</span>
                </div>
              </div>
            </div>
            
            <p className={styles.companyDesc}>
              Ideaz Ventures is a startup execution partner helping founders validate ideas, build scalable products, and launch technology ventures globally.
            </p>
            
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +91 97370 45561
              </div>
              <div className={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                hello@safalinfosoft.com
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              {/* Instagram */}
              <Link href="#" className={styles.socialIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              {/* Facebook */}
              <Link href="#" className={styles.socialIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              {/* LinkedIn */}
              <Link href="#" className={styles.socialIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
              {/* WhatsApp */}
              <Link href="#" className={styles.socialIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </Link>
              {/* Apple */}
              <Link href="#" className={styles.socialIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.15 2.95.97 3.67 2.28-3.12 1.76-2.58 5.92.51 7.15-.65 1.48-1.57 2.97-2.83 3.58zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Divisions */}
          <div className={styles.linkCol} style={{ flex: 1.5 }}>
            <div className={styles.colBlock}>
              <h4 className={styles.colTitle}>Divisions</h4>
              <ul className={styles.linkList}>
                <li className={styles.linkItem}><Link href="#">Enterprise Products & Platforms</Link></li>
                <li className={styles.linkItem}><Link href="#">Brand, Digital & Creative Services</Link></li>
                <li className={styles.linkItem}><Link href="#">Startup Product Development & Consulting</Link></li>
                <li className={styles.linkItem}><Link href="#">Industrial Automation & IoT</Link></li>
                <li className={styles.linkItem}><Link href="#">AI & Emerging Technology</Link></li>
                <li className={styles.linkItem}><Link href="#">Business & Financial Advisory</Link></li>
                <li className={styles.linkItem}><Link href="#">Financial Accounting</Link></li>
                <li className={styles.linkItem}><Link href="#">Technology Staffing</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: About & Insights */}
          <div className={styles.linkColBordered}>
            <div className={styles.colBlock}>
              <h4 className={styles.colTitle}>About</h4>
              <ul className={styles.linkList}>
                <li className={styles.linkItem}><Link href="#">Our Story & Vision</Link></li>
                <li className={styles.linkItem}><Link href="#">Leadership Team</Link></li>
                <li className={styles.linkItem}><Link href="#">Group Structure</Link></li>
                <li className={styles.linkItem}><Link href="#">Values & Culture</Link></li>
                <li className={styles.linkItem}><Link href="#">Sustainability</Link></li>
              </ul>
            </div>
            <div className={styles.colBlock}>
              <h4 className={styles.colTitle}>Insights</h4>
              <ul className={styles.linkList}>
                <li className={styles.linkItem}><Link href="#">Blogs</Link></li>
                <li className={styles.linkItem}><Link href="#">Case Studies</Link></li>
                <li className={styles.linkItem}><Link href="#">News & Announcements</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Quick Links & Careers */}
          <div className={styles.linkColBordered}>
            <div className={styles.colBlock}>
              <h4 className={styles.colTitle}>Quick Links</h4>
              <ul className={styles.linkList}>
                <li className={styles.linkItem}><Link href="#">Home</Link></li>
                <li className={styles.linkItem}><Link href="#">Industries</Link></li>
                <li className={styles.linkItem}><Link href="#">Contact Us</Link></li>
              </ul>
            </div>
            <div className={styles.colBlock}>
              <h4 className={styles.colTitle}>Careers</h4>
              <ul className={styles.linkList}>
                <li className={styles.linkItem}><Link href="#">Life at Safal</Link></li>
                <li className={styles.linkItem}><Link href="#">Open Positions</Link></li>
                <li className={styles.linkItem}><Link href="#">Internships & Mentorship</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 5: Investors & Partnerships */}
          <div className={styles.linkColBordered}>
            <div className={styles.colBlock}>
              <h4 className={styles.colTitle}>Investors</h4>
              <ul className={styles.linkList}>
                <li className={styles.linkItem}><Link href="#">Investor Relations</Link></li>
                <li className={styles.linkItem}><Link href="#">Financial Reports & Disclosures</Link></li>
                <li className={styles.linkItem}><Link href="#">Corporate Governance</Link></li>
              </ul>
            </div>
            <div className={styles.colBlock}>
              <h4 className={styles.colTitle}>Partnerships</h4>
              <ul className={styles.linkList}>
                <li className={styles.linkItem}><Link href="#">Strategic Partnerships</Link></li>
                <li className={styles.linkItem}><Link href="#">Become a Partner</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.bottomLinks}>
            <Link href="#">Privacy Policy</Link> | <Link href="#">Terms & Conditions</Link>
          </div>
          <div className={styles.copyright}>
            © Copyright 2026. All rights reserved Safal Infosoft Limited.
          </div>
        </div>
      </div>
    </footer>
  );
}
