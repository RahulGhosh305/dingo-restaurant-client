import React, {useEffect} from 'react';
import Header from './Header/Header';
import Philosophy from './Philosophy/Philosophy';
import ChooseUS from './ChooseUS/ChooseUS';
import History from './History/History';
import Footer from '../Shared/Footer/Footer';
import CommentFrom from './CommentForm/CommentForm'
import Comments from './Comments/Comments';
import MediaCart from './MediaCart/MediaCart';

const About = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <div>
            <Header />
            <Philosophy />
            <ChooseUS />
            <History />
            <MediaCart />
            <Comments />
            <CommentFrom />
            <Footer/>
        </div>
    );
};

export default About;