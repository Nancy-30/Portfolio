import React from 'react'
import recapAI from "../../assets/images/recapAI.png"
import Gan from "../../assets/images/Gan_playground.png"
import NexG from "../../assets/images/nexG.png"
import cryptify from "../../assets/images/cryptify.png"
import ProjectCards from './ProjectCards'
import './project.css';

export default function Projects() {

    const projectsArray = [
        {
            title: "GAN Playground",
            description: "A dynamic playground for users to experiment with and visualize GAN models in real-time.",
            imgUrl: Gan,
            githubLink: "https://github.com/ashishlal2003/gan-playground",
            technologies: ["HTML", "CSS", "Javascript", "Webpack"]
        },
        {
            title: "Recap AI",
            description: "An LLM-based YouTube summarizer app built for the Peerlist X Replit hackathon, providing concise video summaries.",
            imgUrl: recapAI,
            githubLink: "https://github.com/C-NikhilKarthik/RecapAI",
            technologies: ["HTML", "CSS", "Javascript", "Webpack"]
        },
        {
            title: "NexG",
            description: "A frontend website showcasing top-tier design and animation skills in web development.",
            imgUrl: NexG,
            githubLink: "https://github.com/Nancy-30/NexG",
            technologies: ["HTML", "CSS", "Javascript", "Webpack"]
        },
        {
            title: "Cryptify Library",
            description: "A simple tool to encrypt and decrypt messages directly on the website, featuring a Gemini-powered LLM assistant for cryptography queries.",
            imgUrl: cryptify,
            githubLink: "https://github.com/ashishlal2003/crypto-lib",
            technologies: ["HTML", "CSS", "Javascript", "Webpack"]
        },
    ]

    return (
        <section className='project' id="project">
            <div>
                <h2>Projects</h2>
                <div className='underLine'></div>
            </div>
            <div className='allprojects'>
                {projectsArray.map((project, index) => (
                    <div key={index} className='projects'>
                        <div className="image">
                            <img src={project.imgUrl} alt="project img" className='projImg' />
                        </div>
                        <div className='projdesc'>
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
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
