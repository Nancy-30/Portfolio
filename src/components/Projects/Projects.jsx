import React from 'react'
import { motion } from "framer-motion"
import recapAI from "../../assets/images/recapAI.png"
import Gan from "../../assets/images/Gan_playground.png"
import NexG from "../../assets/images/nexG.png"
import cryptify from "../../assets/images/cryptify.png"
import './project.css';


export default function Projects() {

    const projectsArray = [
        {
            title: "GAN Playground",
            description: "A platform for students to learn about GANs, displaying generated images at each epoch to illustrate the learning process and model improvement visually.",
            imgUrl: Gan,
            githubLink: "https://github.com/ashishlal2003/gan-playground",
            technologies: ["Reactjs", "Tailwindcss", "Flask", "Python"]
        },
        {
            title: "Recap AI",
            description: "A generative AI-based website that summarizes YouTube videos, provides quizzes, and offers transcripts to enhance understanding and engagement.",
            imgUrl: recapAI,
            githubLink: "https://github.com/C-NikhilKarthik/RecapAI",
            technologies: ["MERN", "Gemini LLM", "Docker", "Cloud"]
        },
        {
            title: "NexG",
            description: "A dynamic and interactive frontend developed with Framer Motion for smooth animations and responsive design.",
            imgUrl: NexG,
            githubLink: "https://github.com/Nancy-30/NexG",
            technologies: ["Reactjs", "Framer Motion", "Tailwindcss"]
        },

        {
            title: "Cryptify library",
            description: "An academic project in cryptography featuring various algorithms like AES, DES, 3DES to encrypt and decrypt messages using a secret key.",
            imgUrl: cryptify,
            githubLink: "https://github.com/ashishlal2003/crypto-lib",
            technologies: ["MERN", "Tailwindcss", "Crypto Algos"]
        },
    ]

    return (
        <section className='project' id="project">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
            >
                <h2>Projects</h2>
                <div className='underLine'></div>
            </motion.div>
            <div className='allprojects'>
                {projectsArray.map((project, index) => (
                    <div key={index} className='projects'>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="image">
                            <img src={project.imgUrl} alt="project img" className='projImg' />
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }} className='projdesc'>
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <div className='technologies'>
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex}>{tech}</span>
                                ))}
                            </div>

                            <button className='btn'>
                                <a href={project.githubLink} className='githubBtn'>Github</a>
                            </button>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    )
}
