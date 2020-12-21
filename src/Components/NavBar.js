import React, {useState} from 'react'
import '../App.css';
import './Component.css';
import Contact from "./Contact"
import About from "./About"
import Projects from "./Projects"

const NavBar = () => {
    const [aboutToggle, setAboutToggle] = useState(false);
    const [projectsToggle, setProjectsToggle] = useState(false);
    const [contactToggle, setContactToggle] = useState(false);
  
    
    const aboutExpand = aboutToggle ? "width1" : "";
    const projectsExpand = projectsToggle ? "width1" : "";
    const contactExpand = contactToggle ? "width1" : "";
  
    return (
      <>
        
        <div className="linkContainer">
          <div
            className="homeIcon"
            onClick={() => {
              setAboutToggle(false);
              setProjectsToggle(false);
              setContactToggle(false);
            }}
          ><p>Home</p></div>

          <div
            className="aboutIcon"
            onClick={() => {
              setAboutToggle(!aboutToggle);
              setProjectsToggle(false);
              setContactToggle(false);
            }}
          ><p>About</p></div>

          <div
            className="projectsIcon"
            onClick={() => {
              setProjectsToggle(!projectsToggle);
              setAboutToggle(false);
              setContactToggle(false);
            }}
          ><p>Projects</p></div>

          <div
            className="contactIcon"
            onClick={() => {
              setContactToggle(!contactToggle);
              setProjectsToggle(false);
              setAboutToggle(false);
            }}
          ><p>Contact</p></div>
      </div>

      <div className="navBox">
      </div>

      <div className={`navBox ${aboutExpand}`}>
            <About />
      </div>

      <div className={`navBox ${projectsExpand}`}>
            <Projects />
      </div>

      <div className={`navBox ${contactExpand}`}>
            <Contact />
      </div>
        </>
    )
}

export default NavBar
