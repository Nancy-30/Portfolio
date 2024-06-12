import React from 'react'
export default function ProjectCards({title,description,imgUrl,link , githubLink}) {
  return (
        <div className='projCard'>
            <img src={imgUrl} alt = "project preveiw"/>
            <div className='proj-txtx'>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>

            <div className='link-btn-div'>
            <button className='live-btn'><a href={link} className='project-link '>Live demo</a></button>
            <button><a href={githubLink} className='project-link btn2'>Github</a></button>
            </div>
        </div>
  )
}
