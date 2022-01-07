import React from 'react';
import commentPerson from '../../../utility/commentPerson.webp'
import styles from '../Comments/Comment.module.css'


const Comments = () => {
    return (
        <div className="container">
            <h3 className="mb-3">Comments</h3>

            <div className={styles.commentBox}>
                <img src={commentPerson} alt="" className="img-fluid p-1" />
                <div className="ms-3">
                    <h6 className={styles.commentName}>Name</h6>
                    <p>Time</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio, debitis doloribus at quaerat recusandae quos ipsum aperiam deleniti distinctio?</p>
                </div>
            </div>
        </div>
    );
};

export default Comments;