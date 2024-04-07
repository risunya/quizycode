import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => {
    return (
        <div>
            <h1>eto quiz!</h1>
            <Link to="/">go to profile</Link>
            <Link to="/profile">go to quiz</Link>
         </div>
    )
}

export default Quiz;
