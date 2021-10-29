import {React} from 'react'
import {Link} from "react-router-dom"
import "./ProjectCard.css"

const ProjectCard = ({cardLogo,name, demo, demoLink, githubLink, description, technologies, projectObjectives}) => {

    return (
        <div className="projCard" id="project">
                        <Link 
                        to={{
                            pathname: '/projectDescription',
                            state: {
                                'name' : name,
                                'demo' : demo,
                                'demoLink': demoLink,
                                'githubLink': githubLink,
                                'description': description, 
                                'technologies': technologies,
                                'projectObjectives': projectObjectives
                            }
                        }}    
                        className= "picLink" 
                        name = {name}
                        >
                            <div className= "logoContainer">
                                {cardLogo}
                                <h2 className = "cardHeading">{name}</h2>
                            </div> 
                            <div className="bottomWrapper">  
                                <div className="highlightsContainer">
                                    <p className= "clickText">Click to View</p>
                                    <h5 className="techHeading">Project Technologies</h5>
                                    <div className="highlightsWrapper">
                                        {/* Maps the specific list of technologies used in each project. */}
                                        {technologies.map((technology,index) => {
                                            return <li key={index} className="tag">{technology}</li>
                                        })}
                                    </div> 
                                </div> 
                            </div>    
                        </Link>   
                    </div>
    )
}

export default ProjectCard
