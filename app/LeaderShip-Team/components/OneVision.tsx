import React from 'react';
import styles from './OneVision.module.css';
import Image from 'next/image';

export default function OneVision() {
  const sections = [
    {
      title: "One Vision. A Matrix of Possibilities.",
      text: `Technology is only as powerful as the vision guiding it. We are focused on building intelligent ecosystems that transform industries and create meaningful impact. Our mission is to combine innovation, sustainability, and human-centric design.`,
      description: `Through innovation and collaboration, we empower organizations to unlock new opportunities and build a future driven by technology.`,
      author: "Name",
      role: "Founder & Chief Executive Officer",
      reverse: false,
    },
    {
      title: "Designing for Autonomous Scale.",
      text: `We don&apos;t believe in fragmented solutions. Our approach focuses on creating scalable systems that operate seamlessly, enabling businesses to grow faster.`,
      description: `True innovation comes from the balance of technology and environment. We create solutions designed for long-term success.`,
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
                <Image
                  src="/images/blogs.png"
                  alt="images"
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
                  src="/images/blogs.png"
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
