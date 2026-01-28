import React, { useEffect } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  useEffect(() => {
          document.title = "Contact"
        }, [])
  return (
    <>
      <section className='pb-5 bg-white'>
            <h1 className={`${styles.headA} text-center text-uppercase `}>contact section</h1>
            <div className={`${styles.divider} d-flex align-items-center justify-content-center mb-2`}>
                  <span className={`${styles.line}`}></span>
                  <i className="fa-solid fa-star mx-3"></i>
                  <span className={`${styles.line}`}></span>
            </div>
           <div className="w-50 m-auto">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input type="email" placeholder='userName' className={`${styles.allinput} border-bottom border-2 form-control`} id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input type="email" placeholder='userAge' className={`${styles.allinput} border-bottom border-2 form-control`} id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input type="email" placeholder='userEmail' className={`${styles.allinput} border-bottom border-2 form-control`} id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input type="email" placeholder='userPassword' className={`${styles.allinput} border-bottom border-2 form-control`} id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <button className={`btn ${styles.btnColor}`}>send Message</button>
              
              
           </form>
           </div>

      </section>
    </>
  )
}
