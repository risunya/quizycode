// import Auth from './src/components/auth';
import './src/styles/global.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from './src/pages/profile';
import Home from './src/pages/home';
import QuizFeed from './src/pages/quiz-feed';
import Navbar from './src/components/navbar';
import NotFound from './src/pages/notfound';


const App = () => {
    return (    
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route path="/profile" element={<Profile/>}></Route>
                    <Route path="/quiz" element={<QuizFeed/>}></Route>
                </Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
    );
};

export default App;
