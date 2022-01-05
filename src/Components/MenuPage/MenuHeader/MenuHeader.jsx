import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuHeader.module.css';

const MenuHeader = () => {
    return (
        <>
            <div className={styles.menuBgWrapper}>
                <div className="d-flex justify-content-center">
                    <div className={styles.menuBannerTexts}>
                        <h2 className={styles.menuBannerTitle}>Menu</h2>
                        <p className={styles.menuBannerDesc}>All Your Favorite Foods</p>
                        <div className="d-flex justify-content-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item" aria-current="page">Menu</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuHeader;