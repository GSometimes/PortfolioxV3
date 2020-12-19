import React from 'react'
import '../App.css';
import './Component.css';

const Main = (props) => {
    return (
        <>
        <div className="bannerContainer">
            <div className="myName">
                <p id="hello">Hello, my name is...</p>
                <img id ="myPic" src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1607283143/Portfolio1/829ABC3F-387C-44D9-978F-4D8D702D4865300_uttnwf.jpg" alt=""/>

                <p id="name">Gore Sometimes</p>
                <p id="designer">Chef turned Developer</p>   

            </div>
        </div>
        <div className="footer">© 2020 Designs by Sometimes All Rights Reserved</div>
        </>
    )
}

export default Main;
