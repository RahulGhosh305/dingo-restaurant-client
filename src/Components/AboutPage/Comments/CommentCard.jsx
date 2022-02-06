import React from 'react';
import styles from '../Comments/Comment.module.css'
import avatar from "../../../utility/commentAvatar.jpg"

const CommentCard = (props) => {
    const {img, name, date, profession, message} = props.singleData
    return (
        <div className={styles.commentBox}>
            <img src={img ? img  : avatar} alt="" className="img-fluid p-1" style={{width : 150}} />
            <div className="ms-3">
                <h6 className={styles.commentName}>{name}</h6>
                <div className="d-flex flex-wrap">
                    <p className="me-3">{date}</p>
                    <p>{profession}</p>
                </div>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default CommentCard;