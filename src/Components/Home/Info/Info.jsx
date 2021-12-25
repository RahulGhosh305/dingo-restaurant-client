import React from 'react';
import styles from'./Info.module.css';
import phoneBlack from '../../../utility/phone2.jpg';
import envelop from '../../../utility/envelop2.jpg';
import location1 from '../../../utility/location1.jpg';
import clock3 from '../../../utility/clock3.jpg';


const Info = () => {
    return (
        <section className={styles.infoWrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <div className={styles.iconBoxText}>
                            <div className={styles.infoIcon}>
                                <img src={phoneBlack} alt="" className="img-fluid"/>
                            </div>
                            <div className={styles.infoText}>
                                <h5>Call Now</h5>
                                <p>+09 777 787 999</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className={styles.iconBoxText}>
                            <div className={styles.infoIcon}>
                                <img src={location1} alt="" className="img-fluid" />
                            </div>
                            <div className={styles.infoText}>
                                <h5>Location</h5>
                                <p>Central Park,35/A Road</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className={styles.iconBoxText}>
                            <div className={styles.infoIcon}>
                                <img src={envelop} alt="" className="img-fluid"/>
                            </div>
                            <div className={styles.infoText}>
                                <h5>Contact Us</h5>
                                <p>info@bingo.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className={styles.iconBoxText}>
                            <div className={styles.infoIcon}>
                                <img src={clock3} alt="" className="img-fluid" />
                            </div>
                            <div className={styles.infoText}>
                                <h5>Schedules</h5>
                                <p>Mon-Sun 1pm-10pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;