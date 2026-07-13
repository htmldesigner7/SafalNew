"use client";
import React, { useState } from 'react';
import styles from './DesignToDeploymentSection.module.css';

const circles = [
  {
    id: 'uiux',
    title: 'UI/UX Design',
    desc: 'Designs intuitive product interfaces and user journeys aligned with usability and functional clarity.',
    img: '/images/hero-section.jpg',
    className: styles.leftCircle,
    nodes: [1, 2, 3, 4]
  },
  {
    id: 'eng',
    title: 'Engineering',
    desc: 'Delivers scalable product development through structured coding practices and modern frameworks.',
    img: '/images/hero-section.jpg',
    className: styles.centerCircle,
    nodes: [5, 6]
  },
  {
    id: 'devops',
    title: 'DevOps',
    desc: 'Implements infrastructure, deployment pipelines, and monitoring systems to ensure stability and scalability.',
    img: '/images/hero-section.jpg',
    className: styles.rightCircle,
    nodes: [7]
  },
];

// Re-calibrated nodes for perfect 1-to-1 alignment with Figma
const nodes = [
  { id: 1, label: '01 / Immersion',   lineX: '0%',  y: '65%', direction: 'right', parent: 'uiux',   lineTop: '40%', lineHeight: '40%', hideLine: true },
  { id: 2, label: '02 / Research',    lineX: '15%', y: '55%', direction: 'right', parent: 'uiux',   lineTop: '35%', lineHeight: '40%' },
  { id: 3, label: '03 / Prototype',   lineX: '29%', y: '50%', direction: 'right', parent: 'uiux',   lineTop: '30%', lineHeight: '40%' },
  { id: 4, label: '04 / Design',      lineX: '44%', y: '45%', direction: 'right', parent: 'uiux',   lineTop: '30%', lineHeight: '40%' },
  { id: 5, label: '05 / Refinement',  lineX: '56%', y: '50%', direction: 'right', parent: 'eng',    lineTop: '30%', lineHeight: '40%' },
  { id: 6, label: '06 / Development', lineX: '73%', y: '55%', direction: 'right', parent: 'eng',    lineTop: '35%', lineHeight: '40%' },
  { id: 7, label: '07 / Launch',      lineX: '90%', y: '65%', direction: 'right', parent: 'devops', lineTop: '40%', lineHeight: '40%' },
];

export default function DesignToDeploymentSection() {
  const [active, setActive] = useState('eng');

  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <h2 className="title_60 text-center mb_40">
          From Design to Deployment
        </h2>

        <div className={styles.diagramContainer}>
          {circles.map(circle => (
            <div
              key={circle.id}
              className={`${styles.circle} ${circle.className} ${active === circle.id ? styles.activeCircle : ''}`}
              style={{ zIndex: active === circle.id ? 10 : 1 }}
              onMouseEnter={() => setActive(circle.id)}
            >
              <div
                className={styles.bgImage}
                style={{ backgroundImage: `url('${circle.img}')`, opacity: active === circle.id ? 1 : 0 }}
              />
              <div className={styles.overlay} style={{ opacity: active === circle.id ? 1 : 0 }} />

              <div className={styles.content}>
                <h3 style={{ color: active === circle.id ? '#fff' : '#000' }}>{circle.title}</h3>
                <p style={{ color: active === circle.id ? '#d1d5db' : '#6b7280' }}>{circle.desc}</p>

                <div className={styles.mobileNodes}>
                  {nodes.filter(n => circle.nodes.includes(n.id)).map(n => (
                    <div key={`mob-${n.id}`} className={styles.pillMobile}>{n.label}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className={styles.timelineContainer}>
            {nodes.map(node => (
              <React.Fragment key={`node-group-${node.id}`}>
                {!node.hideLine && (
                  <div
                    className={styles.dashLine}
                    style={{
                      left: node.lineX,
                      top: node.lineTop,
                      height: node.lineHeight,
                      '--line-color': active === node.parent ? 'rgba(255,255,255,0.7)' : '#C4C4C4'
                    } as React.CSSProperties}
                  />
                )}
                <div
                  className={styles.pill}
                  style={{
                    top: node.y,
                    ...(node.direction === 'left'
                      ? { right: `calc(100% - ${node.lineX})`, borderRadius: '9999px 0 0 9999px' }
                      : { left: node.lineX, borderRadius: '0 9999px 9999px 0' })
                  }}
                >
                  {node.label}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
