import React from 'react'
import logopic from '../img/logo.png';

function Navbar() {
       return (
<div className="nav-container">
        <div className="wrapper">
            <nav>
                <div className="logo">
                    <img src={logopic} alt="logopic"/>
                </div>

                <ul className="nav-items">
                    <li>
                        <a href='/'>Products</a>
                    </li>

                    <li>
                        <a href="/">Invest</a>
                    </li>

                    <li>
                        <a href="/">Community</a>
                    </li>

                    <li>
                        <a href="/">About</a>
                    </li>

                    <li>
                        <button className="nav-button"> Early Access</button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
       )
}

export default Navbar