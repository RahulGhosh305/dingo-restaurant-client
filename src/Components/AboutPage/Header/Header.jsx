import React from 'react';
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;