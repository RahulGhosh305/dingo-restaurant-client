import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import BlogSingleHeader from './BlogSingleHeader/BlogSingleHeader';
import MediaCart from '../BlogSinglePage/MediaCart/MediaCart';
import Comments from '../BlogSinglePage/Comments/Comments';
import CommentFrom from '../BlogSinglePage/CommentForm/CommentForm'
import Footer from '../Shared/Footer/Footer';

const BlogSingle = () => {
    return (
        <>
            <Navbar />
            <BlogSingleHeader />
            <MediaCart />
            <Comments />
            <CommentFrom />
            <Footer />
        </>
    );
};

export default BlogSingle;