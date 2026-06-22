"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Determine if we need dark text/links (e.g. for blog details page)
  const isBlogDetail = pathname?.startsWith('/blogs/') && pathname !== '/blogs';

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownClick = (title: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (openDropdown === title) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(title);
    }
  };

  const navLinks = [
    { title: 'The Company', href: '#', hasDropdown: true },
    { title: 'Our Division', href: '#', hasDropdown: true },
    { title: 'Industries We Serve', href: '#', hasDropdown: false },
    { title: 'Partnerships', href: '#', hasDropdown: true },
    { title: 'Insights', href: '#', hasDropdown: true },
    { title: 'Investors', href: '#', hasDropdown: true },
    { 
      title: 'Pages', 
      href: '#', 
      hasDropdown: true,
      dropdownItems: [
        { title: 'Home', href: '/' },
        { title: 'About Us', href: '/about' },
        { title: 'Our Entities', href: '/our-entities' },
        { title: 'Investor Relations', href: '/investor-relations' },
        { title: 'Life at Safal', href: '/life-at-safal' },
        { title: 'Contact', href: '/contact' },
        { title: 'Open positions', href: '/open-positions' },
        { title: 'Internships & Mentorship', href: '/internships-mentorship' },
        { title: 'Financial Reports', href: '/financial-reports-disclosures' },
        { title: 'Blogs', href: '/blogs' },
        { title: 'Brochures', href: '/brochures' }
      ]
    },
  ];

  return (
    <header className={`${styles.headerWrapper} ${isBlogDetail ? styles.lightBg : ''}`}>
      <div className={`${styles.header} container-1800`} ref={dropdownRef}>
        <div className={styles.logoContainer}>
          <Link href="/">
            {/* Show black logo if it's blog detail page, else white logo. We can use CSS filter if black logo is not available, but let's check what image we have. 
                We have logo.svg, and header-logo.png. But Safal usually has a black logo version. Let's use filter invert on the white logo if needed, or if there is a black logo we'll use it. For now let's apply a CSS class to invert logo */}
            <Image
              src="/images/logo.svg"
              alt="Safal Logo"
              height={80}
              width={200}
              priority
              className={isBlogDetail ? styles.darkLogo : ''}
            />
          </Link>
        </div>

        <nav className={styles.navigation}>
          {navLinks.map((link, index) => (
            <div key={index} className={styles.navItem}>
              {link.hasDropdown && link.dropdownItems ? (
                <button onClick={(e) => handleDropdownClick(link.title, e)} className={`${styles.navLink} ${isBlogDetail ? styles.darkText : ''}`}>
                  {link.title}
                  <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: openDropdown === link.title ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}>
                    <path d="M15.75 0.75L8.25 8.25L0.75 0.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ) : (
                <Link href={link.href} className={`${styles.navLink} ${isBlogDetail ? styles.darkText : ''}`}>
                  {link.title}
                  {link.hasDropdown && (
                    <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.75 0.75L8.25 8.25L0.75 0.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>
              )}
              {link.hasDropdown && link.dropdownItems && openDropdown === link.title && (
                <div className={styles.dropdownMenu}>
                  {link.dropdownItems.map((item, i) => (
                    <Link key={i} href={item.href} className={styles.dropdownItem} onClick={() => setOpenDropdown(null)}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <Link href="/contact" className="btn-primary">
          Get In Touch
        </Link>
      </div>
    </header>
  );
}

