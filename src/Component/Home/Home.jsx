import React, { useEffect } from 'react'
import styles from "./Home.module.css"
import piHome from "./../../assets/avataaars.svg"

export default function Home() {
  useEffect(() => {
          document.title = "Home"
        }, [])
  return (
    <>
      <div className={`${styles.home} `}>
        <div className="d-flex justify-content-center mb-5">
            <img src={piHome} alt="###" srcset="" className={`${styles.El3amidImg} rounded-circle`}/>
        </div>
        <h1 className='text-center text-white mt-0'>START FRAMEWORK</h1>
         <div className={`${styles.divider} d-flex align-items-center justify-content-center mb-2`}>
            <span className={`${styles.line}`}></span>
            <i className="fa-solid fa-star mx-3"></i>
            <span className={`${styles.line}`}></span>
        </div>
        <h4 className='text-center text-white m-0 pb-5'>Graphic Artist - Web Designer - Illustrator</h4>

      </div>
    </>
  )
}
