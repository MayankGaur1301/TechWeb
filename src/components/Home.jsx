import React from 'react';
import '../styles/home.scss';
import vg from '../assets/2.webp';
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>TechWeb</h1>
                    <p>A Tech Based Website</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt='Graphics' />
                <div>
                    <p>Whether you're looking to stay up-to-date with the latest tech news, research new products, or connect with other tech enthusiasts
                        tech Web is the perfect destination for all your technology needs. With its engaging content and vibrant community
                        it's a one-stop-shop for all things tech.</p>
                </div>
            </div>

            <div className='home3' id='about'>
                 <div>

                    <h1>Who we are?</h1>
                    
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, asperiores?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, atque illum. Harum dignissimos voluptatem assumenda laboriosam iusto veritatis facilis praesentium.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, autem?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde neque voluptatibus delectus placeat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, repellat neque et necessitatibus dolores, iste debitis aperiam, facilis reprehenderit blanditiis architecto quas officiis ex? Quod ad asperiores enim! Veniam, repellat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sed asperiores harum suscipit omnis aliquam pariatur dicta. Ea?
                        lorem 16
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi omnis accusantium ut maxime officia?
                    </p>

                   
                 </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>

                    <article>
                        <div style={{
                            animationDelay:'0.3s',
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div style={{
                            animationDelay:'0.5s',
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                       
                        <div style={{
                            animationDelay:'0.7s',
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>

                        <div style={{
                            animationDelay:'0.9s',
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};

export default Home;