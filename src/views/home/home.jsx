import React from 'react';
import Login from '../login/login';
// import logo from '../../logo.svg';
import './home.css';

function Home() {
    return (
        <section className='home-sec'>
        <h3>Welcome <span>Arnold !</span></h3>

        <h4>My Wish Lists</h4>
        <div className='list-sec'>
            <h5>Restaurants <span>View All</span></h5>
            <div>
                <div className='home-list-item'>
                    <div className='list-img-cont'></div>
                    <p>Fogo Gaucho</p>
                </div>
                <div className='home-list-item'>
                    <div className='list-img-cont'></div>
                    <p>Fogo Gaucho</p>
                </div>
                <div className='home-list-item'>
                    <div className='list-img-cont'></div>
                    <p>Fogo Gaucho</p>
                </div>
                <div className='home-list-item'>
                    <div className='list-img-cont'></div>
                    <p>Fogo Gaucho</p>
                </div>
            </div>
        </div>

        <div className='list-sec'>
            <h5>Travel <span>View All</span></h5>
            <div>
                <div className='home-list-item'>
                    <div className='list-img-cont'></div>
                    <p>Fogo Gaucho</p>
                </div>
                <div className='home-list-item'>
                    <div className='list-img-cont'></div>
                    <p>Fogo Gaucho</p>
                </div>
                <div className='home-list-item'>
                    <div className='list-img-cont'></div>
                    <p>Fogo Gaucho</p>
                </div>
                <div className='home-list-item'>
                    <div className='list-img-cont'></div>
                    <p>Fogo Gaucho</p>
                </div>
            </div>
        </div>

        <div className='list-sec'>
            <h5>Shopping <span>View All</span></h5>
            <div>
                <div className='home-list-item'>
                    <div className='list-img-cont'></div>
                    <p>Fogo Gaucho</p>
                </div>
                <div className='home-list-item'>
                    <div className='list-img-cont'></div>
                    <p>Fogo Gaucho</p>
                </div>
                <div className='home-list-item'>
                    <div className='list-img-cont'></div>
                    <p>Fogo Gaucho</p>
                </div>
                <div className='home-list-item'>
                    <div className='list-img-cont'></div>
                    <p>Fogo Gaucho</p>
                </div>
            </div>
        </div>
    </section>
       
    );
}

export default Home;
