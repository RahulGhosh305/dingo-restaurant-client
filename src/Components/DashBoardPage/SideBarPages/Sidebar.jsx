import React from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import Logo from '../../../utility/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClipboard, faDollarSign, faChartLine, faCoffee, faHome, faPlusSquare, faSignOutAlt, faTruck, faUsers, faUserShield, faUtensils, faChair } from '@fortawesome/free-solid-svg-icons'
import styles from './Sidebar.module.css';
import { faComments, faHeart } from '@fortawesome/free-regular-svg-icons';
import DashBoardSideCart from './DashBoardSideCart';
import headingDark from '../../../utility/heading-dark.png'



const Sidebar = () => {
    const navigate = useNavigate()
    const handleCollapse = () => {
        const nav = document.getElementById("collapsibleNavbar");
        const btn = document.getElementById("navbarBtn");
        nav.classList.remove("show");
        btn.classList.add("collapsed");
    };
    const cartData = [
        {
            icon: faCoffee,
            title: "45",
            desc: "Coffee"
        },
        {
            icon: faDollarSign,
            title: "41",
            desc: "revenue"
        },
        {
            icon: faUsers,
            title: "10",
            desc: "customers"
        },
        {
            icon: faClipboard,
            title: "8",
            desc: "orders"
        },
    ]
    return (
        <div style={{ marginTop: 20 }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <img src={Logo} alt="Icon" className={`img-fluid mb-2 ${styles.Logo}`} onClick={() => navigate('/')} />
                        <div className={styles.sidebarWrapper}>
                            <nav>
                                <br />
                                <button className={`navbar-toggler ${styles.navbarBtn}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" id='navbarBtn' data-bs-placement="top" title="Dashboard Menu">
                                    <FontAwesomeIcon icon={faBars} />
                                </button>
                                <div className="collapse mt-2 navbar-collapse" id="collapsibleNavbar">
                                    <ul className="list-group list-group-flush">
                                        <li onClick={() => handleCollapse()} className={`list-group-item list-group-item-action ${styles.customNavLink}`}>
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faHome} />
                                                <Link className={`nav-link ms-2 ${styles.listLink}`} to="/">Home</Link>
                                            </div>
                                        </li>
                                        <li onClick={() => handleCollapse()} className={`list-group-item list-group-item-action ${styles.customNavLink}`}>
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faChartLine} />
                                                <Link className={`nav-link ms-2 ${styles.listLink}`} to="">DashBoard</Link>
                                                {/* dashboardInfo */}
                                            </div>
                                        </li>
                                        <li onClick={() => handleCollapse()} className={`list-group-item list-group-item-action ${styles.customNavLink}`}>
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faPlusSquare} />
                                                <Link className={`nav-link ms-2 ${styles.listLink}`} to="addFood">Add Menu</Link>
                                            </div>
                                        </li>
                                        <li onClick={() => handleCollapse()} className={`list-group-item list-group-item-action ${styles.customNavLink}`}>
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faUtensils} />
                                                <Link className={`nav-link ms-2 ${styles.listLink}`} to="allFoods">All Menus</Link>
                                            </div>
                                        </li>
                                        <li onClick={() => handleCollapse()} className={`list-group-item list-group-item-action ${styles.customNavLink}`}>
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faComments} />
                                                <Link className={`nav-link ms-2 ${styles.listLink}`} to="reviews">Reviews</Link>
                                            </div>
                                        </li>
                                        <li onClick={() => handleCollapse()} className={`list-group-item list-group-item-action ${styles.customNavLink}`}>
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faChair} />
                                                <Link className={`nav-link ms-2 ${styles.listLink}`} to="reservationTable">Reservation Table</Link>
                                            </div>
                                        </li>
                                        <li onClick={() => handleCollapse()} className={`list-group-item list-group-item-action ${styles.customNavLink}`}>
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faTruck} />
                                                <Link className={`nav-link ms-2 ${styles.listLink}`} to="orderList">Orders</Link>
                                            </div>
                                        </li>
                                        <li onClick={() => handleCollapse()} className={`list-group-item list-group-item-action ${styles.customNavLink}`}>
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faUsers} />
                                                <Link className={`nav-link ms-2 ${styles.listLink}`} to="customers">Customers</Link>
                                            </div>
                                        </li>
                                        <li onClick={() => handleCollapse()} className={`list-group-item list-group-item-action ${styles.customNavLink}`}>
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faClipboard} />
                                                <Link className={`nav-link ms-2 ${styles.listLink}`} to="newBlog">New Blog Post</Link>
                                            </div>
                                        </li>
                                        <li onClick={() => handleCollapse()} className={`list-group-item list-group-item-action ${styles.customNavLink}`}>
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faUserShield} />
                                                <Link className={`nav-link ms-2 ${styles.listLink}`} to="addAdmin">Add Admin</Link>
                                            </div>
                                        </li>
                                        <li onClick={() => handleCollapse()} className={`list-group-item list-group-item-action ${styles.customNavLink}`}>
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faSignOutAlt} />
                                                <Link className={`nav-link ms-2 ${styles.listLink}`} to="">Log Out</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <div className={styles.sideFoodCard}>
                                {
                                    cartData.map(singleData => <DashBoardSideCart singleData={singleData} key={Math.random()} />)
                                }
                            </div>
                            <div className={styles.sideFoodCard}>
                                <p className="text-muted mt-3">Dingo - Restaurant Admin Dashboard © 2021 All Rights Reserved.
                                </p>
                                <p className="text-muted">Made with <i className="mx-2"> <FontAwesomeIcon icon={faHeart} /></i> by RG.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 mt-2">
                        <div className={styles.outletWrapper}>
                            <div className={styles.OutletBg}>
                                <h2 className={`mt-3 ${styles.dashboard}`}>Dashboard</h2>
                                <div className="text-center">
                                    <img src={headingDark} alt="" className="img-fluid  mb-4" />
                                    <h4>Welcome to Dingo Admin!</h4>
                                    <p>Here is your Dingo restaurant summary information.</p>
                                </div>
                            </div>
                            <div className="mt-5">
                                <Outlet />
                                <p className="text-center text-muted py-4">Dingo - Restaurant Admin Dashboard © 2021 All Rights Reserved. Made with by RG.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;