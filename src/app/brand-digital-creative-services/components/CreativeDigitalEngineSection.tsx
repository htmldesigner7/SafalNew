import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CreativeDigitalEngineSection.module.css';

interface CreativeDigitalEngineSectionProps {
  title?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CreativeDigitalEngineSection({
  title = "The Creative & Digital Engine of Safal",
  paragraphs = [
    "Intelliworkz is Safal’s dedicated division for brand, digital, and creative execution. Positioned at the intersection of strategy, design, and technology, it delivers structured digital marketing and branding services aligned with business objectives.",
    "Operating as a technology-backed creative unit, Intelliworkz combines design thinking with system-led execution, ensuring brands are not only built but consistently managed, scaled, and evolved.",
    "We approach creative execution through a structured blend of design systems, brand strategy, and digital integration. Each solution is developed with a clear understanding of business objectives, ensuring that creative output is not only visually compelling but also aligned with performance and long-term brand consistency.",
    "Our focus extends beyond aesthetics to building scalable digital experiences that adapt across platforms and touchpoints. By combining creative precision with execution discipline, we enable brands to maintain clarity, strengthen engagement, and deliver measurable impact within dynamic and competitive environments."
  ],
  imageSrc = `/images/Brand,-Digital-&-Creative-Services/Digital-Engine-of-Safal.png`,
  imageAlt = "Creative & Digital Engine Illustration",
  buttonText,
  buttonLink
}: CreativeDigitalEngineSectionProps) {
  return (
    <section className={"mt_80"}>
      <div className="container-1600">
        <div className={styles.layout}>
          <div className={styles.contentCol}>
            <h2 className={`title_60 `}>
              {title}
            </h2>
            {paragraphs.map((p, index) => (
              <p key={index} className="">{p}</p>
            ))}
            
            {buttonText && buttonLink && (
              <div className="mt_40">
                <Link href={buttonLink} className="btn-primary btn-outline">
                  {buttonText}
                </Link>
              </div>
            )}
          </div>
          <div className={styles.imageCol}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={500}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
