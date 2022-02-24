import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signOut, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";


//* Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

const useCustomAuthFunction = () => {
    const [isLoggedIn, SetIsLoggedIn] = useState({})
    const [errorMessage, setErrorMessage] = useState("")

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    //* Sent Error Message to Form
    const sentErrorMessage = () => {
        return errorMessage
    }

    //* Sign Up (Create) New User By (Email/Password)
    const createNewUserWithEmailAndPassword = (email, password, RetypePassword) => {
        createUserWithEmailAndPassword(auth, email, password, RetypePassword)
            .then((result) => {
                const user = result.user
                console.log(user)
                verifyEmail()
                setErrorMessage("");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setErrorMessage(errorCode);
            });
    }

    //* SignIn Authentication By (Email/Password)
    const signInEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user
                // console.log(user)
                const { displayName, email, photoURL } = result.user;
                console.log(displayName, email, photoURL);
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL,
                }
                if (user && user.emailVerified) {
                    SetIsLoggedIn(loggedInUser)
                    setErrorMessage("");
                    navigate(from, { replace: true });
                }
                else {
                    setErrorMessage("Check Email! Verify First")
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setErrorMessage(errorCode);
            });
    }

    //* SignIn Authentication By (Google)
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // const user = result.user;
                // console.log(user)
                const { displayName, email, photoURL } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL,
                }
                SetIsLoggedIn(loggedInUser)
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, email, credential)
            });
    }

    //* Email Verification
    const verifyEmail = () => {
        const auth = getAuth();
        sendEmailVerification(auth.currentUser)
            .then((result) => {
                // console.log(result);
                alert("Email sent! Please activate your email")
            });
    }

    //* Reset Password 
    const resetPassword = () => {
        const email = isLoggedIn.email
        sendPasswordResetEmail(auth, email)
            .then((result) => {
                alert("Reset Mail Sent Successfully")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    //* Sign Out
    const SignOut = () => {
        signOut(auth).then(() => {
            SetIsLoggedIn({})
            // console.log("Sign-out successful.");
        })
            .catch((error) => {
                // An error happened.
                console.log(error);
            });
    }
    

    //* Get the currently signed-in user
    //* To get the current user is by setting an observer on the Auth object
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user) {
                SetIsLoggedIn(user)
            }
            else{
                SetIsLoggedIn({})
            }
        })

        return () => unsubscribed
    },[])

    return {
        isLoggedIn,
        setErrorMessage,
        createNewUserWithEmailAndPassword,
        signInEmailAndPassword,
        signInWithGoogle,
        resetPassword,
        SignOut,
        sentErrorMessage
    }
};

export default useCustomAuthFunction;