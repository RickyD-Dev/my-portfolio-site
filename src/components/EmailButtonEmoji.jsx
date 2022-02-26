import React, { useState, useRef, useEffect, useMemo} from "react";
import $ from "jquery";

function EmailButtonEmoji() {
    const [isHovered, setHover] = useState(false);
    const [defaultEmoji, setEmoji] = useState("🙂");
    const [clickedEmoji, setClickEmoji] = useState("");
    const targetRef = useRef(null);

    const callbackFunction = entries => {
        const deviceScreenWidth = window.screen.width;
        const [entry] = entries; // const entry = entries[0];

        if (deviceScreenWidth <= 835) {
            setHover(entry.isIntersecting);
        } else {
            setHover(false);
        }
    }

    const options = useMemo(() => {
        return {
            root: null,
            rootMargin: "0px",
            threshold: 0
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        const currentTarget = targetRef.current;
        if (currentTarget) observer.observe(currentTarget);

        return () => {
            if(currentTarget) observer.unobserve(currentTarget);
        }
    }, [targetRef, options]);

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

    // observer.observe(contactDesc);



    // function addMobileHover() {
    //     const deviceScreenWidth = window.screen.width;
    //     const deviceScreenHeight = window.screen.height;

    //     if (deviceScreenWidth <= 835 && deviceScreenHeight <= 670 && window.scrollY >= 2887) {
    //         setHover(true);
    //         setEmoji("😄");
    //     } else if (deviceScreenWidth <= 835 && deviceScreenHeight > 671 && deviceScreenHeight <= 736 && window.scrollY >= 3065) {
    //         setHover(true);
    //         setEmoji("😄");
    //     } else if (deviceScreenWidth <= 835 && deviceScreenHeight > 737 && deviceScreenHeight <= 813 && window.scrollY >= 3322) {
    //         setHover(true);
    //         setEmoji("😄");
    //     } else if (deviceScreenWidth <= 835 && deviceScreenHeight > 814 && deviceScreenHeight <= 897 && window.scrollY >= 3480) {
    //         setHover(true);
    //         setEmoji("😄");
    //     } else if (deviceScreenWidth <= 835 && deviceScreenHeight > 898 && deviceScreenHeight <= 930 && window.scrollY >= 3530) {
    //         setHover(true);
    //         setEmoji("😄");
    //     } else if (deviceScreenWidth <= 835 && deviceScreenHeight > 930 && deviceScreenHeight <= 960 && window.scrollY >= 3490) {
    //         setHover(true);
    //         setEmoji("😄");
    //     } else {
    //         setHover(false);
    //         setEmoji("🙂");
    //     }
    // }

    // window.onload = function observeOnLoad() {
    //     observer.observe(contactDesc);
    // };

    return (
        <div className="email-button-container" data-aos-delay="800" data-aos="fade-up" data-aos-duration="600">
            <p
            className="contact-emoji"
            >
                {`${isHovered ? "😄" : defaultEmoji}`}
            </p>

            <p
            className="contact-clicked-emoji"
            >
                {clickedEmoji}
            </p>

            <div
            className={`${isHovered ? "email-border-animation email-mobile-animation" : "email-border-animation"}`}
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

            <div className="target" ref={targetRef}></div>
        </div>
    )
}

export default EmailButtonEmoji;