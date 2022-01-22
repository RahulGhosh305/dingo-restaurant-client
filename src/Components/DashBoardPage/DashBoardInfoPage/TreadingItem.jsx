import React from 'react';
import TrendingCard from './TrendingCard';
import TrendingData from './TrendingData.js';

const TreadingItem = () => {
    return (
        <div className="border-0 card text-dark mt-3">
            <div className="card-body">
                <div className="">
                    <div className="">
                        <div className="">
                            <h4 className="text-center mb-3">Trending Items</h4>
                            <p className="text-muted mt-3">Dingo's Recently Trending Items.</p>
                        </div>

                        {
                           TrendingData.map(singleData => <TrendingCard singleData={singleData} key={Math.random()}/>) 
                        }

                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">

            </div>
        </div>
    );
};

export default TreadingItem;