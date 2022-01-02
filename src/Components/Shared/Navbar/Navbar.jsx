import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../../../utility/logo.png'


//* NAVBAR COMPONENT
const Navbar = () => {

    //* Navbar Background Change
    const [navbarColor, setNavbarColor] = useState(false)
    const changeBackground = () => {
        // console.log(window.scrollY);
        if (window.scrollY >= 100) {
            setNavbarColor(true)
        }
        else {
            setNavbarColor(false)
        }
    }
    window.addEventListener('scroll', changeBackground)


    //* Navbar Collapsed with onClicked event on mobile device
    const handleCollapse = () => {
        const nav = document.getElementById("navbarSupportedContent");
        const btn = document.getElementById("navbarBtn");
        nav.classList.remove("show");
        btn.classList.add("collapsed");
    };
    return (
        <>
            <header className={styles.navbarWrapper}>
                <div className={styles.navbarInner}>
                    <nav className={navbarColor ? "navbar navbar-expand-lg fixed-top navbar-light bg-light" : "navbar navbar-expand-lg navbar-light"}>
                        <div className={`container ${styles.customContainer}`}>
                            <img src={Logo} alt="Icon" className="img-fluid" />
                            <button className={`navbar-toggler ${styles.navbarBtn}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className={`navbar-nav mx-auto mb-2 mb-lg-0 ${styles.navbarUl}`}>
                                    <li className={`nav-item ${styles.navbarList}`}>
                                        <Link onClick={() => handleCollapse()} className={`nav-link ${styles.listLink}`} to="/">Home</Link>
                                    </li>
                                    <li className={`nav-item ${styles.navbarList}`}>
                                        <Link onClick={() => handleCollapse()} className={`nav-link ${styles.listLink}`} to="/about">About</Link>
                                    </li>
                                    <li className={`nav-item ${styles.navbarList}`}>
                                        <Link onClick={() => handleCollapse()} className={`nav-link ${styles.listLink}`} to="/menus">Menus</Link>
                                    </li>
                                    <li className={`nav-item ${styles.navbarList}`}>
                                        <Link onClick={() => handleCollapse()} className={`nav-link ${styles.listLink}`} to="/blogs">Blogs</Link>
                                    </li>
                                    <li className={`nav-item ${styles.navbarList}`}>
                                        <Link onClick={() => handleCollapse()} className={`nav-link ${styles.listLink}`} to="/contact">Contact</Link>
                                    </li>
                                </ul>
                                <div className={styles.reservation}>
                                    <Link className={`nav-link ${styles.navLink}`} to="/">Reservation</Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;