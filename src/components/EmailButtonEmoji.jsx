import React, { useState } from "react";
import $ from "jquery";

function EmailButtonEmoji() {
    const [isHovered, setHover] = useState(false);
    const [defaultEmoji, setEmoji] = useState("🙂");
    const [clickedEmoji, setClickEmoji] = useState("");

    function handleMouseEnter() {
        setHover(true);
    }

    function handleMouseOut() {
        setHover(false);
    }

    function handleHoverEmoji() {
        setEmoji("😄");
    }

    function handleUnhoveredEmoji() {
        setEmoji("🙂");
    }

    function removeEmoji() {
        setEmoji("");
    }

    function handleClickEmoji() {
        setClickEmoji("🙌");
    }

    function addMobileHover() {
        const deviceScreenWidth = window.screen.width;
        const deviceScreenHeight = window.screen.height;

        if (deviceScreenWidth <= 835 && deviceScreenHeight <= 670 && window.scrollY >= 2887) {
            setHover(true);
            setEmoji("😄");
        } else if (deviceScreenWidth <= 835 && deviceScreenHeight > 671 && deviceScreenHeight <= 736 && window.scrollY >= 3065) {
            setHover(true);
            setEmoji("😄");
        } else if (deviceScreenWidth <= 835 && deviceScreenHeight > 737 && deviceScreenHeight <= 813 && window.scrollY >= 3322) {
            setHover(true);
            setEmoji("😄");
        } else if (deviceScreenWidth <= 835 && deviceScreenHeight > 814 && deviceScreenHeight <= 897 && window.scrollY >= 3480) {
            setHover(true);
            setEmoji("😄");
        } else {
            setHover(false);
            setEmoji("🙂");
        }
    }

    window.addEventListener("scroll", addMobileHover);

    return (
        <div className="email-button-container" data-aos-delay="800" data-aos="fade-up" data-aos-duration="600">
            <p
            className="contact-emoji"
            >
                {defaultEmoji}
            </p>

            <p
            className="contact-clicked-emoji"
            >
                {clickedEmoji}
            </p>

            <div
            className={`${isHovered ? "email-border-animation emailBorderAnimation-andMobileAnimation" : "email-border-animation"}`}
            onMouseOver={() => {
                handleMouseEnter();
                handleHoverEmoji();
                }}
            onMouseOut={() => {
                handleMouseOut();
                handleUnhoveredEmoji();
                }}
            onClick={() => {
                removeEmoji();
                $(".contact-emoji").remove();
                }}
            >
                <a className="email-link" href="mailto:rickydlgd.dev@gmail.com" rel="noopener noreferrer" target="_blank" onClick={handleClickEmoji}>Email Me</a>
            </div>
        </div>
    )
}

export default EmailButtonEmoji;