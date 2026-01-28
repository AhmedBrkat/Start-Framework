import React, { useEffect } from 'react'
import styles from './Portfolio.module.css'
import asd1 from "./../../assets/poert1.png"
import asd2 from "./../../assets/port2.png"
import asd3 from "./../../assets/port3.png"
import asd4 from "./../../assets/poert1.png"
import asd5 from "./../../assets/port2.png"
import asd6 from "./../../assets/port3.png"

export default function Portfolio() {
  useEffect(() => {
        document.title = "Portfolio"
      }, [])

  return (
    <>
      <section className='bg-white pb-4'>
        <h1 className={`${styles.headA} text-center text-uppercase `}>portfolio component</h1>
        <div className={`${styles.divider} d-flex align-items-center justify-content-center mb-2`}>
          <span className={`${styles.line}`}></span>
          <i className="fa-solid fa-star mx-3"></i>
          <span className={`${styles.line}`}></span>
        </div>
        <div className="container mb-5">
          <div className="row g-5">
            <div className="col-4 conCard">
              <div className={`bg-danger rounded-3 d-flex justify-content-center align-items-center position-relative ${styles.carad}`}>
                <i className='fa-solid fa-plus fa-6x text-white position-absolute w-100 h-100 d-flex justify-content-center align-items-center'></i>
                <img src={asd1} alt="###" className='w-100 rounded-2 h-100' />
              </div>
            </div>
            <div className="col-4 conCard">
              <div className={`bg-info rounded-3 d-flex justify-content-center align-items-center position-relative ${styles.carad}`}>
                <i className='fa-solid fa-plus fa-6x text-white position-absolute w-100 h-100 d-flex justify-content-center align-items-center'></i>
                <img src={asd2} alt="###" className='w-100 rounded-2 h-100' />
              </div>
            </div>
            <div className="col-4 conCard">
              <div className={`bg-dark rounded-3 d-flex justify-content-center align-items-center position-relative ${styles.carad}`}>
                <i className='fa-solid fa-plus fa-6x text-white position-absolute w-100 h-100 d-flex justify-content-center align-items-center'></i>
                <img src={asd4} alt="###" className='w-100 rounded-2 h-100' />
              </div>
            </div>
            <div className="col-4 conCard">
              <div className={`bg-danger rounded-3 d-flex justify-content-center align-items-center position-relative ${styles.carad}`}>
                <i className='fa-solid fa-plus fa-6x text-white position-absolute w-100 h-100 d-flex justify-content-center align-items-center'></i>
                <img src={asd5} alt="###" className='w-100 rounded-2 h-100' />
              </div>
            </div>
            <div className="col-4 conCard">
              <div className={`bg-info rounded-3 d-flex justify-content-center align-items-center position-relative ${styles.carad}`}>
                <i className='fa-solid fa-plus fa-6x text-white position-absolute w-100 h-100 d-flex justify-content-center align-items-center'></i>
                <img src={asd3} alt="###" className='w-100 rounded-2 h-100' />
              </div>
            </div>
            <div className="col-4">
              <div className={`bg-dark rounded-3 d-flex justify-content-center align-items-center position-relative ${styles.carad}`}>
                <i className='fa-solid fa-plus fa-6x text-white position-absolute w-100 h-100 d-flex justify-content-center align-items-center'></i>
                <img src={asd6} alt="###" className='w-100 rounded-2 h-100' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
