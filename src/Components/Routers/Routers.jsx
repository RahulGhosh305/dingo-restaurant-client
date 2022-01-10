import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../HomePage/Home.jsx';
import About from '../AboutPage/About.jsx';
import Menu from '../MenuPage/Menu.jsx';
import MenuSingle from '../MenuSinglePage/MenuSingle.jsx';
import Blogs from '../BlogsPage/Blogs.jsx';
import BlogSingle from '../BlogSinglePage/BlogSingle.jsx';
import Reservation from '../ReservationPage/Reservation.jsx';
import Contact from '../ContactPage/Contact.jsx';
import Career from '../CareerPage/Career.jsx';
import NotFound from '../404Page/NotFound.jsx';
import UserLogin from '../LoginSignupPage/UserLogin.jsx';
import UserSignUp from '../LoginSignupPage/UserSignUp.jsx';
import AddCart from '../AddCart/AddCart.jsx';
import UserForm from '../CheckOut/UserForm.jsx';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menus" element={<Menu />} />
            <Route path="/menuSingle" element={<MenuSingle />} />
            <Route path='/addCart' element={<AddCart />} />
            <Route path='/checkout' element={<UserForm />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogSingle" element={<BlogSingle />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path='/login' element={<UserLogin />} />
            <Route path='/signUp' element={<UserSignUp />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default Routers;