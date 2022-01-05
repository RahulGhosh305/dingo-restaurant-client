import React from 'react';
import styles from './NotFoundBody.module.css'
const NotFoundBody = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className={styles.foundBodyTexts}>
                <h2>Opps!</h2>
                <h5>Page cannot be found! We'll have it figured out in no time.Meanwhile, check out these fresh ideas.</h5>
            </div>
        </div>
    );
};

export default NotFoundBody;