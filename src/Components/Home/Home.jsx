import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Info from './Info/Info';
import About from './About/About';

//* Home Page
const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Info />
            <About />
            <Footer />
        </>
    );
};

export default Home;