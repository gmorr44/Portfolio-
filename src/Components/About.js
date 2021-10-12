import {React,useState,useEffect} from 'react'
import './About.css'


const About = () => {

    const [upArrow, setUpArrow] = useState(false)

    const handleScroll = ()=>{
        const height = window.innerHeight

        if(window.scrollY >= height){
            setUpArrow(true)
        }
        else{
            setUpArrow(false)
        }
    }

    useEffect(()=> {
         window.addEventListener('scroll', handleScroll)
         return()=> console.log("about unmounted")
    },[])

    const upArrowClickHandler = ()=>{
        window.scrollTo({top:0,left:0, behavior: 'smooth'})
    }

    return (
        <div className="img2" id="pimg22">
            <div className="photoBlur2">
            
            <div onClick = {()=>{upArrowClickHandler()}} id = "uparrowcontainer">
            {upArrow ? 
            <svg id='uparrow' xmlns='http://www.w3.org/2000/svg' width='3em' height='3em' viewBox='0 0 16 16'><g ><path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z'/></g></svg>
            : 
            <div></div> }
            
            </div>
            <div className="aboutMe">
                <h1 className= "sectionName" id= "aboutSection">-About Me-</h1>
                    <div className="aboutSection">
                        <div id="aboutHead" className= "aboutHead">
                            <h2>Hi, I'm Greg...</h2>
                        </div>
                        <div id="aboutTxt" className= "aboutTxt">
                            <p>I am a developer/engineer with strong analytical skills, a desire to solve problems, and a B.S. in Computer Science. After my first "Hello World" program seven years ago, I have been enthusiastically expanding my knowledge every day. As an early career developer, I look forward to be presented with challenging opportunities and contributing my knowledge towards solving business objectives.</p>
                        </div>

                        <div id="skillsHead" className= "aboutHead">
                            <h2>Technical Skills...</h2>
                        </div>
                        <div id="skillsTxt" className= "aboutTxt">

                            <div id= "skillsLeft">
                                <h3>Degree & Certifications</h3>
                                <ul> 
                                    <li>B.S. Computer Science</li>
                                    <li>CompTIA Project+</li>
                                    <li>ITIL Foundations</li>
                                    <li>C.I.W Site Dev.</li>
                                </ul>
                            </div>
                        
                            <div id="skillsRight">
                                <h3>Technologies</h3>
                                <ul> 
                                    <li>HTML (CSS)</li>
                                    <li>Javascript</li>
                                    <li>ReactJS</li>
                                    <li>Python (Flask)</li>
                                    <li>Java(Scenebuilder)</li>
                                    <li>C++</li>
                                    <li>MySQL</li>
                                    <li>PostgreSQL</li>
                                </ul>
                                
                            </div>
                        </div>
                        <div id="interestsHead" className= "aboutHead">
                            <h2>Interests...</h2>
                        </div>
                        <div id="interestsTxt" className= "aboutTxt">
                            <p> I spend most of my free time building, creating, and learning new things. Building and programming custom UAV's, arduino projects, and 3d printing are the hobbies I enjoy the most. Working on these projects is where I had my first experiences with programming and is what sparks my passion to keep learning more. Outside of work, I enjoy spending time with my family, camping, and playing guitar. </p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default About
