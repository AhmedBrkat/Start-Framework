import React from 'react'
import styles from "./Footer.module.css"
export default function Footer() {
  return (
    <>
      <footer className={`  text-center text-lg-start ${styles.backgg1}`}>
        <div className={`container  ${styles.cobn} `}>
          <div className="row" >
            <div className={`col-lg-4 col-md-6 mb-4 mb-md-0  `}>
                <h5 className={`text-uppercase mb-0 ${styles.foHead} `}>LOCATION</h5>
                <ul className="list-unstyled">
                <li>
                    <a href="#!" className={` ${styles.foLi} `}>2215 John Daniel Drive</a>
                </li>
                <li>
                    <a href="#!" className={` ${styles.foLi} `}>Clark, MO 65243</a>
                </li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className={`text-uppercase mb-0 ${styles.foHead} `}>AROUND THE WEB</h5>
            <section className="mb-4 ">
                    <a data-mdb-ripple-init className="btn text-white btn-floating m-1 rounded-circle" style={{backgroundColor: '#3b5998'}} href="#!" role="button"><i className="fab fa-facebook-f" /></a>
                    <a data-mdb-ripple-init className="btn text-white btn-floating m-1 rounded-circle" style={{backgroundColor: '#55acee'}} href="#!" role="button"><i className="fab fa-twitter" /></a>
                    <a data-mdb-ripple-init className="btn text-white btn-floating m-1 rounded-circle" style={{backgroundColor: '#dd4b39'}} href="#!" role="button"><i className="fab fa-google" /></a>
                    <a data-mdb-ripple-init className="btn text-white btn-floating m-1 rounded-circle" style={{backgroundColor: '#0082ca'}} href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
            </section>

            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className={`text-uppercase mb-0 ${styles.foHead} `}>ABOUT FREELANCER</h5>
                <ul className="list-unstyled">
                <li>
                    <a href="#!" className={` ${styles.foLi} `}>Freelance is a free to use, licensed Bootstrap theme created by Route</a>
                </li>
                </ul>
            </div>
            </div>
        </div>
        <div className={`text-center p-3 ${styles.backgg}`} style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
            © 2026 Copyright
        </div>
      </footer>

    </>
  )
}
