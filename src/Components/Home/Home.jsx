import React from 'react';
import PopularDish from './PopularDish/PopularDish';
import BookTable from './BookTable/BookTable';
import Blog from './Blog/Blog';
import Food from './Food/Food';
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
            <Food />
            <PopularDish />
            <BookTable />
            <Blog />
            <Footer />
        </>
    );
};

export default Home;