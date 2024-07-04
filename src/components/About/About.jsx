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
                    I am a final-year BTech Computer Science student at IIIT Dharwad, specializing in full stack development and machine learning. As an AI/ML Developer Intern at Vocab AI, I developed AI solutions and participated in technical meetings.
                    <br /><br />
                    I have built several projects, including an LLM Agent website and RecapAI, a Generative AI application. My tech stack includes Python, Langchain, and the MERN stack, allowing me to create robust web applications and AI models. 
                    <br /><br />
                    I actively participate in hackathons and coding competitions, achieving second place in a CSS battle and ranking in the Top 10 at the PeerlistXReplit Hackathon ’23. I enjoy tackling complex problems and collaborating with others to create innovative solutions.
                </motion.div>
            </div>
        </section>
    )
}
