import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import './education.css';
import Dotsvg from "../../assets/images/dot-svg.svg";

export default function Education() {
    const targetRef = useRef();
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end center"]
    })

    const scale = useTransform(scrollYProgress, [0.1, 0.7, 1], [0.5, 1.4, 1])
    const x = useTransform(scrollYProgress, [0.1, 0.25, 0.5, 0.6], ["60%", "55%", "-25%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

    return (
        <motion.div className="edu-main">

            <div className="edu-container left-div">
            <img src = {Dotsvg} alt='dot'/>
                <div className="text-box">
                    <h4>Vocab.ai</h4>
                    <small className='time-intern'>
                        <span>AI/ML Developer Intern</span>
                        <span>March, 2024 - present</span>
                    </small>
                    <ul>
                        <li>Creating AI solutions for clients involving Urban Company, Winzo, and Flipkart.</li>
                        <li>Involved in day-to-day technical meetings and documentation tasks.</li>
                        <li>Building and training of models.</li>
                    </ul>
                </div>
            </div>

            <div className="edu-container left-div">
                <img src = {Dotsvg}/>
                <div className="text-box">
                    <h4>Velocity - (IIT Dharwad)</h4>
                    <small className='time-intern'>
                        <span>Senior Developer</span>
                        <span>Sep, 2022 - Dec, 2023</span>
                    </small>
                    <ul>
                        <li>Managed and updated the college and various club websites</li>
                        <li>Mentor junior members of the club.</li>
                        <li>Conducting workshops on web development.</li>
                    </ul>
                </div>
            </div>

        </motion.div>
    )
}
