import React from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './SignUp.module.css'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/login')
    }
    return (
        <div className="container">
            <h2 className="my-3 ms-1 text-center">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group d-flex">
                    <FontAwesomeIcon className="ms-1 mt-2" icon={faUserAlt} />
                    <input type="text" className={`form-control ms-2 ${styles.customInput}`} {...register("name", { required: true })} placeholder="Your Name" />
                    {errors.name && <span className="text-danger">* Name field is required</span>}
                </div>
                <div className="form-group d-flex">
                    <FontAwesomeIcon className="ms-1 mt-2" icon={faEnvelope} />
                    <input type="email" className={`form-control ms-2 ${styles.customInput}`} {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} placeholder="Email" />
                    {errors.email && <span className="text-danger">* Email field is required</span>}
                </div>
                <div className="form-group d-flex">
                    <FontAwesomeIcon className="ms-1 mt-2" icon={faLock} />
                    <input type="password" className={`form-control ms-2 mb-4 ${styles.customInput}`} {...register("password", { required: true })} placeholder="Password" />
                    {errors.password && <span className="text-danger">* Password field is required</span>}
                </div>
                <div className="form-group d-flex">
                    <FontAwesomeIcon className="ms-1 mt-2" icon={faLock} />
                    <input type="password" className={`form-control ms-2 mb-4 ${styles.customInput}`} {...register("RetypePassword", { required: true })} placeholder="Retype Password" />
                    {errors.RetypePassword && <span className="text-danger">* Retype-Password field is required</span>}
                </div>
                <input className="text-white bg-success rounded" type="submit" value="Sign Up" />

            </form>
            
            <button onClick={()=> handleNavigate()} style={{paddingLeft : 0}} className="btn mt-3">I'm already member.</button>

        </div>
    );
};

export default SignUp;