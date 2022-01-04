import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import styles from './ContactHeader.module.css';
import { Link } from 'react-router-dom';


const ContactHeader = () => {
    return (
        <>
            <Navbar />
            <div className={styles.contactHeaderWrapper}>
                <div className={styles.contactTexts}>
                    <div className={styles.contactTitles}>
                        <h2>Contact Us</h2>
                        <p>Make sure we contact you fast.</p>
                        <div className="d-flex justify-content-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item" aria-current="page">Contact Us</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactHeader;