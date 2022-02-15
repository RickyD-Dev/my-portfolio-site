import React, { useState } from "react";
import myLogo from "./../images/logo4.png";

function Header() {

    const [isActive, setActive] = useState("false");
    const [headerShadow, setShadow] = useState(false);

    function handleToggle() {
        const deviceScreenWidth = window.screen.width;
        if (deviceScreenWidth <= 804){
            setActive(!isActive);
        } else {
            setActive(isActive);
        }
    }

    function addBoxShadow() {
        if (window.scrollY >= 172) {
            setShadow(true);
        } else {
            setShadow(false);
        }
    }

    window.addEventListener("scroll", addBoxShadow);

    return (
        <header className={`${headerShadow ? "header-active" : ""}`}>
            <div className="nav-logo-container" data-aos-delay="300" data-aos="fade-down" data-aos-duration="800">
                <a href="/" className="logo-a" title="Home"><img className="myLogo" src={myLogo} alt="logo"/></a>
                <nav>
                    <ul className={`${isActive ? "nav-list" : "nav-list--open"}`}>
                        <li className="nav-item" onClick={handleToggle}><a href="#skills" title="Skills">Skills</a></li>
                        <li className="nav-item" onClick={handleToggle}><a href="#projects" title="Projects">Projects</a></li>
                        <li className="nav-item" onClick={handleToggle}><a href="#aboutMe" title="About Me">About</a></li>
                        <li className="nav-item" onClick={handleToggle}><a href="#contact" title="Contact">Contact</a></li>
                    </ul>
                </nav>

                <div onClick={handleToggle} class="menu-toggle">
                    <div class={`${isActive ? "hamburger" : "open-hamburger"}`}></div>
                </div>
            </div>
            
        </header>
    )
}

export default Header;