import React from 'react';
import styles from'./Info.module.css';
import phoneBlack from '../../../utility/phone2.jpg';
import envelop from '../../../utility/envelop2.jpg';
import location1 from '../../../utility/location1.jpg';
import clock3 from '../../../utility/clock3.jpg';
import InfoCard from './InfoCard';


const Info = () => {
    const infoData = [
        {
            image : phoneBlack,
            title : "Call Now",
            subTitle : "+09 777 787 999"
        },
        {
            image : location1,
            title : "Location",
            subTitle : "Central Park,35/A Road"
        },
        {
            image : envelop,
            title : "Contact Us",
            subTitle : "info@bingo.com"
        },
        {
            image : clock3,
            title : "Schedules",
            subTitle : "Mon-Sun 1pm-10pm"
        },
    ]
    return (
        <section className={styles.infoWrapper}>
            <div className="container">
                <div className="row">
                    {
                        infoData.map(singleInfo => <InfoCard singleInfo={singleInfo}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Info;