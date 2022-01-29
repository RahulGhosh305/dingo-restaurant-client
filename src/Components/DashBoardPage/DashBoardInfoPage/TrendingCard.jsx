import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

const TrendingCard = (props) => {
    const {count, img, title, taka, number, percent} = props.singleData
    return (
        <div className="card border-bottom border-0 mb-3">
            <div className="row g-0">
                <div className="col-md-3">
                    <div className="d-flex align-items-center d-none d-md-block">
                        <span className="text-muted fw-bold">#{count}</span>
                        <img style={{ width: 88, height: 88, borderRadius: 15, }} src={img} className=" p-2 img-fluid rounded-start" alt="..." />
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-text">{taka} Taka</h6>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex align-items-center justify-content-evenly">
                        <FontAwesomeIcon style={{ fontSize: 28, color: "green" }} icon={faChartLine} />
                        <div className="mb-2">
                            <h3 className="m-0">{number}</h3>
                            <p className="text-muted m-0">Sales</p>
                            <p className="text-muted m-0">({percent}%)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingCard;