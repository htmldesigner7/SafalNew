import Image from 'next/image';
import styles from './MeetSpeakers.module.css';

const speakers = [
  { name: 'Joy Mehta', role: 'CEO of Intect Solution', image: `/images/1.webp` },
  { name: 'Joy Mehta', role: 'CEO of Intect Solution', image: `/images/2.webp` },
  { name: 'Joy Mehta', role: 'CEO of Intect Solution', image: `/images/1.webp` },
  { name: 'Joy Mehta', role: 'CEO of Intect Solution', image: `/images/2.webp` },
];

export default function MeetSpeakers() {
  return (
    <section className="mt_80">
      <div className="header_sec mb_40">
        <h2 className="title_60">Meet Our Speakers</h2>
        <p className="m-0">
          Lorem ipsum dolor sit amet consectetur. Ut velit leo amet suscipit elementum dolor. Leo egestas sit sit pellentesque scelerisque ultricies. Sit viverra sapien tincidunt egestas nunc dictumst urna. Aliquam elit sagittis id eu consectetur diam amet. Fringilla arcu nullam nunc aliquam sed.
        </p>
      </div>

      <div className={styles.grid}>
        {speakers.map((speaker, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image 
                src={speaker.image} 
                alt={speaker.name}
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <h3 className="title_24 m-0 mb-2">{speaker.name}</h3>
              <p className={`m-0 ${styles.role}`}>{speaker.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
