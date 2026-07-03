import React from 'react';
import styles from './PlatformAdvantagesSection.module.css';

interface Advantage {
  id: string;
  text: React.ReactNode;
  position: 'top-left' | 'top-right' | 'middle-right' | 'bottom-right' | 'bottom-left' | 'middle-left';
}

export interface PlatformAdvantagesSectionProps {
  title?: React.ReactNode;
  centerText?: React.ReactNode;
  advantages: Advantage[];
  description?: React.ReactNode;
}

export default function PlatformAdvantagesSection({
  title = 'Platform Advantages',
  centerText = 'Advantages',
  advantages,
  description
}: PlatformAdvantagesSectionProps) {
  
  const getPath = (position: string) => {
    switch(position) {
      case 'top-left': 
        return 'M 280 140 L 350 140 Q 390 140, 418.3 168.3 L 500 250';
      case 'middle-left': 
        return 'M 250 300 L 480 300.1';
      case 'bottom-left': 
        return 'M 280 460 L 350 460 Q 390 460, 418.3 431.7 L 500 350';
      case 'top-right': 
        return 'M 820 140 L 750 140 Q 710 140, 681.7 168.3 L 600 250';
      case 'middle-right': 
        return 'M 850 300 L 620 300.1';
      case 'bottom-right': 
        return 'M 820 460 L 750 460 Q 710 460, 681.7 431.7 L 600 350';
      default: return '';
    }
  };

  const getPositionClass = (position: string) => {
    switch(position) {
      case 'top-left': return styles.topLeft;
      case 'middle-left': return styles.middleLeft;
      case 'bottom-left': return styles.bottomLeft;
      case 'top-right': return styles.topRight;
      case 'middle-right': return styles.middleRight;
      case 'bottom-right': return styles.bottomRight;
      default: return '';
    }
  };

  return (
    <section className="mt_80">
      <div className="container-1600">
        <div className={styles.wrapper}>
          {/* Title */}
          <div className={styles.header}>
            <h2 className="title_60">{title}</h2>
          </div>

          {/* Circular Advantages Diagram */}
          <div className={styles.circularDiagram}>
            
            {/* SVG Connection Lines */}
            <svg className={styles.connectionLines} viewBox="0 100 1100 400" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="gradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#bfa99b" />
                  <stop offset="100%" stopColor="#e05f41" />
                </linearGradient>
                <linearGradient id="gradRight" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#bfa99b" />
                  <stop offset="100%" stopColor="#e05f41" />
                </linearGradient>
              </defs>
              {advantages.map(adv => (
                <path 
                  key={`path-${adv.id}`} 
                  d={getPath(adv.position)} 
                  className={styles.dashedLine} 
                  stroke={`url(#grad${adv.position.includes('left') ? 'Left' : 'Right'})`}
                />
              ))}
            </svg>

            {/* Center Circle */}
            <div className={styles.centerCircle}>
              <span className={styles.centerText}>{centerText}</span>
            </div>

            {/* Advantages positioned around the circle */}
            {advantages.map((advantage) => {
              const isLeft = advantage.position.includes('left');
              const positionClass = getPositionClass(advantage.position);
              
              return (
                <div key={advantage.id} className={`${styles.anchor} ${positionClass}`}>
                  <div className={`${styles.advantageItem} ${isLeft ? styles.itemLeft : styles.itemRight}`}>
                    {isLeft ? (
                      <>
                        <p className={styles.advantageText}>{advantage.text}</p>
                        <div className={styles.dotConnector}></div>
                      </>
                    ) : (
                      <>
                        <div className={styles.dotConnector}></div>
                        <p className={styles.advantageText}>{advantage.text}</p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Description at bottom */}
          {description && (
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>{description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

