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
            message : "Lorem Ipsum is simply dummy text of the printing and industry lorem has been graco."
        },
        {
            photo : chef4,
            name : "JESSICA SARTOR",
            design : "Founder & Chef",
            message : "Lorem Ipsum is simply dummy text of the printing and industry lorem has been graco."
        },
        {
            photo : chef3,
            name : "ALTARS PREST",
            design : "Chef",
            message : "Lorem Ipsum is simply dummy text of the printing and industry lorem has been graco."
        },
        {
            photo : chef2,
            name : "SARAH PERKIER",
            design : "Chef",
            message : "Lorem Ipsum is simply dummy text of the printing and industry lorem has been graco."
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