import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../logo.svg';
import './create-account.css';

function CreateAccount() {
    return (
        <div className="sign-up-cont">
            <h2>Create Account</h2>
            <section>
                <button className='btn btn-outline'><span>Continue with Google</span></button>
                <p className='or'>OR</p>

                <form>

                    <input className='form-input primary' placeholder='Email'></input>

                    <input className='form-input primary' placeholder='Full name'></input>

                    <input className='form-input primary' placeholder='Password'></input>

                    <p className='text-normal'>Already have an account ?
                        <Link to="/login" className='link'> Login</Link>
                    </p>

                    <button type='submit' className="btn btn-primary">Create Account</button>

                </form>
            </section>
        </div>
    );
}

export default CreateAccount;
