import React from 'react'
import { useState, useEffect } from 'react';
import navIcon3 from '../assets/images/gmail-icon.svg'
import navIcon1 from '../assets/images/linkedin-icon.svg'
import navIcon2 from '../assets/images/githubIcon.svg'

export default function NavBar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <div className={scrolled ? "scrolled nav-main" : "nav-main"}>
            <div className="me-auto" id="basic-navbar-nav">
            </div>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/nancyadav30/'><img src={navIcon1} alt="linkedin" /></a>
                    <a href='https://github.com/Nancy-30' id='github-icon'><img src={navIcon2} alt="github" /></a>
                    <a href='mailto:ynancy030@gmail.com' id='github-icon'><img src={navIcon3} alt="github" /></a>
                </div>
            </span>
        </div>

    )
}
