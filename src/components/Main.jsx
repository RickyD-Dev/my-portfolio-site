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

            <div id="contact"></div>

            <section className="contact-section">
                <div className="contact-title" data-aos-delay="500" data-aos="fade-up" data-aos-duration="600">
                    <h1>Contact Me</h1>
                    <h2>Don't Be Shy</h2>
                </div>
                
                <div className="desc-email-container" data-aos-delay="800" data-aos="fade-up" data-aos-duration="600">
                    <div id="img-fullscreen" className="portfolio-image">
                        <img className="myImage" src={myImage} alt="Ricardo Delgado in downtown Fort Worth, TX"/>
                    </div>
                    <div id="img-mobile" className="portfolio-image">
                        <img className="myImage" src={myImage} alt="Ricardo Delgado in downtown Fort Worth, TX"/>
                    </div>
                    <div className="desc-containers">
                        <div className="contact-description">
                            <p>If you'd like to hire me, click on the button below and let's set up a time to meet!</p>
                        </div>
                    </div>

                    <EmailButtonEmoji />
                </div>
            </section>

            <div className="footer-container">
                <ul className="footer-link-list">
                    <li><a className="footer-link-item" href="https://www.linkedin.com/in/ricardo-delgado201/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin footer-icon-size"></i></a></li>
                    <li><a className="footer-link-item" href="https://soundcloud.com/foxhnd/san-fermin-belong-foxhnd-remix" target="_blank" rel="noreferrer"><i class="fa-brands fa-soundcloud soundCloud-icon-size"></i></a></li>
                </ul>
                <p className="footer-created-by">Created by Ricardo Delgado</p>
            </div>
        </div>
    )
}

export default Main;