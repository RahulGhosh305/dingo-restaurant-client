import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import AllMenu from './AllMenu/AllMenu';
import MenuHeader from './MenuHeader/MenuHeader';
import Footer from '../Shared/Footer/Footer';

const Menu = () => {
    return (
        <>
            <Navbar />
            <MenuHeader />
            <AllMenu />
            <Footer />
        </>

    );
};

export default Menu;