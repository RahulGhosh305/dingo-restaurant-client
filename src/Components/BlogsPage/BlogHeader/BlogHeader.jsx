import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import styles from './BlogHeader.module.css'
const BlogHeader = () => {
    return (
        <>
        <Navbar/>
            <div className={styles.blogHeaderWrapper}>
                <div className="container">
                    <div className="">
                        <div className="d-flex justify-content-center">
                            <div className={styles.blogBannerTexts}>
                                <p className={styles.blogTitle}>Blogs</p>
                                <p className={styles.blogDesc}>News and interesting news from our world.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogHeader;