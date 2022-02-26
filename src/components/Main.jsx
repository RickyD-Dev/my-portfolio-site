import React from "react";
import EmailButtonEmoji from "./EmailButtonEmoji";
import myImage from "./../images/portfolioImage.jpg";
import projectGif from "./../images/texasSlings.gif";

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

            <section id="" className="experience-section">
                <div className="experience-title" data-aos-delay="500" data-aos="fade-up" data-aos-duration="800">
                    <h1>Front End Dev</h1>
                    <h2>With Full Stack Knowledge</h2>
                </div>

                <div className="about-skills-container">
                    <div className="about-description" data-aos-delay="1000" data-aos="fade-up" data-aos-duration="800">
                        <p>I started learning to code in 2015 and was immediately hooked after learning just how much can be accomplished with HTML & CSS alone.</p>

                        <p>After about 2 years of Codecadamy lessons, I began to take my learning a little more seriously in 2017 and enrolled into a couple of Udemy courses. My intentions were to learn how to become a front-end developer but the courses also allowed me to learn the role of a back-end dev as well.</p>

                        <p>I picked up on a few technologies that you can see listed here:</p>
                    </div>

                    <div className="skills">
                        <div className="skill-section">
                            <ul className="skill-list" data-aos="fade-zoom-in" data-aos-duration="800" data-aos-delay="1200">
                                <li className="skill-item">
                                    <div className="skill-item-div">
                                        HTML <i class="fab fa-html5"></i>
                                    </div>
                                </li>
                                <li className="skill-item">
                                    <div className="skill-item-div">
                                        CSS <i class="fab fa-css3-alt"></i>
                                    </div>
                                </li>
                                <li className="skill-item">
                                    <div className="skill-item-div">
                                        JavaScript <i class="fab fa-js"></i>
                                    </div>
                                </li>
                                <li className="skill-item">
                                    <div className="skill-item-div">
                                        Python <i class="fab fa-python"></i>
                                    </div>
                                </li>
                                <li className="skill-item">
                                    <div className="skill-item-div">
                                        React <i class="fab fa-react"></i>
                                    </div>
                                </li>
                                <li className="skill-item">
                                    <div className="skill-item-div">
                                        jQuery <i class="fa-solid fa-dollar-sign"></i>
                                    </div>
                                </li>
                                <li className="skill-item">
                                    <div className="skill-item-div">
                                        Lodash_ <div className="lodash-icon">Lo</div><i class="fa-solid fa-minus"></i>
                                    </div>
                                </li>
                                <li className="skill-item">
                                    <div className="skill-item-div">
                                        EJS <div className="ejs-icon">&#60;%=</div>
                                    </div>
                                </li>
                                <li className="skill-item">
                                    <div className="skill-item-div">
                                        Express.js <div className="express-icon">ex</div>
                                    </div>
                                </li>
                                <li className="skill-item">
                                    <div className="skill-item-div">
                                        Node.js <i class="fab fa-node-js"></i>
                                    </div>
                                </li>
                                <li className="skill-item">
                                    <div className="skill-item-div">
                                        Bootstrap <i class="fab fa-bootstrap"></i>
                                    </div>
                                </li>
                                <li className="skill-item">
                                    <div className="skill-item-div">
                                        Mongoose <div className="mongoose-icon">m</div>
                                    </div>
                                </li>
                                <li className="skill-item item14">
                                    <div className="skill-item-div">
                                        NoSQL <i class="fa-brands fa-envira fa-rotate-by" style={{"--fa-rotate-angle": "45deg"}}></i>
                                    </div>
                                </li>
                                <li className="skill-item item15">
                                    <div className="skill-item-div">
                                        SQL <i class="fa-solid fa-database"></i>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div id="projects"></div>

            <section id="" className="projects-section">
                <div className="projects-title" data-aos-delay="500" data-aos="fade-up" data-aos-duration="800">
                    <h1>Projects</h1>
                    <h2>"It Ain't Much, but It's Honest Work"</h2>
                </div>

                <div className="projects-container" data-aos-delay="1000" data-aos="fade-up" data-aos-duration="800">
                    <ul className="projects-list">
                        <li className="project-item"><p className="project-title">Texas Slings</p><a href="https://texasslings.com/" target="_blank"><img className="texasSlingsGif" src={projectGif} alt="image"/></a><p className="project-desc">I created this website for a vehicle rental company. We partnered with FareHarbor for the booking functionality. I took care of the rest using HTML, CSS, and JavaScript. I also deployed the site using a web hosting service and also learned how to navigate cPanel.</p></li>

                        <li className="project-item"><p className="project-title">To Be Announced...</p><a href="https://texasslings.com/" target="_blank"></a></li>
                    </ul>
                </div>
            </section>

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
                        <p>Originally from Las Cruces, NM, my family decided to move out to the DFW area in Texas around 2008.</p>
                    
                        <p>I've always had a passion for video games and music (especially movie scores and video game soundtracks). Growing up, I learned to play the guitar and eventually branched out to different instruments as the years went by.</p>
                    
                        <p>In my spare time you can either find me watching Fireship's latest coding videos, producing music in my home office using an AKAI keyboard & Ableton Live, or joining raids in Destiny 2.</p>
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
                            <p>I'm currently looking for new opportunities and believe I could make a great addition to your team.</p>
                            <p>If you'd like to hire me to create a website for you, click on the button below and let's chat!</p>
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