import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const navLinks = [
    { title: 'The Company', href: '#', hasDropdown: true },
    { title: 'Our Division', href: '#', hasDropdown: true },
    { title: 'Industries We Serve', href: '#', hasDropdown: false },
    { title: 'Partnerships', href: '#', hasDropdown: true },
    { title: 'Insights', href: '#', hasDropdown: true },
    { title: 'Investors', href: '#', hasDropdown: true },
  ];

  return (
    <section className={styles.heroSection}>
      {/* Header */}
      <header className={`${styles.header} container-1800`}>
        <div className={styles.logo}>
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
        </div>
        
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

        <Link href="#contact" className={styles.getInTouchBtn}>
          Get In Touch
        </Link>
      </header>

      {/* Main Content */}
      <div className={`${styles.contentContainer} container-1800`}>
        {/* Left Column */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>
           <strong> The Architecture of<br />
            Global Enterprise.</strong>
          </h1>
          <p className={styles.description}>
            Three strategic pillars. One unified holding company. From intelligent industrial automation to elite financial advisory, we architect the frameworks that power industry leaders.
          </p>
          <Link href="#discover" className={styles.discoverBtn}>
            Discover Safal Divisions
          </Link>
        </div>

        {/* Right Column - Visual Graphic */}
        <div className={styles.visualContent}>
          <div className={styles.graphicWrapper}>
            <Image 
              src="/hero-glass-shapes.png" 
              alt="Hero Graphic Full" 
              width={650} 
              height={650}
              className={styles.fullImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
