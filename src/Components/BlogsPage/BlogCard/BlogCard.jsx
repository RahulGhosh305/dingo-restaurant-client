import React from 'react';
import styles from './BlogCard.module.css';

const BlogCard = (props) => {
    const { date, img, name, desc, time } = props.blogData;
    return (
        <div className={styles.cardWrapper}>
            <div className="container">
                <div className="card border-0">
                    <div className={`card-header ${styles.cardHeader}`}>
                        <div className="d-flex align-items-center">
                            <h3 className="card-title me-3">{name}</h3>
                            <p className="card-text text-muted">{date}</p>
                        </div>
                    </div>
                    <div className={styles.cardImg}>
                        <img src={img} className="card-img-top img-fluid" alt="..." />
                    </div>
                    <div className="card-body">
                        <p className="card-text mt-2">{desc}</p>
                        <p className="card-text text-muted">{time}</p>
                        <div className="btn p-0">See more...</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;