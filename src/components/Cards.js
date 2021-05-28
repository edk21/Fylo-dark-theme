import React from 'react'
import "./Cards.css"
import Fade from 'react-reveal/Fade'

function Cards() {

    return (
        <div className="card-container">
            <div className="top">
                <Fade left>
                <div className="card">
                    <img src="/images/icon-access-anywhere.svg" alt="" />
                    <p>Access your files anywhere</p>
                    <span>The ability to use a smathphone, tablet or computer to access your account means your files follow you everywhere</span>
                </div>
                </Fade>
                <Fade right>
                <div className="card">
                    <img src="/images/icon-security.svg" alt="" />
                    <p>Security you can trust</p>
                    <span>2x faster authentification and user controlled encryption are just a couple of the security features we use to help secure your files</span>
                </div>
                </Fade>
            </div>
            <div className="bottom">
                <Fade left>
                <div className="card">
                    <img src="/images/icon-collaboration.svg" alt="" />
                    <p>Real-time collaboration</p>
                    <span>Securely share files and folders with friends, familly and collegues for live collaboration. No email attachment required.</span>
                </div>
                </Fade>
                <Fade right>
                <div className="card">
                    <img src="/images/icon-any-file.svg" alt="" />
                    <p>Store any type of file</p>
                    <span>Whenever you are sharing holidays photos or work documents, Fylo has you covered allowing for all the types to be securely stored and shared</span>
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default Cards
