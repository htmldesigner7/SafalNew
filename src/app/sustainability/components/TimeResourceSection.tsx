'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './TimeResourceSection.module.css';

export default function TimeResourceSection() {
  const [sliderValue, setSliderValue] = useState(0);
  const currentValueRef = useRef(sliderValue);
  const animationRef = useRef<number | null>(null);
  const lastChangeTime = useRef<number>(0);

  // Sync ref with state
  useEffect(() => {
    currentValueRef.current = sliderValue;
  }, [sliderValue]);

  const animateTo = (target: number) => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    
    const start = currentValueRef.current;
    const distance = target - start;
    if (distance === 0) return;

    const duration = 600; // 600ms for a very smooth slide
    let startTime: number | null = null;

    // smooth easing function (easeInOutCubic)
    const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      let progress = elapsed / duration;
      if (progress > 1) progress = 1;

      const eased = easeInOutCubic(progress);
      setSliderValue(start + distance * eased);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      }
    };

    animationRef.current = requestAnimationFrame(step);
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const now = Date.now();
    const newValue = Number(e.target.value);
    
    if (now - lastChangeTime.current < 100) {
      // Continuous dragging
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      setSliderValue(newValue);
    } else {
      // First event after a pause (track click or start of drag)
      if (Math.abs(newValue - currentValueRef.current) > 10) {
        // Large jump from a pause = track click
        animateTo(newValue);
      } else {
        // Small jump = start of drag
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
        setSliderValue(newValue);
      }
    }
    lastChangeTime.current = now;
  };

  // sliderValue is 0 to 100
  const progress = sliderValue / 100; // 0 to 1

  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        
        <div className={styles.header}>
          <h2 className={`title_60 ${styles.title}`}>Time to Make the Switch</h2>
          <p className={styles.subtitle}>
            Transitioning from rigid legacy systems to intelligent, modular architectures doesn’t just improve performance; it directly reduces your carbon footprint.
          </p>
        </div>
        
        {/* Toggle Switch UI */}
        <div className={styles.switchContainer}>
          <div className={styles.switchTrack}>
            <div className={styles.trackInner}>
              
              {/* The Hint Arrows */}
              <div className={styles.trackHint}>
               <svg width="248" height="56" viewBox="0 0 248 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.25 10.5L29.75 28L12.25 45.5M26.25 10.5L43.75 28L26.25 45.5" stroke="#C9C5B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M108.25 10.5L125.75 28L108.25 45.5M122.25 10.5L139.75 28L122.25 45.5" stroke="#C9C5B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M204.25 10.5L221.75 28L204.25 45.5M218.25 10.5L235.75 28L218.25 45.5" stroke="#C9C5B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>

              {/* Invisible Range Input for drag handling */}
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={sliderValue}
                onChange={handleRangeChange}
                className={styles.rangeInput}
                aria-label="Drag to switch to decarbonized scaling"
              />

              {/* The Custom Draggable Globe Thumb */}
              <div 
                className={styles.globeThumb} 
                style={{ left: `calc(${sliderValue}% - calc(${sliderValue} * var(--thumb-size) / 100))` }}
              >
                 {/* Dark Globe (Fades out as we drag right) */}
                 <Image 
                   src={`/images/Sustainability/The-Cost-of-Bloated-Code.png`} 
                   alt="Cost of Bloated Code" 
                   fill 
                   className={styles.globeImage} 
                   style={{ opacity: 1 - progress }}
                   priority 
                 />
                 {/* Clean Globe (Fades in as we drag right) */}
                 <Image 
                   src={`/images/Sustainability/Frictionless-Decarbonized-Scaling.png`} 
                   alt="Frictionless Decarbonized Scaling" 
                   fill 
                   className={styles.globeImage} 
                   style={{ opacity: progress }}
                   priority 
                 />
              </div>

            </div>
          </div>
          
          <div className={styles.switchLabels}>
             <button 
               className={styles.labelBtn}
               style={{ color: `rgba(226, 88, 34, ${1 - progress + 0.3})` }}
               onClick={() => animateTo(0)}
             >
               The Cost of Bloated Code
             </button>
             <button 
               className={styles.labelBtn}
               style={{ color: `rgba(76, 175, 80, ${progress + 0.3})` }}
               onClick={() => animateTo(100)}
             >
               Efficient, Sustainable Scaling
             </button>
          </div>
        </div>

        {/* Crossfading Content Box */}
        <div className={styles.contentContainer}>
           <div className={styles.contentBox} style={{ opacity: 1 - progress, pointerEvents: sliderValue < 50 ? 'auto' : 'none', zIndex: sliderValue < 50 ? 2 : 1 }}>
              <h3 className={styles.contentTitle}>The Cost of Bloated Code</h3>
              <p className={styles.contentText}>
                Traditional enterprise systems are fragmented, resource-intensive, and inefficient. Redundant processes, heavy architectures, and excessive data loads increase computational demand, leading to higher energy consumption and operational inefficiencies.
              </p>
              <p className={styles.contentText}>
                This not only slows down performance but also creates hidden environmental and financial costs. Over time, these inefficiencies compound, impacting scalability, profitability, and long-term sustainability across digital infrastructure.
              </p>
           </div>

           <div className={styles.contentBox} style={{ opacity: progress, pointerEvents: sliderValue >= 50 ? 'auto' : 'none', zIndex: sliderValue >= 50 ? 2 : 1 }}>
              <h3 className={styles.contentTitle}>Efficient, Sustainable Scaling</h3>
              <p className={styles.contentText}>
                Modern enterprise systems built on streamlined architectures are optimized for performance, efficiency, and scalability. By reducing redundancy, enabling intelligent workflows, and optimizing data processing, organizations can significantly lower computational load and energy consumption.
              </p>
              <p className={styles.contentText}>
                This results in faster execution, improved system reliability, and a reduced environmental footprint. With efficient scaling, businesses not only enhance performance but also build sustainable digital ecosystems that support long-term growth and operational resilience.
              </p>
           </div>
        </div>

      </div>
    </section>
  );
}
