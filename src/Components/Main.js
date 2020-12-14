import React, {useState} from 'react'
import '../App.css';
import './Main.css';

const Main = (props) => {
    return (
        <>
        <div className="bannerContainer">
        <div className="myName">
            <p id="hello">Hello, my name is...</p>
            {/* <div className="contentBox">
                <div>
                    <img id ="myPic" src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1607283143/Portfolio1/829ABC3F-387C-44D9-978F-4D8D702D4865300_uttnwf.jpg" alt=""></img>
                </div>                   
            </div> */}
            <p id="name">Gore Sometimes</p>
        </div>
        </div>
        
        <div className="footer">Designs by Sometimes</div>
        </>
    )
}

export default Main;
