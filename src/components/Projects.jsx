import React from "react";
import txSlingsGif from "./../images/texasSlings.gif";
import sonusGif from "./../images/sonusGiphy.gif";
import movieHuntGif from "./../images/movieHuntDemo.gif";

function Projects() {
    const projectList = [
        {
            id: 0,
            gif: movieHuntGif,
            imageAlt: "Gif of my project Movie Hunt",
            name: "Movie Hunt",
            link: "https://movie-hunt-demo.vercel.app/",
            description: "I created this web app using SvelteKit and the TMDB API. I decided to try the SvelteKit framework and almost immediately fell in love with the workflow. This demo basically requests movie data from the TMDB API and pulls in the titles, posters, descriptions, release dates, and also the provider info such as if the movies are available for rent/stream and where. I had a lot of fun with this project!"
        },
        {
            id: 1,
            gif: sonusGif,
            imageAlt: "Gif of my project Sonus",
            name: "Sonus",
            link: "https://www.sonustuner.com/",
            description: "This app is as simple as it gets when it comes to a tune-by-ear online guitar tuner. Tapping/clicking on the strings will play the sound of the tapped/clicked string. I created this using React, Howler.js, and I recorded the sound of the strings in Ableton Live using my own electric guitar."
        },
        {
            id: 2,
            gif: txSlingsGif,
            imageAlt: "Gif of the Texas Slings website I created as a freelancer",
            name: "Texas Slings",
            link: "https://texasslings.com/",
            description: "I created this website using HTML, CSS, and JavaScript for a vehicle rental company. We partnered with FareHarbor for the booking functionality. I also deployed the site using a web hosting service and configured my client's cPanel settings."
        }
    ];


    return (
        <section id="" className="projects-section">
            <div className="projects-title" data-aos-delay="500" data-aos="fade-up" data-aos-duration="800">
                <h1>Projects</h1>
                <h2>"It Ain't Much, but It's Honest Work"</h2>
            </div>
            <div className="projects-container" data-aos-delay="1000" data-aos="fade-up" data-aos-duration="800">
                <ul className="projects-list">
                    {projectList.map((project) => {
                        return (
                            <li key={project.id} className="project-item">
                                <p className="project-title">{project.name}</p>
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    <img className="texasSlingsGif" src={project.gif} alt={project.imageAlt}/>
                                </a>
                                <p className="project-desc">{project.description}</p>
                            </li>
                        )
                    })}
                    <li className="project-item"><p className="project-title">To Be Announced...</p></li>
                </ul>
            </div>
        </section>
    )
}

export default Projects;