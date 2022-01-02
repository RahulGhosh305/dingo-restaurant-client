import React from 'react';
import FoodCard from './FoodCard';
import styles from './Food.module.css';
import headingDark from '../../../utility/heading-dark.png'
import menuImage from '../../../utility/menuImage.png';

const Food = () => {
    const homePageMenuData = [
        {
            name : "Chicken Curry",
            describe : "This Chicken Curry Is Weeknight Dinner Goals.",
            price : "35",
        },
        {
            name : "Salad with blue cheese",
            describe : "This is an excellent salad option for a starter, or as a stylish side salad!",
            price : "29",
        },
        {
            name : "Mexican Pasta",
            describe : "This Mexican Pasta recipe is absolutely bursting with your favorites.",
            price : "15",
        },
        {
            name : "Chill & Hot Burger",
            describe : "Yummy, testy hot burger to italian flavors.",
            price : "11",
        },
        {
            name : "Chicken And Rice",
            describe : "This Chicken and Rice recipe has captured the hearts of people.",
            price : "21",
        },
        {
            name : "Mutton Curry",
            describe : "Delicious, soft chunks of Indian style spiced onion tomato gravy.",
            price : "25",
        },
    ]
    return (
        <section className={styles.foodWrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <div className={styles.foodTexts}>
                                <p>Enjoy a complete food experience</p>
                                <h2>Our Menu</h2>
                                <img src={headingDark} alt="" />
                            </div>
                            <div>
                                {
                                    homePageMenuData.map( singleMenuItem => <FoodCard singleMenuItem={singleMenuItem} key={Math.random()}/> )
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6 my-auto ${styles.menuCartImage}`}>
                        <img src={menuImage} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Food;