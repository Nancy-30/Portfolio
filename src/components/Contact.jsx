import React from 'react'
import contactImg from '../assets/images/contactImg.svg'
import navIcon1 from '../assets/images/nav-icon1.svg'
import navIcon2 from '../assets/images/githubIcon.svg'
import navIcon3 from "../assets/images/email.png"

export default function Contact() {
    return (
        <section className='contact' id='connect'>
            <img src={contactImg} alt="contact us" className='contactImage' />
            <div>
                <h1>Contact</h1>
                <div className='social-icon contactUs'>
                    <div className='contactIcon'>
                        <a href='https://www.linkedin.com/in/nancyadav30/'><img src={navIcon1} alt="linkedin" /></a>
                        Linkedin
                    </div>

                    <div className='contactIcon'>
                        <a href='https://github.com/Nancy-30' ><img src={navIcon2} alt="github" /></a>
                        Github
                    </div>

                    <div className='contactIcon'>
                        <a><img src={navIcon3} /></a>
                        ynancy030@gmail.com
                    </div>


                </div>

            </div>


        </section>
    )
}
