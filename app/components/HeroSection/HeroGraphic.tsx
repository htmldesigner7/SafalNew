"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './HeroGraphic.module.css';

export default function HeroGraphic() {
  const [focused, setFocused] = useState<string | null>(null);

  const isFocused = (area: string) => focused === area;
  const hasFocus = focused !== null;

  return (
    <div className={styles.graphicCol}>
      <div className={styles.glowLayer} aria-hidden="true">
        <div className={`${styles.glow} ${styles.glowOrange} ${isFocused('orange') ? styles.glowActive : ''}`} />
        <div className={`${styles.glow} ${styles.glowGreen} ${isFocused('green') ? styles.glowActive : ''}`} />
        <div className={`${styles.glow} ${styles.glowBlue} ${isFocused('blue') ? styles.glowActive : ''}`} />
      </div>

      <div className={styles.svgWrapper}>
        <svg width="772" height="738" viewBox="0 0 772 738" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          role="img" aria-label="Architecture diagram">
          <g className={styles.bgRings} aria-hidden="true">
            <circle className={styles.ring1} cx="205" cy="205" r="204.5" stroke="#D2DF70" strokeWidth="1.2" />
            <circle className={styles.ring2} cx="566.863" cy="226.017" r="204.5" stroke="#D2DF70" strokeWidth="1.2" />
            <circle className={styles.ring3} cx="345.839" cy="532.457" r="204.5" stroke="#D2DF70" strokeWidth="1.2" />
          </g>

          <g className={`${styles.shape} ${styles.shapeOrange} ${hasFocus && !isFocused('orange') ? styles.dimmed : ''} ${isFocused('orange') ? styles.activeShapeO : ''}`}>
            <rect x="108.425" y="35.9253" width="577.493" height="539.01" fill="url(#pattern0_82_132)" />
          </g>
          <g className={`${styles.shape} ${styles.shapeGreen} ${hasFocus && !isFocused('green') ? styles.dimmed : ''} ${isFocused('green') ? styles.activeShapeG : ''}`}>
            <rect x="108.425" y="35.9253" width="577.493" height="539.01" fill="url(#pattern1_82_132)" />
          </g>
          <g className={`${styles.shape} ${styles.shapeBlue} ${hasFocus && !isFocused('blue') ? styles.dimmed : ''} ${isFocused('blue') ? styles.activeShapeB : ''}`}>
            <rect x="108.425" y="35.9253" width="577.493" height="539.01" fill="url(#pattern2_82_132)" />
          </g>

          {/* Text Group Orange */}
          <g
            className={`${styles.textGroup} ${styles.textGroupOrange} ${hasFocus && !isFocused('orange') ? styles.dimmedText : ''} ${isFocused('orange') ? styles.activeText : ''}`}
            onMouseEnter={() => setFocused('orange')}
            onMouseLeave={() => setFocused(null)}
          >
            <rect x="30" y="115" width="190" height="145" fill="transparent" pointerEvents="all" />
            <Link href="/enterprise-products">
              <text x="36" y="132" style={{cursor: 'pointer'}}>Enterprise Platforms &amp;</text>
              <text x="36" y="152" style={{cursor: 'pointer'}}>Products</text>
            </Link>
            <line x1="36" y1="168" x2="202" y2="168" />
            <Link href="/brand-digital-creative-services">
              <text x="36" y="196" style={{cursor: 'pointer'}}>Brand, Digital &amp; Creative</text>
            </Link>
            <line x1="36" y1="212" x2="202" y2="212" />
            <Link href="/startup-product-development">
              <text x="36" y="240" style={{cursor: 'pointer'}}>Startup Consulting</text>
            </Link>
          </g>

          {/* Text Group Green */}
          <g
            className={`${styles.textGroup} ${styles.textGroupGreen} ${hasFocus && !isFocused('green') ? styles.dimmedText : ''} ${isFocused('green') ? styles.activeText : ''}`}
            onMouseEnter={() => setFocused('green')}
            onMouseLeave={() => setFocused(null)}
          >
            <rect x="515" y="140" width="180" height="100" fill="transparent" pointerEvents="all" />
            <Link href="/business-financial-advisory">
              <text x="525" y="157" style={{cursor: 'pointer'}}>Business &amp; Financial</text>
              <text x="525" y="177" style={{cursor: 'pointer'}}>Advisory</text>
            </Link>
            <line x1="525" y1="193" x2="675" y2="193" />
            <Link href="/financial-accounting-solutions">
              <text x="525" y="221" style={{cursor: 'pointer'}}>Financial Accounting</text>
            </Link>
          </g>

          {/* Text Group Blue */}
          <g
            className={`${styles.textGroup} ${styles.textGroupBlue} ${hasFocus && !isFocused('blue') ? styles.dimmedText : ''} ${isFocused('blue') ? styles.activeText : ''}`}
            textAnchor="middle"
            onMouseEnter={() => setFocused('blue')}
            onMouseLeave={() => setFocused(null)}
          >
            <rect x="250" y="545" width="192" height="130" fill="transparent" pointerEvents="all" />
            <Link href="/industrial-automation">
              <text x="346" y="567" style={{cursor: 'pointer'}}>Automation &amp; IoT</text>
            </Link>
            <line x1="296" y1="583" x2="396" y2="583" />
            <Link href="/ai-emerging-technology">
              <text x="346" y="611" style={{cursor: 'pointer'}}>AI &amp; Emerging Technology</text>
            </Link>
            <line x1="271" y1="627" x2="421" y2="627" />
            <Link href="/technology-staffing">
              <text x="346" y="655" style={{cursor: 'pointer'}}>Technology Staffing</text>
            </Link>
          </g>

          <defs>
            <pattern id="pattern0_82_132" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use href="#image0_82_132" transform="scale(0.000432713 0.000463607)" />
            </pattern>
            <pattern id="pattern1_82_132" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use href="#image1_82_132" transform="scale(0.000432713 0.000463607)" />
            </pattern>
            <pattern id="pattern2_82_132" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use href="#image2_82_132" transform="scale(0.000432713 0.000463607)" />
            </pattern>
            <image id="image0_82_132" width="2311" height="2157" preserveAspectRatio="none" href="/images/orange.png" />
            <image id="image1_82_132" width="2311" height="2157" preserveAspectRatio="none" href="/images/green.png" />
            <image id="image2_82_132" width="2311" height="2157" preserveAspectRatio="none" href="/images/blue.png" />
          </defs>
        </svg>
      </div>
    </div>
  );
}
