import React from 'react';
import styles from './FoodCard.module.css'

const FoodCard = (props) => {
    const {name, describe, price} = props.singleMenuItem
    return (
        <div className={styles.menuItem}>
            <div>
                <h5>{name}</h5>
                <p>{describe}</p>
            </div>
            <h5>{price}$</h5>
        </div>
    );
};

export default FoodCard;