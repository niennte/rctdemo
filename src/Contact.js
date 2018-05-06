import React, { Component } from "react";
import SVGAnimationLittleBird from './SVGs/SVGAnimationLittleBird.js';

const animationId = 'littleBirdsFlight';

const Contact = () => (

    <div className="page">
        <h1>Contact me</h1>

        <form
            className="contactForm"
            action="https://formspree.io/irina-portfolioform@usa.net"
            method="POST">

            <div className="fieldSet">
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    minLength="2"
                    required />
                <input
                    type="email"
                    name="_replyto"
                    placeholder="Your email address"
                    required/>
            </div>

            <textarea
                name="message"
                rows="3"
                placeholder="Please type your message here, and click on the little bird to send"
                required />

            <button
                className="send"
                type="submit"
                onMouseOver={ () => document.getElementById(animationId).beginElement() }
                onMouseOut={ () => document.getElementById(animationId).endElement() }
                >

                <SVGAnimationLittleBird animationId={animationId}/>

            </button>

        </form>
    </div>
);


export default Contact;
