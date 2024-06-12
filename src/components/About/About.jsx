import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './about.css';
import Education from './Education';

export default function About() {
    return (
        <section className='about' id="about">
            <div>
                <h1 className='about-heading'>About</h1>
                <div className='underline'></div>
            </div>

            <div className='about-main'>
                <div>
                    <h4>Experience</h4>
                    <Education className="education" />
                </div>

                <div className='about-me'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis nostrum voluptatibus? Ea corrupti eum est minus consectetur, nam aliquam. Explicabo harum maiores iste, sint eaque beatae est non in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis nostrum voluptatibus? Ea corrupti eum est minus consectetur, nam aliquam. Explicabo harum maiores iste, sint eaque beatae est non in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis nostrum voluptatibus? Ea corrupti eum est minus consectetur, nam aliquam. Explicabo harum maiores iste, sint eaque beatae est non in<br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis nostrum voluptatibus? Ea corrupti eum est minus consectetur, nam aliquam. Explicabo harum maiores iste, sint eaque beatae est non in.   
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis nostrum voluptatibus? Ea corrupti eum est minus consectetur, nam aliquam. Explicabo harum maiores iste, sint eaque beatae est non in.
                </div>
            </div>
        </section>
    )
}
