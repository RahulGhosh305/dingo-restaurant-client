import React from 'react';
import styles from './About.module.css';
import sign from '../../../utility/sign-1.png'
import Chefs from '../ChefsCarousal/Chefs';
const About = () => {
    return (
        <section className={styles.aboutWrapper}>
            <div className="container">
                <div className="row">
                    <div className={`col-sm-12 ${styles.aboutCentralize}`}>
                        <div className={styles.textContainer}>
                            <p>Your pleasure of teasing</p>
                            <h2>WELCOME</h2>
                            <p className={styles.aboutDescription}>Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            
                            <img src={sign} alt="" className="img-fluid" />

                            <div>
                                <Chefs/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;<h1>About</h1>