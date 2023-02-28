

import React, { useState } from 'react';
// import twitterImage from '../../assets/images/twitter.jpeg'
import twitterImage from '../../assets/images/twitter.jpeg'
import TwitterIcon from '@mui/icons-material/Twitter';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { GoogleButton } from 'react-google-button'
// import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

import './style.css'
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const[errorMe, setError] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);

    if (user || googleUser) {
        navigate('/Feed');
        console.log(user)
        console.log(googleUser)
    }
    if (error) {
        console.log(error.message)
    }
    if (loading) {
        console.log('Loading.....')
    }

    const handleSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

        // const user= {

        // }

    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    }

    return (
        <div className='login-container'>
            <div className="image-container">
                <img src={twitterImage} alt="" />
            </div>

            <div className="form-container">
                <TwitterIcon className='twittericon' />
                <h2><strong>Happening Now</strong></h2>
                <form onSubmit={handleSubmit} >
                    <input type="email" className='input-form' placeholder='Email Address'
                        onChange={(event) => setEmail(event.target.value)} />

                    <input type="password" className='input-form' placeholder='Password'
                        onChange={(event) => setPassword(event.target.value)} />

                    <center>
                        <div >
                            <button className='btn-login' type='submit' >Login</button>
                        </div>
                    </center>

                </form>

                <hr />

                <center>
                    <GoogleButton onClick={handleSignInWithGoogle} className='g-btn' type='light' />
                </center>

                <div>
                    Don't have an account?
                    <a href="./Signup" style={{ textDecoration: 'none', color: 'skyblue', fontWeight: '600', marginLeft: '5px' }}>
                        SignUp
                    </a>
                </div>



            </div>
        </div>
    );
};

export default Login;