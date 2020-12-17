import React from 'react'
import "./About.css"

const About = () => {
    return (
        <>
        <div className="aboutContainer">
            <h1 id="about">About</h1>
            <div className="flexContainer"> 
                <img id ="myPic" src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1607283143/Portfolio1/829ABC3F-387C-44D9-978F-4D8D702D4865300_uttnwf.jpg" alt=""/>
                <p className="aboutParagraph">
                    <h2>A Father... Foodie... Gamer...</h2>
                    I am a father, avid gamer, foodie and wino who's always looking to make last memories. My son, who you can see in the background, is my motivation, my “why” 
                    and the reason I do what I do.  When I'm not coding you'll find me spending time with my son just hanging out, or creating something with him. You may also find me 
                    enjoying a nice glass of wine with friends or grinding my way through the Destiny universe. 
                </p>
                <p className="aboutParagraph">
                    <h2>A Developer...</h2>
                    If you made it here then it must be for a reason and I'd like to say thank you for taking the time to view my Portfolio. 
                    From food to code, plate to page, I am a Chef turned Developer. I take simple ideas and turn them into extraordinary results. 
                    I am a self-motivated creative mind looking to make the world a prettier place, one design at a time, 
                    so please reach out and let’s make the world a prettier place together.
                </p>
                <div className="tech"></div>
            </div>
            
        </div>
        </>
    )
}

export default About
