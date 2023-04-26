import React from 'react';
import '../styles/footer.scss';
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer>
            <div>
                <h1><span>Tech</span><span2>Web</span2></h1>
                <p className='para'>@all rights reserved</p>
            </div>

            <div className='follow-anchor'>
                <h5 className='follow-us'>Follow Us</h5>
                <div className='anchor-texts'>
                    <div>
                        <AiFillInstagram className='icons'/>
                        <a href='https://instagram.com' target='blank'>Instagram</a>
                    </div>

                    <div>
                        <AiFillYoutube className='icons'/>
                        <a href='https://youtube.com' target='blank'>Youtube</a>
                    </div>

                    <div>
                        <AiFillGithub className='icons'/>
                        <a href='https://github.com' target='blank'>Github</a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;