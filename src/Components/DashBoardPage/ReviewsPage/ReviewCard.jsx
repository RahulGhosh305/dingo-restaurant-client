import React from 'react';
import dashFavPic5 from '../../../utility/dashFavPic5.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewCard = () => {
    return (
        <div className="">
            <div className="card py-3 border-0 border-bottom">
                <div className="d-flex">
                    <img src={dashFavPic5} style={{ maxWidth: 65, maxHeight: 65, borderRadius: "50%", margin: 10 }} className="card-img-top" alt="..." />
                    <div>
                        <div className="d-flex ms-3 justify-content-start">
                            <h5 className="card-title mt-2">Mac Commonage</h5>
                        </div>
                        <div className="d-flex">
                            <p className="card-subtitle ms-3 mb-2 text-muted">Marketing</p>
                            <p className="card-subtitle ms-3 mb-2 text-muted">2-01-2022</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-md-9">
                            <p className="ms-3 text-left mt-4">We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!.</p>
                        </div>
                        <div className="col-md-3 my-auto">
                            <h2>4.5</h2>
                            <i><FontAwesomeIcon icon={faStar}/></i>
                            <i><FontAwesomeIcon icon={faStar}/></i>
                            <i><FontAwesomeIcon icon={faStar}/></i>
                            <i><FontAwesomeIcon icon={faStar}/></i>
                            <i><FontAwesomeIcon icon={faStarHalfAlt}/></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;