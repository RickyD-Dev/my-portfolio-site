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
            if (currentTarget) observer.unobserve(currentTarget);
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

    return (
        <div className="email-button-container">
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