import {React} from 'react'
import {Link} from "react-router-dom";

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
                            <div className="projWrapper">
                                <div className= "logoContainer">
                                {cardLogo}
                                </div>    
                                <h2 className = "cardHeading">{name}</h2>
                                <p className= "clickText">Click To View</p>
                            </div>    
                        </Link>   
                    </div>
    )
}

export default ProjectCard
