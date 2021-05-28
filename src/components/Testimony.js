import React from 'react'
import "./Testimony.css"
import Fade from "react-reveal/Fade"
import Zoom from 'react-reveal/Zoom';

function Testimony() {
    return (
        <div className="test-container">
            <div className="description">
                <div className="desc-img">
                    <img src="/images/bg-quotes.png" alt="" />
                </div>
                <div className="desc-card">
                <Fade left>
                <div className="first">
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has become a well-oiled collaboration machine</p>
                    <div className="info">
                        <img src="/images/profile-1.jpg" alt="" />
                        <div className="info-text">
                            <p>Satish Patel</p>
                            <span>Founder & CEO, Huddle</span>
                        </div>
                    </div>
                </div>
                </Fade>
                <Zoom left>
                <div className="second">
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has become a well-oiled collaboration machine</p>
                    <div className="info">
                        <img src="/images/profile-2.jpg" alt="" />
                        <div className="info-text">
                            <p>Bruce McKensie</p>
                            <span>Founder & CEO, Huddle</span>
                        </div>
                    </div>
                </div>
                </Zoom>
                <Fade right>
                <div className="thirth">
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has become a well-oiled collaboration machine</p>
                    <div className="info">
                        <img src="/images/profile-3.jpg" alt="" />
                        <div className="info-text">
                            <p>Iva Boyd</p>
                            <span>Founder & CEO, Huddle</span>
                        </div>
                    </div>
                </div>
                </Fade>
                </div>
            </div>
        </div>
    )
}

export default Testimony
