import React, { useState, useEffect } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import headingDark from '../../../utility/heading-dark.png';
import styles from './AllBlog.module.css';

const AllBlog = () => {
    const [blogCardData, setBlogCardData] = useState([])
    useEffect(() => {
        fetch("https://dingo-restaurant-server.onrender.com/BlogPageBlog")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBlogCardData(data)
            })
    }, [])
    return (
        <>
            <div className={styles.allWrapper}>
                <p>Our Recent Posts</p>
                <h2>Check Regularly</h2>
                <img src={headingDark} alt="" className="img-fluid" />
            </div>
            <div>
                {
                    blogCardData.map(singleData => <BlogCard blogData={singleData} key={Math.random()} />)
                }
            </div>
        </>
    );
};

export default AllBlog;