import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './StructuredOperationsSection.module.css';

/* ===== SVG ICONS ===== */

// Hand holding dollar / financial services
const DollarHandIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 30H6V18H10V30Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 20L14 16H19L22 18H26C27.1046 18 28 18.8954 28 20V20C28 21.1046 27.1046 22 26 22H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 28L16 30L28 26L34 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="24" cy="10" r="5" stroke="white" strokeWidth="1.5"/>
    <path d="M24 7V13M22.5 10H25.5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// Mobile/Document with @ / digital record
const DigitalRecordIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="4" width="16" height="28" rx="2" stroke="white" strokeWidth="1.5"/>
    <path d="M10 8H26" stroke="white" strokeWidth="1.5"/>
    <path d="M10 28H26" stroke="white" strokeWidth="1.5"/>
    <circle cx="18" cy="31" r="1" fill="white"/>
    <rect x="13" y="12" width="10" height="3" rx="1" stroke="white" strokeWidth="1"/>
    <rect x="13" y="18" width="10" height="3" rx="1" stroke="white" strokeWidth="1"/>
    <rect x="13" y="24" width="5" height="2" rx="0.5" stroke="white" strokeWidth="0.8"/>
    <circle cx="31" cy="10" r="6" stroke="white" strokeWidth="1.5"/>
    <path d="M33 10C33 11.1 32.1 12 31 12C29.9 12 29 11.1 29 10C29 8.9 29.9 8 31 8C32.1 8 33 8.9 33 10Z" stroke="white" strokeWidth="1"/>
  </svg>
);

// Calculator
const CalculatorIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="24" height="32" rx="3" stroke="white" strokeWidth="1.5"/>
    <rect x="12" y="8" width="16" height="6" rx="1" stroke="white" strokeWidth="1.5"/>
    <circle cx="14" cy="20" r="1.5" fill="white" opacity="0.8"/>
    <circle cx="20" cy="20" r="1.5" fill="white" opacity="0.8"/>
    <circle cx="26" cy="20" r="1.5" fill="white" opacity="0.8"/>
    <circle cx="14" cy="26" r="1.5" fill="white" opacity="0.8"/>
    <circle cx="20" cy="26" r="1.5" fill="white" opacity="0.8"/>
    <rect x="24" y="24" width="4" height="8" rx="1" stroke="white" strokeWidth="1"/>
    <circle cx="14" cy="32" r="1.5" fill="white" opacity="0.8"/>
    <circle cx="20" cy="32" r="1.5" fill="white" opacity="0.8"/>
  </svg>
);

// Package with arrows (outsourcing)
const PackageArrowIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 14L20 8L32 14V26L20 32L8 26V14Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 20V32" stroke="white" strokeWidth="1.5"/>
    <path d="M8 14L20 20L32 14" stroke="white" strokeWidth="1.5"/>
    <path d="M14 11L26 17" stroke="white" strokeWidth="1"/>
    <path d="M4 20H1M4 20L6 18M4 20L6 22" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M36 20H39M36 20L34 18M36 20L34 22" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Coin/Dollar stack
const CoinStackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_150_11653)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9985 15.2368C34.7373 15.2368 38.5283 19.0278 38.5283 23.7666C38.5283 28.5053 34.7373 32.2964 29.9985 32.2964C25.2598 32.2964 21.4688 28.5053 21.4688 23.7666C21.4688 19.0278 25.2598 15.2368 29.9985 15.2368ZM29.9985 17.0594C33.7166 17.0594 36.6328 20.0485 36.6328 23.7666C36.6328 27.4118 33.7166 30.4009 29.9985 30.4009C26.3533 30.4009 23.3643 27.4118 23.3643 23.7666C23.3643 20.0485 26.3533 17.0594 29.9985 17.0594Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6405 34.7754H40.3452C41.5846 34.7754 41.5846 36.598 40.3452 36.598H19.6405C18.474 36.598 18.474 34.7754 19.6405 34.7754Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6405 38.4932H40.3452C41.5846 38.4932 41.5846 40.3158 40.3452 40.3158H19.6405C18.474 40.3158 18.474 38.4932 19.6405 38.4932Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6405 42.2114H40.3452C41.5846 42.2114 41.5846 44.034 40.3452 44.034H19.6405C18.474 44.034 18.474 42.2114 19.6405 42.2114Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6405 45.9297H29.0451C30.2845 45.9297 30.2845 47.7523 29.0451 47.7523H19.6405C18.474 47.7523 18.474 45.9297 19.6405 45.9297Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3513 2.26002C27.0075 0.874848 28.3927 0 29.9965 0C31.6004 0 32.9856 0.874848 33.6417 2.26002H36.7766C38.1618 2.26002 39.2554 3.42649 39.2554 4.81167V5.32199H47.4206C48.8058 5.32199 49.8993 6.41555 49.8993 7.80073V57.5213C49.8993 58.8335 48.8058 60 47.4206 60H12.5725C11.1873 60 10.0938 58.8335 10.0938 57.5213V7.80073C10.0938 6.41555 11.1873 5.32199 12.5725 5.32199H20.7377V4.81167C20.7377 3.42649 21.8313 2.26002 23.2165 2.26002H26.3513ZM39.2554 7.14459V8.38396H44.3586C45.7438 8.38396 46.8374 9.47752 46.8374 10.8627V47.825C46.8374 48.3354 46.6916 48.6999 46.327 49.0644L38.8908 56.5006C38.5992 56.7922 38.2347 56.938 37.8702 56.938C30.434 56.938 23.0707 56.938 15.6345 56.938C14.2493 56.938 13.1557 55.7716 13.1557 54.3864V10.8627C13.1557 9.47752 14.2493 8.38396 15.6345 8.38396H20.7377V7.14459H12.5725C12.208 7.14459 11.9893 7.43621 11.9893 7.80073V57.5213C11.9893 57.8129 12.208 58.1045 12.5725 58.1045H47.4206C47.7851 58.1045 48.0767 57.8129 48.0767 57.5213V7.80073C48.0767 7.43621 47.7851 7.14459 47.4206 7.14459H39.2554ZM39.2554 10.2066C39.2554 11.5917 38.1618 12.7582 36.7766 12.7582H23.2165C21.8313 12.7582 20.7377 11.5917 20.7377 10.2066H15.6345C15.3428 10.2066 15.0512 10.4982 15.0512 10.8627V54.3864C15.0512 54.7509 15.3428 55.0425 15.6345 55.0425H35.8289V48.7728C35.8289 47.2418 37.1411 45.9295 38.745 45.9295H44.9419V10.8627C44.9419 10.4982 44.7232 10.2066 44.3586 10.2066H39.2554ZM44.9419 47.7521H38.745C38.1618 47.7521 37.7244 48.2625 37.7244 48.7728V55.0425L44.9419 47.7521ZM23.2165 4.08262H27.7365C27.7365 2.84326 28.7572 1.8955 29.9965 1.8955C31.2359 1.8955 32.2566 2.84326 32.2566 4.08262H36.7766C37.1411 4.08262 37.4328 4.44714 37.4328 4.81167V10.2066C37.4328 10.5711 37.1411 10.9356 36.7766 10.9356H23.2165C22.852 10.9356 22.5603 10.5711 22.5603 10.2066V4.81167C22.5603 4.44714 22.852 4.08262 23.2165 4.08262Z" fill="white"/>
    <path d="M29.9946 5.03027C30.5181 5.03027 30.9424 4.60595 30.9424 4.08252C30.9424 3.55909 30.5181 3.13477 29.9946 3.13477C29.4712 3.13477 29.0469 3.55909 29.0469 4.08252C29.0469 4.60595 29.4712 5.03027 29.9946 5.03027Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.1327 7.14453H33.8605C35.0998 7.14453 35.0998 9.04004 33.8605 9.04004H26.1327C24.8933 9.04004 24.8933 7.14453 26.1327 7.14453Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9993 20.2671C30.6554 20.2671 32.6968 21.7981 33.0613 22.0168C34.1548 22.7458 33.0613 24.4226 31.9677 23.6936L31.02 23.1103V26.3181C31.02 27.6304 28.9787 27.6304 28.9787 26.3181V23.1103L28.0309 23.6936C26.9373 24.4226 25.8438 22.7458 26.9373 22.0168C27.4477 21.7252 29.4161 20.2671 29.9993 20.2671Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_150_11653">
      <rect width="60" height="60" fill="white"/>
    </clipPath>
  </defs>
</svg>
);

// Globe with gear (compliance/global)
const GlobeGearIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="17" cy="17" r="12" stroke="white" strokeWidth="1.5"/>
    <path d="M5 17H29" stroke="white" strokeWidth="1.2"/>
    <path d="M17 5C12 9 10.5 13 10.5 17C10.5 21 12 25 17 29" stroke="white" strokeWidth="1.2"/>
    <path d="M17 5C22 9 23.5 13 23.5 17C23.5 21 22 25 17 29" stroke="white" strokeWidth="1.2"/>
    <path d="M5 12H29" stroke="white" strokeWidth="0.8" opacity="0.5"/>
    <path d="M5 22H29" stroke="white" strokeWidth="0.8" opacity="0.5"/>
    <circle cx="32" cy="30" r="6" stroke="white" strokeWidth="1.5"/>
    <circle cx="32" cy="30" r="2" stroke="white" strokeWidth="1"/>
    <path d="M32 24V25M32 35V36M38 30H37M27 30H26M36.2 25.8L35.5 26.5M28.5 33.5L27.8 34.2M36.2 34.2L35.5 33.5M28.5 26.5L27.8 25.8" stroke="white" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

// Shield with dollar (financial security)
const ShieldDollarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_150_11653)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9985 15.2368C34.7373 15.2368 38.5283 19.0278 38.5283 23.7666C38.5283 28.5053 34.7373 32.2964 29.9985 32.2964C25.2598 32.2964 21.4688 28.5053 21.4688 23.7666C21.4688 19.0278 25.2598 15.2368 29.9985 15.2368ZM29.9985 17.0594C33.7166 17.0594 36.6328 20.0485 36.6328 23.7666C36.6328 27.4118 33.7166 30.4009 29.9985 30.4009C26.3533 30.4009 23.3643 27.4118 23.3643 23.7666C23.3643 20.0485 26.3533 17.0594 29.9985 17.0594Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6405 34.7754H40.3452C41.5846 34.7754 41.5846 36.598 40.3452 36.598H19.6405C18.474 36.598 18.474 34.7754 19.6405 34.7754Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6405 38.4932H40.3452C41.5846 38.4932 41.5846 40.3158 40.3452 40.3158H19.6405C18.474 40.3158 18.474 38.4932 19.6405 38.4932Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6405 42.2114H40.3452C41.5846 42.2114 41.5846 44.034 40.3452 44.034H19.6405C18.474 44.034 18.474 42.2114 19.6405 42.2114Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6405 45.9297H29.0451C30.2845 45.9297 30.2845 47.7523 29.0451 47.7523H19.6405C18.474 47.7523 18.474 45.9297 19.6405 45.9297Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3513 2.26002C27.0075 0.874848 28.3927 0 29.9965 0C31.6004 0 32.9856 0.874848 33.6417 2.26002H36.7766C38.1618 2.26002 39.2554 3.42649 39.2554 4.81167V5.32199H47.4206C48.8058 5.32199 49.8993 6.41555 49.8993 7.80073V57.5213C49.8993 58.8335 48.8058 60 47.4206 60H12.5725C11.1873 60 10.0938 58.8335 10.0938 57.5213V7.80073C10.0938 6.41555 11.1873 5.32199 12.5725 5.32199H20.7377V4.81167C20.7377 3.42649 21.8313 2.26002 23.2165 2.26002H26.3513ZM39.2554 7.14459V8.38396H44.3586C45.7438 8.38396 46.8374 9.47752 46.8374 10.8627V47.825C46.8374 48.3354 46.6916 48.6999 46.327 49.0644L38.8908 56.5006C38.5992 56.7922 38.2347 56.938 37.8702 56.938C30.434 56.938 23.0707 56.938 15.6345 56.938C14.2493 56.938 13.1557 55.7716 13.1557 54.3864V10.8627C13.1557 9.47752 14.2493 8.38396 15.6345 8.38396H20.7377V7.14459H12.5725C12.208 7.14459 11.9893 7.43621 11.9893 7.80073V57.5213C11.9893 57.8129 12.208 58.1045 12.5725 58.1045H47.4206C47.7851 58.1045 48.0767 57.8129 48.0767 57.5213V7.80073C48.0767 7.43621 47.7851 7.14459 47.4206 7.14459H39.2554ZM39.2554 10.2066C39.2554 11.5917 38.1618 12.7582 36.7766 12.7582H23.2165C21.8313 12.7582 20.7377 11.5917 20.7377 10.2066H15.6345C15.3428 10.2066 15.0512 10.4982 15.0512 10.8627V54.3864C15.0512 54.7509 15.3428 55.0425 15.6345 55.0425H35.8289V48.7728C35.8289 47.2418 37.1411 45.9295 38.745 45.9295H44.9419V10.8627C44.9419 10.4982 44.7232 10.2066 44.3586 10.2066H39.2554ZM44.9419 47.7521H38.745C38.1618 47.7521 37.7244 48.2625 37.7244 48.7728V55.0425L44.9419 47.7521ZM23.2165 4.08262H27.7365C27.7365 2.84326 28.7572 1.8955 29.9965 1.8955C31.2359 1.8955 32.2566 2.84326 32.2566 4.08262H36.7766C37.1411 4.08262 37.4328 4.44714 37.4328 4.81167V10.2066C37.4328 10.5711 37.1411 10.9356 36.7766 10.9356H23.2165C22.852 10.9356 22.5603 10.5711 22.5603 10.2066V4.81167C22.5603 4.44714 22.852 4.08262 23.2165 4.08262Z" fill="white"/>
    <path d="M29.9946 5.03027C30.5181 5.03027 30.9424 4.60595 30.9424 4.08252C30.9424 3.55909 30.5181 3.13477 29.9946 3.13477C29.4712 3.13477 29.0469 3.55909 29.0469 4.08252C29.0469 4.60595 29.4712 5.03027 29.9946 5.03027Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.1327 7.14453H33.8605C35.0998 7.14453 35.0998 9.04004 33.8605 9.04004H26.1327C24.8933 9.04004 24.8933 7.14453 26.1327 7.14453Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9993 20.2671C30.6554 20.2671 32.6968 21.7981 33.0613 22.0168C34.1548 22.7458 33.0613 24.4226 31.9677 23.6936L31.02 23.1103V26.3181C31.02 27.6304 28.9787 27.6304 28.9787 26.3181V23.1103L28.0309 23.6936C26.9373 24.4226 25.8438 22.7458 26.9373 22.0168C27.4477 21.7252 29.4161 20.2671 29.9993 20.2671Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_150_11653">
      <rect width="60" height="60" fill="white"/>
    </clipPath>
  </defs>
</svg>
);

// TAX document
const TaxDocIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4H10C8.89543 4 8 4.89543 8 6V34C8 35.1046 8.89543 36 10 36H30C31.1046 36 32 35.1046 32 34V12L24 4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 4V12H32" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 18H17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M13 23H27" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M13 28H27" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="22" y="15" width="6" height="5" rx="1" stroke="white" strokeWidth="1.2"/>
    <text x="23" y="19" fill="white" fontSize="4" fontWeight="700" fontFamily="sans-serif">TAX</text>
  </svg>
);

// Gear with checkmark (compliance)
const GearCheckIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="20" r="10" stroke="white" strokeWidth="1.5"/>
    <circle cx="18" cy="20" r="4" stroke="white" strokeWidth="1.2"/>
    <path d="M18 10V12M18 28V30M8 20H10M26 20H28M11 13L12.5 14.5M23.5 25.5L25 27M11 27L12.5 25.5M23.5 14.5L25 13" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="31" cy="30" r="6" stroke="white" strokeWidth="1.5"/>
    <path d="M28 30L30 32L34 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Chart bars going up
const ChartUpIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="22" width="6" height="12" rx="1" stroke="white" strokeWidth="1.5"/>
    <rect x="14" y="16" width="6" height="18" rx="1" stroke="white" strokeWidth="1.5"/>
    <rect x="22" y="10" width="6" height="24" rx="1" stroke="white" strokeWidth="1.5"/>
    <rect x="30" y="6" width="6" height="28" rx="1" stroke="white" strokeWidth="1.5"/>
    <path d="M4 36H38" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M8 8L14 12L22 6L34 2" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
    <path d="M32 2L34 2L34 4" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
  </svg>
);

export default function StructuredOperationsSection() {
  return (
    <section className={`mt_80`}>
      <div className="container-1600">
        <div className={styles.main}>
          {/* Floating Icons & Decorative Circles */}
        <div className={styles.iconsContainer}>
          {/* LEFT SIDE ICONS (top to bottom) */}
          <div className={`${styles.iconCircle} ${styles.icon1}`}>
            <DollarHandIcon />
          </div>
          <div className={`${styles.iconCircle} ${styles.icon2}`}>
            <DigitalRecordIcon />
          </div>
          <div className={`${styles.iconCircle} ${styles.icon3}`}>
            <CalculatorIcon />
          </div>
          <div className={`${styles.iconCircle} ${styles.icon4}`}>
            <PackageArrowIcon />
          </div>
          <div className={`${styles.iconCircle} ${styles.icon5}`}>
            <CoinStackIcon />
          </div>

          {/* RIGHT SIDE ICONS (top to bottom) */}
          <div className={`${styles.iconCircle} ${styles.icon6}`}>
            <GlobeGearIcon />
          </div>
          <div className={`${styles.iconCircle} ${styles.icon7}`}>
            <ShieldDollarIcon />
          </div>
          <div className={`${styles.iconCircle} ${styles.icon8}`}>
            <TaxDocIcon />
          </div>
          <div className={`${styles.iconCircle} ${styles.icon9}`}>
            <GearCheckIcon />
          </div>
          <div className={`${styles.iconCircle} ${styles.icon10}`}>
            <ChartUpIcon />
          </div>

          {/* DECORATIVE EMPTY CIRCLES */}
          <div className={`${styles.decorCircle} ${styles.decor1}`} />
          <div className={`${styles.decorCircle} ${styles.decor2}`} />
          <div className={`${styles.decorCircle} ${styles.decor3}`} />
          <div className={`${styles.decorCircle} ${styles.decor4}`} />
          <div className={`${styles.decorCircle} ${styles.decor5}`} />
          <div className={`${styles.decorCircle} ${styles.decor6}`} />
          <div className={`${styles.decorCircle} ${styles.decor7}`} />
          <div className={`${styles.decorCircle} ${styles.decor8}`} />
          <div className={`${styles.decorCircle} ${styles.decor9}`} />
          <div className={`${styles.decorCircle} ${styles.decor10}`} />
          <div className={`${styles.decorCircle} ${styles.decor11}`} />
          <div className={`${styles.decorCircle} ${styles.decor12}`} />
          <div className={`${styles.decorCircle} ${styles.decor13}`} />
          <div className={`${styles.decorCircle} ${styles.decor14}`} />
          <div className={`${styles.decorCircle} ${styles.decor15}`} />
          <div className={`${styles.decorCircle} ${styles.decor16}`} />
        </div>

        {/* CENTER CONTENT */}
        <div className={styles.content}>
          <Image
            src={`/images/favicon_new.png`}
            alt="Safal Logo"
            width={56}
            height={56}
            className={styles.logo}
          />
          <h2 className={styles.title}>
            Structured Financial Operations,<br />
            Delivered with Control
          </h2>
          <p className={styles.description}>
            Engage with Safal for <b>outsourced accounting services,</b> including <b>bookkeeping services, tax preparation services,</b> and <b>CPA support services.</b><br /> Evaluate accounting operations through structured execution, compliance alignment, and scalable financial systems.
          </p>
          <Link href="/contact" className={"btn-primary btn-primary-white"}>
            Book a Consultation
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}
