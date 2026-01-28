import React, { useEffect } from 'react'
import styles from './NotFound.module.css'

export default function NotFound() {
    useEffect(() => {
            document.title = "404"
          }, [])
          
  return (
    <>
     <section className='position-relative d-flex justify-content-center align-items-center vh-100'>
       <div>
        <span className={`${styles.not4}`}><span className='me-5'>4</span><span className='me-5'>0</span><span >4</span ></span>
       </div>
    <p className='text-center text-white opsword '>Oops!</p>
    <p className='text-center text-white opsword2 '>Sorry ,the page you are looking for doesn’t exist or has been moved.</p>
    <p className='text-center text-white opsword3 '>Check the URL Or <span className='opsword4 ' >Go Back</span></p>


    
     </section>
    </>
  )
}