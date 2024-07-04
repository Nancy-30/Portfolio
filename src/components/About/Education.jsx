import React from 'react';
import { motion } from 'framer-motion';
import './education.css';
import Dotsvg from "../../assets/images/dot-svg.svg";

export default function Education() {


    return (
        <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 2 }}
            className="edu-main">

            <div className="edu-container left-div">
                <img src={Dotsvg} alt='dot' />
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
                <img src={Dotsvg} alt='dot' />
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
