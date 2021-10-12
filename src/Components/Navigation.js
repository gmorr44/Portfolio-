import {React,useState,useEffect} from 'react'
import linkedInLogo from '../linkedin.png';
import './Navigation.css'

const Navigation = () => {

    const[downArrow, setDownArrow] = useState(true)

    const handleScroll = ()=>{
        const height = 10

        if(window.scrollY <= height){
            setDownArrow(true)
        }
        else{
            setDownArrow(false)
        }
    }

    const downArrowHandler = ()=>{
        const scroll = window.innerHeight
        window.scrollTo({top:scroll,left:0, behavior: 'smooth'})
        setDownArrow(false)
    }

    useEffect(()=> {
         window.addEventListener('scroll', handleScroll)
         return()=> console.log("navigation unmounted")
    },[])

    return (
        <div className="img1" id="pimg11">
            <div className="photoBlur1">
                <div className="navWrapper">
                    <div className="nameTag">
                        <div id="name">Gregory Morrison</div> 
                        <div id = "jobTitle">Software Engineer/Developer</div> 
                    </div>

                    <nav>
                        <ul className = "ulNavlist">
                            <li className= "navList">    
                                <div  onClick={()=>{document.getElementById("pimg22").scrollIntoView({behavior:'smooth'})}} className = "navLink" >
                                    About          
                                </div> 
                            </li>
                    
                            <li className= "navList">
                                <div onClick={()=>{document.getElementById("pimg33").scrollIntoView({behavior:'smooth'})}} className = "navLink">
                                    Projects
                                </div>
                            </li>

                            <li className= "navList">
                                <div onClick={()=>{document.getElementById("lastsection").scrollIntoView({behavior:'smooth'})}} className = "navLink">
                                    Contact
                                </div>
                            </li>
                        </ul>
                    </nav> 

                    <div className="socialLinks">
                        <a href="https://linkedin.com/in/gmorr44">
                            <img id = "linkedinTop" src={linkedInLogo} alt="LinkedIn link"></img>
                        </a>
                        <a href="https://github.com/gmorr44" aria-label="Github link">
                            <svg id= "githubTop" 
                            alt="Github link"
                            xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="#ddd"/></g></svg>
                        </a>
                    </div>
                </div>
                {/* Conditional rendering of the down navigation arrow */}
                {downArrow ?
                <svg  onClick={()=>{downArrowHandler()}} id="downarrow" xmlns="http://www.w3.org/2000/svg" width="3em" height="3em"  viewBox="0 0 16 16"><g ><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/></g></svg>
                :
                <div></div>
                }
                
            </div> 
            
        </div>
    )
}

export default Navigation
