import React from 'react';
import styles from './ContactBody.module.css';
import headingDark from "../../../utility/heading-dark.png";
import ContactForm from "../ContactForm/ContactForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';

const ContactBody = () => {
    return (
        <div className={styles.contactBodyWrapper}>
            <div className="container">
                <div className={styles.contactBodyTexts}>
                    <div className={styles.contactTitleTexts}>
                        <p>Contact Us</p>
                        <h2>Any Query Us!</h2>
                        <img src={headingDark} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className={styles.AddressWrapper}>
                            <h3 className={styles.addressPad}>Address</h3>
                            <div className="d-flex">
                                <i className="me-2"><FontAwesomeIcon icon={faHome} /></i>
                                <p>56/A Nazrul Avenue, Central City, Cumilla</p>
                            </div>
                            <div className="d-flex">
                                <i className="me-2"><FontAwesomeIcon icon={faPhoneAlt} /></i>
                                <p>Phone (880) 173 777 2222</p>
                            </div>
                            <div className="d-flex">
                                <i className="me-2"><FontAwesomeIcon icon={faEnvelopeOpen} /></i>
                                <p>dingo@gmail.com</p>
                            </div>
                        </div>

                        <div>
                            <h3 className={styles.addressPad}>Working Hour</h3>
                            <div>
                                <p>10:00 am to 10:00 pm on Weekdays</p>
                                <p>03:00 am to 11:30 pm on Weekends</p>
                            </div>
                        </div>

                        <div className="mb-3">
                            <h3 className={styles.addressPad}>Following Us</h3>
                            <div>
                                <i style={{ fontSize: 28 }} className="me-2"><FontAwesomeIcon icon={faFacebookF} /></i>
                                <i style={{ fontSize: 28 }} className="me-2"><FontAwesomeIcon icon={faTwitter} /></i>
                                <i style={{ fontSize: 28 }} className="me-2"><FontAwesomeIcon icon={faLinkedinIn} /></i>
                                <i style={{ fontSize: 28 }} className="me-2"><FontAwesomeIcon icon={faGoogle} /></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 my-auto">
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactBody;