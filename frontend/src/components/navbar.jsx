import React from 'react';
import '../styles/navbar.css';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header>
                <div className="wrapper">
                    <div className="feed-link"><Link to={'/'}>Feed</Link></div>
                    <div className='profile-link'><Link to={'/profile'}>Profile</Link></div>
                    <div className='quiz-link'><Link to={'/quiz'}>Quiz</Link></div>
                </div>
            </header>   
            <Outlet/>
        </>
    )
}

export default Navbar;

