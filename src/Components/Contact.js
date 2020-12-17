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
        <div id="contact" className="contactContainer">
                <div className="flexContainer">
                <h1>Let's Work Together</h1>
                <p className="contactParagraph"></p>
                    <div className="contentBox">
                        <p className="contact">Connect by <a className="contactLink" href="mailto:gsometimes@outlook.com">Email</a></p>
                        <p className="contact">View my <a className="contactLink" href="https://github.com/GSometimes" target="_blank" rel="noopener noreferrer">Github</a></p>
                        <p className="contact">Connect on <a className="contactLink" href="https://www.linkedin.com/in/gore-sometimes/" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
                    </div>


        
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