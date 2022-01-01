import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../HomePage/Home.jsx';
import About from '../AboutPage/About';
// import Menu from '../MenuPage/Menu';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about*" element={<About />} />
            {/* <Route path="/menu*" element={<Menu />} /> */}
        </Routes>
    );
};

export default Routers;