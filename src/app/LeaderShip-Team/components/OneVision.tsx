import React from 'react';
import styles from './OneVision.module.css';
import Image from 'next/image';
import { img } from 'framer-motion/client';

export default function OneVision() {
  const sections = [
    {
      title: "One Vision. A Matrix of Possibilities.",
      img: "/safal/images/.webp",
      text: "Founder & Chief Executive Officer",
      description: <>Technology is only as powerful as the vision behind it. When Safal Infosoft was founded, the intent was clear—to eliminate operational friction for ambitious enterprises and replace it with scalable, intelligent systems.<br /><br />Today, we operate as a multi-dimensional ecosystem—integrating engineering, design, and strategy into a unified architecture that enables exponential growth.<br/><br/>We believe innovation must be responsible. Through our approach to efficient system design and intelligent resource utilization, we continuously align performance with long-term sustainability outcomes.</>,
      author: "Name",
      role: "Founder & Chief Executive Officer",
      reverse: false,
    },
    {
      title: "Designing for Autonomous Scale.",
      img: "/safal/images/LeaderShip-Team/Sumair-Vidha.webp",
      text: "Chief Technology Officer",
      description: <>We do not build fragmented systems. Our leadership philosophy is grounded in systemic thinking—ensuring that every platform, capability, and solution operates as part of a cohesive whole.<br /><br />From low-code ecosystems to enterprise-grade infrastructure, we design for scale, resilience, and adaptability. The result is not just functional technology—but systems that evolve with business. <br /><br />We build with intent. We scale with precision.</>,
      author: "Name",
      role: "Chief Technology Officer",
      reverse: true,
    },
  ];

  return (
    <section className={`${styles.visionSection} mt_80`}>
      <div className="container-1600">
        {sections.map((item, index) => (
          <div
            className={`${styles.visionRow} ${item.reverse ? styles.reverse : ""}`}
            key={index}
          >
            <div className={styles.visionImage}>
              <div className={styles.imageBox}>
                <img
                  src={`${baseUrl}/images/${item.img}`}
                  alt={item.text}
                  width={700}
                  height={600}
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
              </div>
            </div>

            <div className={styles.visionContent}>
              <h2 className='title_60'>{item.title}</h2>
              <p>{item.text}</p>
              <p>{item.description}</p>
              <div className="mt_40">
                <Image
                  src={`/images/blogs.png`}
                  alt="images"
                  width={100}
                  height={100}
                  className='mb-3'
                />
              </div>
              <h4 className='title_24'>{item.author}</h4>
              <span>{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
