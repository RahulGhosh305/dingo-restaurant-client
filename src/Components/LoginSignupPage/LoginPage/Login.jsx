import React from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import styles from './Login.module.css'
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/signUp')
    }
    return (
        <div className="container">
            <h2 className="my-3 ms-1 text-center">Log In</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group d-flex">
                    <FontAwesomeIcon className="ms-1 mt-2" icon={faEnvelope} />
                    <input type="text" className={`form-control ms-2 ${styles.customInput}`} {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} placeholder="Email" />
                    {errors.email && <span className="text-danger">* Email field is required</span>}
                </div>
                <div className="form-group d-flex">
                    <FontAwesomeIcon className="ms-1 mt-2" icon={faLock} />
                    <input type="password" className={`form-control ms-2 mb-4 ${styles.customInput}`} {...register("password", { required: true })} placeholder="Password" />
                    {errors.password && <span className="text-danger">* Password field is required</span>}
                </div>
                <input className="text-white bg-dark rounded" type="submit" value="Log In" />

            </form>

            <div>
                <div className="d-flex mt-5">
                    <p className="mt-2">Or login with</p>
                    <div className="ms-2">
                        <button style={{ fontSize: 16, color: "white", background: "#3b5998", }} className="btn me-1"> <FontAwesomeIcon icon={faFacebookF} /> </button>
                        <button style={{ fontSize: 16, color: "white", background: "#db3236", }} className="btn me-1"> <FontAwesomeIcon icon={faGoogle} /> </button>
                        <button style={{ fontSize: 16, color: "white", background: "#1DA1F2", }} className="btn me-1"> <FontAwesomeIcon icon={faTwitter} /> </button>
                    </div>
                </div>
                <button onClick={()=> handleNavigate()} style={{paddingLeft : 0}} className="btn mt-3">Don't have account? Create one.</button>
            </div>
        </div>
    );
};

export default Login;