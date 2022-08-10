import React from 'react';
import {Link} from 'react-router-dom';
// import logo from '../../logo.svg';
import './login.css';
import {useFirebase} from "react-redux-firebase";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const firebase = useFirebase();
    const history = useNavigate();

    const signInWithGoogle = () => {
        firebase.login({
            provider: 'google',
            type: 'popup'
        }).then((res) => {
            console.log(res);
            history('/home')
        })
    }

    return (
        <div className="login-cont">
            <h2>Login</h2>

            <section>
                <button className='btn btn-outline' onClick={(event) => {
                    event.preventDefault();
                    signInWithGoogle();
                }}>
                    <span>Login With Google</span>
                </button>
                <p className='or'>OR</p>

                <form>

                    <input className='form-input primary' placeholder='Email'></input>

                    <input className='form-input primary' placeholder='Password'></input>

                    <p className='text-normal'>Don't have an account ?
                        <Link to="/create-account" className='link'> Create Account</Link>
                    </p>
                    <br/>
                    {/*<Link  >*/}
                    <button type='submit' className="btn btn-primary">Login</button>
                    {/*</Link>*/}


                </form>
            </section>
        </div>
    );
}

export default Login;
