import React from 'react';
import Footer from '../components/footer';
import '../styles/profile.css';
import SmileOne from '../../public/assets/smile';

const Profile = () => {
    return (
        <div>
            <div className="profile-container">
                <div className='left-wrapper'>
                    <div className="left-wrapper__profile">
                        <SmileOne/>
                        <h1 className='left-wrapper__tag'>@risunyaaa</h1>
                        <h3 className='left-wrapper__description'>Full Stack Developer</h3>
                    </div>
                    <div className="left-wrapper__links">
                        <div className="left-wrapper__box">
                            <div className="left-wrapper__sm-name">GitHub</div>
                            <a className="left-wrapper__sm-link">@risunyaaa</a>
                        </div>
                        <div className="left-wrapper__box">
                            <div className="left-wrapper__sm-name">StackOverflow</div>
                            <a className="left-wrapper__sm-link">@risunyaaa</a>
                        </div>
                    </div>
                </div>
                <div className='right-wrapper'>
                    <div className="right-wrapper__parameters">
                        <div className="right-wrapper__box">
                            <div className="right-wrapper__name">Your name:</div>
                            <div className="right-wrapper__property">Andrey Andrey</div>
                        </div>
                        <div className="right-wrapper__box">
                            <div className="right-wrapper__name">Your country:</div>
                            <div className="right-wrapper__property">Russia</div>
                        </div>
                        <div className="right-wrapper__box">
                            <div className="right-wrapper__name">Your achivements:</div>
                            <div className="right-wrapper__property">1 2 23 </div>
                        </div>
                    </div>
                    <div className="right-wrapper__quiz-stats">
                    </div>
                </div>
            </div>
            <Footer />
         </div>
    )
}

export default Profile;
