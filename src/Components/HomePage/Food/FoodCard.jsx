import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FoodCard.module.css'

const FoodCard = (props) => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/menuSingle')
    }
    const {name, describe, price} = props.singleMenuItem
    return (
        <div onClick={()=> handleNavigate()} className={styles.menuItem}>
            <div>
                <h5>{name}</h5>
                <p>{describe}</p>
            </div>
            <h5>{price} Tk.</h5>
        </div>
    );
};

export default FoodCard;