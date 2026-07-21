import React from 'react';
import Image from 'next/image';
import styles from './UnifiedFrameworkSection.module.css';

export default function UnifiedFrameworkSection() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <div className={styles.gridContainer}>
          
          {/* Left Text Content */}
          <div className={styles.textContent}>
            <h2 className="title_60">A Unified Enterprise<br />Product Framework</h2>
            <p>Safal is an <b>enterprise solutions company</b> structured to deliver integrated platforms and specialized systems for end-to-end enterprise operations. As a <b>technology consulting company,</b> Safal aligns system architecture with business requirements across industries.</p>
            <p>This framework establishes consistency across processes, data, and workflows, ensuring control, scalability, and structured execution across enterprise functions expected from a modern <b>enterprise solutions provider.</b></p>
            <p>Our framework integrates enterprise systems, data flows, and operational processes into a unified architecture that ensures consistency and scalability. By aligning technology with business functions, we enable seamless coordination across platforms, improve data visibility, and support structured execution across complex enterprise environments.</p>
          </div>

          {/* Right Visual Content (Venn Diagram) */}
          <div className={styles.visualContent}>
            <div className={styles.vennContainer}>
              <div className={`${styles.circle} ${styles.circleLeft}`}>
                <div className={styles.circleText}>
                  <strong className='title_24'>Clarity</strong>
                  <span>Clarity</span>
                </div>
              </div>
              <div className={`${styles.circle} ${styles.circleRight}`}>
                <div className={styles.circleText}>
                  <strong className='title_24'>Clarity</strong>
                  <span>Clarity</span>
                </div>
              </div>
              <div className={styles.centerIcon}>
                <svg width="59" height="55" viewBox="0 0 59 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.0222 32.4094C25.5749 32.5099 24.7625 32.6833 24.192 32.802C22.2386 33.2173 19.4134 34.2031 19.4134 34.477C19.4134 34.7508 19.0255 34.9882 18.0716 35.3624C17.5422 35.5404 17.5239 35.5404 17.8297 35.2027C17.994 35.0064 18.1948 34.6093 18.277 34.3172L18.4002 33.765L17.3413 34.1803C15.146 35.0064 12.0561 36.6449 10.6321 37.7494C9.81972 38.361 8.6787 39.2099 8.08994 39.6207C6.93066 40.4468 6.80743 40.6659 6.21866 42.8521C5.0822 47.1697 5.77138 52.1947 7.78414 54.2486C8.47332 54.9378 8.61937 54.9971 9.59152 54.9788C10.4633 54.9378 10.7919 54.8191 11.7275 54.1299C13.293 52.9843 17.4372 50.2276 19.8561 48.7489C21.0154 48.0597 22.4987 47.1332 23.1697 46.7178C24.5298 45.8507 29.0436 44.3902 31.5448 43.9977C34.2056 43.5823 37.866 44.3537 39.29 45.6544C39.9427 46.2477 40.5086 47.3477 40.7962 48.5937L41.0198 49.6389L41.2252 48.8493C41.4671 47.8224 41.2663 44.6321 40.8601 43.1305C40.2074 40.7069 38.9066 38.1054 37.6287 36.7453C37.1997 36.2707 35.4334 35.4263 33.95 34.9516C33.5028 34.8147 32.9551 34.5363 32.7086 34.34C32.485 34.121 31.6132 33.8289 30.778 33.6509C28.2358 33.158 28.035 32.9982 29.2353 32.5053C29.8652 32.2314 29.8469 32.2314 28.3636 32.2314C27.5284 32.2314 26.4741 32.309 26.0268 32.4094H26.0222Z" fill="#DFDBCC"/>
<path d="M22.7428 27.5894C22.9208 27.1695 23.2494 26.4027 23.4868 25.8733C24.2855 24.0477 25.1253 21.1723 24.9016 21.0125C24.678 20.8528 24.71 20.401 24.961 19.406C25.1253 18.872 25.1344 18.8583 25.2303 19.301C25.2942 19.5475 25.4995 19.9445 25.6912 20.1819L26.07 20.6018L26.3485 19.5018C26.9509 17.2335 27.421 13.7693 27.348 11.9711C27.3252 10.9533 27.2978 9.53387 27.3024 8.81731C27.3024 7.39332 27.1974 7.16968 25.7597 5.41707C22.9117 1.97119 18.4206 -0.393007 15.5818 0.0542729C14.6188 0.214016 14.4864 0.296169 13.9341 1.09945C13.4595 1.83427 13.3636 2.16744 13.3819 3.32672C13.4002 5.26646 13.2358 10.2413 13.0305 13.071C12.9164 14.4129 12.8068 16.1609 12.7566 16.9459C12.6699 18.5571 11.2322 23.0755 10.0958 25.3393C8.88171 27.7446 6.12957 30.2731 4.2446 30.6747C3.38655 30.8618 2.15425 30.6793 0.981278 30.1909L0 29.7665L0.52487 30.3917C1.21861 31.1859 3.93424 32.8792 5.38562 33.4223C7.73612 34.3032 10.6115 34.7596 12.46 34.5085C13.0944 34.4355 14.8105 33.4907 16.061 32.5597C16.4353 32.2767 16.9784 31.9892 17.2796 31.907C17.5854 31.8522 18.3339 31.3137 18.9638 30.7386C20.8442 28.9586 21.0906 28.8856 20.794 30.1453C20.6525 30.8162 20.6616 30.8025 21.5288 29.593C22.0126 28.913 22.5648 28.0093 22.7428 27.5894Z" fill="#DFDBCC"/>
<path d="M30.5878 27.7492C30.8936 28.0915 31.4504 28.7077 31.8338 29.1458C33.1574 30.6383 35.412 32.6054 35.6493 32.4685C35.8867 32.3315 36.2838 32.5506 37.0825 33.1942C37.4978 33.5639 37.5069 33.5821 37.0642 33.4863C36.8132 33.4406 36.3705 33.4589 36.0738 33.5365L35.5352 33.7053L36.4161 34.4219C38.2189 35.9189 41.1719 37.7993 42.8332 38.4885C43.7643 38.8947 45.065 39.4652 45.7177 39.771C47.0093 40.3689 47.2604 40.3689 49.4511 39.7984C53.7688 38.6528 57.7943 35.5675 58.5839 32.8062C58.844 31.866 58.8212 31.7108 58.3237 30.871C57.8582 30.1317 57.5935 29.908 56.53 29.4334C54.7637 28.6392 50.3137 26.3982 47.8354 25.0245C46.6625 24.3581 45.1244 23.5274 44.4352 23.1486C43.0066 22.3955 39.5106 19.1916 37.9314 17.2107C36.2564 15.1021 35.1153 11.5376 35.5444 9.66174C35.7361 8.8037 36.4161 7.76309 37.3563 6.90047L38.155 6.18848L37.37 6.40299C36.3568 6.69965 33.6822 8.45226 32.5823 9.54764C30.7977 11.3094 29.1775 13.7283 28.6252 15.5129C28.4244 16.1199 28.5613 18.0734 28.8854 19.5978C28.9858 20.0542 29.0177 20.6703 28.9675 20.9761C28.8899 21.2773 29.0634 22.1856 29.3235 22.998C30.1496 25.4489 30.1131 25.7045 29.0908 24.9058C28.5385 24.495 28.5476 24.5133 29.2824 25.8003C29.6932 26.526 30.2865 27.4069 30.5923 27.7446L30.5878 27.7492Z" fill="#DFDBCC"/>
</svg>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
