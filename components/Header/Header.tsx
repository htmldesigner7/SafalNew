import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const navLinks = [
    { title: 'The Company', href: '#', hasDropdown: true },
    { title: 'Our Division', href: '#', hasDropdown: true },
    { title: 'Industries We Serve', href: '#', hasDropdown: false },
    { title: 'Partnerships', href: '#', hasDropdown: true },
    { title: 'Insights', href: '#', hasDropdown: true },
    { title: 'Investors', href: '#', hasDropdown: true },
  ];

  return (
    <header className={`${styles.headerWrapper}`}>
      <div className={`${styles.header} container-1800`}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Safal Logo"
              height={80}
              width={200}
              priority
            />
          </Link>
        </div>

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
      </div>
    </header>
  );
}
