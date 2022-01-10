import React from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../Shared/Navbar/Navbar';

const Confirm = ({ nextStep, prevStep, values }) => {
    const { fullName, email, phone, address, city, cardName, cardNumber, cvc, expireDate } = values
    const { handleSubmit } = useForm();
    const onSubmit = data => {
        // const { fullName, email, phone, address, city, cardName, cardNumber, cvc, expireDate } = values
        console.log(values);
        //* PROCESS TO SERVER FORM 
        nextStep()
    }

    const handleNavigate = () => {
        prevStep()
    }
    return (
        <div>
            <Navbar />
            <div style={{marginTop : 100}} className="container">
                <div className="">
                    <div className="d-flex justify-content-center mt-5">
                        <h2>Confirmation Details</h2>
                    </div>
                    <div className='row p-3'>
                        <div className="offset-md-2 col-md-8 border shadow-lg p-4">
                            <h5>Name : {fullName}</h5>
                            <h5>E-Mail : {email}</h5>
                            <h5>Phone : {phone}</h5>
                            <h5>Address : {address}</h5>
                            <h5>City : {city}</h5>
                            <h5>Card Name : {cardName}</h5>
                            <h5>Card Number : {cardNumber}</h5>
                            <h5>CVC Number : {cvc}</h5>
                            <h5>Expire Date : {expireDate}</h5>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="d-flex justify-content-between mt-5">
                                    <button onClick={() => handleNavigate()} className="btn btn-success">Back</button>
                                    <input className="btn btn-success" type="submit" value="Confirm And Submit" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4">
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Confirm;