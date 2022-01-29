import React from 'react';
import commentPerson from '../../../utility/commentPerson.webp'
import styles from '../Comments/Comment.module.css'


const Comments = () => {
    return (
        <div className="container">
            <h3>Comments</h3>
            <h5 className="mb-3 text-muted">Our Happy Customers review.</h5>      
            <div className={styles.commentBox}>
                <img src={commentPerson} alt="" className="img-fluid p-1" />
                <div className="ms-3">
                    <h6 className={styles.commentName}>Michel Smith</h6>
                    <p>21 December 2021</p>
                    <p>Disgo is a awesome restaurant. I found their much good evironment. Their food quality is best and much delicious. Fully family emvironment restaurant. You and also book for party center. Vary friendly.</p>
                </div>
            </div>
        </div>
    );
};

export default Comments;