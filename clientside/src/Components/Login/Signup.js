import React, { useState } from 'react';
import twitterImage from '../../assets/images/twitter.jpeg'
import axios from 'axios';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init.js'
import GoogleButton from 'react-google-button'
// import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import './style.css'

const Signup = () => {


    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    if (user) {
        navigate('/Login')
        console.log(user)
    }
    if (googleUser) {
        navigate('/Feed')
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
        createUserWithEmailAndPassword(email, password);

        const user = {
            username: username,
            name: name,
            email: email,
        }
       const data= axios.post(`http://localhost:5000/register`, user)
       console.log(data)

    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle();

    }



    return (
        <div className='signup-container'>
            <div className="image-container">
                <img src={twitterImage} alt="" /></div>
            <center>
                <div className="form-container">
                    <TwitterIcon className='twittericon' />
                    <h2><strong>Happening Now</strong></h2>
                    <form onSubmit={handleSubmit} >
                        <input type="text" placeholder='Username' className='input-form'
                            onChange={(event) => setUsername(event.target.value)} />
                        <input type="text" placeholder='Enter Full Name' className='input-form'
                            onChange={(event) => setName(event.target.value)} />

                        <input type="email" className='input-form' placeholder='Email Address'
                            onChange={(event) => setEmail(event.target.value)} />

                        <input type="password" className='input-form' placeholder='Password'
                            onChange={(event) => setPassword(event.target.value)} />

                        <center>
                            <div >
                                <button type='submit' className='btn-signup'>SignUp</button>
                            </div>
                        </center>

                    </form>
                    <hr />

                    <center>
                        <GoogleButton onClick={handleSignInWithGoogle} className='g-btn' type='light' />
                    </center>
                    <div>
                        Already have an account?


                        <a href="./Login" style={{ textDecoration: 'none', color: 'skyblue', fontWeight: '600', marginLeft: '5px' }}>
                            Login
                        </a>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default Signup;