import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../HomePage/Home.jsx';
import About from '../AboutPage/About.jsx';
import Menu from '../MenuPage/Menu.jsx';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menus" element={<Menu />} />
        </Routes>
    );
};

export default Routers;