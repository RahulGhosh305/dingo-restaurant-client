import React from 'react';
import BlogHeader from './BlogHeader/BlogHeader';
import AllBlog from './AllBlog/AllBlog';
import Footer from '../Shared/Footer/Footer';

const Blogs = () => {
    return (
        <>
            <BlogHeader />
            <AllBlog />
            <Footer />
        </>
    );
};

export default Blogs;