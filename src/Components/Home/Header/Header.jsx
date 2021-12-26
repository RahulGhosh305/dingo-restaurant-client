import React from 'react';
import Video from '../Video/Video';
import styles from './Header.module.css';

const Header = () => {
    return (
        <section className={styles.bannerWrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">                      
                        <div className={styles.bannerInnerText}>
                            <h5>Expensive But The Best</h5>
                            <h1>We believe good food {window.innerWidth > 780 ? <br /> : ""} offer great smile</h1>
                            <p>Together  heaven upon third dominion be upon wont darkness rule land behold it created good saw after she Our set living. Signs midst dominion creepers morning</p>
                        </div>      
                        <Video />         
                    </div>
                </div> 
            </div>
            {/* After background img*/}
        </section>
    );
};

export default Header;