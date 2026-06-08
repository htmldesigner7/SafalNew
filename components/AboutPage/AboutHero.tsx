import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  const navLinks = [
    { title: 'The Company', href: '/', hasDropdown: true },
    { title: 'Our Division', href: '/', hasDropdown: true },
    { title: 'Industries We Serve', href: '/', hasDropdown: false },
    { title: 'Partnerships', href: '/', hasDropdown: true },
    { title: 'Insights', href: '/', hasDropdown: true },
    { title: 'Investors', href: '/', hasDropdown: true },
  ];

  return (
    <section className={`${styles.heroSection} mt_80`}>
      {/* Header */}
      <header className={`${styles.header} container-1800`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.logoText}>
            <strong>SAFAL</strong>
            <span>INFOSOFT LIMITED</span>
          </div>
        </Link>
        
        <nav className={styles.navigation}>
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} className={styles.navLink}>
              {link.title}
              {link.hasDropdown && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-primary">
          Get In Touch
        </Link>
      </header>

      {/* Main Content */}
      <div className={`${styles.contentContainer} container-1800`}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
           Architecting the Digital<br />
           Backbone of Tomorrow.
          </h1>
          <p className={styles.description}>
            Safal Infosoft is not just adapting to the future of global enterprise: we are building the infrastructure that powers it. From heavy industry automation to AI-driven ecosystems, we engineer the scale that moves markets.
          </p>
        </div>

        <div className={styles.visualContent}>
          <div className={styles.graphicWrapper}>
            <Image 
              src="/about/about_hero.png" 
              alt="About Hero Graphic" 
              width={600} 
              height={600}
              className={styles.fullImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
