import React from 'react';
import '../styles/navbar.css';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header>
                <div className="wrapper">
                    <button className="feed-link"><Link to={'/'}>Home</Link></button>
                    <button className='quiz-link'><Link to={'/quiz'}>Feed</Link></button>
                    <button className='profile-link'><Link to={'/profile'}>Your Profile</Link></button>
                </div>
            </header>   
            <Outlet/>
        </>
    )
}

export default Navbar;

