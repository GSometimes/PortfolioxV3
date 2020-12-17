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
        <div className="footer">© 2020 Designs by Sometimes All Rights Reserved</div>
        </>
    )
}

export default Main;
