import React from 'react'
import ProjectCard from './ProjectCard';
import './ProjectSection.css'

const ProjectSection = ({projects}) => {
    
    return (
        <div className="img3" id="pimg33">
            <div className="photoBlur2">
                <h1 className= "sectionName">-Projects-</h1>
                <div className="projectImages">
                    {projects.map((proj) => (
                        <ProjectCard 
                        onClick ={()=>{console.log("clicked card")}}
                        key={proj.name}
                        cardLogo = {proj.cardLogo}
                        name = {proj.name}
                        demo = {proj.demo}
                        demoLink = {proj.demoLink}
                        githubLink = {proj.githubLink}
                        description = {proj.description}
                        technologies = {proj.technologies}
                        projectObjectives= {proj.projectObjectives}
                        />
                    ))} 
                </div>
            </div>
        </div>
    )
}

export default ProjectSection
