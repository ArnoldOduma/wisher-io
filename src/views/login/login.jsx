import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../logo.svg';
import './login.css';

function Login() {
    return (
        <div className="login-cont">
            <h2>Login</h2>

            <section>
                <button className='btn btn-outline'><span>Login With Google</span></button>
                <p className='or'>OR</p>

                <form>

                    <input className='form-input primary' placeholder='Email'></input>

                    <input className='form-input primary' placeholder='Password'></input>

                    <p className='text-normal'>Don't have an account ?
                        <Link to="/create-account" className='link'>  Create Account</Link>
                    </p>
                    <br />
                    <Link to="/home" >
                        <button type='submit' className="btn btn-primary">Login</button>
                    </Link>


                </form>
            </section>
        </div>
    );
}

export default Login;
