import React from 'react';
import { useNavigate } from 'react-router-dom';
import singleBlogImg from '../../../utility/singleBlogImg.webp';
// import styles from './MenuSingleHeader.module.css';

const MenuSingleHeader = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/addCart')
    }
    return (
        <div style={{ marginTop: 150 }}>
            <div className="container">
                <h2>HUNDREDS OF LIVE MUSIC VENUES IN SEOU</h2>
                <p>Tincidunt integer eu augue augue nunc elit doloro luctus placerat scelerisque euismod iaculis eulacus nunc mi elito vehicula ut laoreeto acaliquam sit amet justo nunc gocuneore super tempore metus velo curae fugit nec ligula libero!</p>

                <p>PRICE</p>
                <button onClick={()=> handleNavigate()}className="btn btn-warning mb-3">Make A Order</button>

                <div className="d-flex justify-content-center">
                    <figure>
                        <img src={singleBlogImg} alt="" className="img-fluid" />
                        <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
                    </figure>
                </div>

                <p>Recipes Description</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta voluptatibus, quae et autem officiis nostrum aspernatur perferendis ducimus distinctio sapiente natus, vitae quis quas molestiae harum repellendus? Repellat totam hic explicabo corporis autem quo eum aperiam earum possimus beatae harum, sunt distinctio rerum quae obcaecati quibusdam magni perspiciatis ab.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta voluptatibus, quae et autem officiis nostrum aspernatur perferendis ducimus distinctio sapiente natus, vitae quis quas molestiae harum repellendus? Repellat totam hic explicabo corporis autem quo eum aperiam earum possimus beatae harum, sunt distinctio rerum quae obcaecati quibusdam magni perspiciatis ab.
                </p>

            </div>
        </div>
    );
};

export default MenuSingleHeader;