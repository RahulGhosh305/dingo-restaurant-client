import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../../../utility/logo.png'

//* NAVBAR COMPONENT
const NavBar = () => {
    return (
        <header className={styles.navbarWrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={styles.navbarInner}>
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className={`container-fluid ${styles.customContainer}`}>
                                    <img src={Logo} alt="Icon" className="img-fluid" />
                                    <button className={`navbar-toggler ${styles.navbarBtn}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className={`navbar-nav mx-auto mb-2 mb-lg-0 ${styles.navbarUl}`}>
                                            <li className={`nav-item ${styles.navbarList}`}>
                                                <Link className={`nav-link ${styles.listLink}`} to="/home">Home</Link>
                                            </li>
                                            <li className={`nav-item ${styles.navbarList}`}>
                                                <Link className={`nav-link ${styles.listLink}`} to="/about">About</Link>
                                            </li>
                                            <li className={`nav-item ${styles.navbarList}`}>
                                                <Link className={`nav-link ${styles.listLink}`} to="/menus">Menus</Link>
                                            </li>
                                            <li className={`nav-item ${styles.navbarList}`}>
                                                <Link className={`nav-link ${styles.listLink}`} to="/blogs">Blogs</Link>
                                            </li>
                                            <li className={`nav-item ${styles.navbarList}`}>
                                                <Link className={`nav-link ${styles.listLink}`} to="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={styles.reservation}>
                                    <Link className={`nav-link ${styles.navLink}`} to="/">Reservation</Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;