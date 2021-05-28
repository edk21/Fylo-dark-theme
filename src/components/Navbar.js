import React from 'react'
import "./Navbar.css"

function Navbar() {

    return (
        <nav>
            <div className="nav-wrapper">
                <div className="logo">
                    <img src="/images/logo.svg" alt="logo" />
                </div>
                <ul>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#signin">Sign In</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
