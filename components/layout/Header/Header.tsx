"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Determine if we need dark text/links (e.g. for blog details page or webinars)
  const isLightHeader = (pathname?.startsWith('/blogs/') && pathname !== '/blogs') || pathname?.startsWith('/webinars');

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleDropdownClick = (title: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (openDropdown === title) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(title);
    }
  };

  const navLinks = [
    {
      title: 'The Company',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Our Story & Vision', href: '/our-story-vision' },
        { title: 'Our Entities', href: '/group-structure' },
        { title: 'Life at Safal', href: '/life-at-safal' },
        { title: 'Leadership Team', href: '/LeaderShip-Team' },
        { title: 'Sustainability', href: '/sustainability' }
      ]
    },
    {
      title: 'Our Division',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Business & Financial Advisory', href: '/business-financial-advisory' },
        { title: 'Financial Accounting Solutions', href: '/financial-accounting-solutions' },
        { title: 'Technology Staffing', href: '/technology-staffing' },
        { title: 'Brand, Digital & Creative Services', href: '/brand-digital-creative-services' },
        { title: 'AI & Emerging Technology', href: '/ai-emerging-technology' },
        { title: 'Startup Product Development', href: '/startup-product-development' },
        { title: 'Enterprise Products', href: '/enterprise-products' },
        { title: 'Industrial Automation & IoT', href: '/industrial-automation' }
      ]
    },
    { title: 'Industries We Serve', href: '/industries-we-serve', hasDropdown: false },
    {
      title: 'Partnerships',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Become a Partner', href: '/become-a-partner' },
        { title: 'Strategic Partnerships', href: '/strategic-partnerships' }
      ]
    },
    {
      title: 'Insights',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Blogs', href: '/blogs' },
        { title: 'Brochures', href: '/brochures' },
        // { title: 'Webinars', href: '/webinars' }
      ]
    },
    {
      title: 'Investors',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Investor Relations', href: '/investor-relations' },
        // { title: 'Financial Reports & Disclosures', href: '/financial-reports-disclosures' },
        { title: 'Corporate Governance', href: '/corporate-governance' }
      ]
    },
  ];

  return (
    <header className={`${styles.headerWrapper} ${isLightHeader ? styles.lightBg : ''}`}>
      <div className={`${styles.header} container-1800`} ref={dropdownRef}>
        {/* Mobile Menu Backdrop */}
        {isMobileMenuOpen && (
          <div 
            className={styles.mobileBackdrop} 
            onClick={() => {
              setIsMobileMenuOpen(false);
              setOpenDropdown(null);
            }}
          />
        )}
        <div className={styles.logoContainer}>
          <Link href="/">
            {/* Show black logo if it&apos;s blog detail page, else white logo. We can use CSS filter if black logo is not available, but let&apos;s check what image we have. 
                We have logo.svg, and header-logo.png. But Safal usually has a black logo version. Let&apos;s use filter invert on the white logo if needed, or if there is a black logo we&apos;ll use it. For now let&apos;s apply a CSS class to invert logo */}
            <Image
              src="/safal/images/logo.svg"
              alt="Safal Logo"
              height={80}
              width={200}
              priority
              className={isLightHeader ? styles.darkLogo : ''}
            />
          </Link>
        </div>

        <nav className={`${styles.navigation} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
          <div className={styles.mobileNavLogo}>
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/safal/images/logo.svg"
                alt="Safal Logo"
                height={60}
                width={150}
                priority
                className={isLightHeader ? styles.darkLogo : ''}
              />
            </Link>
          </div>
          {navLinks.map((link, index) => (
            <div key={index} className={styles.navItem}>
              {link.hasDropdown && link.dropdownItems ? (
                <button onClick={(e) => handleDropdownClick(link.title, e)} className={`${styles.navLink} ${isLightHeader ? styles.darkText : ''}`}>
                  {link.title}
                  <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: openDropdown === link.title ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}>
                    <path d="M15.75 0.75L8.25 8.25L0.75 0.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ) : (
                <Link 
                  href={link.href} 
                  className={`${styles.navLink} ${isLightHeader ? styles.darkText : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
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
                    <Link 
                      key={i} 
                      href={item.href} 
                      className={styles.dropdownItem} 
                      onClick={() => {
                        setOpenDropdown(null);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.headerRight}>
          <Link href="/contact" className="btn-primary">
            Get In Touch
          </Link>
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              if (isMobileMenuOpen) setOpenDropdown(null);
            }}
            aria-label="Toggle menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={isMobileMenuOpen ? "M6 18L18 6M6 6L18 18" : "M4 12H20M4 6H20M4 18H20"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

