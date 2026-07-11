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
            Transitioning from rigid legacy monoliths to Safal&apos;s autonomous microservices doesn&apos;t just accelerate your operations—it instantly decarbonizes your digital infrastructure.
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
                   src="/images/dark_globe.png" 
                   alt="Cost of Bloated Code" 
                   fill 
                   className={styles.globeImage} 
                   style={{ opacity: 1 - progress }}
                   priority 
                 />
                 {/* Clean Globe (Fades in as we drag right) */}
                 <Image 
                   src="/images/clean_globe.png" 
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
               Frictionless, Decarbonized Scaling.
             </button>
          </div>
        </div>

        {/* Crossfading Content Box */}
        <div className={styles.contentContainer}>
           <div className={styles.contentBox} style={{ opacity: 1 - progress, pointerEvents: sliderValue < 50 ? 'auto' : 'none', zIndex: sliderValue < 50 ? 2 : 1 }}>
              <h3 className={styles.contentTitle}>The Cost of Bloated Code</h3>
              <p className={styles.contentText}>
                Traditional enterprise systems are heavy, fragmented, and computationally exhaustive. Every inefficient data query, legacy monolith, and redundant API call forces global server farms to burn excess energy. This creates a massive, invisible carbon footprint that quietly drains both your profit margins and the planet&apos;s resources.
              </p>
              <p className={styles.contentText}>
                Lorem ipsum dolor sit amet consectetur. Ultrices est in sollicitudin non tristique vel. Non cursus ac molestie lacus eget. Habitant pretium orci mattis et a gravida. Faucibus vitae lectus nibh scelerisque sed viverra vitae aliquam et. A lobortis diam luctus scelerisque. Malesuada nunc ac mattis quis dui condimentum turpis. In gravida adipiscing mauris donec eu ultrices sit pellentesque massa. Lorem ipsum
              </p>
           </div>

           <div className={styles.contentBox} style={{ opacity: progress, pointerEvents: sliderValue >= 50 ? 'auto' : 'none', zIndex: sliderValue >= 50 ? 2 : 1 }}>
              <h3 className={styles.contentTitle}>Frictionless, Decarbonized Scaling.</h3>
              <p className={styles.contentText}>
                We are engineering a shift toward a true circular digital economy. By extending hardware lifecycles through predictive AI, optimizing cloud computing loads, and designing autonomous systems that mimic nature&apos;s zero-waste loops, Safal is coding the countdown to a regenerative enterprise.
              </p>
              <p className={styles.contentText}>
                Lorem ipsum dolor sit amet consectetur. Ultrices est in sollicitudin non tristique vel. Non cursus ac molestie lacus eget. Habitant pretium orci mattis et a gravida. Faucibus vitae lectus nibh scelerisque sed viverra vitae aliquam et. A lobortis diam luctus scelerisque. Malesuada nunc ac mattis quis dui condimentum turpis. In gravida adipiscing mauris donec eu ultrices sit pellentesque massa. Lorem ipsum
              </p>
           </div>
        </div>

      </div>
    </section>
  );
}
