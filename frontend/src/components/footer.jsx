import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-wrapper">
                    <div className='footer-wrapper__copyright'>© Created by Andrey Alsehkin, 2024</div>
                    <div className='footer-wrapper__links'>
                        <a className='footer-wrapper__item' href='https://github.com/risunyaaa/'>Github</a>
                        <div className='footer-wrapper__slash'>/</div>
                        <a className='footer-wrapper__item' href='https://stackoverflow.com/users/23581561'>StackOverflow</a>
                        <div className='footer-wrapper__slash'>/</div>
                        <a className='footer-wrapper__item' href='https://twitter.com/risunyaaa'>X</a>
                    </div>
                </div>
            </footer>   
        </>
    )
}

export default Footer;

