import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

const Profile = () => {
    return (
        <div>
            <h1>eto profile!</h1>
            <Link to="/">go to profile</Link>
            <Link to="/quiz">go to quiz</Link>
            <Footer></Footer>
         </div>
    )
}

export default Profile;
