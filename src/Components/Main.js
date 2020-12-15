import React from 'react'
import '../App.css';
import './Component.css';

const Main = (props) => {
    return (
        <>
        <div className="bannerContainer">
            <div className="myName">
                <p id="hello">Hello, my name is...</p>
                <p id="name">Gore Sometimes</p>
                <p id="designer">Chef turned Developer</p>   

            </div>
        </div>
        <div className="footer">© Designs by Sometimes</div>
        </>
    )
}

export default Main;
