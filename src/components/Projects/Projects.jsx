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
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa blanditiis veritatis aperiam maiores repellendus tempora consectetur",
            imgUrl: Gan,
            githubLink: "https://github.com/Velocity-IIITDWD/velocity",
            technologies: ["HTML", "CSS", "Javascript", "Webpack"]
        },
        {
            title: "Recap AI",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa blanditiis veritatis aperiam maiores repellendus tempora consectetur",
            imgUrl: recapAI,
            githubLink: "https://github.com/Nancy-30/Project_SocioVert",
            technologies: ["HTML", "CSS", "Javascript", "Webpack"]
        },
        {
            title: "NexG",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa blanditiis veritatis aperiam maiores repellendus tempora consectetur",
            imgUrl: NexG,
            githubLink: "https://github.com/ashishlal2003/personal-finance-tracker",
            technologies: ["HTML", "CSS", "Javascript", "Webpack"]
        },

        {
            title: "Cryptify library",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa blanditiis veritatis aperiam maiores repellendus tempora consectetur",
            imgUrl: cryptify,
            githubLink: "https://github.com/Nancy-30/feedBack_reactProject",
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
