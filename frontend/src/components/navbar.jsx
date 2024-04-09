import React from 'react';
import '../styles/navbar.css';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header>
                <div className="header-wrapper">
                    <button className="feed-link active"><Link to={'/'}>Home</Link></button>
                    <button className='quiz-link'><Link to={'/quiz'}>Feed</Link></button>
                    <div className='profile-menu'>
                        <button className='profile-link'><Link to={'/profile'}>Log In</Link></button>
                        <button className='profile-link'><Link to={'/profile'}>Sign In</Link></button>
                    </div>
                </div>
            </header>   
            <Outlet/>
        </>
    )
}

export default Navbar;

