// import Auth from './src/components/auth';
import './src/styles/global.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from './src/pages/profile';
import Feed from './src/pages/feed';
import Quiz from './src/pages/quiz';
import Navbar from './src/components/navbar';
import NotFound from './src/pages/notfound';


const App = () => {
    return (    
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route exact path="/" element={<Feed/>}></Route>
                    <Route path="/profile" element={<Profile/>}></Route>
                    <Route path="/quiz" element={<Quiz/>}></Route>
                </Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
    );
};

export default App;
