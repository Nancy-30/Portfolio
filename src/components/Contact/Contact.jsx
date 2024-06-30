import React from 'react'
import './contact.css'

import navIcon3 from '../../assets/images/gmail-icon.svg'
import navIcon1 from '../../assets/images/linkedin-icon.svg'
import navIcon2 from '../../assets/images/githubIcon.svg'

export default function Contact() {
    return (
        <section className='contact' id='connect'>

            <h1>Contact</h1>
            <div className='contactUs'>
                <h6>ynancy030@gmail.com</h6>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/nancyadav30/'><img src={navIcon1} alt="linkedin" /></a>
                    <a href='https://github.com/Nancy-30' id='github-icon'><img src={navIcon2} alt="github" /></a>
                    <a href='mailto:ynancy030@gmail.com' id='github-icon'><img src={navIcon3} alt="github" /></a>
                </div>
            </div>




        </section>
    )
}
