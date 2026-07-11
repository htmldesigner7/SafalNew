'use client';

import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number; // duration in ms
  prefix?: string;
  suffix?: string;
}

export default function Counter({ end, duration = 2000, prefix = '', suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let observer: IntersectionObserver | null = null;
    const currentRef = ref.current;

    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setHasStarted(true);
            if (observer && currentRef) {
              observer.unobserve(currentRef);
              observer.disconnect();
            }
          }
        },
        { threshold: 0.1 }
      );

      if (currentRef) {
        observer.observe(currentRef);
      }
    }, 150);

    return () => {
      clearTimeout(timer);
      if (observer && currentRef) {
        observer.unobserve(currentRef);
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const rate = Math.min(progress / duration, 1);
      
      // Easing function: easeOutQuad
      const easedRate = rate * (2 - rate);
      
      setCount(Math.floor(easedRate * end));

      if (rate < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  // Format number with commas (e.g. 25,000)
  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  return (
    <span ref={ref}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
