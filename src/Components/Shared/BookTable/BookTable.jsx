import React from 'react';
import styles from './BookTable.module.css';
import headingDark from '../../../utility/heading-dark.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi, faCar, faWallet } from '@fortawesome/free-solid-svg-icons'


const BookTable = () => {
    return (
        <section className={styles.BookTableWrapper}>
            <div className="container">
                <div className={styles.BookTableTexts}>
                    <p>Reservation A Table</p>
                    <h2>Book A Table Now!</h2>
                    <img src={headingDark} alt="" className="img-fluid" />
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="d-flex">
                                <i><FontAwesomeIcon icon={faWifi} /></i>
                                <h6 className="ms-2">Free Internet Connection</h6>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex">
                                <i><FontAwesomeIcon icon={faWallet} /></i>
                                <h6 className="ms-2">Easy Payment Methods</h6>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex">
                                <i><FontAwesomeIcon icon={faCar} /></i>
                                <h6 className="ms-2">Free Parking 24/7</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bookInfo}>
                    <form >
                        <div className="row">
                            <div className={`col-md-6 mb-2 col-lg-3 ${styles.InputGroup}`}>
                                <p className="ms-2" htmlFor="ReservationData">Reservation Date</p>
                                <input type="date" className="form-control" />
                            </div>
                            <div className={`col-md-6 mb-2 col-lg-3 ${styles.InputGroup}`}>
                                <p className="ms-2" htmlFor="ReservationData">Reservation Date</p>
                                <input type="time" className="form-control" />
                            </div>
                            <div className={`col-md-6 mb-2 col-lg-3 ${styles.InputGroup}`}>
                                <p className="ms-2" htmlFor="people">People</p>
                                <input type="number" className="form-control" placeholder="0" />
                            </div>
                            <div className={`col-md-6 mb-2 col-lg-3 ${styles.InputGroup}`}>
                                <p className="ms-2" htmlFor="phone">Phone</p>
                                <input type="tel" className="form-control" placeholder="Phone Number" />
                            </div>
                        </div>

                        <div className="d-flex justify-content-end">
                            <input type="submit" className="btn btn-warning mt-3" value="Make Reservation" />
                        </div>
                    </form>
                </div>
                <h3 className="mt-5 text-center">You can also call: +880 172 222 5555 to make a reservation.</h3>
            </div>
        </section>
    );
};

export default BookTable;