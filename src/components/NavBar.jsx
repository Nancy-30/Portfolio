import React from 'react'
import { useState, useEffect } from 'react';
import navIcon1 from '../assets/images/nav-icon1.svg'
import navIcon2 from '../assets/images/githubIcon.svg'

export default function NavBar() {

    const [activeLink, setActiveLink] = useState('home');
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

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
            <div className={scrolled ? "scrolled nav-main" : "nav-main"}>
                <div className="me-auto" id="basic-navbar-nav">
                    <a href="#home" className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</a>

                    <a href="#skills" className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</a>

                    <a href="#project" className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</a>
                </div>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='https://www.linkedin.com/in/nancyadav30/'><img src={navIcon1} alt="linkedin" /></a>
                        <a href='https://github.com/Nancy-30' ><img src={navIcon2} alt="github" /></a>
                    </div>
                    <button className='vvd' onClick={scrollToContact}><span>Let's Connect</span></button>
                </span>
            </div>
        
    )
}
