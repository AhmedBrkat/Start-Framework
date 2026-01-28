import React from 'react'
import  styles from"./Navbar.module.css"
import { NavLink } from 'react-router-dom'
import About from './../About/About';
import Portfolio from './../Portfolio/Portfolio';
import Contact from './../Contact/Contact';
export default function Navbar() {
  return (
    <>
        <nav className={`navbar navbar-expand-lg ${styles.backgg} fixed-top ${styles.scrolled} `}>
            <div className="container">
                <NavLink className={`navbar-brand ${styles.navHome}`} to="/">START FRAMEWORK</NavLink>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className={`nav-link ${styles.navSec}`} aria-current="page" to="/About">ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className={`nav-link  ${styles.navSec}`} aria-current="page" to="/Portfolio">PORTFOLIO</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className={`nav-link  ${styles.navSec}`} aria-current="page" to="/Contact">CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
