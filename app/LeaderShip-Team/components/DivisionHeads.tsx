import Image from 'next/image';
import styles from './DivisionHeads.module.css';

const headsData = [
  { name: "Ahmed Vidha", role: "COO", image: "" },
  { name: "Mayur Makwana", role: "CEO", image: "/images/2.webp" },
  { name: "Kashyap Parikh", role: "R&D Head", image: "" },
  { name: "Kushal Gohel", role: "AI Developer", image: "" },
  { name: "Mital Gandhi", role: "Head of UI/UX", image: "" },
  { name: "Payal Dave", role: "HR", image: "" },
  { name: "Rohit Sharma", role: "Implementation Head", image: "" },
  { name: "Ravi Jadav", role: "Development Head", image: "" }
];

const DivisionHeads = () => {
  return (
    <section className="mt_80">
      <div className="container-1600">
        <div className="header_sec mb_40">
          <h2 className="title_60">The Division Heads</h2>
          <p>
            The directors, strategists, and division heads executing Safal Infosoft&apos;s global mandate across technology, design, and operations.
          </p>
        </div>
        <div className={styles.grid}>
          {headsData.map((person, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imagePlaceholder}>
                {person.image ? (
                  <Image 
                    src={person.image} 
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                ) : null}
              </div>
              <div className={styles.info}>
                <h3 className={`${styles.name} title_24`}>{person.name}</h3>
                <p className={styles.role}>{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionHeads;
