import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import initializeAuthentication from '../firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";



const Login = (props) => {
    const [errorMessage, setErrorMessage] = useState("")
    const [Email, setEmail] = useState("")
    // console.log(props.loginData)
    const { loginStateChange } = props.loginData
    const { register, resetField, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            email: "",
            password: ""
        }
    });

    // const homeNavigate = useNavigate()
    //* Go Sign Up Page 
    const signUpNavigate = useNavigate()
    const handleNavigate = () => {
        signUpNavigate('/signUp')
    }


    //* Sign In Submit Form
    const onSubmit = data => {
        console.log(data)
        setEmail(data.email)
        //* SignIn authentication By (Email/Password)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((result) => {
                const user = result.user
                console.log(user)
                // if (user && user.emailVerified) {
                //     homeNavigate('/')
                // } else {
                //     setErrorMessage("Check Email! Verify First")
                // }
                setErrorMessage("");
                clearInputField()
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setErrorMessage(errorCode);
                clearInputField()
            });
    }

    const clearInputField = () => {
        resetField("email")
        resetField("password")
    }

    //* SignUp authentication By (Google)
    initializeAuthentication()
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // const user = result.user;
                // console.log(user);
                const { displayName, email, photoURL } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL,
                }
                loginStateChange(loggedInUser)
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorCode, errorMessage, email);
            })
    }

    //* Reset Password by Mail
    const resetPasswordHandler = (e) => {
        e.preventDefault()
        const auth = getAuth();
        sendPasswordResetEmail(auth, Email)
            .then((result) => {
                alert("Reset Mail Sent Successfully")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }


    return (
        <div className="container">
            <h2 className="my-3 ms-1 text-center">Sign In</h2>
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
                <input className="text-white bg-success rounded me-1" type="submit" value="Sign In" />
                <button onClick={resetPasswordHandler} className="text-white bg-success rounded">Reset Password</button>
                <div className="mt-2 text-danger">{errorMessage}</div>
            </form>

            <div>
                <div className="d-flex mt-5">
                    <p className="mt-1">Or use one of these options</p>
                    <div className="ms-2">
                        <button onClick={handleGoogleSignIn} style={{ fontSize: 14, color: "white", background: "#db3236", }} className="btn btn-sm me-2">
                            <FontAwesomeIcon icon={faGoogle} />
                        </button>

                        <button style={{ fontSize: 14, color: "white", background: "#3b5998", }} className="btn btn-sm me-2">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </button>

                        <button style={{ fontSize: 14, color: "white", background: "#1DA1F2", }} className="btn btn-sm me-1">
                            <FontAwesomeIcon icon={faTwitter} />
                        </button>
                    </div>
                </div>
                <button onClick={() => handleNavigate()} style={{ paddingLeft: 0 }} className="btn mt-3">Not yet register? <u>Sign Up</u> </button>
            </div>
        </div>
    );
};

export default Login;