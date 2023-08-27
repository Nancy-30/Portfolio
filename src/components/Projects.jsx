import React from 'react'
import { Container} from 'react-bootstrap'
import velocity from '../assets/images/velocityImg.png'
import Sociovert from '../assets/images/socioverImg.png'
import financseTracker from '../assets/images/financeTrackerimg.png'
import feedbackImg from '../assets/images/feedbBackImg.png'
import UniversityImg from '../assets/images/universityImg.png'
import ProjectCards from './ProjectCards'


export default function Projects() {

    const projectsArray = [
        {
            title: "Velocity",
            description: "Club website",
            imgUrl: velocity,
            link : "https://deploy-preview-25--clubvelocity.netlify.app/",
            githubLink : "https://github.com/Velocity-IIITDWD/velocity"
        },

        {
            title: "Sociovert",
            description: "Social media website",
            imgUrl: Sociovert,
            link:"https://github.com/Nancy-30/Project_SocioVert",
            githubLink:"https://github.com/Nancy-30/Project_SocioVert"
        },

        {
            title: "Expense Tracker",
            description: "Track the expenses",
            imgUrl: financseTracker,
            link : "https://fin-tracker-p3q7.onrender.com/login",
            githubLink:"https://github.com/ashishlal2003/personal-finance-tracker"
        },

        {
            title: "Feedback react App",
            description: "Feedback App",
            imgUrl: feedbackImg,
            link : "https://main--phenomenal-mermaid-10cb09.netlify.app/",
            githubLink:"https://github.com/Nancy-30/feedBack_reactProject"
        },

        {
            title: "University Website",
            description: "University frontend clone",
            imgUrl: UniversityImg,
            link : "https://nancy-30.github.io/project-3-universityWebsite/",
            githubLink:"https://github.com/Nancy-30/project-3-universityWebsite"
        },

    ]
    return (
        <section className='project' id="project">
            <div>
            <h2>Projects</h2>
            <div className='underLine'></div>
            </div>
            <Container>
                <div className='allProjects'>
                    {
                        projectsArray.map((project,index) =>{
                            return (
                                <ProjectCards 
                                    key = {index}
                                    {...project}
                                />
                            )
                        })
                    }
                </div>
            </Container>
        </section>
    )
}
