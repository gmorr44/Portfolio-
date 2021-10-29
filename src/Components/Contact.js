
import {React, useState} from 'react'
import linkedInLogo from '../linkedin.png';
import {db} from './ContactDb';
import './Contact.css'
import Pdf from './resume.pdf'

const Contact = () => {
    const [confirmation, setConfirmation] = useState(false)
    const [formName, setFormName] = useState("")
    const[formEmail, setFormEmail] = useState("")
    const[formText, setFormText] = useState("")
    
    
    // Form submit function for the contact me section.
    const handleSubmit = (e)=> {
        e.preventDefault()
        let time = new Date().toLocaleString();
        //const message = {formName, formEmail, formText, time}
        db.collection('messages').add({
            time: time,
            name: formName,
            email: formEmail,
            text: formText
        })
        .then(()=>{
            setConfirmation(true)
            setFormName('')
            setFormEmail('')
            setFormText('')
            setTimeout(function(){
                setConfirmation(false)
                },4000);
        })    
        .catch((error) => {
            alert(error.message)
        })
    }

    

    return (
        <div className="img4" id = "lastsection">
            <div className="photoBlur1">
                <h1 className= "sectionName" id = "contactHead">-Contact-</h1> 
                <div className = "contactContainer">
                    <div className="contactContent">
                        <p className= "contactStatement">If you would like to talk about my qualifications, feel free to send me a message. I am currently open to working on projects, contract work, or full-time positions.</p>
                        <div id = "emailAddress">
                            <svg id="emailIcon"
                            xmlns="http://www.w3.org/2000/svg" width="2.2em" height="2.2em" viewBox="0 0 24 24"><g fill="none" stroke="#ddd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></g></svg>
                            <br></br>gregmsoftware@gmail.com
                        </div><br></br>

                        <a className="resumeLink" href={Pdf}>
                            <svg id="resumeIcon"
                            xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path d="M15 4H6v16h12V7h-3V4zM6 2h10l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm2 9h8v2H8v-2zm0 4h8v2H8v-2z" fill="#ddd" fillRule="nonzero"/></svg>
                            <br></br>View My Resume
                        </a>
                        <br></br>
                        <div id="socialMediaContact">
        
                        <a href="https://linkedin.com/in/gmorr44">
                            <img id = "linkedin" src={linkedInLogo} alt="LinkedIn link"></img>
                        </a>
                        <br></br>
    
                        <a href="https://github.com/gmorr44" aria-label="Github link">
                            <svg id= "github" 
                            xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="#ddd"/></g></svg>
                        </a>
                        </div>
                    </div>
                    
                    <div className="sendMessage">

                        {confirmation ? 
                        <h2 className= "sectionName" id ="confirmationOn">Thank you! Your message was sent.</h2>
                        : 
                        <h2 className= "sectionName" id ="confirmationOff">Send A Message</h2>
                        }

                        <br></br>

                        <form onSubmit={handleSubmit} id = "contact-form" className= "contactForm" >

                        <input 
                        id="nameInput" 
                        className="messageInput" 
                        type="text" 
                        name= "name" 
                        placeholder="Enter Name"
                        value = {formName}
                        onChange = {(e) => setFormName(e.target.value)}
                        required
                        ></input>
                            
                        <br></br>
                        <input 
                        id= "emailInput" 
                        className= "messageInput" 
                        type="email"  
                        name= "email" 
                        placeholder="Enter Email"
                        value = {formEmail}
                        onChange = {(e) => setFormEmail(e.target.value)}
                        required
                        ></input>
        
                        <br></br>
                        <textarea 
                        id= "messageInput"
                        className="messageTextBox" 
                        name="subject" 
                        placeholder="Enter Message" 
                        value = {formText}
                        onChange = {(e) => setFormText(e.target.value)}
                        maxLength="300"
                        required
                        ></textarea>
                            
                        <br></br>
                        <input  id = "button" type="submit" value="Send Message"></input>
                        </form>
                    </div>
                    <footer>Gregory Morrison &copy; 2021</footer> 
                </div>
            </div>  
        </div>
    )
}

export default Contact
