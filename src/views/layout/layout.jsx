import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Home from '../home/home';
import './layout.css';
import home from '../../icons/home-outline.svg';
import person from '../../icons/person-outline.svg';
import plus from '../../icons/plus-square-outline.svg';


function Layout() {
    return (
        <section className='layout-cont'>
            <div>
                <Outlet />
            </div>
            <nav>
                <Link to="/home">
                    <div>
                        <img src={home} alt='Home' />
                    </div>
                </Link>
                <Link to="/add-wish">
                    <div>
                    <img src={plus} alt='Add' />
                    </div>
                </Link>
                <Link to="/login">
                    <div>
                    <img src={person} alt='Profile' />
                    </div>
                </Link>
            </nav>
        </section>

    );
}

export default Layout;
