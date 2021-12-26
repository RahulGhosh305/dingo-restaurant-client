import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chef1 from '../../../utility/chef-1.png'
import chef2 from '../../../utility/chef-2.png'
import chef3 from '../../../utility/chef-3.png'
import chef4 from '../../../utility/chef-4.png' 
import ChefCard from './ChefCard';



const Chefs = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const data = [
        {
            photo : chef1,
            name : "ALAN MARION",
            design : "Co-founder",
            message : "We Provide Good Food For Your Family!"
        },
        {
            photo : chef4,
            name : "JESSICA SARTOR",
            design : "Founder & Chef",
            message : "People who love to eat are always the best people."
        },
        {
            photo : chef3,
            name : "ALTARS PREST",
            design : "Chef",
            message : "A recipe has no soul. You as the cook must bring soul to the recipe."
        },
        {
            photo : chef2,
            name : "SARAH PERKIER",
            design : "Chef",
            message : "The ambition of every good cook must be to make something very good."
        },
    ]
    return (
        <Slider {...settings}>
            {
                data.map( singleChef => <ChefCard singleChef={singleChef}/>)
            }
        </Slider>
    );
};

export default Chefs;