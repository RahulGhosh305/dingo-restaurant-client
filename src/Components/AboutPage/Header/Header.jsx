import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import styles from './Header.module.css'
const Header = () => {
    return (
        <>
            <div className={styles.headerWrapper}>
                <Navbar />
                <div className={styles.headerTexts}>
                    <div>
                        <h2>About Us</h2>
                        <p>Information about our restaurant and our philosophy</p>
                        <div className="d-flex justify-content-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item" aria-current="page">About Us</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;