import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import styles from './CodeRealImpact.module.css'

function CodeRealImpact() {
  return (
    <section className='mt_80'>
      <div className="container-1600">
        <div className={styles.main}>
          <div className={styles.left}>
              <Image src="/images/code-impact.jpg" 
              width={500} height={500} alt="image"/>
          </div>
          <div className={styles.right}>
            <h2 className="title_60 mb_40">Your Code. Real Impact.</h2>
            <p>Your work will not sit in isolation.</p>
            <p>The systems you build, the logic you design, and the strategies you contribute to will directly influence real businesses, real users, and real markets. We treat interns as contributors, not observers.</p>
            <p>You are given ownership, supported with guidance, and expected to deliver.</p>
            <Link href='/open-positions' className={`${styles.button} mt_40`}>Explore Open Positions</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CodeRealImpact;