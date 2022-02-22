import React from 'react';
import { UserLoginContext } from '../../App';
import Sidebar from './SideBarPages/Sidebar';

const DashBoard = () => {
    return (
        <>
            <UserLoginContext.Consumer>
                {
                    (value) => <Sidebar loginData={value} />
                }
            </UserLoginContext.Consumer>
            {/* <Sidebar /> */}
        </>
    );
};

export default DashBoard;

// Dashboard/ Order List/ Order details/ Customers list/ Reviews / Add food Item/ Make admin