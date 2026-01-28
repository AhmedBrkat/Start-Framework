import React, { useEffect } from 'react'
import styles from './About.module.css'

export default function About() {
  useEffect(() => {
        document.title = "About"
      }, [])
  return (
    <>
      <section className={`${styles.AbCon}`}>
        <div className={`container `}>
          <h1 className={`${styles.headA} text-center text-uppercase text-white`}>about component</h1>
          <div className={`${styles.divider} d-flex align-items-center justify-content-center mb-2`}>
              <span className={`${styles.line}`}></span>
              <i className="fa-solid fa-star mx-3"></i>
              <span className={`${styles.line}`}></span>
            </div>
            <div className='d-flex justify-content-between pb-5'> 
              <div className='w-75 me-2 text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
              <div className='w-75 text-white '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
            </div>
        </div>
        

      </section>
    </>
  )
}
