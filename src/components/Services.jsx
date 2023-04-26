import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/3.jpg';
import img2 from '../assets/4.jpg';
import img3 from '../assets/lap.jpg';

const Services = () => {
    return (
        <div className='services'>
            <Carousel 
            infiniteLoop 
            autoPlay 
            showStatus={false} 
            showArrows={false}
            interval={1200}
            showThumbs={false}
            stopOnHover={false}
            >

                <div >
                    <img src={img1} alt='fullstack' style={{width:'80%', height:'60%',}}/>
                    <p>Full Stack</p>
                </div>
                <div>
                    <img src={img2} alt='support' style={{width:'80%', height:'60%'}}/>
                    <p>Peer-To-Peer Support</p>
                </div>
                <div>
                    <img src={img3} alt='developer' style={{width:'80%', height:'60%'}}/>
                    <p>Web Development</p>
                </div>

            </Carousel>
        </div>
    );
};

export default Services;