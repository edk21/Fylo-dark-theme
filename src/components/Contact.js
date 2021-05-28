import React from 'react'
import "./Contact.css"

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-wrapper">
                <h1>Get ealy access today</h1>
                <p>It only takes a minute to signup and our free starter is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                <form>
                    <input type="email" placeholder=" Your email..." />
                    <a href="#" className="btn">Get started for free</a>
                </form>
            </div>
        </div>
    )
}

export default Contact
