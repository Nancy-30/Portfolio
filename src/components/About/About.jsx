import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import './about.css';
import Education from './Education';

export default function About() {

    const targetRef = useRef();
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end center"]
    })

    const scale = useTransform(scrollYProgress, [0.1, 0.8, 1], [0.5, 1.1, 1])
    const x = useTransform(scrollYProgress, [0.1, 0.25, 0.5, 0.6], ["60%", "55%", "-25%", "0%"]);
    const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

    return (
        <motion.section
            style={{ opacity }}
            ref={targetRef}
            className='about' id="about">
            <div>
                <h1 className='about-heading'>About</h1>
                <div className='underline'></div>
            </div>

            <div className='about-main'>
                <div>
                    <h4>Experience</h4>
                    <Education className="education" />
                </div>

                <motion.div
                    style={{ x, scale }}
                    className='about-me'>
                    I am a final-year BTech Computer Science student at IIIT Dharwad, specializing in full stack development and machine learning. As an AI/ML Developer Intern at Vocab AI, I developed AI solutions and participated in technical meetings.
                    <br /><br />
                    I have built several projects, including an LLM Agent website and RecapAI, a Generative AI application. My tech stack includes Python, Langchain, and the MERN stack, allowing me to create robust web applications and AI models. 
                    <br /><br />
                    I actively participate in hackathons and coding competitions, achieving second place in a CSS battle and ranking in the Top 10 at the PeerlistXReplit Hackathon ’23. I enjoy tackling complex problems and collaborating with others to create innovative solutions.
                </motion.div>
            </div>
        </motion.section>
    )
}
