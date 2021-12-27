import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faClock } from '@fortawesome/free-solid-svg-icons';
import styles from './Blog.module.css';

const SingleBlogCard = (props) => {
    const { photo, name, chefImg, date, message } = props.singleData;
    return (
        <div className={styles.cardWrapper}>
            <div class="card border-0">
                <img src={photo} class="card-img-top img-fluid" alt="..." />
                <div class="card-body">
                    <div>
                        <img src={chefImg} alt="" className={`img-fluid ${styles.imgBlogChef}`} />
                    </div>
                    <h3 class="card-title mt-3">{name}</h3>
                    <p class={`card-text ${styles.messageText}`}>{message}</p>
                    <div className={`d-flex justify-content-between ${styles.cardFooter}`}>
                        <div className="d-flex">
                            <i> <FontAwesomeIcon icon={faClock} /> </i>
                            <p className="ms-2">{date}</p>
                        </div>
                        <div className="d-flex">
                            <i> <FontAwesomeIcon icon={faCommentDots} /> </i>
                            <p className="ms-2">0 Comments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlogCard;