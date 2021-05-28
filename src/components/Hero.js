import React from 'react'
import './Hero.css'

function Hero() {
    return (
        <div className="container">
            <div className="logo">
                <img src="/images/illustration-intro.png" alt="" />
            </div>
            <div className="text-wrapper">
                <div className="text">
                    <h1>All your files in one secure location, accessible anywhere.</h1>
                    <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends familly and co-workers.</p>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
