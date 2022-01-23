import React from 'react';
import ReviewCard from './ReviewCard';
import styles from './Review.module.css'
import reviewRight1 from '../../../utility/test3.jpg'
import reviewRight2 from '../../../utility/test12.jpg'
import reviewRight3 from '../../../utility/test10.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Review = () => {
    return (
        <div className="text-center">
            <div className="row">
                <div className="col-md-8">
                    <h3>Recent Review</h3>
                    <p>Here is customer review about your restaurant</p>
                    <div className="overflow-auto vh-100 px-3 mb-3">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={styles.reviewRightWrapper}>
                        <div className="card mb-2 border-0">
                            <img src={reviewRight1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <i><FontAwesomeIcon icon={faStar} /></i>
                                <i><FontAwesomeIcon icon={faStar} /></i>
                                <i><FontAwesomeIcon icon={faStar} /></i>
                                <i><FontAwesomeIcon icon={faStar} /></i>
                                <i><FontAwesomeIcon icon={faStar} /></i>
                            </div>
                        </div>
                        <div className="card mb-2 border-0">
                            <img src={reviewRight3} className="card-img" alt="..." />
                            <div className="card-body">
                                <i><FontAwesomeIcon icon={faStar} /></i>
                                <i><FontAwesomeIcon icon={faStar} /></i>
                                <i><FontAwesomeIcon icon={faStar} /></i>
                                <i><FontAwesomeIcon icon={faStar} /></i>
                                <i><FontAwesomeIcon icon={faStar} /></i>
                            </div>
                        </div>
                        <div className="card border-0">
                            <img src={reviewRight2} className="card-img" alt="..." />
                            <div className="card-body">
                                <i><FontAwesomeIcon icon={faStar} /></i>
                                <i><FontAwesomeIcon icon={faStar} /></i>
                                <i><FontAwesomeIcon icon={faStar} /></i>
                                <i><FontAwesomeIcon icon={faStar} /></i>
                                <i><FontAwesomeIcon icon={faStar} /></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;