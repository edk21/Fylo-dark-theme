import React from 'react'
import "./Productivity.css"

function Productivity() {
    return (
        <div className="wrapper">
            <div className="pic">
                <img src="/images/illustration-stay-productive.png" alt="" />
            </div>
            <div className="texte">
                <h1>Stay productive, wherever you are</h1>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your </p>
                <p>Securely share files and folders with friends, familly and collegues for live collaboration. No email attachement required.</p>
                <a href="#">See how Fylo works <i className="fas fa-arrow-circle-right"></i></a>
            </div>
        </div>
    )
}

export default Productivity
