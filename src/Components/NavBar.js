import React, {useState} from 'react'
import '../App.css';
import './Component.css';

const NavBar = () => {
    // const [homeToggle, setHomeToggle] = useState(false);
    const [aboutToggle, setAboutToggle] = useState(false);
    const [projectsToggle, setProjectsToggle] = useState(false);
    const [contactToggle, setContactToggle] = useState(false);
  
    // const homeExpand = homeToggle ? "width1" : "";
    const aboutExpand = aboutToggle ? "width1" : "";
    const projectsExpand = projectsToggle ? "width1" : "";
    const contactExpand = contactToggle ? "width1" : "";
  
    return (
        <>
        <div className="linkContainer">
        <div
          className="homeIcon"
          onClick={() => {
            // setHomeToggle(!homeToggle);
            setAboutToggle(false);
            setProjectsToggle(false);
            setContactToggle(false);
          }}
        ></div>

        <div
          className="aboutIcon"
          onClick={() => {
            setAboutToggle(!aboutToggle);
            // setHomeToggle(false);
            setProjectsToggle(false);
            setContactToggle(false);
          }}
        ></div>

        <div
          className="projectsIcon"
          onClick={() => {
            setProjectsToggle(!projectsToggle);
            // setHomeToggle(false);
            setAboutToggle(false);
            setContactToggle(false);
          }}
        ></div>

        <div
          className="contactIcon"
          onClick={() => {
            setContactToggle(!contactToggle);
            // setHomeToggle(false);
            setProjectsToggle(false);
            setAboutToggle(false);
          }}
        ></div>
      </div>

      {/* <div className={`navBox ${homeExpand}`}> */}
      <div className="navBox">
        <div className="navLink">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className={`navBox ${aboutExpand}`}>
        <div className="navLink">
          <a href="/">Project 1</a>
          <a href="#about">Project 2</a>
          <a href="#projects">Project 3</a>
          <a href="#contact">Project 4</a>
        </div>
      </div>

      <div className={`navBox ${projectsExpand}`}>
        <div className="navLink">
          <a href="/">Project 5</a>
          <a href="#about">Project 6</a>
          <a href="#projects">Project 7</a>
          <a href="#contact">Project 8</a>
        </div>
      </div>

      <div className={`navBox ${contactExpand}`}>
        <div className="navLink">
          <a href="/">Project 9</a>
          <a href="#about">Project 10</a>
          <a href="#projects">Project 11</a>
          <a href="#contact">Project 12</a>
        </div>
      </div>
        </>
    )
}

export default NavBar
