import React from 'react';
import styles from './Card.module.css'
const Card = (props) => {
    const { title, desc, price } = props.food

    const handleGoSinglePage = (title, price) => {
        console.log("Clicked", title, price);
    }

    return (
        <div className={styles.foodCardWrapper} onClick={ ()=> handleGoSinglePage(title, price) }>
            <div className="d-flex justify-content-between">
                <div className="">
                    <h6>{title}</h6>
                    <p>{desc}</p>
                </div>
                <div>
                    <h6>{price} Tk.</h6>
                </div>
            </div>
            <hr style={{marginTop : 0}}/>
        </div>
    );
};

export default Card;       