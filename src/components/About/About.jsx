import React from 'react';
import { motion } from 'framer-motion';
import './about.css';
import Education from './Education';

export default function About() {

    return (
        <section
            className='about' id="about">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}>
                <h1 className='about-heading'>About</h1>
                <div className='underline'></div>
            </motion.div>

            <div className='about-main'>
                <div>
                    <h4>Experience</h4>
                    <Education className="education" />
                </div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className='about-me'>
                    I am a final-year BTech Computer Science student at IIIT Dharwad. My studies cover key areas in computer science like data structures, algorithms, and software engineering. I’ve also gained practical experience as an AI/ML Developer Intern at Vocab AI, where I worked on AI solutions and participated in technical meetings.
                    <br /><br />
                    I have developed several projects, such as an LLM Agent website and a Generative AI application called RecapAI. I enjoy using technologies like Python, Langchain, and the MERN stack to create useful applications. I have also participated in hackathons and coding competitions, achieving second place in a CSS battle and being among the Top 10 teams in the PeerlistXReplit Hackathon ’23.
                </motion.div>
            </div>
        </section>
    )
}
