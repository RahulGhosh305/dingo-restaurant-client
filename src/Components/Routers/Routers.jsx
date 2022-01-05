import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../HomePage/Home.jsx';
import About from '../AboutPage/About.jsx';
import Menu from '../MenuPage/Menu.jsx';
import Blogs from '../BlogsPage/Blogs.jsx';
import Contact from '../ContactPage/Contact.jsx';
import Reservation from '../ReservationPage/Reservation.jsx';
import NotFound from '../404Page/NotFound.jsx';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menus" element={<Menu />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default Routers;