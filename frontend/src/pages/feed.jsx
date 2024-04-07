import React from 'react';
import { Link } from 'react-router-dom';


const Feed = () => {
    return (
        <div>
            <h1>ZDEC FEEEEEEEED!</h1>
            <Link to="/profile">go to profile</Link>
            <Link to="/quiz">go to quiz</Link>
        </div>

    )
}

export default Feed;
