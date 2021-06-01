import React from 'react';
import './Second.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBriefcase, faLightbulb, faClock, faInfoCircle  } from '@fortawesome/free-solid-svg-icons';


const Second = () => {
    return (
        <div className="container">
            <h1>Don't waste your valuable time or money</h1>
            <h4>Only Learneasy has all the critical factors to deliver real results</h4>
             <br /> <br /><br />
            <div className="cart">
                <div className="cartItems shadow bg-body rounded">
                    <div className = "icon"><FontAwesomeIcon icon={faBriefcase} size= "2x"/></div>
                    <h3>Get real employable skills</h3>
                    <p>Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high-impact skills that top companies want.</p>
                </div>
                <div className="cartItems shadow bg-body rounded">
                    <div className = "icon"><FontAwesomeIcon icon={faLightbulb} size= "2x" /></div>
                    <h3>Project-based, active learning</h3>
                    <p>Learn by doing with real-world projects and other hands-on exercises that lead to real skills mastery.</p>
                </div>
                <div className="cartItems shadow bg-body rounded">
                    <div className = "icon"><FontAwesomeIcon icon={faClock} size= "2x"/></div>
                    <h3>Learn on your schedule</h3>
                    <p>Self-paced learning - whenever and wherever you want. Graduate while learning part-time for 10 hrs/week.</p>
                </div>
                <div className="cartItems shadow bg-body rounded">
                    <div className = "icon"><FontAwesomeIcon icon={faInfoCircle } size= "2x"/></div>
                    <h3>The help you need, when you need it</h3>
                    <p>Reach out to our mentors 24/7 and have your coding questions answered quickly so you can keep learning.</p>
                </div>
            </div>
        </div>
    );
};

export default Second;