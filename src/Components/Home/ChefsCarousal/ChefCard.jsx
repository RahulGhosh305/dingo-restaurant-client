import React from 'react';
import styles from './Chefs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const ChefCard = (props) => {
    const {photo, name, design, message} = props.singleChef
    return (
        <div className={styles.chefDetails}>
            <img src={photo} alt="" className="img-fluid" />

            <div className={styles.chefOverlay}>
                <div className={styles.overlayText}>
                    <h4>{name}</h4>
                    <hr />
                    <h5>{design}</h5>
                    <div className={styles.socialIcons}>
                        <FontAwesomeIcon className={styles.faSocial} icon={faFacebookF} />
                        <FontAwesomeIcon className={styles.faSocial} icon={faTwitter} />
                        <FontAwesomeIcon className={styles.faSocial} icon={faLinkedinIn} />
                    </div>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;