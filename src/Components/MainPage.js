import {useState} from 'react';
import ProjectsData from './ProjectsData';
import Navigation from './Navigation'
import About from './About'
import ProjectSection from './ProjectSection'
import Contact from './Contact'

const MainPage = () => {
    const [projects, setProjects] = useState(ProjectsData);

    return (
        <div>
            <Navigation />
            <About
            />
            <ProjectSection 
                projects= {projects} 
                setProjects= {setProjects}
            />
            <Contact/>
        </div>
    )
}

export default MainPage
