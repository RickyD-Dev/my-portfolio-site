import React from "react";
import Experience from "./Experience";
import EmailButtonEmoji from "./EmailButtonEmoji";
import myImage from "./../images/portfolioImage.jpg";
import Projects from "./Projects";

function Main() {
    return(
        <div className="main-container">
            <div className="lights">
                <div id="light-up-left" className="left-side-border-style" data-aos="fade-up" data-aos-delay="500"></div>
                <div id="light-up-left" className="left-side-border-style2" data-aos="fade-up" data-aos-delay="300"></div>
                <div id="light-up-left" className="left-side-border-style3" data-aos="fade-up" data-aos-delay="100"></div>

                <div id="light-up-right" className="right-side-border-style" data-aos="fade-down" data-aos-delay="500"></div>
                <div id="light-up-right" className="right-side-border-style2" data-aos="fade-down" data-aos-delay="300"></div>
                <div id="light-up-right" className="right-side-border-style3" data-aos="fade-down" data-aos-delay="100"></div>
            </div>

            <section className="intro">
                <div className="intro-page">
                    <div className="title">
                        <h3 data-aos="fade-up" data-aos-delay="1600">Hello, my name is</h3>
                        
                        <h1 data-aos="fade-up" data-aos-delay="1800">Ricardo Delgado.</h1>

                        <h2 data-aos="fade-up" data-aos-delay="2000">A Web Developer <i class="fa-solid fa-laptop-code laptop-icon"></i></h2>
                        
                    </div>
                </div>
            </section>

            <div id="skills"></div>

            <Experience />

            <div id="projects"></div>

            <Projects />

            <div id="aboutMe"></div>

            <section id="" className="aboutMe-section">
                <div className="aboutMe-title" data-aos-delay="500" data-aos="fade-up" data-aos-duration="800">
                    <h1>About Me</h1>
                    <h2>Here Comes the Spotlight</h2>
                </div>

                <div className="aboutMe-container" data-aos-delay="1000" data-aos="fade-up" data-aos-duration="800">

                    <div id="img-mobile" className="portfolio-image">
                        <img className="myImage" src={myImage} alt="image"/>
                    </div>

                    <div className="aboutMe-desc">
                        <p>Originally from Las Cruces, NM but currently live in Fort Worth, Texas.</p>
                    
                        <p>I've always had a passion for video games and music (especially movie scores and video game OST's). Growing up, I learned to play the guitar and eventually branched out to different instruments over the years.</p>
                    
                        <p>In my spare time you can find me watching Fireship's YouTube videos, producing music at home using an AKAI keyboard & Ableton Live, or joining raids in Destiny 2.</p>
                    </div>
                    

                    <div id="img-fullscreen" className="portfolio-image">
                        <img className="myImage" src={myImage} alt="image"/>
                    </div>
                </div>
            </section>

            <section className="contact-section" id="contact">
                <div className="contact-title" data-aos-delay="500" data-aos="fade-up" data-aos-duration="600">
                    <h1>Contact Me</h1>
                    <h2>Don't Be Shy</h2>
                </div>
                
                <div className="desc-email-container">
                    <div className="desc-containers" data-aos-delay="800" data-aos="fade-up" data-aos-duration="600">
                        <div className="contact-description">
                            <p>If you'd like to hire me to create a website for you, click on the button below and let's set up a time to meet!</p>
                        </div>
                    </div>

                    <EmailButtonEmoji />
                </div>
            </section>

            <div className="footer-container">
                <ul className="footer-link-list">
                    <li><a className="footer-link-item" href="https://www.linkedin.com/in/ricardo-delgado201/" target="_blank"><i className="fab fa-linkedin footer-icon-size"></i></a></li>
                    <li><a className="footer-link-item" href="https://soundcloud.com/foxhnd/san-fermin-belong-foxhnd-remix" target="_blank"><i class="fa-brands fa-soundcloud soundCloud-icon-size"></i></a></li>
                </ul>
                <p className="footer-created-by">Created by Ricardo Delgado</p>
            </div>
        </div>
    )
}

export default Main;