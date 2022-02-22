import React, { useContext, useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../../../utility/logo.png'
import { UserLoginContext } from '../../../App';


//* NAVBAR COMPONENT
const Navbar = () => {
    const loggedInUser = useContext(UserLoginContext);
    // console.log(loggedInUser)
    const navigate = useNavigate()
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
    //* Right Now Not Use to on NavLink onClick={() => handleCollapse()}
    // const handleCollapse = (e) => {
    //     e.preventDefault()
    //     const nav = document.getElementById("navbarSupportedContent");
    //     const btn = document.getElementById("navbarBtn");
    //     nav.classList.remove("show");
    //     btn.classList.add("collapsed");
    // };
    return (
        <>
            <header className={styles.navbarWrapper}>
                <div className={styles.navbarInner}>
                    <nav className={navbarColor ? "navbar navbar-expand-lg fixed-top navbar-light bg-light px-3" : "navbar navbar-expand-lg navbar-light"}>
                        <div className={`container ${styles.customContainer}`}>
                            <img src={Logo} alt="Icon" className={`img-fluid ${styles.Logo}`} onClick={() => navigate('/')} />
                            <button className={`navbar-toggler ${styles.navbarBtn}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className={`navbar-nav mx-auto mb-2 mb-lg-0 ${styles.navbarUl}`}>
                                    <li className={`nav-item ${styles.navbarList}`}>
                                        <NavLink className={({ isActive }) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to="/">Home</NavLink>
                                    </li>
                                    <li className={`nav-item ${styles.navbarList}`}>
                                        <NavLink className={({ isActive }) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to="/about">About</NavLink>
                                    </li>
                                    <li className={`nav-item ${styles.navbarList}`}>
                                        <NavLink className={({ isActive }) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to="/menus">Menus</NavLink>
                                    </li>
                                    <li className={`nav-item ${styles.navbarList}`}>
                                        <NavLink className={({ isActive }) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to="/blogs">Blogs</NavLink>
                                    </li>
                                    <li className={`nav-item ${styles.navbarList}`}>
                                        <NavLink className={({ isActive }) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to="/reservation">Reservation</NavLink>
                                    </li>
                                    <li className={`nav-item ${styles.navbarList}`}>
                                        <NavLink className={({ isActive }) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to="/contact">Contact</NavLink>
                                    </li>
                                    <li className={`nav-item ${styles.navbarList}`}>
                                        <NavLink className={({ isActive }) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to="/career">Career</NavLink>
                                    </li>
                                </ul>
                                <div className={`d-flex justify-content-center ${styles.reservation}`}>
                                    {
                                        loggedInUser.email ? <img src={loggedInUser.photo} alt="" className="img-fluid rounded-circle" style={{ width: '40px' }} /> :
                                        <Link className={`nav-link ${styles.navLink}`} to="/login">LogIn</Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </nav>
                    {/* Show All Route Pages By Clicking Nav link */}
                    <Outlet />
                </div>
            </header>
        </>
    );
};

export default Navbar;