import React from 'react';
import casual from '../img/casual.png';
import arrow from '../img/arrow.png';
import play from '../img/play.png';

function Content() {
    return(
        <>
     <div className="header-container">
        <div className="wrapper">
            <header>
                <div className="hero-content">
                    <div className="h1-style">
                    <h1>Unlock</h1>
                    <h1 className="your">your</h1>
                    </div>
                    <h1>online growth</h1> 
                    <div className="h1-style" >
                    <h1>Potential</h1> 
                    <h1 className="yes">Yes</h1>
                    </div>
                    
                    <div className="frame11">
                    <a href="/">
                        Our Product
                    </a>
                    <img className = "play" src={play} alt="play" />
                    </div>
                </div>
                <div className="hero-image">
                <img src={casual} alt="casual" />
                </div>
            </header>

            <div className="information-box">
                <div className="info-color">
                    <img src={arrow} alt="arrow" />
                <h4>Drive your money to  work smarter than others</h4>
                <p>A safe and secure invesment nedd guided aproach with real time analytics and risk analysis , we can help you to catch all at once.</p>
                </div>
            </div>
        </div>
    </div>

    <div className="signup-container">
        <div className="wrapper">
            <div className="signup">
                <h2>Signup Now & Get</h2>
            </div>

            <div className="signup-information">
                <div className="signup-content">
                <h1 className="numeric">01</h1>
                <div className="signup-details">
                <h2>Early Access</h2>
                <p>You'll be priorities from the  pool of millioins</p>
                </div>
                </div>

                <div className="signup-content">
                <h1 className="numeric">02</h1>
                <div className="signup-details">
                <h2>Zero Brokerage</h2>
                <p>You'll be priorities from the  pool of millioins</p> 
                </div>
                </div>

                <div className="signup-content">
                <h1 className="numeric">03</h1>
                <div className="signup-details">
                <h2>Zero Processing Charges</h2>
                <p>You'll be priorities from the  pool of millioins</p>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
    }

    export default Content
