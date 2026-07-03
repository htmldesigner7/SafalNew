import Image from 'next/image';
import React from 'react'
import styles from './CodeRealImpact.module.css'

function CodeRealImpact() {
  return (
    <section className='mt_80'>
      <div className="container-1600">
        <div className={styles.main}>
          <div className={styles.left}>
              <Image src="/images/blogs-inner.webp" 
              width={500} height={500} alt="image"/>
          </div>
          <div className={styles.right}>
            <h2 className="title_60 mb_40">Your Code. Real Impact.</h2>
            <p>We do not believe in busywork. The algorithms you optimize, the user journeys you map, and the business strategies you propose will touch real enterprise clients. We treat our interns as associate-level talent from day one, giving you the autonomy to fail, the support to recover, and the platform to make a tangible global impact.</p>
            <p>Lorem ipsum dolor sit amet consectetur. Ut velit leo amet suscipit elementum dolor. Leo egestas sit sit pellentesque scelerisque ultricies. Sit viverra sapien tincidunt egestas nunc dictumst urna. Aliquam elit sagittis id eu consectetur diam amet. Fringilla arcu nullam nunc aliquam sed. Euismod vulputate nullam cum potenti ac. Cursus nullam feugiat morbi lorem a. Sit nisi arcu commodo eget eget eros. Eu.</p>
            <a href='#' className={`${styles.button} mt_40`}>Lorem ipsum dolor sit amet consectetur. Semper ac mi aliquam.</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CodeRealImpact;