import React from "react";
import { Link } from "react-router-dom"
import '../styles/notfound.css';

 const NotFound = () => {
    return(
        <div className="notfound">
            <h1 className="notfound__error-text">ERROR#404 - Page not found!</h1>
            <Link to="/" className="notfound__link">This is link to Home Page!</Link>
        </div>
    )
 }

 export default NotFound;