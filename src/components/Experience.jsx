import React from "react";

function Experience() {
    return (
        <section id="" className="experience-section">
            <div className="experience-title" data-aos-delay="500" data-aos="fade-up" data-aos-duration="800">
                <h1>Front End Dev</h1>
                <h2>With Full Stack Knowledge</h2>
            </div>

            <div className="about-skills-container">
                <div className="about-description" data-aos-delay="1000" data-aos="fade-up" data-aos-duration="800">
                    <p>I started learning to code in 2015 and was immediately hooked after learning just how much can be accomplished with HTML & CSS alone.</p>

                    <p>In 2019, I began to take my learning seriously and enrolled into a few Udemy courses. My intentions were to learn how to become a front-end developer but the courses also allowed me to learn the role of a back-end dev as well. I enjoy using React but <a className="svelteKit-link" href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a> has recently become my go-to framework!</p>
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
    )
}

export default Experience;