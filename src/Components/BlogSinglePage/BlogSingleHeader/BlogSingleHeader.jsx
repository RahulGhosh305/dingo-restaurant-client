import React from 'react';
import styles from './BlogSingleHeader.module.css'
import singleBlogImg from '../../../utility/singleBlogImg.webp';



const BlogSingleHeader = () => {
    return (
        <div style={{ marginTop: 150 }}>
            <div className="container">
                <h2>HUNDREDS OF LIVE MUSIC VENUES IN SEOU</h2>
                <p>Tincidunt integer eu augue augue nunc elit doloro luctus placerat scelerisque euismod iaculis eulacus nunc mi elito vehicula ut laoreeto acaliquam sit amet justo nunc gocuneore super tempore metus velo curae fugit nec ligula libero!</p>

                <p className={styles.dateTime}>1 JANUARY, 2022 || <i className={styles.love}>&hearts;</i> (3)</p>
                <div className="d-flex justify-content-center">
                    <figure>
                        <img src={singleBlogImg} alt="" className="img-fluid" />
                        <figcaption className="text-center">Fig.1 - Trulli, Puglia, Italy.</figcaption>
                    </figure>
                </div>

                <p>Recipes Description</p>
                <p>Description :  ipsum dolor sit amet consectetur adipisicing elit. Sapiente ut nulla quibusdam, saepe quam vero voluptate minima commodi cum, voluptas facilis accusantium corporis voluptatibus? Sunt debitis adipisci veniam placeat cumque porro sequi itaque expedita tempora dignissimos vitae accusamus molestiae aliquam in magnam officiis vel esse incidunt repellendus, nisi ex dicta eius blanditiis? Tempore placeat eius nisi nihil, quia accusantium Magni corrupti explicabo vel! repellat necessitatibus sint, totam reiciendis, iusto velit a quod. Magni corrupti explicabo vel!</p>

            </div>
        </div>
    );
};

export default BlogSingleHeader;