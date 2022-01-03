import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import AllBlogData from './AllBlogData.js';
import headingDark from '../../../utility/heading-dark.png';
import styles from './AllBlog.module.css';

const AllBlog = () => {
    return (
        <>
            <div className={styles.allWrapper}>
                <p>Our Recent Posts</p>
                <h2>Check Regularly</h2>
                <img src={headingDark} alt="" className="img-fluid"/>
            </div>
            <div>
                {
                    AllBlogData.map(singleData => <BlogCard blogData={singleData} key={Math.random()} />)
                }
            </div>
        </>
    );
};

export default AllBlog;