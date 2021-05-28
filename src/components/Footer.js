import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-wrapper">
            <div className="footer-logo">
                <img src="/images/logo.svg" alt="" />
            </div>
            <div className="footer-infos">
                <div className="logo-info">
                    <div className="location">
                        <img src="/images/icon-location.svg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, id. Aut laboriosam qui, pariatur itaque minima ullam unde officiis ea.</p>
                    </div>
                </div>
                <div className="contact-means">
                    <div className="phone">
                        <img src="/images/icon-phone.svg" alt="" />
                        <p>+1-543-123-4567</p>
                    </div>
                    <div className="mail">
                        <img src="/images/icon-email.svg" alt="" />
                        <p>example@fylo.com</p>
                    </div>
                </div>
                <div className="aboutus">
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#jobs">Jobs</a></li>
                        <li><a href="#press">Press</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </div>
                <div className="contactus">
                    <ul>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#Terms">Terms</a></li>
                        <li><a href="#privacy">Privacy</a></li>
                    </ul>
                </div>
                <div className="social">
                    <div className="social-icon">
                        <i className="fab fa-facebook-f"></i>
                    </div>
                    <div className="social-icon">
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div className="social-icon">
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer
