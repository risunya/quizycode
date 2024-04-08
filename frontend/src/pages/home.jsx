import React from 'react';
import Footer from '../components/footer';
import '../styles/home.css';

const Home = () => {
    return (
        <div>
            <div className='news-wrapper'>
                <h1 className='news-article'>News</h1>
                <div className='news-container'>
                    <div className='news-container__item'>Patch 0.1.1</div>
                    <div className='news-container__item'>Bug fix 0.1.0</div>
                    <div className='news-container__item'>Patch 0.0.1</div>
                </div>
            </div>
            <div className='quiz-feed-wrapper'>
                <h1 className='quiz-feed-article'>Best Quizes</h1>
                <div className='quiz-container'>
                    <div className='quiz-container__item'>Quiz 10/5</div>
                    <div className='quiz-container__item'>Quiz 10/5</div>
                    <div className='quiz-container__item'>Quiz 10/5</div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    )
}

export default Home;
