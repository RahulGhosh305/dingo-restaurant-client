import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import CareerBody from './CareerBody/CareerBody';
import CareerForm from './CareerForm/CareerForm';
import CareerHeader from './CareerHeader/CareerHeader';
import CareerInfo from './CareerInfo/CareerInfo';
import Footer from '../Shared/Footer/Footer';

const Career = () => {
    return (
        <>
            <Navbar />
            <CareerHeader />
            <CareerInfo />
            <CareerBody />
            <CareerForm />
            <Footer />
        </>
    );
};

export default Career;