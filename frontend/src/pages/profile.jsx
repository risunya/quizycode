import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <h1>eto profile!</h1>
            <Link to="/">go to profile</Link>
            <Link to="/quiz">go to quiz</Link>
         </div>
    )
}

export default Profile;
