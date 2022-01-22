import React from 'react';
import CustomerMap from './CustomerMap';
import FavItems from './FavItems';
import OrderSumCol from './OrderSumCol';
import RevenuesCol from './RevenuesCol';
import TreadingItem from './TreadingItem';
const DashboardInfo = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-6">
                    <RevenuesCol />
                </div>
                <div className="col-lg-6">
                    <OrderSumCol />
                </div>
                <div className="col-lg-6">
                    <CustomerMap />
                </div>
                <div className="col-lg-6">
                    <TreadingItem />
                </div>
                <div className="col-md-12">
                    <FavItems />
                </div>
                <p className="text-center text-muted mt-3">Dingo - Restaurant Admin Dashboard © 2021 All Rights Reserved. Made with by RG.</p>
            </div>
        </div>
    );
};

export default DashboardInfo;