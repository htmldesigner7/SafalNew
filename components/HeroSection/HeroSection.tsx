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
    <section className={`${styles.heroSection}`}>
      {/* Header */}
      <header className={`${styles.header} container-1800`}>
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Safal Logo"
            height={80}
            width={200}
          />
        </Link>

        <nav className={styles.navigation}>
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} className={styles.navLink}>
              {link.title}
              {link.hasDropdown && (
                <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.75 0.75L8.25 8.25L0.75 0.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
        {/* Left Column */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            <strong> The Architecture of
              Global Enterprise.</strong>
          </h1>
          <p className={styles.description}>
            Three strategic pillars. One unified holding company. From intelligent industrial automation to elite financial advisory, we architect the frameworks that power industry leaders.
          </p>
          <Link href="#discover" className="btn-outline">
            Discover Safal Divisions
          </Link>
        </div>

        {/* Right Column - Visual Graphic */}
        <div className={styles.visualContent}>
          <div className={styles.graphicWrapper}>
            <Image
              src="/images/hero-right.png"
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
