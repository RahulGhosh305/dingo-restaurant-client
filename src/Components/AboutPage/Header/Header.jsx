import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <h2>About Us</h2>
            <p>Information about our restaurant and our philosophy</p>
            <div className="d-flex justify-content-center">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class={`breadcrumb-item ${styles.colorWhite}`} aria-current="page">About Us</li>
                 </ol>
            </nav>
            </div>
        </div>
    );
};

export default Header;