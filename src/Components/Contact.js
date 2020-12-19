import React, {useState} from 'react'
import "./Contact.css"
import "./Component.css"
import {db} from "../Firebase.js"


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        db.collection('contacts').add({
            name:name,
            email:email,
            message:message,
        })
        .then(() => {
            alert('Message has been submitted.')
            setLoader(false);
        })
        .catch((error) => {
            alert(error.message);
            setLoader(false);
        })

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <>
            <h1 id="contact">Contact</h1>
        <div className="contactContainer">
            <div className="flexContainerC">
                <p className="contactParagraph">
                    If you made it this far I'd like to say thank you
                    for taking the time to view my portfolio. I would love
                    the opportunity to create something amazing with you.
                    You can connect with me through email <a className="contactLink" href="mailto:gsometimes@outlook.com">here</a>, connect with me through 
                    Linkedin <a className="contactLink" href="https://www.linkedin.com/in/gore-sometimes/" target="_blank" rel="noopener noreferrer">here</a>, or
                    fill out the contact form below! Help me make the world a prettier place, one page at a time. I look forward to speaking with you. <br/><br/>
                    {/* Connect by <a className="contactLink" href="mailto:gsometimes@outlook.com">Email</a><br/>
                    View my <a className="contactLink" href="https://github.com/GSometimes" target="_blank" rel="noopener noreferrer">Github</a><br/>
                    Connect on <a className="contactLink" href="https://www.linkedin.com/in/gore-sometimes/" target="_blank" rel="noopener noreferrer">Linkedin</a><br/> */}
                </p>
                <h3 id="together">Let's Work Together!</h3>
                <form className="contactForm" onSubmit={handleSubmit} required>
                    <label>Name</label>
                    <input placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required/>

                    <label>Email</label>
                    <input placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required/>

                    <label>Message</label>
                    <textarea placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required></textarea>
                    
                    <button type="submit" style={{background: loader ? "#ccc" : "#71A9F7" , height:"30px"}}>Submit</button>
                </form>

            </div>
        </div>

        </>
    )
}

export default Contact;