import React from 'react';
import Header from './Header/Header';
import Philosophy from './Philosophy/Philosophy';
import ChooseUS from './ChooseUS/ChooseUS';
import History from './History/History';
import Footer from '../Shared/Footer/Footer';

const About = () => {
    return (
        <div>
            <Header />
            <Philosophy />
            <ChooseUS />
            <History />
            <Footer/>
        </div>
    );
};

export default About;