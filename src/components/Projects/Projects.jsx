import React from 'react'
import { Container } from 'react-bootstrap'
import velocity from '../../assets/images/velocityImg.png'
import Sociovert from '../../assets/images/socioverImg.png'
import financseTracker from '../../assets/images/financeTrackerimg.png'
import feedbackImg from '../../assets/images/feedbBackImg.png'
import UniversityImg from '../../assets/images/universityImg.png'
import ProjectCards from './ProjectCards'

import './project.css';

export default function Projects() {

    const projectsArray = [
        {
            title: "Velocity",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa blanditiis veritatis aperiam maiores repellendus tempora consectetur",
            imgUrl: velocity,
            githubLink: "https://github.com/Velocity-IIITDWD/velocity",
            tech: ["HTML", "CSS", "Javascript", "Webpack"]
        },

        {
            title: "Sociovert",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa blanditiis veritatis aperiam maiores repellendus tempora consectetur",
            imgUrl: Sociovert,
            githubLink: "https://github.com/Nancy-30/Project_SocioVert",
            tech: ["HTML", "CSS", "Javascript", "Webpack"]
        },

        {
            title: "Expense Tracker",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa blanditiis veritatis aperiam maiores repellendus tempora consectetur",
            imgUrl: financseTracker,
            githubLink: "https://github.com/ashishlal2003/personal-finance-tracker",
            tech: ["HTML", "CSS", "Javascript", "Webpack"]
        },

        {
            title: "Feedback react App",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa blanditiis veritatis aperiam maiores repellendus tempora consectetur",
            imgUrl: feedbackImg,
            githubLink: "https://github.com/Nancy-30/feedBack_reactProject",
            tech: ["HTML", "CSS", "Javascript", "Webpack"]
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
                            <div>{project.tech}</div>
                            <p>{project.githubLink}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
